var AUTHENTICATION_URL = "https://youtube-api-challenger2.appspot.com/authentication"

var usernameLogin = document.getElementById("username");
var passwordLogin = document.getElementById("password");

function loadDoc() {

    var data = {
        "data": {
            "type": "Memberlogin",
            "attributes":{
                "username": usernameLogin.value,
                "password": passwordLogin.value   
            }  
        } 
    }
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        document.getElementById("infor").innerHTML = this.responseText;
    }
  };
    xhttp.open("POST",AUTHENTICATION_URL, true);
    xhttp.send(JSON.stringify(data));
}