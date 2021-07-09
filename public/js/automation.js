const button = document.getElementById("automation");

button.addEventListener("click", () =>{
    let name = document.getElementById("name");
    let email = document.getElementById("email");
    let message = document.getElementById("message");

    name.value = "Bleron"
    email.value = "bleron.redjepi@edu.tbz.ch"
    message.value = "This was automated"
})