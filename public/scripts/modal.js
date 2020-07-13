const modalOverlay = document.querySelector('.modal-overlay')
const cards = document.querySelectorAll('.card')

for (card of cards) {
    const cardSrc = card.querySelector('img').src
    const cardH3 = card.querySelector('h3').textContent
    const cardH4 = card.querySelector('h4').textContent

    card.addEventListener('click', function() {
        modalOverlay.classList.add('active')
        modalOverlay.querySelector('img').src = cardSrc
        modalOverlay.querySelector('h3').textContent = cardH3
        modalOverlay.querySelector('h4').innerText = cardH4
    })
}

document.querySelector('.close-modal').addEventListener('click', function(){
    modalOverlay.classList.remove('active')
    modalOverlay.querySelector('img').src = ''
    modalOverlay.querySelector('h3').textContent = ''
    modalOverlay.querySelector('h4').innerText = ''
})
