let text = document.querySelector(".loading-text");

const messages = [
    "loadong ...",
    "please wait ...",
    "almost is ready ..."
];

let index = 0;

setInterval(() =>{
    index++;
    if(index >= messages.length){
        index= 0;

    }
       text.innerText = messages[index];
} ,2000);

setTimeout(() => {
 window.location.href = "grocery.html"
}, 5000);