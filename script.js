// Array of questions and answers
const questions = [
    { question: "What is the square of 1?", answer: "1" },
    { question: "What is the square of 2?", answer: "4" },
    { question: "What is the square of 3?", answer: "9" },
    { question: "What is the square of 4?", answer: "16" },
    { question: "What is the square of 5?", answer: "25" },
    { question: "What is the square of 6?", answer: "36" },
    { question: "What is the square of 7?", answer: "49" },
    { question: "What is the square of 8?", answer: "64" },
    { question: "What is the square of 9?", answer: "81" },
    { question: "What is the square of 10?", answer: "100" },
    { question: "What is the square of 11?", answer: "121" },
    { question: "What is the square of 12?", answer: "144" },
    { question: "What is the square of 13?", answer: "169" },
    { question: "What is the square of 14?", answer: "196" },
    { question: "What is the square of 15?", answer: "225" },
    { question: "What is the square of 16?", answer: "256" },
    { question: "What is the square of 17?", answer: "289" },
    { question: "What is the square of 18?", answer: "324" },
    { question: "What is the square of 19?", answer: "361" },
    { question: "What is the square of 20?", answer: "400" },
    { question: "What is the square of 21?", answer: "441" },
    { question: "What is the square of 22?", answer: "484" },
    { question: "What is the square of 23?", answer: "529" },
    { question: "What is the square of 24?", answer: "576" },
    { question: "What is the square of 25?", answer: "625" },
    { question: "What is the square of 26?", answer: "676" },
    { question: "What is the square of 27?", answer: "729" },
    { question: "What is the square of 28?", answer: "784" },
    { question: "What is the square of 29?", answer: "841" },
    { question: "What is the square of 30?", answer: "900" },
    { question: "What is the cube of 1?", answer: "1" },
    { question: "What is the cube of 2?", answer: "8" },
    { question: "What is the cube of 3?", answer: "27" },
    { question: "What is the cube of 4?", answer: "64" },
    { question: "What is the cube of 5?", answer: "125" },
    { question: "What is the cube of 6?", answer: "216" },
    { question: "What is the cube of 7?", answer: "343" },
    { question: "What is the cube of 8?", answer: "512" },
    { question: "What is the cube of 9?", answer: "729" },
    { question: "What is the cube of 10?", answer: "1000" },
    { question: "What is the cube of 11?", answer: "1331" },
    { question: "What is the cube of 12?", answer: "1728" },
    { question: "What is the cube of 13?", answer: "2197" },
    { question: "What is the cube of 14?", answer: "2744" },
    { question: "What is the cube of 15?", answer: "3375" },
];

// Function to display a random question
function displayQuestion() {
    const randomIndex = Math.floor(Math.random() * questions.length);
    const question = questions[randomIndex];
    document.getElementById("question").innerText = question.question;
    document.getElementById("answer").value = "";
    document.getElementById("result").innerText = "";
    sessionStorage.setItem("currentAnswer", question.answer);
}

// Function to check user's answer
function checkAnswer() {
    const userAnswer = document.getElementById("answer").value.trim();
    const correctAnswer = sessionStorage.getItem("currentAnswer");
    if (userAnswer === correctAnswer) {
        document.getElementById("result").innerText = "Correct!";
    } else {
        document.getElementById("result").innerText = `Incorrect! The correct answer is ${correctAnswer}.`;
    }
}

// Display a random question when the page loads
window.onload = displayQuestion;
