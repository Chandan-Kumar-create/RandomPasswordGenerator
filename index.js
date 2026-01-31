const btnEL = document.querySelector(".btn");
const inputEl = document.getElementById("input");
const copyEL = document.querySelector(".fa-copy");
const alertContainer=document.querySelector(".alert-container")
btnEL.addEventListener("click", () => {
    createPassword();
});

copyEL.addEventListener("click", () => {
    copyPassword();
    alertContainer.classList.remove("active");
    setTimeout(()=>{
    alertContainer.classList.add("active");
    },2000)
});
function createPassword() {
    const chars = "0123456789abcdefghijklmnopqrstuvwxyz!@$%^&*()_+:{}[]ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const passwordLength = 14;
    let password = "";

    for (let index = 0; index < passwordLength; index++) {
        const randomNum = Math.floor(Math.random() * chars.length);
        password += chars[randomNum];
    }

    inputEl.value = password;
    alertContainer.innerText=password + "    copied!"
}

function copyPassword() {
    inputEl.select();
    inputEl.setSelectionRange(0, 9999); 
    navigator.clipboard.writeText(inputEl.value);
    
}

