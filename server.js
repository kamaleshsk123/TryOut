const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
app.use(cors());
app.options("*", cors());
app.use(express.static("public")); //using only public
app.use(express.json());

mongoose.connect("mongodb://localhost:27017/TryOut1", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Dynamic schema for all section
const dataSchema = new mongoose.Schema(
  {
    type: {
      type: String,
      required: true,
    },
  },
  { strict: false }
);

const DataModel = mongoose.model("Data", dataSchema);

app.use(bodyParser.json());

// Route to handle Common data
app.post("/common", async (req, res) => {
  try {
    const commonData = req.body;
    await saveData(commonData, "Common");
    res.send("Common data saved!");
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
});

// Route to handle constant data

// app.post("/constant", async (req, res) => {
//   try {
//     const constantData = req.body;
//     await saveData(constantData, "Constant");
//     res.send("Constant data saved!");
//   } catch (error) {
//     console.error(error);
//     res.status(500).send("Internal Server Error");
//   }
// });

// Route to handle Inventory data
app.post("/inventory", async (req, res) => {
  try {
    const inventoryData = req.body;
    await saveData(inventoryData, "Inventory");
    res.send("Inventory data saved!");
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
});

// Route to handle Temperature data
app.post("/temperature", async (req, res) => {
  try {
    const temperatureData = req.body;
    await saveData(temperatureData, "Temperature");
    res.send("Temperature data saved!");
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
});

// Route to handle Set Operation data
app.post("/setOperation", async (req, res) => {
  try {
    const setOperationData = req.body;
    await saveData(setOperationData, "SetOperation");
    res.send("Set Operation data saved!");
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
});

// Route to handle Utilization data
app.post("/utilization", async (req, res) => {
  try {
    const utilizationData = req.body;
    await saveData(utilizationData, "Utilization");
    res.send("Utilization data saved!");
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
});

// Route to handle Inventory1 data
app.post("/inventory1", async (req, res) => {
  try {
    const inventory1Data = req.body;
    await saveData(inventory1Data, "Inventory1");
    res.send("Inventory1 data saved!");
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
});

// Route to handle Supply data
app.post("/supply", async (req, res) => {
  try {
    const supplyData = req.body;
    await saveData(supplyData, "Supply");
    res.send("Supply data saved!");
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
});

// Route to handle Return data
app.post("/return", async (req, res) => {
  try {
    const returnData = req.body;
    await saveData(returnData, "Return");
    res.send("Return data saved!");
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
});

// Generic function to save data
const saveData = async (data, type) => {
  try {
    if (data) {
      const dataObject = new DataModel({ type, ...data });

      try {
        const savedData = await dataObject.save();
        console.log(`${type} Data saved successfully:`, savedData);
      } catch (saveError) {
        console.error(`Error saving ${type} data:`, saveError);
        throw saveError;
      }
    } else {
      console.log(`${type} Data is empty. Not saving.`);
    }
  } catch (error) {
    console.error(`Error in save${type}Data function:`, error);
    throw error;
  }
};

// Route to handle fetching data
app.get("/fetchData", async (req, res) => {
  try {
    const data = await DataModel.find({}, { _id: 0, __v: 0 }); // remove _id and __v
    res.json(data);
  } catch (error) {
    console.error("Error fetching data from MongoDB:", error);
    res.status(500).send("Internal Server Error");
  }
});

// for sent to swagger

app.get("/fetchAndSendData", async (req, res) => {
  try {
    const data = await DataModel.find({}, { _id: 0, __v: 0 });

    // Send data to the external API
    const externalApiUrl =
      "https://assetiq-dev.rt1cloud.com/reeferiq-api/device-gateway-messages/message-simulator";
    const externalApiResponse = await fetch(externalApiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (externalApiResponse.ok) {
      const responseData = await externalApiResponse.json();
      res.json(responseData);
    } else {
      const errorText = await externalApiResponse.text();
      console.error(
        "Error sending data to the external API:",
        externalApiResponse.status,
        errorText
      );
      res.status(500).send("Error sending data to the external API");
    }
  } catch (error) {
    console.error("Error handling GET request:", error);
    res.status(500).send("Internal Server Error");
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

// 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
// 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
