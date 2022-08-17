// let users = [
//     {
//         id: Math.random(),
//         name: 'Ekaterina Tankova',
//         email: 'ekaterina.tankova@devias.io',
//         location: 'Parkersburg, West Virginia, USA',
//         Phone: '304-428-3097',
//         registrtionDate: '12/04/2019',
//     },
//     {
//         id: Math.random(),
//         name: 'Vladislav Mark',
//         email: 'vladmxl@gmail.com',
//         location: 'California, San-Diego, USA',
//         Phone: '324-731-3045',
//         registrtionDate: '22/07/2016',
//     },
//     {
//         id: Math.random(),
//         name: 'Alex Udod',
//         email: 'alex.udod@devias.io',
//         location: 'New York, Brooklyn, USA',
//         Phone: '542-388-2434',
//         registrtionDate: '9/02/2020',
//     },
//     {
//         id: Math.random(),
//         name: 'Nick Kingsman',
//         email: 'nickKng@devias.io',
//         location: 'Parkersburg, West Virginia, USA',
//         Phone: '250-221-3045',
//         registrtionDate: '1/11/2012',
//     },
//     {
//         id: Math.random(),
//         name: 'Bella Swon',
//         email: 'bella.swon@devias.io',
//         location: 'Washington, Forx, USA',
//         Phone: '123-456-7891',
//         registrtionDate: '1/01/2010',
//     },
//     {
//         id: Math.random(),
//         name: 'Edward Callin',
//         email: 'edwardCallin@devias.io',
//         location: 'Washington, Forx, USA',
//         Phone: '123-456-7891',
//         registrtionDate: '1/01/2010',
//     },
// ]


let url = 'http://localhost:3001'
const addForm = document.forms.customers
const customersBtn = document.querySelector('.cstmbtn')
const modalBg = document.querySelector('.modal-background')
const modal = document.querySelector('.modal-window')
let search = document.querySelector('#searching')
addForm.onsubmit = (e) => {
    e.preventDefault()

    let get = {}

    let fm = new FormData(addForm)

    fm.forEach((value, key)=> {
       get[key] = value
    })

    axios.post(url + '/users', get)
     .then(res => {
        if(res.status === 200 || res.status === 201){
            reload(res.data)
            console.log(res.data);
        }
     })
     closeModal()
      
}
let url2 = 'http://localhost:3001/users'
search.onkeyup = () => {
    axios.get(url + '/users')
    .then(res => {
        if(res.status === 200 || res.status === 201){
            let filtered = res.data.filter(i => {
                let title = i.name.toLowerCase()
                let value = search.value.toLowerCase().trim()
        
                if(title.includes(value)){
                    return i
                }
            })
            reload(filtered)
        }
    })

}


customersBtn.onclick = () => {
    openModal()
}

function getData() {
    axios.get(url + '/users')
     .then(res => {
        if(res.status === 200 || res.status === 201){
            reload(res.data)
        }
     })
}

getData()




let place = document.querySelector('.main-top-order-block')
function reload(array) {
    place.innerHTML = ''
    for(let item of array){
        place.innerHTML += `
        <div class="main-top-order-block">
        <div class="name-left">
            <div class="info">
                <img src="./img/Avatar.svg">
                <p>${item.name}</p>
            </div>
        </div>
        <div class="email-block">
            <p>${item.email}</p>
        </div>
        <div class="location-block">
            <p>${item.location}</p>
        </div>
        <div class="phone-block">
            <p>${item.Phone}</p>
        </div>
        <div class="registration-block">
            <p>11.01.2022</p>
        </div>
        </div>
        `
    }
}

const minus = document.querySelector('.minus')

minus.onclick = () => {
    closeModal()
}


function openModal() {
    modalBg.style.display = 'block'
    modal.style.display = 'block'
    setTimeout(() => {
        modalBg.style.opacity = '1'
        modal.style.opacity = '1'
        modal.style.transform = 'translate(-50%, -50%) scale(1)'
    }, 100);
}
function closeModal() {
    modalBg.style.opacity = '0'
    modal.style.opacity = '0'
    modal.style.transform = 'translate(-50%, -50%) scale(.1)'
    setTimeout(() => {
        modalBg.style.display = 'none'
        modal.style.display = 'none'
    }, 100);
}

const customer = document.querySelector('.cust')
const main = document.querySelector('.main-all')
const dashboard = document.querySelector('.dashboard-main')
const dash = document.querySelector('.dash')
const wrapper = document.querySelector('.wrapper')
const it = document.querySelector('.it')
const it2 = document.querySelector('.it2')
// PRODUCTS
const active = document.querySelector('.products-active')
const cont = document.querySelector('.container2')
const active2 = document.querySelector('.active')
customer.onclick = () => {
   dashboard.style.display = 'none'
   main.style.display = 'block'
   wrapper.style.height = 'auto'
   cont.style.display = 'none'
    active2.style.backgroundColor = '#111827'
   it.style.backgroundColor = '#1c2538' /*active*/
   it2.style.backgroundColor = '#111827'
   acc.style.display = 'none'
    account.style.backgroundColor = '#111827'
    settingsPage.style.display = 'none'
    st.style.backgroundColor = '#111827'
}

dash.onclick = () => {
    dashboard.style.display = 'block'
    main.style.display = 'none'
    wrapper.style.height = '200vh'
    it.style.backgroundColor = '#111827'
    cont.style.display = 'none'
    active2.style.backgroundColor = '#111827'
    it2.style.backgroundColor = '#1c2538' /*active*/
    acc.style.display = 'none'
    account.style.backgroundColor = '#111827'
    settingsPage.style.display = 'none'
    st.style.backgroundColor = '#111827'
}

active.onclick = () => {
    dashboard.style.display = 'none'
    main.style.display = 'none'
    cont.style.display = 'block'
    active2.style.backgroundColor = '#1c2538'
    it.style.backgroundColor = '#111827'
    it2.style.backgroundColor = '#111827'
    acc.style.display = 'none'
    account.style.backgroundColor = '#111827'
    settingsPage.style.display = 'none'
    st.style.backgroundColor = '#111827'
}

// account page
const acc = document.querySelector('.account-page')
const account = document.querySelector('.acc')

account.onclick = () => {
    dashboard.style.display = 'none'
    main.style.display = 'none'
    cont.style.display = 'none'
    acc.style.display = 'block'
    active2.style.backgroundColor = '#111827'
    it.style.backgroundColor = '#111827'
    it2.style.backgroundColor = '#111827'
    account.style.backgroundColor = '#1c2538'
    settingsPage.style.display = 'none'
    st.style.backgroundColor = '#111827'
}

// settings page

const settingsPage = document.querySelector('.settings-page')
const st = document.querySelector('.setting')

st.onclick = () => {
    dashboard.style.display = 'none'
    main.style.display = 'none'
    cont.style.display = 'none'
    acc.style.display = 'none'
    settingsPage.style.display = 'block'
    active2.style.backgroundColor = '#111827'
    it.style.backgroundColor = '#111827'
    it2.style.backgroundColor = '#111827'
    account.style.backgroundColor = '#111827'
    st.style.backgroundColor = '#1c2538'
    
}

// register and login

const reg = document.querySelector('.reg')

reg.onclick = () => {
    window.location.href = './registration-page/register.html'
}