
function generatePassword() {
    var myinput = document.getElementById("myinput");
    var lengthInput = document.getElementById("PasswordLength");
    var length = parseInt(lengthInput.value);

    if (!isNaN(length) && length > 0) {
        var ch = "";
        var UpperCase = document.getElementById("UpperCase").checked;
        var LowerCase = document.getElementById("LowerCase").checked;
        var Number = document.getElementById("Number").checked;
        var SpecialCharacters = document.getElementById("SpecialCharacters").checked;

        if (UpperCase) ch += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        if (LowerCase) ch += "abcdefghijklmnopqrstuvwxyz";
        if (Number) ch += "0123456789";
        if (SpecialCharacters) ch += "!@#$%^&*()";

        if (ch.length > 0) {
            var password = "";
            for (var i = 0; i < length; i++) {
                let randomNumber = Math.floor(Math.random() * ch.length);
                password += ch[randomNumber];
            }
            myinput.value = password;
        } else {
            alert("Please select at least one character type");
        }
    } else {
        alert("Please enter a valid number for the password length.");
    }
}