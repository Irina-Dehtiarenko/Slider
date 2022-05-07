const articles = [
    {
        title: 'Kotek poważny',
        img: 'https://cdn.pixabay.com/photo/2017/11/09/21/41/cat-2934720_960_720.jpg',
    },
    {
        title: 'Kotek śpiący',
        img: 'https://cdn.pixabay.com/photo/2016/12/30/17/27/cat-1941089_960_720.jpg',
    },
    {
        title: 'Kotek uroczy',
        img: 'https://cdn.pixabay.com/photo/2016/03/28/10/05/kitten-1285341_960_720.jpg',
    },

];

const h1 = document.querySelector('h1');
const image = document.querySelector('img');

let index = 0;


const intervalIndex = setInterval(()=>{
    if(index >= articles.length){
        index = 0;
        // return clearInterval(intervalIndex)
    }

    h1.innerHTML = articles[index].title
    image.src = articles[index].img
    index++

}, 2000);
