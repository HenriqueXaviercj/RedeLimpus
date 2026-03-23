//------------------------
//---- Header Scripts ----
//------------------------

const menuBtn = document.querySelector("#btnMenu");
const nav = document.querySelector("#nav")

//Liga e desliga o menu de navegação
menuBtn.addEventListener('click', () => {
    nav.classList.toggle("active");
});

//quando se aperta fora do menu de navegação ele fecha.
document.addEventListener('click', (event) => {
    if(!nav.contains(event.target) && !menuBtn.contains(event.target)){
        console.log('alou')
        nav.classList.remove("active");
    }
    console.log('ola');
});

//Quando clica para selecionar uma opção vai fechar o menu
nav.addEventListener('click', () => {
    nav.classList.remove("active");
});

const track = document.querySelector('#track');
//Ajusta a quantidade certa de texto para manter o marquee com a sensação de loop infinito
while (track.scrollWidth < window.innerWidth * 2) {
  track.innerHTML += track.innerHTML;
}