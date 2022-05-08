const articles = [
    {
        title: 'Kotek poważny',
        img: './img/kotek_powazny.jpg',
    },
    {
        title: 'Kotek śpiący',
        img: './img/kotek_spiacy.jpg',
    },
    {
        title: 'Kotek uroczy',
        img: './img/kotek_uroczy.jpg',
    },

];

const h1 = document.querySelector('h1');
const image = document.querySelector('div.img');
let spans = [...document.querySelectorAll('span')];


let active = 0;

h1.textContent = articles[active].title;

const intervalIndex = setInterval(()=>{
    spans[active].classList.remove('active')
    active++
    

    if(active === articles.length){
        active = 0;
        
        // return clearInterval(intervalIndex)
    }
    spans[active].classList.add('active')
    h1.innerHTML = articles[active].title
    image.style.backgroundImage = `url(${articles[active].img})`

}, 2000);
