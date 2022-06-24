const screen = document.querySelector('#screen');

// Initialize button variables //
const numButtons = document.querySelectorAll('.numerical-btn');

function initNumericButtons() {
    numButtons.forEach(numButton => {
        numButton.addEventListener('click', () => {
            if (screen.dataset.toClear == 'true') {
                screen.textContent = 0;
                screen.dataset.toClear = 'false';
            };
            displayNewChar(numButton.dataset.numValue);
        });
    });
};

const clearBtn = document.querySelector('#clear-btn');
clearBtn.addEventListener('click', clearCalculator)
    

const plusBtn = document.querySelector('#plus-btn');
plusBtn.addEventListener('click', () => {
    if (screen.dataset.operation) calculateAnswer();
    screen.dataset.operation = 'plus';
    storeNumber();
    screen.dataset.toClear = 'true';
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

const equalsBtn = document.querySelector('#equals-btn');
equalsBtn.addEventListener('click', calculateAnswer);

function storeNumber() {
    screen.dataset.previous = screen.textContent;
};


// Screen functions //

function displayNewChar(newCharacter) {
    let currentText = screen.textContent;

    if (currentText == '0') currentText = ''; 

    // Check characters do not pass length of screen //
    if (currentText.length <= 10) {
        console.log(currentText.length);
        screen.textContent = `${currentText}${newCharacter}`;
    } else {
        alert('Maximum character length reached')
    };
};

function clearCalculator() {
    screen.textContent = 0;
    screen.dataset.previous = '';
    screen.dataset.operation = '';
};


// Mathematical functions //

function addNumbers() {
    console.log(`${screen.dataset.previous} ${screen.textContent}`)
    return parseInt(screen.dataset.previous) + parseInt(screen.textContent);
};

// function subtractNumbers() {};

// function multiplyNumbers() {};

// function divideNumbers() {};

function calculateAnswer() {
    let answer = 0;
    if (screen.dataset.operation == 'plus') {
        answer = addNumbers();
    };

    if (toString(answer).length > 10) {
        screen.textContent = 'TO LARGE!'
    } else {
        screen.textContent = answer;
        screen.dataset.previous = answer;
        screen.dataset.toClear = 'true'
    };
};

initNumericButtons();