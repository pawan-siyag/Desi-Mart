let btn = document.querySelector("#login");

btn.addEventListener("click", (e) => {
  e.preventDefault();
   window.location.href = "page2.html";
});

let btn2 = document.querySelector(".forget");

btn2.addEventListener("click", (e) => {
  e.preventDefault(); 
  window.location.href = "forget.html";
});

let btn3 = document.querySelector(".new-user");

btn3.addEventListener("click", (e) => {
  e.preventDefault(); 
  window.location.href = "new.html";
});


