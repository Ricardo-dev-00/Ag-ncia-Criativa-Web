function menuMobile() {
    const menu = document.getElementById("mobile");
    if (menu.style.display === "block") {
        menu.style.display = "none";
    } else {
        menu.style.display = "block";
    }
}

// Fecha o menu ao clicar em qualquer link do menu mobile
document.querySelectorAll('#mobile a').forEach(link => {
    link.addEventListener('click', () => {
        document.getElementById("mobile").style.display = "none";
    });
});

// Fecha o menu ao clicar fora dele
document.addEventListener('click', (event) => {
    const menu = document.getElementById("mobile"); 
    const menuButton = document.getElementById("menu-mobile"); // corrigido aqui
    if (
        menu && 
        (!menu.contains(event.target)) && 
        (!menuButton || !menuButton.contains(event.target))
    ) {
        menu.style.display = "none";
    }
});