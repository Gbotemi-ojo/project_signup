let password = document.getElementById("password")
let confirmpassword = document.getElementById("confirmPassword")
let errorText = document.querySelector(".errorPassword")
confirmpassword.addEventListener("keyup",confirmed)
function confirmed(){
    if(password.value != confirmpassword.value){
        errorText.textContent = "*passwords do not match" 
    }
    else{
        errorText.textContent = ""
    }
}
// let submitBtn = document.querySelector(".submitBtn")
// submitBtn.addEventListener("click",confirmpass)
// function confirmpass(){
//    if(password.value === confirmpassword.value){ 
//        errorText.textContent = ""
//    }
//    else if(password.value !== confirmpassword.value){
//        errorText.textContent = "*passwords do not match"
//    }
// }