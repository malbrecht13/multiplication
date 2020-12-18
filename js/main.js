
const showFirstNum = () => {
    let firstNum = document.getElementById('first-num');
    let randomInt = Math.floor(Math.random() * 13);
    firstNum.textContent = randomInt;
}

const showSecondNum = () => {
    let secondNum = document.getElementById('second-num');
    let randomInt = Math.floor(Math.random() * 13);
    secondNum.textContent = randomInt;
}

const displayCorrectAns = () => {
    
    const userAnswer = document.getElementById('user-answer');
    userAnswer.addEventListener('keydown', (e) => {
        let firstNumBox = document.getElementById('first-num');
        let secondNumBox = document.getElementById('second-num');
        let firstNum = Number.parseInt(firstNumBox.textContent);
        let secondNum = Number.parseInt(secondNumBox.textContent);
        let answer = firstNum + secondNum;
        
        if (e.code === 'Enter') {
            console.log(userAnswer.value);
            console.log(answer);
            if (userAnswer.value == answer) {
                
                clearExplanation();
                displayCorrect();
                clearText();
            } else {
                displayIncorrect();
                clearText();
            }
        }
    })

}

const displayCorrect = () => {
    const answerBox = document.getElementById('answer');
    answerBox.style.visibility = 'visible';
    answerBox.textContent = "Correct!";
}

const displayIncorrect = () => {
    const answerBox = document.getElementById('answer');
    answerBox.style.visibility = 'visible';
    answerBox.textContent = "Incorrect!";
    const explanationBox = document.getElementById('correct-is');
    let firstNumBox = document.getElementById('first-num');
    let secondNumBox = document.getElementById('second-num');
    let firstNum = Number.parseInt(firstNumBox.textContent);
    let secondNum = Number.parseInt(secondNumBox.textContent);
    let answer = firstNum + secondNum;
    explanationBox.textContent = `The correct answer is ${answer}`;
}

const showNextQuestion = () => {
    let nextBtn = document.getElementById('next-button');
    nextBtn.addEventListener('click', (e) => {
        clearExplanation();
        showFirstNum();
        showSecondNum();
        clearText();
        clearAnswerBox();
    })
}

const clearText = () => {
    document.getElementById('user-answer').value = "";
}

const clearExplanation = () => {
    document.getElementById('correct-is').textContent = "";
    clearText();
}

const clearAnswerBox = () => {
    const answerBox = document.getElementById('answer');
    answerBox.style.visibility = "hidden";
}

const clickEnter = () => {
    const enterBtn = document.getElementById('enter-button');
    const userAnswer = document.getElementById('user-answer');
    enterBtn.addEventListener('click', (e) => {
        let firstNumBox = document.getElementById('first-num');
        let secondNumBox = document.getElementById('second-num');
        let firstNum = Number.parseInt(firstNumBox.textContent);
        let secondNum = Number.parseInt(secondNumBox.textContent);
        let answer = firstNum + secondNum;

        if (userAnswer.value === answer) {
                
            clearExplanation();
            displayCorrect();
            clearText();
        } else {
            displayIncorrect();
            clearText();
        }
    })
}

showFirstNum();
showSecondNum();
clickEnter();
showNextQuestion();
displayCorrectAns();


