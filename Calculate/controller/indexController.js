let display = document.querySelector('.elem__display');

let calculate = document.querySelector('.calculate');

const handler = new Calculate(display);


window.onload = function () {
    calculate.addEventListener('click', function (event) {
        let element = event.target;
        let classList = Array.from(element.classList);
        if (!classList.includes('elem__button')) {
            return;
        }
        let operationBtn = element.textContent;
        display.innerHTML = handler.operation(operationBtn);
    });
};


