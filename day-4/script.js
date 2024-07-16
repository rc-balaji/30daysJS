var data = [
    {
        image : './images/image-1.jpg',
        name : "Name1",
        url : 'page1.html'
    },
    {
        image : './images/image-2.jpg',
        name : "Name2",
        url : 'page2.html'
    },
    {
        image : './images/image-3.jpg',
        name : "Name3",
        url : 'page3.html'
    },
    {
        image : './images/image-4.jpg',
        name : "Name4",
        url : 'page4.html'
    },
    {
        image : './images/image-5.jpg',
        name : "Name5",
        url : 'page4.html'
    },
]



var div = document.getElementById('div1');

var string = "";


data.forEach((value,index)=>{
    var temp = `
    <div id="div" >
        
        <img src=${value.image} alt="" srcset="">
        <p>${value.name}</p>
        
        <a href=${value.url}><button>Click</button></a>
    </div>
    
    `

    string += temp;
})


div.innerHTML = string;
