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


  var mess = ["3","2","1","Go"]


  
    var arr_m  = mess.map((emoji,index)=>{
      setTimeout(()=>{
        fighters.innerText = emoji;
      },index*1000)

      return emoji+"Hello";
  })


  console.log(arr_m);


  


  setTimeout(() => {
    var left = fighterArray[getRandom(length)];
    var right = fighterArray[getRandom(length)];

    var picker = left + "vs" + right;
    fighters.innerText = picker;
  }, 4000);
}



