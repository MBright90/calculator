const screen = document.querySelector('#screen');

let previousNum = '';
let currentOperation = '';
let toClear = false;

// Initialize button variables //
const numButtons = document.querySelectorAll('.numerical-btn');
const opButtons = document.querySelectorAll('.operation-btn');

numButtons.forEach(numButton => {
    numButton.addEventListener('click', () => {
        if (toClear == true) {
            screen.textContent = 0;
            toClear = false;
        };
        displayNewChar(numButton.dataset.numValue);
    });
});

opButtons.forEach(opButton => {
    opButton.addEventListener('click', () => {
        if (currentOperation) return;
        currentOperation = opButton.id.split('-')[0];
        storeNumber();
    });
});

const clearBtn = document.querySelector('#clear-btn');
clearBtn.addEventListener('click', clearCalculator)

const equalsBtn = document.querySelector('#equals-btn');
equalsBtn.addEventListener('click', calculateAnswer);

function storeNumber() {
    previousNum = screen.textContent;
    toClear = true;
};


// Screen functions //

function displayNewChar(newCharacter) {
    let currentText = screen.textContent;

    if (currentText == '0') currentText = ''; 

    // Check characters do not pass length of screen //
    if (currentText.length <= 10) {
        screen.textContent = `${currentText}${newCharacter}`;
    } else {
        alert('Maximum character length reached')
    };
};

function displayAnswer(answer) {
    if (answer.toString().length > 10) {
        screen.textContent = 'ERROR'
        previousNum = '';
    } else {
        screen.textContent = answer;
        previousNum = answer;
    };

    // Adding check for check next click.
    currentOperation = '';
    toClear = true;
};

function clearCalculator() {
    screen.textContent = 0;
    previousNum = '';
    currentOperation = '';
};


// Mathematical functions //

function addNumbers() {
    return parseInt(previousNum) + parseInt(screen.textContent);
};

function subtractNumbers() {
    return parseInt(previousNum) - parseInt(screen.textContent);
};

function multiplyNumbers() {
    return parseInt(previousNum) * parseInt(screen.textContent);
};

function divideNumbers() {
    if (screen.textContent == 0) return 'ERROR';
    return parseInt(previousNum) / parseInt(screen.textContent);
};

function calculateAnswer() {
    let answer = 0;
    if (!currentOperation) {
        alert('Please select an operation.');
        return;
    } else if (currentOperation == 'plus') {
        answer = addNumbers();
    } else if (currentOperation == 'minus') {
        answer = subtractNumbers();
    } else if (currentOperation == 'multiply') {
        answer = multiplyNumbers();
    } else if (currentOperation == 'divide') {
        answer = divideNumbers();
    };
    displayAnswer(answer);
};

// Keyboard functionality

const allButtons = document.querySelectorAll('button');
allButtons.forEach(key => key.addEventListener('transitionend', removeTransition));

window.addEventListener('keydown', e => {
    allButtons.forEach(button => {
        if (e.code == button.dataset.keycode) {
            button.click();
            button.classList.add('press');
        };
    });
});

function removeTransition(e) {
    if (e.propertyName != 'transform') return;
    this.classList.remove('press');
};