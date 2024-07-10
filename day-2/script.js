
var count = document.getElementById('count');
var entries = document.getElementById('entries');


let val = 0;


function inc(){
    val++;

    count.innerText = val;
}


function save() { 
    let str = entries.innerText;
    str += " "+ val + " - "; 
    entries.innerText = str;
    val = 0;
    count.innerText = 0;
 }



