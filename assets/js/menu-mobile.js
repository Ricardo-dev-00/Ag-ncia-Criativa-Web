// Função para abrir/fechar o menu mobile ao clicar no botão
function menuMobile() {
    const menu = document.getElementById("mobile");
    // Alterna entre mostrar e esconder o menu mobile
    menu.style.display = (menu.style.display === "block") ? "none" : "block";
}

// Fecha o menu mobile ao clicar em qualquer link dentro dele
document.querySelectorAll('.header__menu-mobile .header__menu-link').forEach(link => {
    link.addEventListener('click', () => {
        document.getElementById("mobile").style.display = "none";
    });
});

// Fecha o menu mobile ao clicar fora dele (em qualquer área da página)
document.addEventListener('click', (event) => {
    const menu = document.getElementById("mobile");
    const menuButton = document.getElementById("menu-mobile");
    // Se o clique não foi no menu nem no botão, fecha o menu
    if (
        menu &&
        !menu.contains(event.target) &&
        (!menuButton || !menuButton.contains(event.target))
    ) {
        menu.style.display = "none";
    }
});