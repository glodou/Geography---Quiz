const questions=[

    {
        question:"What is the official capital city of Australia?",
        answers:["Sydney","Canberra","Melbourne"],
        correct:1

    },
    {
        question:"What is the largest desert in the world?",
        answers:["Sahara Desert", "Arabian Desert", "Antarctic Desert"],
        correct:2
    },
    {
        question:"Which country has the longest coastline in the world?",
        answers:["Canada","Russia","Australia"],
        correct:0
    }
];

let currentQuestion=0;


const questionE1=document.getElementById("question");
const answerE1=document.getElementById("answers");
const nextBtn=document.getElementById("nextBtn");
const restartBtn=document.getElementById("restartBtn");


function showQuestion() {

    const q=questions[currentQuestion];
    questionE1.innerHTML=q.question;
    answerE1.innerHTML="";

    q.answers.forEach((answer,index)=>{
        const btn=document.createElement("button");
        btn.innerText=answer;

        btn.addEventListener("click",() =>{
            selectAnswer(index)

        });

        answerE1.appendChild(btn);
    });
}

function selectAnswer(index) {

    const correct=questions[currentQuestion].correct;
    const buttons=answerE1.querySelectorAll("button");

    buttons.forEach((btn,i)=>{

        if(i===correct) {
            btn.style.backgroundColor="green";

        }else {
            btn.style.backgroundColor="red";
        }
    });
}

nextBtn.addEventListener("click",() =>{
    currentQuestion++;

    if(currentQuestion<questions.length){
        showQuestion();
    } else {
        showResult();
    }
});

function showResult() {
    questionE1.innerText=`Done!`;
    answerE1.innerHTML="";
    nextBtn.style.display="none";
    restartBtn.style.display="block";

}

restartBtn.addEventListener("click", ()=>{
    currentQuestion=0;
    score=0;

    nextBtn.style.display="block";
    restartBtn.style.display="none";

    showQuestion();
})




showQuestion();