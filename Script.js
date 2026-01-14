/* ===== Day 4: Mobile Menu ===== */
function toggleMenu() {
  const menu = document.getElementById("navMenu");
  menu.classList.toggle("open");

  document.body.style.overflow =
    menu.classList.contains("open") ? "hidden" : "auto";
}

/* Close menu on link click */
document.querySelectorAll(".nav-links a").forEach(link => {
  link.addEventListener("click", () => {
    document.getElementById("navMenu").classList.remove("open");
    document.body.style.overflow = "auto";
  });
});


/* ===== Day 5: Search Handling ===== */
function handleSearch(event) {
  event.preventDefault();
  const input = event.target.querySelector("input");

  if (input.value.trim() === "") {
    alert("Please enter a search term");
    return;
  }

  alert("Searching for: " + input.value);
  input.value = "";
}
/* ===== Day 7: Notification ===== */
const notification = document.getElementById("notification");
const message = document.getElementById("message");

function showSuccess() {
  message.textContent = "✅ Success! Task deployed successfully.";
  notification.classList.remove("hidden", "error");
  notification.classList.add("success");
}

function showError() {
  message.textContent = "❌ Error! Something went wrong.";
  notification.classList.remove("hidden", "success");
  notification.classList.add("error");
}

function dismiss() {
  notification.classList.add("hidden");
}
