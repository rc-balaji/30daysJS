var fighterArray = [
  "💀",
  "☠️",
  "👻",
  "👽",
  "😹",
  "😸",
  "🦒",
  "🐭",
  "🐨",
  "🦄",
  "🐒",
  "🦬",
  "🐘",
];

var length = fighterArray.length;

var placeholder = document.getElementById("placeholder");
var fighters = document.getElementById("fighters");

function getRandom(length) {
  return Math.floor(Math.random() * length);
}

function pick() {
  placeholder.style.display = "none";
  fighters.style.display = "block";
  fighters.innerText = "3";

  setTimeout(() => {
    fighters.innerText = "2";
  }, 1000);
  setTimeout(() => {
    fighters.innerText = "1";
  }, 2000);
  setTimeout(() => {
    fighters.innerText = "GO";
  }, 3000);
  setTimeout(() => {
    var left = fighterArray[getRandom(length)];
    var right = fighterArray[getRandom(length)];

    var picker = left + "vs" + right;
    fighters.innerText = picker;
  }, 4000);
}




