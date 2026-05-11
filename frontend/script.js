let currentField = "";
let currentIndex = 0;
let score = 0;
let timer;
let timeLeft = 30;
let selectedQuestions = [];

/* ================= QUESTIONS ================= */

const questions = {

Python:[
"What is Python?",
"What is list in Python?",
"What is tuple in Python?",
"What is dictionary?",
"What is set?",
"What is lambda function?",
"What is inheritance?",
"What is polymorphism?",
"What is encapsulation?",
"What is exception handling?",
"What is slicing?",
"What is loop?",
"What is module?",
"What is package?",
"What is PIP?",
"What is generator?",
"What is iterator?",
"What is class?",
"What is object?",
"What is indentation?"
],

Java:[
"What is Java?",
"What is JVM?",
"What is JDK?",
"What is JRE?",
"What is constructor?",
"What is inheritance?",
"What is polymorphism?",
"What is abstraction?",
"What is encapsulation?",
"What is interface?",
"What is thread?",
"What is exception handling?",
"What is ArrayList?",
"What is HashMap?",
"What is method overloading?",
"What is method overriding?",
"What is static keyword?",
"What is final keyword?",
"What is package?",
"What is class?"
],

SQL:[
"What is SQL?",
"What is primary key?",
"What is foreign key?",
"What is JOIN?",
"What is LEFT JOIN?",
"What is RIGHT JOIN?",
"What is normalization?",
"What is index?",
"What is view?",
"What is trigger?",
"What is stored procedure?",
"What is subquery?",
"What is GROUP BY?",
"What is HAVING?",
"What is WHERE clause?",
"What is DELETE?",
"What is UPDATE?",
"What is INSERT?",
"What is schema?",
"What is ACID property?"
],

HTML:[
"What is HTML?",
"What is tag?",
"What is attribute?",
"What is form tag?",
"What is div?",
"What is span?",
"What is semantic HTML?",
"What is iframe?",
"What is table tag?",
"What is list tag?",
"What is meta tag?",
"What is input tag?",
"What is hyperlink?",
"What is image tag?",
"What is audio tag?",
"What is video tag?",
"What is placeholder?",
"What is label tag?",
"What is button tag?",
"What is doctype?"
],

CSS:[
"What is CSS?",
"What is selector?",
"What is class selector?",
"What is id selector?",
"What is flexbox?",
"What is grid?",
"What is padding?",
"What is margin?",
"What is border?",
"What is responsive design?",
"What is media query?",
"What is z-index?",
"What is position absolute?",
"What is position relative?",
"What is hover effect?",
"What is animation?",
"What is transition?",
"What is box-shadow?",
"What is opacity?",
"What is display none?"
],

JavaScript:[
"What is JavaScript?",
"What is variable?",
"What is let keyword?",
"What is const keyword?",
"What is function?",
"What is arrow function?",
"What is DOM?",
"What is event listener?",
"What is array?",
"What is object?",
"What is loop?",
"What is if condition?",
"What is promise?",
"What is async await?",
"What is JSON?",
"What is localStorage?",
"What is fetch API?",
"What is callback?",
"What is null?",
"What is undefined?"
],

React:[
"What is React?",
"What is component?",
"What is JSX?",
"What is props?",
"What is state?",
"What is useState?",
"What is useEffect?",
"What is virtual DOM?",
"What is hook?",
"What is event handling?",
"What is conditional rendering?",
"What is list rendering?",
"What is key in React?",
"What is routing?",
"What is React Router?",
"What is controlled component?",
"What is form handling?",
"What is lifecycle?",
"What is context API?",
"What is Redux?"
],

Node:[
"What is Node.js?",
"What is npm?",
"What is package.json?",
"What is Express.js?",
"What is middleware?",
"What is API?",
"What is REST API?",
"What is routing?",
"What is request object?",
"What is response object?",
"What is callback?",
"What is async function?",
"What is JWT?",
"What is authentication?",
"What is authorization?",
"What is CORS?",
"What is dotenv?",
"What is file system module?",
"What is event loop?",
"What is server?"
],

Flask:[
"What is Flask?",
"What is route in Flask?",
"What is app.py?",
"What is decorator?",
"What is jsonify?",
"What is request method?",
"What is GET method?",
"What is POST method?",
"What is template?",
"What is Jinja?",
"What is debug mode?",
"What is Flask API?",
"What is session?",
"What is redirect?",
"What is url_for?",
"What is static folder?",
"What is virtual environment?",
"What is pip install flask?",
"What is CORS?",
"What is blueprint?"
],

MySQL:[
"What is MySQL?",
"What is database?",
"What is table?",
"What is row?",
"What is column?",
"What is primary key?",
"What is foreign key?",
"What is AUTO_INCREMENT?",
"What is phpMyAdmin?",
"What is SELECT query?",
"What is INSERT query?",
"What is UPDATE query?",
"What is DELETE query?",
"What is JOIN?",
"What is index?",
"What is constraint?",
"What is schema?",
"What is backup?",
"What is import database?",
"What is export database?"
],

Cloud:[
"What is cloud computing?",
"What is AWS?",
"What is Azure?",
"What is GCP?",
"What is EC2?",
"What is S3?",
"What is load balancing?",
"What is scalability?",
"What is serverless?",
"What is CDN?",
"What is IAM?",
"What is VPC?",
"What is Docker?",
"What is Kubernetes?",
"What is cloud storage?",
"What is deployment?",
"What is DevOps?",
"What is region?",
"What is availability zone?",
"What is monitoring?"
],

Linux:[
"What is Linux?",
"What is terminal?",
"What is command line?",
"What is ls command?",
"What is cd command?",
"What is mkdir command?",
"What is rm command?",
"What is chmod?",
"What is sudo?",
"What is root user?",
"What is file permission?",
"What is grep?",
"What is cat command?",
"What is pwd command?",
"What is nano editor?",
"What is shell?",
"What is bash?",
"What is process?",
"What is kill command?",
"What is package manager?"
],

Testing:[
"What is software testing?",
"What is manual testing?",
"What is automation testing?",
"What is unit testing?",
"What is integration testing?",
"What is regression testing?",
"What is smoke testing?",
"What is bug?",
"What is test case?",
"What is test scenario?",
"What is Selenium?",
"What is JUnit?",
"What is performance testing?",
"What is load testing?",
"What is black box testing?",
"What is white box testing?",
"What is UAT?",
"What is defect life cycle?",
"What is API testing?",
"What is QA?"
],

HR:[
"Tell me about yourself.",
"What are your strengths?",
"What are your weaknesses?",
"Why should we hire you?",
"Why do you want this job?",
"Where do you see yourself in 5 years?",
"What motivates you?",
"Describe a challenge you faced.",
"How do you handle pressure?",
"What is teamwork?",
"What is leadership?",
"What is your salary expectation?",
"Why this company?",
"What are your goals?",
"What is your biggest achievement?",
"Why should we select you?",
"How do you learn new skills?",
"What is success?",
"What is failure?",
"Any questions for us?"
],

DataScience:[
"What is Data Science?",
"What is Machine Learning?",
"What is AI?",
"What is supervised learning?",
"What is unsupervised learning?",
"What is regression?",
"What is classification?",
"What is dataset?",
"What is pandas?",
"What is numpy?",
"What is matplotlib?",
"What is overfitting?",
"What is underfitting?",
"What is train test split?",
"What is accuracy?",
"What is confusion matrix?",
"What is deep learning?",
"What is neural network?",
"What is feature engineering?",
"What is preprocessing?"
]

};

/* ================= START ================= */

window.onload = function(){
let name = localStorage.getItem("username") || "User";
document.getElementById("greet").innerText =
"Welcome, " + name + " 👋";
}

/* ================= DARK MODE ================= */

function toggleDarkMode(){
document.body.classList.toggle("dark");
}

/* ================= START INTERVIEW ================= */

function startInterview(field){

currentField = field;
currentIndex = 0;
score = 0;

selectedQuestions =
questions[field]
.sort(() => 0.5 - Math.random())
.slice(0,10);

document.getElementById("fieldSection").classList.add("hidden");
document.getElementById("interviewSection").classList.remove("hidden");

showQuestion();
}

/* ================= SHOW QUESTION ================= */

function showQuestion(){

document.getElementById("question").innerText =
selectedQuestions[currentIndex];

document.getElementById("progress").innerText =
"Question " + (currentIndex+1) + " / 10";

document.getElementById("answer").value = "";

startTimer();
}

/* ================= TIMER ================= */

function startTimer(){

clearInterval(timer);

timeLeft = 30;

timer = setInterval(function(){

document.getElementById("timer").innerText =
"Time: " + timeLeft;

timeLeft--;

if(timeLeft < 0){
submitAnswer();
}

},1000);
}

/* ================= SUBMIT ================= */

function submitAnswer(){

clearInterval(timer);

let ans =
document.getElementById("answer").value;

if(ans.length > 10){
score++;
}

currentIndex++;

if(currentIndex < 10){
showQuestion();
}else{

document.getElementById("question").innerText =
"Interview Completed";

document.getElementById("result").innerText =
"Final Score: " + score + "/10";

}
}

/* ================= BACK ================= */

function goBack(){

document.getElementById("fieldSection").classList.remove("hidden");
document.getElementById("interviewSection").classList.add("hidden");

document.getElementById("result").innerText="";

}

/* ================= VOICE ================= */

function startVoice(){

let recognition =
new(window.SpeechRecognition ||
window.webkitSpeechRecognition)();

recognition.start();

recognition.onresult = function(event){

document.getElementById("answer").value =
event.results[0][0].transcript;

}

}