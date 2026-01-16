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
/* ===== Day 7: Notification =====*/
const notification = document.getElementById("notification");
const message = document.getElementById("message");

function showSuccess() {
  message.textContent = "Success! Task deployed successfully.";
  notification.className = "notification success";
}

function showError() {
  message.textContent = "Error! Something went wrong.";
  notification.className = "notification error";
}

function dismiss() {
  notification.classList.add("hidden");
}
const form = document.getElementById("task8Form");
const input = document.getElementById("username");
const submitBtn = document.getElementById("submitBtn");
const errorMsg = document.getElementById("errorMsg");

// Enable / Disable button on typing
input.addEventListener("input", () => {
  if (input.value.trim() === "") {
    submitBtn.disabled = true;
    errorMsg.style.display = "none";
    input.classList.remove("error");
  } else {
    submitBtn.disabled = false;
  }
});

// Prevent empty submit
form.addEventListener("submit", (e) => {
  e.preventDefault();

  if (input.value.trim() === "") {
    errorMsg.style.display = "block";
    input.classList.add("error");
    submitBtn.disabled = true;
  } else {
    errorMsg.style.display = "none";
    input.classList.remove("error");

    alert("Form submitted successfully!");
    form.reset();
    submitBtn.disabled = true;
  }
});
// Premium Go To Top Button
const goTopBtn = document.getElementById("goTopBtn");

window.addEventListener("scroll", () => {
  if (window.scrollY > 350) {
    goTopBtn.classList.add("show");
  } else {
    goTopBtn.classList.remove("show");
  }
});

goTopBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});
