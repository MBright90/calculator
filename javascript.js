const screen = document.querySelector('#screen');

// Initialize button variables //
const numButtons = document.querySelectorAll('.numerical-btn');
const opButtons = document.querySelectorAll('.operation-btn');

numButtons.forEach(numButton => {
    numButton.addEventListener('click', () => {
        if (screen.dataset.toClear == 'true') {
            screen.textContent = 0;
            screen.dataset.toClear = 'false';
        };
        displayNewChar(numButton.dataset.numValue);
    });
});

opButtons.forEach(opButton => {
    opButton.addEventListener('click', () => {
        if (screen.dataset.operation) calculateAnswer();
        screen.dataset.operation = opButton.id.split('-')[0];
        storeNumber();
    });
});

const clearBtn = document.querySelector('#clear-btn');
clearBtn.addEventListener('click', clearCalculator)

const equalsBtn = document.querySelector('#equals-btn');
equalsBtn.addEventListener('click', calculateAnswer);

function storeNumber() {
    screen.dataset.previous = screen.textContent;
    screen.dataset.toClear = 'true';
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
        screen.dataset.previous = '';
    } else {
        screen.textContent = answer;
        screen.dataset.previous = answer;
    };

    // Adding check for check next click.
    screen.dataset.operation = '';
    screen.dataset.toClear = 'true';
};

function clearCalculator() {
    screen.textContent = 0;
    screen.dataset.previous = '';
    screen.dataset.operation = '';
};


// Mathematical functions //

function addNumbers() {
    return parseInt(screen.dataset.previous) + parseInt(screen.textContent);
};

function subtractNumbers() {
    return parseInt(screen.dataset.previous) - parseInt(screen.textContent);
};

function multiplyNumbers() {
    return parseInt(screen.dataset.previous) * parseInt(screen.textContent);
};

function divideNumbers() {
    parseInt(screen.dataset.previous) / parseInt(screen.textContent);
};

function calculateAnswer() {
    let answer = 0;
    if (!screen.dataset.operation) {
        alert('Please select an operation.');
        return;
    } else if (screen.dataset.operation == 'plus') {
        answer = addNumbers();
    } else if (screen.dataset.operation == 'minus') {
        answer = subtractNumbers();
    } else if (screen.dataset.operation == 'multiply') {
        answer = multiplyNumbers();
    } else if (screen.dataset.operation == 'divide') {
        answer = divideNumbers();
    };
    displayAnswer(answer);
};

// Keyboard functionality

const allButtons = document.querySelectorAll('button');

window.addEventListener('keydown', e => {
    allButtons.forEach(button => {
        if (e.code == button.dataset.keycode) button.click(); 
    })
});


initNumericButtons();
initOperationButtons();