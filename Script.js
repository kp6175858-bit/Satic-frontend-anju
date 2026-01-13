const notification = document.getElementById("notification");
const message = document.getElementById("message");

function showSuccess() {
  notification.className = "notification success show";
  message.innerText = "Success! Task deployed successfully.";
}

function showError() {
  notification.className = "notification error show";
  message.innerText = "Error! Something went wrong.";
}

function hideNotification() {
  notification.classList.remove("show");
}
