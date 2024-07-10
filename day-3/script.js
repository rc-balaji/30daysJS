var fighters = [
    '💀','☠️','👻','👽','😹','😸','🦒','🐭','🐨','🦄','🐒','🦬','🐘'
];

var length = fighters.length;
var placeholder = document.getElementById('placeholder');
var fight = document.getElementById('Fighters');

function getRandom(length) {
    var random = Math.floor(Math.random() * length);
    return random;
}

function pick() {
    placeholder.style.display = 'none';
    fight.style.display = 'flex';

    var countdownValues = ['3', '2', '1', 'Go'];
    var delay = 1000; 

    countdownValues.map((value, index) => {
        setTimeout(() => {
            fight.innerText = value;
        }, index * delay);
    });

    setTimeout(()=>{
        var player1 = fighters[getRandom(length)];
        var player2 = fighters[getRandom(length)];
        var str = player1 + "vs" + player2;
        fight.innerText = str;
    }, countdownValues.length * delay);
}

