var loginArray = readArrayFromSessionStorage("loginArray")
if (loginArray === null) {
    //alert("no login information")
    window.location = "http://localhost:5000/login"
}


// Sidebar Toggle Codes;

var sidebarOpen = false;
var sidebar = document.getElementById("sidebar");
var sidebarCloseIcon = document.getElementById("sidebarIcon");

function toggleSidebar() {
    if (!sidebarOpen) {
        sidebar.classList.add("sidebar_responsive");
        sidebarOpen = true;
    }
}


function closeSidebar() {
    if (sidebarOpen) {
        sidebar.classList.remove("sidebar_responsive");
        sidebarOpen = false;
    }
}

function toggleVideo() {
    var videom = document.getElementById("navbar_v");
    videom.classList.toggle("active_link");
}

/* crear una funcion que llame toggleNavBarLink()
1. buscar todos links
2. saber cual es el que se le esta dando el click
3. al resto quitarles el classlist active link
4. al que se le dio click ponerle el active link
*/

document.getElementById("main_title_text").innerHTML = "hola que hambre hace ya";
document.getElementsByTagName("main")[0].innerHTML = '<object type="text/html" data="/templates/index.html" ></object>';
