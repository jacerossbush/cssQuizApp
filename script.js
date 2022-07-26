const questionsQuiz = [
    {
        question: 'Which of the following is not a real ecommerce platform?',
        A: 'Shopify',
        B: 'WooCommerce',
        C: 'ShopCommerce',
        D: 'BigCommerce',
        correctAnswer: 'c'
    },
    {
        question: 'If Shopify is so good, why are Shopify developers necessary?',
        A: 'To save time on things like store setups and migrations',
        B: 'to extend the limited design options and functionalities of themes with custom code',
        C: 'To provide support with a deep understanding of how the platform works and what its limitations are',
        D: 'All the above',
        correctAnswer: 'd' 
    },
    {
        question: 'Which of the following is true about Shopify Developers?',
        A: 'They are paid extremely well',
        B: 'There is a high demand for them',
        C: 'They need to know web development, the platform itself, and the liquid template language',
        D: 'All the above',
        correctAnswer: 'd'
    }
];

const quiz = document.getElementById('quiz-container');
const answerEls = document.querySelectorAll('.answer');
const questionEl = document.getElementById('question');
const aText = document.getElementById("a_text")
const bText = document.getElementById('b_text');
const cText = document.getElementById('c_text');
const dText = document.getElementById('d_text');
const submitBtn = document.getElementById('submit');
const questionCounter = document.getElementById('question-counter');

let currentQuiz = 0;
let score = 0;
console.log(questionCounter)
loadQuiz();
function loadQuiz() {
    deselectAnswers();

    const currentQuizData = questionsQuiz[currentQuiz];
    questionCounter.innerText = `Question ${currentQuiz + 1} of ${questionsQuiz.length}`
    questionEl.innerText = currentQuizData.question;
    aText.innerText = currentQuizData.A;
    bText.innerText = currentQuizData.B;
    cText.innerText = currentQuizData.C;
    dText.innerText = currentQuizData.D;


}

function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false)
}

function getSelected () {
    let answer = "";
    answerEls.forEach(answerEl => {
        if (answerEl.checked) {
            answer = answerEl.id
        }
    })
    return answer;
}

submitBtn.addEventListener('click', function() {
    const answer = getSelected();
    if (answer) {
        if (answer === questionsQuiz[currentQuiz].correctAnswer) {
            score++;
        }
        currentQuiz++;
        
        if (currentQuiz < questionsQuiz.length) {
            loadQuiz();
        } else {
            quiz.innerHTML = `<h2>You answered ${score}/${questionsQuiz.length} correctly</h2>
            <button onclick="location.reload()">Try Again</button>`
        }
    }
})