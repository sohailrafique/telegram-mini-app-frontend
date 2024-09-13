// Select the button element
const apiButton = document.getElementById("apiButton");

// Add an event listener to the button to handle the click event
apiButton.addEventListener("click", function () {
  const webApp = window.Telegram.WebApp;
  const user = webApp.initDataUnsafe?.user;

  // Replace this URL with the actual API URL you want to call
  const apiUrl = "https://fe7b-182-191-89-195.ngrok-free.app/api";

  // Use fetch() to call the API
  fetch(apiUrl)
    .then((response) => response.json())
    .then((data) => {
      // Display the API response in the apiResponse div
      document.getElementById("apiResponse").innerText =
        "API Response: " + JSON.stringify(data);
    })
    .catch((error) => {
      // Handle errors
      console.error("Error fetching the API:", error);
      document.getElementById("apiResponse").innerText =
        "Failed to fetch API. Please try again later.";
    });
});
