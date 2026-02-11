const btnEl = document.querySelector(".jsbtn");
const inputEl = document.querySelector("input");
const copyEl = document.querySelector(".copyPswd");

console.log(inputEl);
console.log(inputEl.__proto__);
console.log(inputEl.__proto__.__proto__);
console.log(inputEl.__proto__.__proto__.__proto__);
console.log(inputEl.__proto__.__proto__.__proto__.__proto__);
console.log(inputEl.__proto__.__proto__.__proto__.__proto__.__proto__);


btnEl.addEventListener("click", () => {
    createPassword();
});

copyEl.addEventListener("click", () => {
    copyPassword();
});

function createPassword() {
    const chars = "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const passwordLength = 12;
    let password = "";

    for (i = 0; i < passwordLength; i++) {
        const randomMath = Math.floor(Math.random() * chars.length)
        console.log(randomMath)
        password += chars.substring(randomMath, randomMath + 1)
    }

    inputEl.value = password;
    console.log(password);

}

function copyPassword() {
    inputEl.select()
    navigator.clipboard.writeText(inputEl.value)
    alert("Password copied to clipboard!");
}
