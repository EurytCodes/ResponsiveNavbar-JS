const nav = document.querySelector('.navbar');
const openBtn = document.querySelector('.bar');
const closeBtn = document.querySelector('.closeBtn');

openBtn.addEventListener('click', () => {
    nav.style.display = 'flex';
})

closeBtn.addEventListener('click', () => {
    nav.style.display = 'none'; 
})

/*----Show Nav When abaove 780*/
window.addEventListener('resize', () => {
    const screenWidth = window.innerWidth;
    if(screenWidth > 780){
        nav.style.display = 'flex';
    }else{
        nav.style.display = '';
    }
})

