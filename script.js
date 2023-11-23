function toggleDropdown0() {
  var dropdown0 = document.querySelector(".dropdown-content0");
  dropdown0.classList.toggle("hidden");
}

function selectOption0(option) {
  var dropdown0 = document.querySelector(".dropdown-content0");
  dropdown0.classList.add("hidden");

  var inputValue = option.textContent;
  document.querySelector(".common").value = inputValue;
}

// Event listener for SVG icon click
document
  .querySelector(
    ".absolute.inset-y-0.right-0.flex.items-center.px-2.pointer-events-none"
  )
  .addEventListener("click", function (event) {
    event.stopPropagation();
    toggleDropdown0();
  });

// Event listeners for option clicks
var options0 = document.querySelectorAll(".dropdown-content0 a");
options0.forEach(function (option) {
  option.addEventListener("click", function (event) {
    event.stopPropagation();
    selectOption0(option);
  });
});

// Close the dropdown when clicking outside of it
window.addEventListener("click", function (event) {
  var dropdown0 = document.querySelector(".dropdown-content0");
  if (
    !event.target.matches(".common") &&
    !event.target.closest(".dropdown-content0")
  ) {
    dropdown0.classList.add("hidden");
  }
});

//alert status

function toggleDropdown1() {
  var dropdown1 = document.querySelector(".dropdown-content1");
  dropdown1.classList.toggle("hidden");
}

function selectOption1(option) {
  var dropdown1 = document.querySelector(".dropdown-content1");
  dropdown1.classList.add("hidden");

  var inputValue = option.textContent;
  document.querySelector(".background1").value = inputValue;
}

// Event listener for SVG icon click
document
  .querySelector(
    ".absolute.inset-y-0.right-0.flex.items-center.px-2.pointer-events-none"
  )
  .addEventListener("click", function (event) {
    event.stopPropagation();
    toggleDropdown1();
  });

// Event listeners for option clicks
var options1 = document.querySelectorAll(".dropdown-content1 a");
options1.forEach(function (option) {
  option.addEventListener("click", function (event) {
    event.stopPropagation();
    selectOption1(option);
  });
});

// Close the dropdown when clicking outside of it
window.addEventListener("click", function (event) {
  var dropdown1 = document.querySelector(".dropdown-content1");
  if (
    !event.target.matches(".alert") &&
    !event.target.closest(".dropdown-content1")
  ) {
    dropdown1.classList.add("hidden");
  }
});

//reefer alert

function toggleDropdown2() {
  var dropdown2 = document.querySelector(".dropdown-content2");
  dropdown2.classList.toggle("hidden");
}

// Function to handle option selection
function selectOption2(option) {
  var dropdown2 = document.querySelector(".dropdown-content2");
  dropdown2.classList.add("hidden");

  // Do something with the selected option, for example, update the input value
  var inputValue2 = option.textContent;
  document.querySelector(".background2").value = inputValue2;
}

// Event listener for SVG icon click
document
  .querySelector(
    ".absolute.inset-y-0.right-0.flex.items-center.px-2.pointer-events-none"
  )
  .addEventListener("click", function (event) {
    event.stopPropagation();
    toggleDropdown2();
  });

// Event listeners for option clicks
var options2 = document.querySelectorAll(".dropdown-content2 a");
options2.forEach(function (option) {
  option.addEventListener("click", function (event) {
    event.stopPropagation();
    selectOption2(option);
  });
});

// Close the dropdown when clicking outside of it
window.addEventListener("click", function (event) {
  var dropdown2 = document.querySelector(".dropdown-content2");
  if (
    !event.target.matches(".cursor-pointer") &&
    !event.target.closest(".dropdown-content2")
  ) {
    dropdown2.classList.add("hidden");
  }
});

//battery status

function toggleDropdown3() {
  var dropdown3 = document.querySelector(".dropdown-content3");
  dropdown3.classList.toggle("hidden");
}

function selectOption3(option) {
  var dropdown3 = document.querySelector(".dropdown-content3");
  dropdown3.classList.add("hidden");

  var inputValue3 = option.textContent;
  document.querySelector(".background3").value = inputValue3;
}

document
  .querySelector(
    ".absolute.inset-y-0.right-0.flex.items-center.px-2.pointer-events-none"
  )
  .addEventListener("click", function (event) {
    event.stopPropagation();
    toggleDropdown3();
  });

var options3 = document.querySelectorAll(".dropdown-content3 a");
options3.forEach(function (option) {
  option.addEventListener("click", function (event) {
    event.stopPropagation();
    selectOption3(option);
  });
});

window.addEventListener("click", function (event) {
  var dropdown3 = document.querySelector(".dropdown-content3");
  if (
    !event.target.matches(".cursor-pointer") &&
    !event.target.closest(".dropdown-content3")
  ) {
    dropdown3.classList.add("hidden");
  }
});

//calender

flatpickr("#datepicker", {
  enableTime: false, // Change to true if you want to enable time selection
  dateFormat: "Y-m-d", // Customize the date format
  altInput: true, // Show the selected date in an alternative input field
  altFormat: "F j, Y", // Customize the format of the alternative input field
  onClose: function (selectedDates, dateStr, instance) {},
});

//Commidity

function toggleDropdown4() {
  var dropdown4 = document.querySelector(".dropdown-content4");
  dropdown4.classList.toggle("hidden");
}

function selectOption4(option) {
  var dropdown4 = document.querySelector(".dropdown-content4");
  dropdown4.classList.add("hidden");

  var inputValue4 = option.textContent;
  document.querySelector(".commidity").value = inputValue4;
}

document
  .querySelector(
    ".absolute.inset-y-0.right-0.flex.items-center.px-2.pointer-events-none"
  )
  .addEventListener("click", function (event) {
    event.stopPropagation();
    toggleDropdown4();
  });

var options4 = document.querySelectorAll(".dropdown-content4 a");
options4.forEach(function (option) {
  option.addEventListener("click", function (event) {
    event.stopPropagation();
    selectOption4(option);
  });
});

window.addEventListener("click", function (event) {
  var dropdown4 = document.querySelector(".dropdown-content4");
  if (
    !event.target.matches(".cursor-pointer") &&
    !event.target.closest(".dropdown-content4")
  ) {
    dropdown4.classList.add("hidden");
  }
});

//operation(p)

let modeValue;
function toggleDropdown5() {
  var dropdown5 = document.querySelector(".dropdown-content5");
  dropdown5.classList.toggle("hidden");
}

function selectOption5(option) {
  var dropdown5 = document.querySelector(".dropdown-content5");
  dropdown5.classList.add("hidden");

  var inputValue5 = option.textContent;
  modeValue = option.getAttribute("data-mode");

  document.querySelector(".operation-p").value = inputValue5;

  // Use modeValue outside the function.
}

document
  .querySelector(
    ".absolute.inset-y-0.right-0.flex.items-center.px-2.pointer-events-none"
  )
  .addEventListener("click", function (event) {
    event.stopPropagation();
    toggleDropdown5();
  });

var options5 = document.querySelectorAll(".dropdown-content5 a");
options5.forEach(function (option) {
  option.addEventListener("click", function (event) {
    event.stopPropagation();
    selectOption5(option);
  });
});

window.addEventListener("click", function (event) {
  var dropdown5 = document.querySelector(".dropdown-content5");
  if (
    !event.target.matches(".cursor-pointer") &&
    !event.target.closest(".dropdown-content5")
  ) {
    dropdown5.classList.add("hidden");
  }
});

//operation(s)

let modeValue1;
function toggleDropdown6() {
  var dropdown6 = document.querySelector(".dropdown-content6");
  dropdown6.classList.toggle("hidden");
}

function selectOption6(option) {
  var dropdown6 = document.querySelector(".dropdown-content6");
  dropdown6.classList.add("hidden");

  modeValue1 = option.getAttribute("data-mode1");

  var inputValue6 = option.textContent;
  document.querySelector(".operation-s").value = inputValue6;
}

document
  .querySelector(
    ".absolute.inset-y-0.right-0.flex.items-center.px-2.pointer-events-none"
  )
  .addEventListener("click", function (event) {
    event.stopPropagation();
    toggleDropdown6();
  });

var options6 = document.querySelectorAll(".dropdown-content6 a");
options6.forEach(function (option) {
  option.addEventListener("click", function (event) {
    event.stopPropagation();
    selectOption6(option);
  });
});

window.addEventListener("click", function (event) {
  var dropdown6 = document.querySelector(".dropdown-content6");
  if (
    !event.target.matches(".cursor-pointer") &&
    !event.target.closest(".dropdown-content6")
  ) {
    dropdown6.classList.add("hidden");
  }
});

//Inventory

function toggleDropdown7() {
  var dropdown7 = document.querySelector(".dropdown-content7");
  dropdown7.classList.toggle("hidden");
}

function selectOption7(option) {
  var dropdown7 = document.querySelector(".dropdown-content7");
  dropdown7.classList.add("hidden");

  var inputValue7 = option.textContent;
  document.querySelector(".ingress").value = inputValue7;
}

document
  .querySelector(
    ".absolute.inset-y-0.right-0.flex.items-center.px-2.pointer-events-none"
  )
  .addEventListener("click", function (event) {
    event.stopPropagation();
    toggleDropdown7();
  });

var options7 = document.querySelectorAll(".dropdown-content7 a");
options7.forEach(function (option) {
  option.addEventListener("click", function (event) {
    event.stopPropagation();
    selectOption7(option);
  });
});

window.addEventListener("click", function (event) {
  var dropdown7 = document.querySelector(".dropdown-content7");
  if (
    !event.target.matches(".cursor-pointer") &&
    !event.target.closest(".dropdown-content7")
  ) {
    dropdown7.classList.add("hidden");
  }
});

// dropdown logout

function toggleDropdown8() {
  var dropdown = document.getElementById("dropdown");
  dropdown.classList.toggle("hidden");

  //  dropdown visible, create the logout button
  if (!dropdown.classList.contains("hidden")) {
    createLogoutButton();
  } else {
    // dropdown hidden, remove the logout button
    removeLogoutButton();
  }
}

//Primary System

function toggleDropdown9() {
  var dropdown9 = document.querySelector(".dropdown-content9");
  dropdown9.classList.toggle("hidden");
}

function selectOption9(option) {
  var dropdown9 = document.querySelector(".dropdown-content9");
  dropdown9.classList.add("hidden");

  var inputValue9 = option.textContent;
  document.querySelector(".primarysystem").value = inputValue9;
}

const primarySystemInput = document.getElementById("primarySystem");
function selectOption9(option, system) {
  primarySystemInput.value = `System${system}`;
  toggleDropdown9();
}

document
  .querySelector(
    ".absolute.inset-y-0.right-0.flex.items-center.px-2.pointer-events-none"
  )
  .addEventListener("click", function (event) {
    event.stopPropagation();
    toggleDropdown9();
  });

var options9 = document.querySelectorAll(".dropdown-content9 a");
options9.forEach(function (option, index) {
  option.addEventListener("click", function (event) {
    event.stopPropagation();
    selectOption9(option, index + 1);
  });
});

window.addEventListener("click", function (event) {
  var dropdown9 = document.querySelector(".dropdown-content9");
  if (
    !event.target.matches(".cursor-pointer") &&
    !event.target.closest(".dropdown-content9")
  ) {
    dropdown9.classList.add("hidden");
  }
});

// Function to create the logout button
function createLogoutButton() {
  var logoutButton = document.createElement("button");
  logoutButton.className =
    "p-4 text-lg font-semibold tracking-wider text-white bg-[#1b4965] border-2 border-white rounded-full w-52 pl-9 pr-9 logo";
  logoutButton.textContent = "Log Out";
  logoutButton.addEventListener("click", function () {
    console.log("Logout button clicked");
  });

  //  logout button to the dropdown
  var dropdown = document.getElementById("dropdown");
  dropdown.innerHTML = ""; // Clear previous content
  dropdown.appendChild(logoutButton);
}

// Function to remove the logout button
function removeLogoutButton() {
  var dropdown = document.getElementById("dropdown");
  dropdown.innerHTML = ""; // Clear the logout button
}

// Event listener for button click
document
  .getElementById("dropdownButton")
  .addEventListener("click", function (event) {
    event.stopPropagation();
    toggleDropdown8();
  });

// Close the dropdown when clicking outside of it
window.addEventListener("click", function (event) {
  var dropdown = document.getElementById("dropdown");
  if (
    !event.target.matches("#dropdownButton") &&
    !event.target.closest("#dropdown")
  ) {
    dropdown.classList.add("hidden");
    removeLogoutButton();
  }
});

// notification

function toggleNotificationDropdown() {
  var dropdown = document.getElementById("notificationDropdown");
  dropdown.classList.toggle("hidden");
}

function showNoNotification() {
  showNotification("No notifications");
  toggleNotificationDropdown();
}

function showNotification(message) {
  var notification = document.createElement("div");
  notification.className =
    "fixed p-3 text-white bg-gray-800 rounded-md notification top-4 right-4";
  notification.textContent = message;
  document.body.appendChild(notification);

  setTimeout(function () {
    document.body.removeChild(notification);
  }, 3000);
}

window.addEventListener("click", function (event) {
  var dropdown = document.getElementById("notificationDropdown");
  if (
    !event.target.matches(".cursor-pointer") &&
    !event.target.closest("#notificationDropdown")
  ) {
    dropdown.classList.add("hidden");
  }
});

//test button

document.addEventListener("DOMContentLoaded", () => {
  const testButton = document.getElementById("testButton");

  if (testButton) {
    testButton.addEventListener("click", handleClick);
  }
});

async function handleClick() {
  try {
    const commonData = {
      reeferMotionStatus: document.getElementById("reeferMotionStatusInput")
        .value,
      reeferStatus: document.getElementById("reeferStatusInput").value,
      lastReportedTime: new Date(document.getElementById("datepicker").value),
      alertStatus: document.getElementById("alertStatusInput").value,
      batteryStatus: document.getElementById("batteryStatusInput").value,
      lastKnownLocation: {
        latitude: document.getElementById("latitudeInput").value,
        longitude: document.getElementById("longitudeInput").value,
      },
    };

    console.log("Sending Common Data", commonData);

    console.log("Request Payload", JSON.stringify({ commonData }));

    await new Promise((resolve) => setTimeout(resolve, 2000));
    // Make a POST request to  server
    const response = await fetch("http://localhost:3000/common", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        commonData,
      }),
    });

    if (response.ok) {
      console.log("Data saved successfully!", response);
    } else {
      console.error("Failed to save data:", response.statusText);
    }
  } catch (error) {
    console.error("Error:", error);
  }
}

// Event listener for Test button
document.addEventListener("DOMContentLoaded", () => {
  const testButton = document.getElementById("testButton");

  if (testButton) {
    testButton.addEventListener("click", async () => {
      try {
        // Collect data from Inventory section
        const inventoryData = {
          tags: document.getElementById("tagsInput").value,
          commodity: document.getElementById("commodityInput").value,
        };

        console.log("Sending Inventory Data", inventoryData);

        const response = await fetch("http://localhost:3000/inventory", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            inventoryData,
          }),
        });

        if (response.ok) {
          console.log("Inventory data saved successfully!");
        } else {
          console.error("Failed to save inventory data:", response.statusText);
        }
      } catch (error) {
        console.error("Error:", error);
      }
    });
  }
});

//set-operation

document.addEventListener("DOMContentLoaded", () => {
  const testButton = document.getElementById("testButton");

  if (testButton) {
    testButton.addEventListener("click", async () => {
      try {
        // Collect data from Set Operation section
        const setOperationData = {
          ambientTemperature: document.getElementById("ambientTemperatureInput")
            .value,
          operationModeP: document.getElementById("operationModePInput").value,
          operationHoursP: document.getElementById("operationHoursPInput")
            .value,
          operationModeS: document.getElementById("operationModeSInput").value,
          operationHoursS: document.getElementById("operationHoursSInput")
            .value,
        };

        console.log("Sending Set Operation Data", setOperationData);

        const response = await fetch("http://localhost:3000/setOperation", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            setOperationData,
          }),
        });

        if (response.ok) {
          console.log("Set Operation data saved successfully!");
        } else {
          console.error(
            "Failed to save Set Operation data:",
            response.statusText
          );
        }
      } catch (error) {
        console.error("Error:", error);
      }
    });
  }
});

//utilization

document.addEventListener("DOMContentLoaded", () => {
  const testButton = document.getElementById("testButton");

  if (testButton) {
    testButton.addEventListener("click", async () => {
      try {
        // Collect data from Utilization section
        const utilizationData = {
          fuelLevel: document.getElementById("fuelLevelInput").value,
          gatewayId: document.getElementById("GateWayIdInput").value,
        };

        console.log("Sending Utilization Data", utilizationData);

        const response = await fetch("http://localhost:3000/utilization", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            utilizationData,
          }),
        });

        if (response.ok) {
          console.log("Utilization data saved successfully!");
        } else {
          console.error(
            "Failed to save Utilization data:",
            response.statusText
          );
        }
      } catch (error) {
        console.error("Error:", error);
      }
    });
  }
});

// constant

// document.addEventListener("DOMContentLoaded", () => {
//   const testButton = document.getElementById("testButton");

//   if (testButton) {
//     testButton.addEventListener("click", async () => {
//       try {
//         // Collect data from Utilization section
//         const constantData = {
//           deviceId: document.getElementById("deviceid").value,
//           gatewayId: document.getElementById("gatewayId").value,
//           system: document.getElementById("system").value,
//           esn: document.getElementById("esn").value,
//           lasttxtime: document.getElementById("lasttxtime").value,
//         };

//         console.log("Sending Constant Data", constantData);

//         const response = await fetch("http://localhost:3000/constant", {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json",
//           },
//           body: JSON.stringify({
//             constantData,
//           }),
//         });

//         if (response.ok) {
//           console.log("Constant data saved successfully!");
//         } else {
//           console.error("Failed to save Constant data:", response.statusText);
//         }
//       } catch (error) {
//         console.error("Error:", error);
//       }
//     });
//   }
// });

// in constant data and time

const currentDate = new Date();
const formattedDate = currentDate.toISOString(); // This will give you the date in the format "YYYY-MM-DDTHH:mm:ss.sssZ"

// Set the value of the input field
document.getElementById("lasttxtime").value = formattedDate;

// inventory1

document.addEventListener("DOMContentLoaded", () => {
  const testButton = document.getElementById("testButton");

  if (testButton) {
    testButton.addEventListener("click", async () => {
      try {
        // Collect data from Inventory1 section
        const inventory1Data = {
          ingress: document.getElementById("ingressInput").value,
          deviceModel: document.getElementById("deviceModelInput").value,
          organizationName: document.getElementById("organizationNameInput")
            .value,
          deviceID: document.getElementById("deviceIDInput").value,
          accountName: document.getElementById("accountNameInput").value,
          batteryLevel: document.getElementById("batteryLevelInput").value,
        };

        console.log("Sending Inventory1 Data", inventory1Data);

        const response = await fetch("http://localhost:3000/inventory1", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            inventory1Data,
          }),
        });

        if (response.ok) {
          console.log("Inventory1 data saved successfully!");
        } else {
          console.error("Failed to save Inventory1 data:", response.statusText);
        }
      } catch (error) {
        console.error("Error:", error);
      }
    });
  }
});

// supply

document.addEventListener("DOMContentLoaded", () => {
  const testButton = document.getElementById("testButton");

  if (testButton) {
    testButton.addEventListener("click", async () => {
      try {
        // Collect data from Supply section
        const supplyData = {
          supplyTemperatureMax: document.getElementById(
            "supplyTemperatureMaxInput"
          ).value,
          supplyTemperatureMin: document.getElementById(
            "supplyTemperatureMinInput"
          ).value,
          supplyTemperatureMean: document.getElementById(
            "supplyTemperatureMeanInput"
          ).value,
        };

        console.log("Sending Supply Data", supplyData);

        const response = await fetch("http://localhost:3000/supply", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            supplyData,
          }),
        });

        if (response.ok) {
          console.log("Supply data saved successfully!");
        } else {
          console.error("Failed to save Supply data:", response.statusText);
        }
      } catch (error) {
        console.error("Error:", error);
      }
    });
  }
});

// return

document.addEventListener("DOMContentLoaded", () => {
  const testButton = document.getElementById("testButton");

  if (testButton) {
    testButton.addEventListener("click", async () => {
      try {
        // Collect data from Return section
        const returnData = {
          returnTemperatureMax: document.getElementById(
            "returnTemperatureMaxInput"
          ).value,
          returnTemperatureMin: document.getElementById(
            "returnTemperatureMinInput"
          ).value,
          returnTemperatureMean: document.getElementById(
            "returnTemperatureMeanInput"
          ).value,
        };

        console.log("Sending Return Data", returnData);

        const response = await fetch("http://localhost:3000/return", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            returnData,
          }),
        });

        if (response.ok) {
          console.log("Return data saved successfully!");
        } else {
          console.error("Failed to save Return data:", response.statusText);
        }
      } catch (error) {
        console.error("Error:", error);
      }
    });
  }
});

// temperature

document.addEventListener("DOMContentLoaded", () => {
  const testButton = document.getElementById("testButton");

  if (testButton) {
    testButton.addEventListener("click", async () => {
      try {
        // Collect data from Temperature section
        const systemInputs = document.getElementsByName("group");
        let selectedSystem = "";

        systemInputs.forEach((input) => {
          if (input.checked) {
            selectedSystem = input.value;
          }
        });

        const temperatureData = {
          setPointTemperatureP: document.getElementById(
            "setPointTemperatureInput"
          ).value,
          returnTemperatureP: document.getElementById("returnTemperatureInput")
            .value,
          supplyTemperatureP: document.getElementById("supplyTemperatureInput")
            .value,
          setPointTemperatureS: document.getElementById(
            "setPointTemperatureInput1"
          ).value,
          returnTemperatureS: document.getElementById("returnTemperatureInput1")
            .value,
          supplyTemperatureS: document.getElementById("supplyTemperatureInput1")
            .value,
          system: selectedSystem,
        };

        console.log("Sending Temperature Data", temperatureData);

        // Make a POST request to your server for Temperature data
        const response = await fetch("http://localhost:3000/temperature", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            temperatureData,
          }),
        });

        if (response.ok) {
          console.log("Temperature data saved successfully!");
        } else {
          console.error(
            "Failed to save Temperature data:",
            response.statusText
          );
        }
      } catch (error) {
        console.error("Error:", error);
      }
    });
  }
});

// automate

function automateData() {
  document.getElementById("setPointTemperatureInput").value = "25";
  document.getElementById("returnTemperatureInput").value = "20";
  document.getElementById("supplyTemperatureInput").value = "30";

  document.getElementById("setPointTemperatureInput1").value = "25";
  document.getElementById("returnTemperatureInput1").value = "20";
  document.getElementById("supplyTemperatureInput1").value = "30";

  document.getElementById("ambientTemperatureInput").value = "25";
  document.getElementById("operationModePInput").value = "WAITING";
  document.getElementById("operationHoursPInput").value = "30";

  document.getElementById("ambientTemperatureInput").value = "25";
  document.getElementById("operationModeSInput").value = "COOLING";
  document.getElementById("operationHoursSInput").value = "30";

  document.getElementById("reeferMotionStatusInput").value = "MOTION";
  document.getElementById("reeferStatusInput").value = "ON";
  document.getElementById("datepicker").value = "2023-04-01";
  document.getElementById("alertStatusInput").value = "ON";
  document.getElementById("batteryStatusInput").value = "ON";
  document.getElementById("latitudeInput").value = "40.7128";
  document.getElementById("longitudeInput").value = "-74.0060";

  document.getElementById("tagsInput").value = "Tag1";
  document.getElementById("commodityInput").value = "CHEMICAL";

  document.getElementById("supplyTemperatureMaxInput").value = "25";
  document.getElementById("supplyTemperatureMinInput").value = "20";
  document.getElementById("supplyTemperatureMeanInput").value = "30";
  document.getElementById("returnTemperatureMaxInput").value = "25";
  document.getElementById("returnTemperatureMinInput").value = "20";
  document.getElementById("returnTemperatureMeanInput").value = "30";

  document.getElementById("fuelLevelInput").value = "3.00";
  document.getElementById("GateWayIdInput").value = "ASSETLINK_NMR_262_001";

  document.getElementById("ingressInput").value = "UDP";
  document.getElementById("deviceModelInput").value = "Device";
  document.getElementById("organizationNameInput").value = "Organization";
  document.getElementById("deviceIDInput").value = "1010";
  document.getElementById("batteryLevelInput").value = "8.0";
  document.getElementById("accountNameInput").value = "Name";

  document.getElementById("deviceid").value = "ANANTHI-NMR";
  document.getElementById("system").value = "HCI";
  document.getElementById("esn").value = "ANANTHI-NMR";
  document.getElementById("lasttxtime").value = "2023-10-13T04:02:05Z"; //2023-10-13T04:02:05Z
  document.getElementById("gatewayId").value = "ASSETLINK_NMR_262_001";

  console.log("Data has been automated!");
}

function checkInputsAndShowPopup() {
  var section = document.getElementById("inventory");
  var section = document.getElementById("common");
  var section = document.getElementById("Utilization");
  var section = document.getElementById("supply");
  var section = document.getElementById("setoperation");
  var section = document.getElementById("temperatureview");
  var section = document.getElementById("inventeryview");

  var inputs = section.querySelectorAll("input");
  var allInputsFilled = Array.from(inputs).every(function (input) {
    return input.value.trim() !== "";
  });

  if (allInputsFilled) {
    showSuccessPopup();
  } else {
    showErrorPopup();
  }
}

function showSuccessPopup() {
  document.getElementById("popupSection").classList.remove("hidden");
}

function showErrorPopup() {
  document.getElementById("popupErrorSection").classList.remove("hidden");
}

function closePopup() {
  document.getElementById("popupSection").classList.add("hidden");
  document.getElementById("popupErrorSection").classList.add("hidden");
  document.removeEventListener("click", closePopup);
}

function sendData() {
  const gatewayId = document.getElementById("gatewayId").value;
  const deviceid = document.getElementById("deviceid").value;
  const system = document.getElementById("system").value;
  const esn = document.getElementById("esn").value;
  const lasttxtime = document.getElementById("lasttxtime").value;

  const fuelLevel = document.getElementById("fuelLevelInput").value;

  const timestamp = new Date().getTime();
  const latitude = document.getElementById("latitudeInput").value;
  const longitude = document.getElementById("longitudeInput").value;
  const batteryLevel = document.getElementById("batteryLevelInput").value;

  const ambientTemperatureInput = document.getElementById(
    "ambientTemperatureInput"
  ).value;
  const operationModePInput = document.getElementById(
    "operationModePInput"
  ).value;
  const operationModeSInput = document.getElementById(
    "operationModeSInput"
  ).value;
  const operationHoursPInput = document.getElementById(
    "operationHoursPInput"
  ).value;
  const operationHoursSInput = document.getElementById(
    "operationHoursSInput"
  ).value;

  const primarySystem = document.getElementById("primarySystem").value;
  const setPointTemperatureInput = document.getElementById(
    "setPointTemperatureInput"
  ).value;
  const returnTemperatureInput = document.getElementById(
    "returnTemperatureInput"
  ).value;
  const supplyTemperatureInput = document.getElementById(
    "supplyTemperatureInput"
  ).value;
  const setPointTemperatureInput1 = document.getElementById(
    "setPointTemperatureInput1"
  ).value;
  const returnTemperatureInput1 = document.getElementById(
    "returnTemperatureInput1"
  ).value;
  const supplyTemperatureInput1 = document.getElementById(
    "supplyTemperatureInput1"
  ).value;

  console.log(primarySystemInput.value);

  console.log("Selected mode value outside the function:", modeValue);
  console.log("Selected mode value1 outside the function:", modeValue1);

  const ingress = document.getElementById("ingressInput").value;
  const apiUrl =
    "https://assetiq-dev.rt1cloud.com/reeferiq-api/device-gateway-messages/message-simulator";

  const requestData = {
    gatewayId: gatewayId,
    Moments: [
      {
        deviceid: deviceid,
        system: system,
        esn: esn,
        lasttxtime: lasttxtime,
        moments: [
          {
            momentid: 99499146,
            dateOriginated: lasttxtime,
            dateReported: lasttxtime,
            type: "1",
            points: [
              {
                Point: {
                  SessionStatus: "0",
                },
              },
              {
                Point: {
                  MetaCEP: "19",
                  MetaLat: latitude,
                  MetaLon: longitude,
                },
              },
              {
                Point: {
                  Ingress: ingress,
                },
              },
              {
                Point: {
                  TimeSinceCom: "223.37",
                },
              },
              {
                PointMsgType: {
                  num: "1",
                  MsgType: "sensor report",
                },
              },
              {
                PointAlert: {
                  Level: "1",
                  ModeChange: "10",
                },
              },
              {
                Point: {
                  CurrentMode: "7",
                },
              },
              {
                PointLoc: {
                  Lat: "40.7128",
                  Lon: "-74.0060",
                },
              },
              {
                Point: {
                  Battery: batteryLevel + "V",
                },
              },
              {
                Point: {
                  BatteryRaw: batteryLevel,
                },
              },
              {
                Point: {
                  UnitTemperature: "16C - 23C",
                },
              },
              {
                PointSensor: {
                  Num: 0,
                  Name: "Sensor0",
                  sequence: ["142"],
                  enumeration: "values",
                },
              },
              {
                PointSensor: {
                  Num: 1,
                  Name: "Sensor1",
                  sequence: ["2"],
                  enumeration: "values",
                },
              },
              {
                PointSensor: {
                  Num: 2,
                  Name: "Fuel Sensor Reading",
                  sequence: [fuelLevel],
                  enumeration: "values",
                },
              },
              {
                PointSensor: {
                  Num: 4,
                  Name: "NTC1 - Probe 1",
                  sequence: ["26"],
                  enumeration: "values",
                },
              },
              {
                PointSensor: {
                  Num: 5,
                  Name: "DIGITAL TEMP",
                  sequence: [ambientTemperatureInput], //["45"] ambientTemperatureInput
                  enumeration: "values",
                },
              },
              {
                PointSensor: {
                  Num: 6,
                  Name: "NTC2 - Probe 2",
                  sequence: ["30"],
                  enumeration: "values",
                },
              },
              {
                PointSensor: {
                  Num: 7,
                  Name: "Sensor7",
                  sequence: [
                    "-32647",
                    "-32647",
                    "-32647",
                    "-32647",
                    "-32647",
                    "-32647",
                  ],
                  enumeration: "values",
                },
              },
              {
                PointSensor: {
                  Num: 8,
                  Name: "Sensor8",
                  sequence: ["-32647", "-32647"],
                  enumeration: "values",
                },
              },
              {
                PointSensor: {
                  Num: 9,
                  Name: "Sensor9",
                  sequence: [
                    "-32647",
                    "-32647",
                    "-32647",
                    "-32647",
                    "-32647",
                    "-32647",
                  ],
                  enumeration: "values",
                },
              },
              {
                PointSensor: {
                  Num: 10,
                  Name: "Sensor10",
                  sequence: ["-32647", "-32647"],
                  enumeration: "values",
                },
              },
              {
                PointSensor: {
                  Num: 11,
                  Name: "Sensor11",
                  sequence: ["-32647", "-32647"],
                  enumeration: "values",
                },
              },
              {
                PointSensor: {
                  Name: "NTC1-MAX",
                  sequence: ["-30"],
                  enumeration: "values",
                },
              },
              {
                PointSensor: {
                  Name: "NTC1-MIN",
                  sequence: ["-40"],
                  enumeration: "values",
                },
              },
              {
                PointSensor: {
                  Name: "NTC1-MEAN",
                  sequence: ["20"],
                  enumeration: "values",
                },
              },
              {
                PointSensor: {
                  Name: "NTC2-MAX",
                  sequence: ["56"],
                  enumeration: "values",
                },
              },
              {
                PointSensor: {
                  Name: "NTC2-MIN",
                  sequence: ["22"],
                  enumeration: "values",
                },
              },
              {
                PointSensor: {
                  Name: "NTC2-MEAN",
                  sequence: ["20"],
                  enumeration: "values",
                },
              },
              {
                PointSensor: {
                  Name: "System 2 Main HZ",
                  sequence: ["20"],
                  enumeration: "values",
                },
              },
              {
                PointSensor: {
                  Name: "System 2 Operation hour",
                  sequence: ["234"],
                  enumeration: "values",
                },
              },
              {
                PointSensor: {
                  Name: "System 2 Operation Mode",
                  sequence: [modeValue1], //["5"] operationModeSInput
                  enumeration: "values",
                },
              },
              {
                PointSensor: {
                  Name: "System 2 Return Temperature Probe",
                  sequence: [returnTemperatureInput1], //["3.2"]
                  enumeration: "values",
                },
              },
              {
                PointSensor: {
                  Name: "System 2 Supply Temperature Probe ",
                  sequence: [supplyTemperatureInput1], //["6.5"]
                  enumeration: "values",
                },
              },
              {
                PointSensor: {
                  Name: "System 2 Temperature Setpoint",
                  sequence: [setPointTemperatureInput1], //["0.5"]
                  enumeration: "values",
                },
              },
              {
                PointSensor: {
                  Name: "Active Errors 1",
                  sequence: ["0000000000000001"],
                  enumeration: "values",
                },
              },
              {
                PointSensor: {
                  Name: "System 1 Operation hour",
                  sequence: ["611"],
                  enumeration: "values",
                },
              },
              {
                PointSensor: {
                  Name: "System 1 System indication",
                  sequence: [primarySystem], //primarySystem ["2"]
                  enumeration: "values",
                },
              },
              {
                PointSensor: {
                  Name: "System 1 Operation Mode",
                  sequence: [modeValue], // ["5"] operationModePInput
                  enumeration: "values",
                },
              },
              {
                PointSensor: {
                  Name: "System 1 Return Temperature Probe",
                  sequence: [returnTemperatureInput], //["23"]
                  enumeration: "values",
                },
              },
              {
                PointSensor: {
                  Name: "System 1 Supply Temperature Probe",
                  sequence: [supplyTemperatureInput], //["10"]
                  enumeration: "values",
                },
              },
              {
                PointSensor: {
                  Name: "System 1 Temperature Setpoint",
                  sequence: [setPointTemperatureInput], //["30"]
                  enumeration: "values",
                },
              },
              {
                PointSensor: {
                  Name: "Active Errors 3",
                  sequence: ["0000000000001000"],
                  enumeration: "values",
                },
              },
              {
                PointSensor: {
                  Name: "Active Errors 2",
                  sequence: ["0000000000000001"],
                  enumeration: "values",
                },
              },
            ],
            dateReceived: "2023-10-12T10:08:04Z",
          },
        ],
        CLASS: "AP4i34",
      },
    ],
  };

  const formattedJson = JSON.stringify(requestData, null, 2);

  // Create a Blob containing the formatted JSON data
  const jsonBlob = new Blob([formattedJson], { type: "application/json" });

  // Create a link element
  const downloadLink = document.createElement("a");

  // Set the download link attributes
  downloadLink.href = URL.createObjectURL(jsonBlob);
  downloadLink.download = "requestData.json";

  // Append the link to the body
  document.body.appendChild(downloadLink);

  // Trigger a click on the link to start the download
  downloadLink.click();

  // Remove the link from the body
  document.body.removeChild(downloadLink);

  console.log("Data to be sent to API:", requestData);

  axios
    .post(apiUrl, requestData, {
      headers: {
        Accept: "*/*",
        "Content-Type": "application/json",
      },
    })
    .then((response) => {
      // Check if the response is successful
      if (response.data === true) {
        showSuccessPopup();
        console.log(response.data);
      } else {
        showErrorPopup("Unexpected response");
        console.log(response.data);
      }
    })
    .catch((error) => {
      console.error("Error:", error.message);
      showErrorPopup("Failed to send data");
    });
}

function showSuccessPopup() {
  const popup = document.getElementById("popupSection1");
  popup.classList.remove("hidden");
}

function showErrorPopup(errorMessage) {
  const popupError = document.getElementById("popupErrorSection1");
  popupError.classList.remove("hidden");
  const errorText = document.querySelector("#popupErrorSection1 h2");
  errorText.textContent = errorMessage;
}

function closePopup1() {
  const popup = document.getElementById("popupSection1");
  popup.classList.add("hidden");

  const popupError = document.getElementById("popupErrorSection1");
  popupError.classList.add("hidden");
}

// trash can
