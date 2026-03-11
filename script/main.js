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