// Select the button element
const apiButton = document.getElementById("apiButton");

// Add an event listener to the button to handle the click event
apiButton.addEventListener("click", function () {
  // Replace this URL with the actual API URL you want to call

  const webApp = window.Telegram.WebApp;
  const user = webApp.initDataUnsafe.user;
  if (user) {
    console.log(`Hello, ${user.first_name}!`);
    console.log(`Hello, ${user.id}!`);
  } else {
    console.log(`Hello, Guest`);
  }
  const apiUrl = "http://localhost:5000/api/telegram/send-message";
  console.log(user);
  // Use fetch() to call the API
  const payload = {
    chatId: user?.id ? user?.id : 123456789, // Example chatId
    message: "Hello from the frontend!", // Example message
  };

  // Make the fetch request
  fetch(apiUrl, {
    method: "POST", // Use POST method to send the body
    headers: {
      "Content-Type": "application/json", // Ensure the content type is JSON
    },
    body: JSON.stringify(payload), // Convert the payload to a JSON string
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok " + response.statusText);
      }
      return response.json(); // Parse the JSON response
    })
    .then((data) => {
      console.log("Success:", data);
      // Handle success response
      document.getElementById("apiResponse").innerText =
        "API Response: " + JSON.stringify(data);
    })
    .catch((error) => {
      console.error("Error fetching the API:", error);
      document.getElementById("apiResponse").innerText =
        "Failed to fetch API. Please try again later.";
    });
});
