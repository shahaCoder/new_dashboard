let form = document.forms.sign
let email = document.querySelector('#eml')
let pswrd = document.querySelector('#pswrd')
let modalBg = document.querySelector('.modal-bg')
let modal = document.querySelector('.modal')
const modalBtn = document.querySelector('.modal-btn')
const signLink = document.querySelector('.sign-link')
form.onsubmit = (event) => {
    event.preventDefault()

    const user = JSON.parse(localStorage.getItem('users'))

    if(email.value === user.email && pswrd.value === user.password){
                    window.location.href = '../index.html'
    } else{
        openModal()
    }
}

function openModal() {
    modalBg.style.display = 'block'
    modal.style.display = 'block'

    setTimeout(() => {
        modalBg.style.opacity = '1'
        modal.style.transform = ('translate(-50%, -50%) scale(1)')
        modal.style.opacity = '1'
    }, 100);
}
function closeModal() {
    modalBg.style.opacity = '0'
    modal.style.transform = ('translate(-50%, -50%) scale(.1)')
    modal.style.opacity = '0'
    
    setTimeout(() => {
        modalBg.style.display = 'none'
        modal.style.display = 'none'
    }, 500);
}
modalBtn.onclick = () => {
    closeModal()
    email.value = ''
    pswrd.value = ''
}


// localStorage.clear()