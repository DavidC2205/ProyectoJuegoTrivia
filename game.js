const question = document.querySelector('#question');
const choices = Array.from(document.querySelectorAll('.choice-text'));
const progressText = document.querySelector('#progressText');
const scoreText = document.querySelector('#score');
const progressBarFull = document.querySelector('#progressBarFull');
var a;

let currentQuestion = {}
let acceptingAnswers = true
let score = 0
let questionCounter = 0
let availableQuestions = []
let leveCounter = 1

let questions = [
    {
        question: 'Cuanto suman  2 + 2?',
        choice1: '2',
        choice2: '4',
        choice3: '21',
        choice4: '17',
        answer: 2,
    },
    {
        question:
            "Cual es la capital de Colombia?",
        choice1: "Barranquilla",
        choice2: "Cartagena",
        choice3: "Cali",
        choice4: "Ninguna de las anteriores",
        answer: 4,
    },
    {
        question: "En que continente se encuentra ubicado el pais de Japon?",
        choice1: "Africa",
        choice2: "Asia",
        choice3: "Europa",
        choice4: "America",
        answer: 2,
    },
    {
        question: 'Capital de Bangladesh?',
        choice1: 'Daca',
        choice2: 'Paris',
        choice3: 'Calcuta',
        choice4: 'Dakar',
        answer: 1,
    },
    {
        question: "Capital de USA ?",
        choice1: "Texas",
        choice2: "washington dc",
        choice3: "California",
        choice4: "Miami",
        answer: 2,
    },
    {
        question: "Donde se encuentra ubicada la estatua de la libertad?",
        choice1: "USA",
        choice2: "Francia",
        choice3: "España",
        choice4: "Portugal",
        answer: 1,
    },
    {
        question: 'Pais de latino-America donde se habla portugues ',
        choice1: 'Chile',
        choice2: 'Argentina',
        choice3: 'Brasil',
        choice4: 'Colombia',
        answer: 3,
    },
    {
        question: "En que ciudad se encuentra el edificio mas alto?",
        choice1: "Dubai",
        choice2: "New York",
        choice3: "Shanghai",
        choice4: "Barranquilla",
        answer: 1,
    },
    {
        question: "Capital de Francia ?",
        choice1: "Paris",
        choice2: "Estocolmo",
        choice3: "Helsinki",
        choice4: "Oslo",
        answer: 1,
    },
    {
        question: 'Capital de España?',
        choice1: 'Barcelona',
        choice2: 'Madrid',
        choice3: 'Antofagasta',
        choice4: 'Sevilla',
        answer: 2,
    },
    {
        question:
                "En que pais se encuentra la ciudad prohibida?",
        choice1: "China",
        choice2: "Japon",
        choice3: "Corea",
        choice4: "India",
        answer: 1,
    },
    {
        question: "Que pais se encuentra ubicado en Europa",
        choice1: "Italia",
        choice2: "Israel",
        choice3: "Iran",
        choice4: "Mozambique",
        answer: 1,
    },
    {
        question: 'What is 2 + 2?',
        choice1: '2',
        choice2: '4',
        choice3: '21',
        choice4: '17',
        answer: 2,
    },
    {
        question:
            "Que pais se encuentra en Centro America?",
        choice1: "Mexico",
        choice2: "Usa",
        choice3: "Colombia",
        choice4: "Venezuela",
        answer: 1,
    },
    {
        question: "Cual de los siguienes es llamado el pais Cafetero?",
        choice1: "Peru",
        choice2: "Bolivia",
        choice3: "Venezuela",
        choice4: "Colombia",
        answer: 4,
    },
    {
        question: 'Cuanto suman 3 + 2?',
        choice1: '5',
        choice2: '4',
        choice3: '21',
        choice4: '17',
        answer: 1,
    },
    {
        question:
            "Cual es la capital de Rusia?",
        choice1: "Volgogrado",
        choice2: "Omsk",
        choice3: "Shanghai",
        choice4: "Moscú",
        answer: 4,
    },
    {
        question: "Capital de portugal?",
        choice1: "Oporto",
        choice2: "Lisboa",
        choice3: "Braga",
        choice4: "Aveiro",
        answer: 2,
    },
    {
        question: 'Cuanto suman  4 + 2?',
        choice1: '2',
        choice2: '4',
        choice3: '6',
        choice4: '1',
        answer: 3,
    },
    {
        question: 'Cuanto suman  90 + 2?',
        choice1: '92',
        choice2: '45',
        choice3: '61',
        choice4: '15',
        answer: 1
    },
    { 
        question: 'Cuanto suman 34 + 2?',
    choice1: '2',
    choice2: '4',
    choice3: '36',
    choice4: '1',
    answer: 3
    },
    {
        question: 'Cuanto es  2 - 2?',
        choice1: '2',
        choice2: '4',
        choice3: '0',
        choice4: '17',
        answer: 3,
    },
    {
        question: 'What is 4 / 0?',
        choice1: '2',
        choice2: '4',
        choice3: '6',
        choice4: 'No se puede dividor entre 0',
        answer: 4,
    },
    {
        question: 'cuanto suman 4 + 2?',
        choice1: '2',
        choice2: '4',
        choice3: '6',
        choice4: '1',
        answer: 3
    },
    {
        question: 'cuanto suman 4 + 23?',
        choice1: '27',
        choice2: '4',
        choice3: '6',
        choice4: '1',
        answer: 1
    }
]

const SCORE_POINTS = 100
const MAX_QUESTIONS = 25

startGame = () => {
    questionCounter = 0
    score = 0
    availableQuestions = [...questions]
    getNewQuestion()
}

getNewQuestion = () => {
    if(availableQuestions.length === 0 || questionCounter > MAX_QUESTIONS) {
        localStorage.setItem('mostRecentScore', score)

        return window.location.assign('/end.html')
    }

    questionCounter++
    a++
    progressText.innerText = `Pregunta ${questionCounter} de ${MAX_QUESTIONS}`
    progressBarFull.style.width = `${(questionCounter/MAX_QUESTIONS) * 100}%`
    
    const questionsIndex = Math.floor(Math.random() * availableQuestions.length)
    currentQuestion = availableQuestions[questionsIndex]
    question.innerText = currentQuestion.question

    choices.forEach(choice => {
        const number = choice.dataset['number']
        choice.innerText = currentQuestion['choice' + number]
    })

    availableQuestions.splice(questionsIndex, 1)

    acceptingAnswers = true
}

choices.forEach(choice => {
    choice.addEventListener('click', e => {
        if(!acceptingAnswers) return

        acceptingAnswers = false
        const selectedChoice = e.target
        const selectedAnswer = selectedChoice.dataset['number']

        let classToApply = selectedAnswer == currentQuestion.answer ? 'correct' : 'incorrect'

        if(classToApply === 'correct') {
            incrementScore(SCORE_POINTS)
        }

        selectedChoice.parentElement.classList.add(classToApply)

        setTimeout(() => {
            selectedChoice.parentElement.classList.remove(classToApply)
            getNewQuestion()

        }, 1000)
    })
})

incrementScore = num => {
    score +=num
    scoreText.innerText = score
}

incrementLevel = a =>{
if (a > 4){
    leveCounter++
    a == 0
}

}
startGame()
