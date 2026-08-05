// ===== Search Feature =====
const searchBox = document.querySelector(".search");
const cards = document.querySelectorAll(".card");

if (searchBox) {
  searchBox.addEventListener("keyup", function () {
    const value = this.value.toLowerCase();

    cards.forEach(card => {
      const text = card.innerText.toLowerCase();

      if (text.includes(value)) {
        card.style.display = "block";
      } else {
        card.style.display = "none";
      }
    });
  });
}

// ===== Category Buttons =====
const buttons = document.querySelectorAll(".buttons button");

buttons.forEach(button => {
  button.addEventListener("click", () => {

    const category = button.innerText.toLowerCase();

    cards.forEach(card => {

      const text = card.innerText.toLowerCase();

      if (category === "all") {
        card.style.display = "block";
      }
      else if (text.includes(category)) {
        card.style.display = "block";
      }
      else {
        card.style.display = "none";
      }

    });

  });
});

// ===== Dark / Light Mode =====
const nav = document.querySelector(".navbar");

const modeButton = document.createElement("button");
modeButton.innerText = "🌙";
modeButton.style.padding = "10px";
modeButton.style.borderRadius = "10px";
modeButton.style.border = "none";
modeButton.style.cursor = "pointer";

nav.appendChild(modeButton);

let dark = true;

modeButton.onclick = () => {

  if (dark) {

    document.body.style.background = "#ffffff";
    document.body.style.color = "#000000";

    document.querySelectorAll(".card").forEach(card => {
      card.style.background = "#eeeeee";
      card.style.color = "#000";
    });

    modeButton.innerText = "☀️";

  } else {

    document.body.style.background = "#0f172a";
    document.body.style.color = "#ffffff";

    document.querySelectorAll(".card").forEach(card => {
      card.style.background = "#1e293b";
      card.style.color = "#fff";
    });

    modeButton.innerText = "🌙";
  }

  dark = !dark;

};
