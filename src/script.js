const buttons = document.querySelectorAll('button')
const display = document.querySelector('#display')
for (const btn of buttons) {
    btn.addEventListener('click', () => {
        if (btn.innerText !== '=' && btn.innerText !== 'C' && btn.innerText !== '<<' && btn.innerText !== '%' && btn.innerText !== 'π') {
            display.value += btn.innerText
        }
        else if(btn.innerText === 'C'){
            display.value = ''           
        }
        else if(btn.innerText === '%'){
            display.value = eval(display.value)/100
        }
        else if (btn.innerText === 'π') {
            display.value += '3.141592653589'
        }
        else if (btn.innerText === '<<') {
            display.value = display.value.substr(0,display.value.length-1)
        }
        else {
            display.value = eval(display.value)
        }
    })
}


