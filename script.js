function show(option) {
    const input = document.querySelector('input');
    // input.placeholder = option;
    input.value = option;
    options.classList.toggle('active');
    arrowCheck();
}


const textBox = document.querySelector('.textBox');
const arrow = document.querySelector('.arrow');
const options = document.querySelector('.options');
textBox.onclick = () => {
    arrowCheck();
    options.classList.toggle('active');
}


function arrowCheck() {
    if(arrow.getAttribute('name') == 'chevron-down-outline')
    arrow.setAttribute('name', 'chevron-up-outline');
    else
    arrow.setAttribute('name', 'chevron-down-outline');
}