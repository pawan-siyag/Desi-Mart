let btn1 = document.querySelector(".clothing");
btn1.addEventListener("click" , (e) => {
    setTimeout( () => {
       e.preventDefault();
     window.location.href = "page3.html";
   } , 1500);
});


let btn2 = document.querySelector(".grocery");
btn2.addEventListener("click" , (e) => {
    e.preventDefault();
    setTimeout( () => {
        window.location.href = "grocery.html"
    } , 1500);
});


let btn3 = document.querySelector(".makeup");
btn3.addEventListener("click" , (e) => {
    e.preventDefault();
    setTimeout( () => {
        window.location.href = "makeup.html"
    } , 1500);
});