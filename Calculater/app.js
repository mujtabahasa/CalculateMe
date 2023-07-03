let string = "";
let buttons = document.querySelectorAll(".button");

Array.from(buttons).forEach((button) => {
    button.addEventListener('click', (e) => {
        if (e.target.innerHTML === '=') {
            string = eval(string);
            document.querySelector('input').value = string;
        } else if (e.target.innerHTML == 'C') {
            string = ''
            document.querySelector('input').value = string;
        }

        else {
            string += e.target.innerHTML;
            document.querySelector('input').value = string;
        }
    });
});

// let signButton = document.getElementById('btn');

// for(i = 0; i < signButton.length; i++){
//     signButton[i].style.background = "gray"
// }

let signButtons = document.querySelectorAll('#btn');

for (let i = 0; i < signButtons.length; i++) {
    signButtons[i].style.background = "gray";
}

window.addEventListener('load', function() {
    var box = document.querySelector('.box');
    box.classList.add('loaded');
});

