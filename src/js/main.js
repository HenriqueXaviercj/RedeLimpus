//------------------------
//---- Header Scripts ----
//------------------------

const menuBtn = document.querySelector(".header__btnMenu");
const nav = document.querySelector(".nav")

//Liga e desliga o menu de navegação
menuBtn.addEventListener('click', () => {
    nav.classList.toggle("active");
});

//quando se aperta fora do menu de navegação ele fecha.
document.addEventListener('click', (event) => {
    if(!nav.contains(event.target) && !menuBtn.contains(event.target)){
        nav.classList.remove("active");
    }
});

//Quando clica para selecionar uma opção vai fechar o menu
nav.addEventListener('click', () => {
    nav.classList.remove("active");
});

//------------------------
//---- Marquee Scripts ----
//------------------------

/**
 * Ajusta o conteúdo do marquee para que ele seja longo o suficiente para preencher a tela e criar um efeito de rolagem contínua.
 * Ele duplica o conteúdo do marquee até que a largura do conteúdo seja pelo menos o dobro da largura da janela, garantindo que haja material suficiente para a animação de rolagem.
 */
function adjustMarquee() {
    const track = document.querySelector('.marquee__track');
    const content = track.innerHTML;

    track.innerHTML = content; // reset

    while (track.scrollWidth < window.innerWidth * 2) {
        track.innerHTML += content;
    }
}
window.addEventListener('load', adjustMarquee);
window.addEventListener('resize', adjustMarquee);