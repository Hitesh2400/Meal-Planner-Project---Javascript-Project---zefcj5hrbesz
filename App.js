const submit = document.getElementById("submit");
const inputemail = document.getElementById("email");
const inputpassword = document.getElementById("password");

inputemail.addEventListener("keyup", (e) => {
    const value = e.currentTarget.value;
    submit.disabled = false;

    if(value === ""){
        submit.disabled = true;
    }
});

inputpassword.addEventListener("keyup", (e) => {
    const value = e.currentTarget.value;
    submit.disabled = false;

    if(value === ""){
        submit.disabled = true;
    }
});


function myFunction() {
    window.location = "index2.html";
}