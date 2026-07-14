let min = document.querySelectorAll(".min");
let adds = document.querySelectorAll(".add");

adds.forEach((btn) => {
  let input = btn.parentElement.querySelector(".input");
  let count = 0;
 btn.addEventListener("click", () => {
    if (count < 20) {
        count++;
        input.value = count;
    }
});
   
  }
);


min.forEach((btn) => {
  let input = btn.parentElement.querySelector(".input");
  btn.addEventListener("click",() => {
    let value = Number(input.value);
  if(value > 0){
    value--;
    input.value = value;
  }
  });
});