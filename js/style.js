var button = document.getElementById('content_detail_button');

function validateEmail(email) {
    var regex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regex.test(email);
}

button.addEventListener('click', function(event) {
    event.preventDefault();
    var result = document.getElementById('content_detail_result');
    var email = document.getElementById('content_detail_input').value;

    if(validateEmail(email)){
        console.log("Email Correto");
        result.innerText = "";
    } else {
        result.innerText = "Please provide a valid email";
    }
});

