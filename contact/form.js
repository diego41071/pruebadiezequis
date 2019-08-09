var inputs = document.getElementsByClassName('inputform');
for (var i = 0; i < inputs.length; i++) {
    inputs[i].addEventListener('keyup', function () {
        if (this.value.length >= 1) {
            this.nextElementSibling.classList.add('block')
        } else {
            this.nextElementSibling.classList.remove('block')
        }
    });
}

function validation(e) {
    let email = document.getElementById("Email").value;
    let phone = document.getElementById("Phone").value;

    var Return = true;
    if (!/^([0-9])*$/.test(phone)) {
        e = e || window.event;
        alert('ERROR: Debes escribir un número');
        e.preventDefault();
        document.getElementById("Phone").focus();
        return;
    };
    if (!(/\S+@\S+\.\S+/.test(email)) || email == 0) {
        alert('ERROR: You must write a valid email.');
        document.getElementById("Email").focus();
        return;
    } else{
        alert("Se ha enviado el formulario correctamente");
    }
};


