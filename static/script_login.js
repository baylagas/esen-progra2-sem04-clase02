function loginNewUser() {
    var user = document.getElementById("user").value
    var passw = document.getElementById("passw").value

    var logUser = { "user": user, "password": passw }
    var loginArray = []
    loginArray.push(logUser)

    writeArrayToSessionStorage("loginArray", loginArray)
    window.location = "http://localhost:5000/dashboard"
}