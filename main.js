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

const changeSlide = ()=>{
   
    active++    

    if(active === articles.length){
        active = 0;
        
    }
    
    h1.innerHTML = articles[active].title
    image.style.backgroundImage = `url(${articles[active].img})`
    changeDot()

}

const changeDot = ()=>{
    const index = spans.findIndex(span=>span.classList.contains('active')); 
    spans[index].classList.remove('active');

    spans[active].classList.add('active')

}

let intervalIndex = setInterval(changeSlide, 2000)


const keyChangeSlide = e =>{

    if(e.code === 'ArrowLeft' || e.code === 'ArrowRight'){
        clearInterval(intervalIndex)

        e.code === 'ArrowRight' ? active++ : active--

        if(active === articles.length){
                active = 0;
        }
        if(active < 0){
                active = articles.length-1;
        }   

        h1.innerHTML = articles[active].title
        image.style.backgroundImage = `url(${articles[active].img})`
        changeDot()
        intervalIndex = setInterval(changeSlide, 2000);
        
    }
}



window.addEventListener('keydown', keyChangeSlide)
