let exampleForm = document.forms.example_form
let errorIcon = document.querySelectorAll('.icon')
let requiredInps = document.querySelectorAll('.required')

const success = document.querySelector('#Success')
const error = document.querySelector('#Error')

let inps = document.querySelectorAll('input')
inps.forEach((inp) => {
    inp.onkeyup = () => {
        let key = inp.name
        patterns[key]
        validate(patterns[key], inp)
    }
})

let patterns = {
    name: /^[a-z ,.'-]+$/i,
    surname: /^[a-z ,.'-]+$/i,
    email: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
    phone: /^998[012345789][0-9]{8}$/,
    mum: /^[a-z ,.'-]+$/i,
    pap: /^[a-z ,.'-]+$/i,
    age: /^\S[0-9]{0,2}$/,
    aboutYou: /^[a-z ,.'-]+$/i,
    js: /^[a-z ,.'-]+$/i,
    html: /^[a-z ,.'-]+$/i,
    css: /^[a-z ,.'-]+$/i,
    car: /^[a-z ,.'-]+$/,
}



function validate(regex, field) {
    if (regex.test(field.value)) {
        field.parentElement.classList.remove('invalid')
    } else {
        field.parentElement.classList.add('invalid')
    }
}


function onSubmit() {
    let user = {}
    let fm = new FormData(exampleForm)

    fm.forEach((value, key) => {
        user[key] = value
    })

    console.log(user);
}

error.innerHTML = `Error inputs:  ${0} / ${requiredInps.length} `
success.innerHTML = `Success inputs:  ${0} / ${requiredInps.length}`

exampleForm.onsubmit = (event) => {
    event.preventDefault()
    let isError = false
    let errCount = 0



    requiredInps.forEach((inp) => {
        inp.classList.remove('error')
        inp.nextElementSibling.nextElementSibling.classList.remove('error-icon-active')
        inp.nextElementSibling.innerHTML = 'Need to fill';
        inp.nextElementSibling.style.color = 'grey'
        inp.previousElementSibling.style.color = 'blue'
        if (inp.value.length === 0) {
            inp.parentElement.classList.add('invalid')
            isError = true
            inp.nextElementSibling.innerHTML = 'Need to fill field of ' + inp.name;
            errCount++
        } else {
            inp.parentElement.classList.remove('invalid')
        }

    })

    error.innerHTML = `Error inputs:   ${errCount} / ${requiredInps.length} `
    success.innerHTML = `Success inputs:   ${requiredInps.length - errCount} / ${requiredInps.length}`


    if (isError === true) {

    } else {
        onSubmit()
    }

}
