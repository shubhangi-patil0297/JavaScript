function login_now(){

    let user_name = document.getElementById("username").value;
    let user_password = document.getElementById("password").value;

    if(user_name == "shubh@.in" && user_password == "shubh123"){
        window.open("welcome.html");

    }
else {
    alert("try again - wrong password....");
}
}