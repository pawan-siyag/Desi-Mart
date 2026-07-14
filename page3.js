let mens = document.querySelector(".mens");

console.log("Before Event");

mens.addEventListener("click", (e) => {
  console.log("Clicked");
  e.preventDefault();

  setTimeout(() => {
    window.location.href = "page4.html";
  }, 1500);
});

console.log("After Event");
