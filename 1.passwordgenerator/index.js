const btnEl = document.querySelector(".jsbtn");
const inputEl = document.querySelector("input");
const copyEl = document.querySelector(".copyPswd");
/**
 * CSS selector for range input
 *  const rangeEl = document.querySelector("input[type='range']");
 */
const rangeEl = document.getElementById("getRange");

console.log(rangeEl.value);
console.log(inputEl.__proto__);
console.log(inputEl.__proto__.__proto__);
console.log(inputEl.__proto__.__proto__.__proto__);
console.log(inputEl.__proto__.__proto__.__proto__.__proto__);
console.log(inputEl.__proto__.__proto__.__proto__.__proto__.__proto__);

rangeEl.addEventListener("input", () => { getRangeValue() });

btnEl.addEventListener("click", () => { createPassword() });

copyEl.addEventListener("click", () => { copyPassword() });

function getRangeValue() {
    console.log(rangeEl.value);
    return parseInt(rangeEl.value)
}

function createPassword() {
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()";
    const passwordLength = getRangeValue();
    console.log(passwordLength)
    let password = "";

    for (i = 0; i < passwordLength; i++) {
        const randomMath = Math.floor(Math.random() * chars.length)
        // console.log(randomMath)
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