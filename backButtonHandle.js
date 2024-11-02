// Push a state to the history to detect back actions
window.history.pushState({ page: 1 }, "", "");

// Define the function you want to run when back button is pressed
function onBackButtonPressed() {
  console.log("Back button pressed! Running custom function...");
  alert("Custom function executed on back button press!");
  // Add any other logic you need to run here
}

// Listen for the 'popstate' event to detect history change
window.addEventListener("popstate", function (event) {
  // Call the custom function when back button is detected
  onBackButtonPressed();

  // Optionally prevent going back by pushing the state again
  window.history.pushState({ page: 1 }, "", "");
});