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
console.log(spans);

let active = 0;

h1.textContent = articles[active].title;

const intervalIndex = setInterval(()=>{
    // spans[active].classList.remove('active')
    active++
    

    if(active === articles.length){
        active = 0;
        
        // return clearInterval(intervalIndex)
    }
    // spans[active].classList.add('active')
    h1.innerHTML = articles[active].title
    image.style.backgroundImage = `url(${articles[active].img})`
    changeDot()

}, 2000);

const changeDot = ()=>{
    const index = spans.findIndex(span=>span.classList.contains('active'));
    spans[index].classList.remove('active');

    spans[active].classList.add('active')

}
