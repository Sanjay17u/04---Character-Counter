const textarea = document.querySelector('textarea')
const counter = document.querySelector('.span-Two')

function count () {
    const txtvalue = textarea.value
    const txtlength = txtvalue.length
    counter.textContent = txtlength
}

textarea.addEventListener('input', count)

count()