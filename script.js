// Hamburger menu function 
function showHideMenu(){
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}

// footer part

document.getElementById("year").textContent = new Date().getFullYear();