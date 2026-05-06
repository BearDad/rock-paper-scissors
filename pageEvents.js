function switchLogic() {
  card = document.getElementById("main-screen");
  card.classList.add("zoomOut");
  card.addEventListener(
    "animationend",
    () => {
      card.classList.add("hidden");
      zoomIn();
    },
    { once: true },
  );
}
function zoomIn() {
  game = document.getElementById("game");
  game.classList.remove("hidden");
  game.classList.add("zoomIn");
}
