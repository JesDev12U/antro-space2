const nav = document.querySelector("#nav");
const abrir = document.querySelector("#abrir");
const cerrar = document.querySelector("#cerrar");

// Función para bloquear el scroll
function bloquearScroll(event) {
    event.preventDefault();
    event.stopPropagation();
}
  
// Agregar evento de clic a cada elemento del menú
const elementosMenu = document.querySelectorAll(".nav-links a");

elementosMenu.forEach(elemento => {
    elemento.addEventListener("click", () => {
        nav.classList.remove("visible");
        window.removeEventListener('wheel', bloquearScroll);
        window.removeEventListener('touchmove', bloquearScroll);
    });
});


function abrirMenuTransicion(){
    const windowHeight = window.innerHeight;
    const posicionY = window.scrollY; // Posición vertical
    if(posicionY >= 0 && posicionY <= 350){
        // Calcula la posición en porcentaje (ejemplo: 50%)
        const scrollPercentage = 60;
            
        // Calcula la posición en función del tamaño de la ventana
        
        const scrollPosition = (scrollPercentage / 100) * windowHeight;

        // Realiza el desplazamiento con transición
        window.scrollTo({
            top: scrollPosition,
            behavior: "smooth"
        });
    }
}

abrir.addEventListener("touchstart", ()=>{
    nav.classList.add("visible");
    abrirMenuTransicion();
    // Agregar un listener para el evento 'touchmove' (deslizar en pantallas táctiles)
    window.addEventListener('touchmove', bloquearScroll, { passive: false });
})

abrir.addEventListener("click", ()=>{
    nav.classList.add("visible");
    abrirMenuTransicion();
    window.addEventListener('wheel', bloquearScroll, { passive: false });
})

cerrar.addEventListener("touchstart", ()=>{
    nav.classList.remove("visible");
    // Eliminar los listeners para el evento 'touchmove' (deslizar en pantallas táctiles)
    window.removeEventListener('touchmove', bloquearScroll);
})

cerrar.addEventListener("click", ()=>{
    nav.classList.remove("visible");
    // Eliminar los listeners para el evento 'wheel' (rueda del ratón)
    window.removeEventListener('wheel', bloquearScroll);
})
