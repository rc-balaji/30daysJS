const root = document.getElementById('root')



/*
 <div class="container" >
        <img src="images/image-1.jpg" alt="image1">
        <p>Name - 1</p>
        <a href="Page1.html"><button>Click</button></a>
    </div>



*/
var data = [
    {
        imageurl : 'images/image-1.jpg',
        name : "Sami - 1" , 
        url : "https://day-2222.netlify.app/"
    },
    {
        imageurl : 'images/image-2.jpg',
        name : "Sami - 2" , 
        url : "Page2.html"
    },
    {
        imageurl : 'images/image-3.jpg',
        name : "Sami - 3" , 
        url : "Page3.html"
    },
    {
        imageurl : 'images/image-4.jpg',
        name : "Sami - 4" , 
        url : "Page4.html"
    },
    {
        imageurl : 'images/image-5.jpg',
        name : "Sami - 5" , 
        url : "Page5.html"
    },
    {
        imageurl : 'images/image-5.jpg',
        name : "Sami - 5" , 
        url : "Page5.html",
    },
]



var a = 10

var string = "";

data.forEach((item,index) => {
    var val = 
    `
    <div class="container" >
            <img src=${item.imageurl} alt="image${index+1}">
            <p>${item.name}</p>
            <a href=${item.url}><button>Click</button></a>
        </div>
    
    `

    string += val;
});

console.log(string);
root.innerHTML = string;

