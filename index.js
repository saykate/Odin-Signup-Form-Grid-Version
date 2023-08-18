const userPass1 = document.querySelector('#password')
const userPass2 = document.querySelector('#confirm_password')
const subButt = document.querySelector('.submit')
const inputs = document.querySelectorAll('input')


const checkPass = () => {
    if (userPass1.value === '' || userPass2.value === '') {
        userPass1.classList.add('error');
        userPass2.classList.add('error');
    } else if (userPass1.value !== userPass2.value) {
        userPass2.classList.add('error')
    } else {
        userPass1.classList.remove('error');
        userPass2.classList.remove('error');
    }
}

const checkFields = () => {
    inputs.forEach(input => {
        if (input.value === '') {
            input.classList.add('error')
        } else {
            input.classList.remove('error');
        }
    })
}

userPass1.addEventListener('input', checkPass);
userPass2.addEventListener('input', checkPass);
subButt.addEventListener('click', checkFields);