const data =[
	{
	id:1,
	question: "What is the scientific name of a butterfly?",
	answers: [
		{ answer:"Apis",correctIndex: false},
		{ answer:"Coleoptera",correctIndex: false},
		{ answer:"Formicidae",correctIndex: false},
		{ answer:"Rhopalocera",correctIndex: true}
	],
	
	},
	{
	id:2,
	question: "How hot is the surface of the sun?",
	answers: [
		{ answer:"1,233 K",correctIndex: false},
		{ answer:"5,778 K",correctIndex: true},
		{ answer:"12,130 K",correctIndex: false},
		{ answer:"101,300 K",correctIndex: false}
	],
	},
	{
	id:3,
	question: "Who are the actors in The Internship?",
	answers: [
		{ answer:"Ben Stiller, Jonah Hill",correctIndex: false},
		{ answer:"Courteney Cox, Matt LeBlanc",correctIndex: false},
		{ answer:"Kaley Cuoco, Jim Parsons",correctIndex: false},
		{ answer:"Vince Vaughn, Owen Wilson",correctIndex: true}
	],
	},
	{
	id:4,
	question: "What is the capital of Spain?",
	answers: [
		{ answer:"Berlin",correctIndex: false},
		{ answer:"Buenos Aires",correctIndex: false },
		{ answer:"Madrid",correctIndex: true},
	{ answer:"San Juan",correctIndex: false}
	],
	},
	{
	id:5,
	question: "What are the school colors of the University of Texas at Austin?",
	answers: [
		{ answer:"Black, Red",correctIndex: false},
		{ answer:"Blue, Orange",correctIndex: false},
		{ answer:"White, Burnt Orange",correctIndex: true},
	{ answer:"White, Old gold, Gold",correctIndex: false}
	],
	},
	{
	id:6,
	question: "What is 70 degrees Fahrenheit in Celsius?",
	answers: [
		{ answer:"18.8889",correctIndex: false},
		{ answer:"20",correctIndex: false},
		{ answer:"21.1111",correctIndex: true},
		{ answer:"158",correctIndex: false}
	],
	},
	{
	id:7,
	question: "When was Mahatma Gandhi born?",
	answers: [
		{ answer:"October 2, 1869",correctIndex: true},
		{ answer:"December 15, 1872",correctIndex: false},
		{ answer:"July 18, 1918",correctIndex: false},
		{ answer:"January 15, 1929",correctIndex: false}
	],
	},
	{
	id:8,
	question: "How far is the moon from Earth?",
	answers: [
		{ answer:"7,918 miles (12,742 km)",correctIndex: false},
	{ answer:"86,881 miles (139,822 km)",correctIndex: false},
	{ answer:"238,400 miles (384,400 km)",correctIndex: true},
	{ answer:"35,980,000 miles (57,910,000 km)",correctIndex: false}
	],
	},
	{
	id:9,
	question: "What is 65 times 52?",
	answers: [
		{ answer:"117",correctIndex: false},
		{ answer:"3120",correctIndex: true},
		{ answer:"3380",correctIndex: false},
		{ answer:"3520",correctIndex: false}
	],
	
	},
	{
	id:10,
	question: "How tall is Mount Everest?",
	answers: [
		{ answer:"6,683 ft (2,037 m)",correctIndex: false},
		{ answer:"7,918 ft (2,413 m)",correctIndex: false},
		{ answer:"19,341 ft (5,895 m)",correctIndex: false},
		{ answer:"29,029 ft (8,847 m)",correctIndex: true}
	],
	
	},
	{
	id:11,
	question: "When did The Avengers come out?",
	answers: [
	{ answer:"May 2, 2008",correctIndex: false},
	{ answer:"May 4, 2012",correctIndex: true},
	{ answer:"May 3, 2013",correctIndex: false},
	{ answer:"April 4, 2014",correctIndex: false}
	],
	
	},
	{
	id:12,
	question: "What is 48,879 in hexidecimal?",
	answers: [
	{ answer:"0x18C1", correctIndex: false},
	{ answer:"0xBEEF", correctIndex: true},
	{ answer:"0xDEAD",correctIndex: false},
	{ answer:"0x12D591",correctIndex: false}
	],
	
	}
	]
	



const gameScreen = document.querySelector(".game");
const resultScreen = document.querySelector(".result");
const question = document.querySelector(".question");
const answersContainer = document.querySelector(".answers");
const submit = document.querySelector(".submit");
const play = document.querySelector(".play");

let qIndex = 0;
let correctCount = 0;
let wrongCount = 0;
let total = 0;
let selectedAnswers;


const playAgain =()=>{
	 qIndex = 0;
 correctCount = 0;
 wrongCount = 0;
 total = 0;
 showQuestion(qIndex);
}
play.addEventListener("click",()=>{
	resultScreen.style.display ="none";
	gameScreen.style.display ="block";
	playAgain()
})
const showResult = ()=>{
	resultScreen.style.display ="block"
	gameScreen.style.display ="none"

	resultScreen.querySelector(".correct").textContent =`Correct answers :${correctCount}`

	resultScreen.querySelector(".wrong").textContent =`Wrong answers :${wrongCount}`

	resultScreen.querySelector(".scores").textContent =`Scores :${(correctCount-wrongCount)*10}`

}

const showQuestion = (qNumber) =>{
	if(qIndex === data.length) return showResult()
	selectedAnswers = null ;
	question.textContent = data[qNumber].question
	answersContainer.innerHTML = data[qNumber].answers.map((item,index)=>
		`
		<div class="answer">
						<input type="radio" name="answer" id=${index} value=${item.correctIndex}>
						<label for=${index}>${item.answer}</label>
					</div>
		`).join("")
		selectAnswers();
}


const selectAnswers =() =>{
	answersContainer.querySelectorAll("input").forEach(ele=>{
		ele.addEventListener("click",(e)=>{
			selectedAnswers=e.target.value;
		});
	});
};

const submitAnswer = ()=>{
	
	submit.addEventListener("click", ()=>{
			if(selectedAnswers!== null){
			selectedAnswers ==="true" ? correctCount++ :wrongCount++
			qIndex++
			showQuestion(qIndex)
		}else alert("Select an answer")
		})
}

showQuestion(qIndex)
submitAnswer();














































