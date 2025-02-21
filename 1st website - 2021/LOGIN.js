function processForm(e){
    e.preventDefault(); //stop the form from submitting to server
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    console.log(username);
    var Cusername = "TT";
    var Cpassword = "12";
    var Wrong = "Wrong user name or password";

    if (username == Cusername && password == Cpassword
    ) {
      window.location.href = "https://www.cc.puv.fi/~e2101568/Project%205.0/page_search.html";
    } else {
alert(Wrong);
}
  }