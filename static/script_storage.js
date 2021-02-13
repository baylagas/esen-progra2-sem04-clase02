function writeArrayToSessionStorage(keyName, arrayObject) {
    sessionStorage.setItem(keyName, JSON.stringify(arrayObject))
}

function readArrayFromSessionStorage(keyName) {
    return JSON.parse(sessionStorage.getItem(keyName))
}

function writeArrayToLocalStorage(keyName, arrayObject) {
    localStorage.setItem(keyName, JSON.stringify(arrayObject))
}

function readArrayFromLocalStorage(keyName) {
    return JSON.parse(localStorage.getItem(keyName))
}
