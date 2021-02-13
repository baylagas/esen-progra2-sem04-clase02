function test01() {
    var numberArray = { "one": 1, "two": 2, "three": 3 }
    writeArrayToLocalStorage("numberArray", numberArray)
}

function test02() {
    var numberArray = readArrayFromLocalStorage("numberArray")
    console.log(numberArray)
}

function test03() {
    var personArray = []
    var person01 = { "id": 1, "name": "bal", "age": 23, "salary": 200.0 }
    personArray.push(person01)
    var person02 = { "id": 2, "name": "rod", "age": 32, "salary": 350.0 }
    personArray.push(person02)
    writeArrayToLocalStorage("personArray", personArray)

    var loginArray = []
    var login = { "user": "bal", "password": "123" }
    loginArray.push(login)
    writeArrayToSessionStorage("loginArray", loginArray)
}

function test04() {
    var personArray = readArrayFromLocalStorage("personArray")
    console.log(personArray)
    for (var currObject of personArray) {
        for (var element in currObject) {
            console.log(currObject[element])
        }
    }

    var loginArray = readArrayFromSessionStorage("loginArray")
    console.log(loginArray[0])
}