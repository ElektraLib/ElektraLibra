const searchInput = document.getElementById("searchInput");
const componentCards = document.querySelectorAll(".component-card");

searchInput.addEventListener("input", function () {
  const searchText = this.value.toLowerCase();

  componentCards.forEach(card => {
    const name = card.dataset.name.toLowerCase();

    if (name.includes(searchText)) {
      card.style.display = "block";
    } else {
      card.style.display = "none";
    }
  });
});
