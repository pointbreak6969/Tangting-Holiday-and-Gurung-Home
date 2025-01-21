const menuButton = document.querySelector('.parent button');
const menuIcon = menuButton.querySelector('i');
const dropdownMenu = document.getElementById("right");

function toggle() {
    const isOpen = dropdownMenu.classList.contains("show");
    
    if (isOpen) {
        closeMenu();
    } else {
        openMenu();
    }
}

function openMenu() {
    dropdownMenu.classList.add("show");
    menuIcon.classList.remove("fa-bars");
    menuIcon.classList.add("fa-xmark");
    menuButton.classList.add("active");
}

function closeMenu() {
    dropdownMenu.classList.remove("show");
    menuIcon.classList.remove("fa-xmark");
    menuIcon.classList.add("fa-bars");
    menuButton.classList.remove("active");
}

document.addEventListener('click', (event) => {
    const isMenuClick = menuButton.contains(event.target);
    const isDropdownClick = dropdownMenu.contains(event.target);
    
    if (!isMenuClick && !isDropdownClick && dropdownMenu.classList.contains("show")) {
        closeMenu();
    }
});

dropdownMenu.addEventListener('click', (event) => {
    event.stopPropagation();
});
document.querySelectorAll(".call").forEach(button => {
    button.addEventListener("click", function() {
        const phoneNumber = "+9779856028827";
        window.open(`tel:${phoneNumber}`);
    });
});
