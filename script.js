let password = document.getElementById("password")
let confirmpassword = document.getElementById("confirmPassword")
let errorText = document.querySelector(".errorPassword")
let submitBtn = document.querySelector(".submitBtn")
submitBtn.addEventListener("click",confirmpass)
function confirmpass(){
   if(password.value === confirmpassword.value){ 
       errorText.textContent = ""
   }
   else if(password.value !== confirmpassword.value){
       errorText.textContent = "*passwords do not match"
   }
}