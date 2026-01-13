const notification = document.getElementById("notification");
const text = document.getElementById("notification-text");

function showSuccess() {
  notification.className = "notification success";
  text.innerText = "✅ Success! Action completed successfully.";
  notification.classList.remove("hidden");
}

function showError() {
  notification.className = "notification error";
  text.innerText = "❌ Error! Something went wrong.";
  notification.classList.remove("hidden");
}

function hideNotification() {
  notification.classList.add("hidden");
}
