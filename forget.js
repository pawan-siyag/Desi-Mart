let input = document.getElementById("input")
let getotp = document.getElementById("getotp")
let resend = document.querySelector(".OTP")

let genrateotp = "";
getotp.addEventListener("click", () =>{
    genrateotp = Math.floor(1000+ Math.random() * 9000).toString();
    console.log(genrateotp);
    
})

resend.addEventListener("click", () =>{
    let rcvotp = input.value
   
    if(rcvotp === genrateotp){
        alert("your login successfull✅")

    }
    else{
        alert("Your OTP is incorract")
    }
});