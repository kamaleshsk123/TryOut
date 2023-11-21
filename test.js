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
