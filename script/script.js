var cardList = document.querySelectorAll('.card')

cardList.forEach(element => {
    element.addEventListener('click', ()=>{
        window.location.href = 'courses.html'
    })
});