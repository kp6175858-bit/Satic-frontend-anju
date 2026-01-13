const searchForm = document.getElementById("search-form");
const searchInput = document.getElementById("search-input");

searchForm.addEventListener("submit", function (e) {
  e.preventDefault();

  const value = searchInput.value.trim();

  if (value === "") {
    alert("Please enter something to search.");
    return;
  }

  console.log("Search value:", value);
});
function showSuccess() {
  alert("✅ Success Message Shown!");
}

function showError() {
  alert("❌ Error Message Shown!");
}

function searchCard() {
  let input = document.getElementById("searchInput").value.toLowerCase();
  let cards = document.querySelectorAll(".card");

  cards.forEach(card => {
    let title = card.querySelector("h2").innerText.toLowerCase();
    if (title.includes(input)) {
      card.style.display = "block";
    } else {
      card.style.display = "none";
    }
  });
}
