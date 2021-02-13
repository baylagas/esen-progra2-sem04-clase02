var loginArray = readArrayFromSessionStorage("loginArray")
if (loginArray === null) {
    //alert("no login information")
    window.location = "http://localhost:5000/login"
}