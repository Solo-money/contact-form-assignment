const firstName = document.getElementById("firstName")
const lastName = document.getElementById("lastName")
const email = document.getElementById("email")
const message = document.getElementById("message")
const button = document.querySelector('button')
const result = document.getElementById("result")

button.addEventListener ('click', () => {
    event.preventDefault();
    result.innerHTML = `My name is ${firstName.value} ${lastName.value}, my gmail is ${email.value} and my message is ${message.value}`
});