

function validateForm() {
    let isallvalid = true;
    let fName = document.getElementById("fname").value;
    if (fName == "") {
        isallvalid = false;
        alert("Full name must be filled out");
    }

    let userName = document.getElementById("uname").value;
    if (userName == "") {
        isallvalid = false;
        alert("User name must be filled out");
    }

    let email = document.getElementById("email").value;
    if (email == "") {
        isallvalid = false;
        alert("Email must be filled out");
    }

    let password = document.getElementById("pass").value;
    if (password == "") {
        isallvalid = false;
        alert("Password must be filled out");
    }

    let address = document.getElementById("address").value;
    if (address == "") {
        isallvalid = false;
        alert("Address must be filled out");
    }

    let dob = document.getElementById("dob").value;
    if (dob == "") {
        isallvalid = false;
        alert("Date Of birth must be filled out");
    }

    let gender = "";
    let male = document.getElementById("male").checked;
    if (male) {
        gender = "male";
    }
    else {
        gender = "female";
    }


    if (isallvalid) {
        let array = JSON.parse(localStorage.getItem('userData'));
        if (array == null) {
            array = [];
        }
        array.push({
            firstName: fName,
            userName: userName,
            email: email,
            password: password,
            address: address,
            dob: dob,
            gender: gender
        });
        localStorage.setItem("userData", JSON.stringify(array));
        let data = localStorage.getItem('userData');
        console.log(data);
    }
}

function checklogin() {
    let email = document.getElementById("email").value;
    let password = document.getElementById("psw").value;
    let arrayl = JSON.parse(localStorage.getItem('userData'));
    console.log(arrayl);
    let matchData = arrayl.filter(function (e) {
        return e.email === email && e.password === password;

    });
    console.log("match data =" + JSON.stringify(matchData));
}