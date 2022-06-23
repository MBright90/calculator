// Initialize button variables //
const numButtons = document.querySelectorAll('.numerical-btn');

function initNumericButtons() {
    numButtons.forEach(numButton => {
        numButton.addEventListener('click', () => {
            displayNewChar(numButton.dataset.numvalue);
        });
    });
};

const clearBtn = document.querySelector('#clear-btn');
clearBtn.addEventListener('click', clearScreen)
    

const plusBtn = document.querySelector('#plus-btn');
plusBtn.addEventListener('click', () => {
    console.log('plus');
});

const minusBtn = document.querySelector('#minus-btn');
minusBtn.addEventListener('click', () => {
    console.log('minus');
});

const multiplyBtn = document.querySelector('#multiply-btn');
multiplyBtn.addEventListener('click', () => {
    console.log('multiply');
});

const divideBtn = document.querySelector('#divide-btn');
divideBtn.addEventListener('click', () => {
    console.log('divide');
});


// Screen functions //

function displayNewChar(newCharacter) {
    const screen = document.querySelector('#screen');
    let currentText = screen.textContent;

    if (currentText == '0') currentText = ''; 

    // Check characters do not pass length of screen //
    if (currentText.length <= 10) {
        screen.textContent = `${currentText}${newCharacter}`;
    } else {
        alert('Maximum character length reached')
    };
};

function clearCalculator() {
    const screen = document.querySelector('#screen');
    screen.textContent = '0';
    screen.dataset.previous = '';
};

initNumericButtons();