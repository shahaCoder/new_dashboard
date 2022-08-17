let registerForm = document.forms.register
// let name = document.querySelector('#name-inp')
// let surname = document.querySelector('#surname-inp')
// let email = document.querySelector('#email-inp')
// let password = document.querySelector('#pswrd')

registerForm.onsubmit = (event) => {
    event.preventDefault()

    let users = {}

    let fm = new FormData(registerForm)

    fm.forEach((value, key) => {
        users[key] = value
    })

    console.log(users);
     localStorage.setItem('users', JSON.stringify(users))
     window.location.href = '../index.html' 
    
}
let smth = JSON.parse(localStorage.getItem('users'))
if(smth == null){
    let splited = window.location.href.split('/')
    splited = splited[splited.length - 1]
    if(splited !== 'register.html'){
        window.location.href = 'register.html'
    }
} else{
    window.location.href = '../sign-in page/sign.html'
}
// localStorage.clear()

