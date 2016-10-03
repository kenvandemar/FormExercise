


function confirm() {
    //value
    var nameField = document.getElementById("nameLength").value;
    var emailField = document.getElementById("email").value;
    var passField  = document.getElementById("password").value;
    var passAgain = document.getElementById("passagain").value;
    //var man = document.getElementById("male").checked;
    //var woman = document.getElementById("female").checked;
    //var others = document.getElementById("other").checked;
    
    //input
    var nameInput = document.getElementById("nameLength");
    var emailInput = document.getElementById("email");
    var passInput = document.getElementById("password");
    var passAgainInput = document.getElementById("passagain");
    
    //Button
     
    var hitBtn = document.getElementById("hit");
   
    //Regex
    var emailRex = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$/;
    var passwordRex = /(^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).*$)?(^(?=.*\d)(?=.*[a-z])(?=.*[@#$%^&+=]).*$)?(^(?=.*\d)(?=.*[A-Z])(?=.*[@#$%^&+=]).*$)?(^(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+=]).*$)?/; 

    //var formHorizon = document.getElementsByClassName("form-horizontal");
    //var err1 = document.getElementById("error");

    var errList = ["Your name must be longer than 6", "Your email should follow the format name@domain.com", "Your password should contains Uppaercase, one of !@#$%^&*()_+ and number", "Password not match", "Please chooose your gender", "Choose only one"];
    minChar = 6;

    function validateElement() {
            // Validate name
        if (nameField.length < minChar) {   
            document.getElementById("error").innerHTML = errList[0];
            //err1.innerHTML = errList[0];
            nameInput.classList.add("invalid");
        } else {
            document.getElementById("error").innerHTML = "";
            
        }
            // Validate Email
        if (!emailRex.test(emailField)) {
            document.getElementById("error1").innerHTML = errList[1];
            emailInput.classList.add("invalid");
        } else {
            document.getElementById("error1").innerHTML = "";
        }
            // Validate password
         if (!passwordRex.test(passField)) {
            document.getElementById("error2").innerHTML = errList[2];
            passInput.classList.add("invalid");
        } else {
            document.getElementById("error2").innerHTML = "";
        }   
            // Validate passField
            if (passField !== passAgain) {
            document.getElementById("error3").innerHTML = errList[3];
            passAgainInput.classList.add("invalid");
        } else {
            document.getElementById("error3").innerHTML = "";
        }
            //Valiate gender
        if (man === false && woman === false) {
            document.getElementById("error4").innerHTML = errList[4];
        } else if (man === true && woman === true) {
            document.getElementById("error4").innerHTML = errList[5];
        } else {
            document.getElementById("error4").innerHTML = "";
        }
    }
   validateElement();
}

function leave() {
    var leaveBtn = document.getElementById("leave"); 
    alert("Thanks for visiting! See you again");
}
   
   