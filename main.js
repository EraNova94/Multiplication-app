const num1 = Math.ceil(Math.random() * 10);
const num2 = Math.ceil(Math.random() * 10);

const qustion = document.getElementById("question");
const form = document.getElementById("form");
const input = document.getElementById("input");
const scoreEl = document.getElementById("score");

let score = JSON.parse(localStorage.getItem("score"));
if (!score) {
  score = 0;
}
scoreEl.innerText = `score: ${score}`;
qustion.innerText = `What is ${num1} multiply by ${num2} ?`;
const correctAnswer = num1 * num2;

form.addEventListener("submit", () => {
  const userAnswer = +input.value;
  if (userAnswer === correctAnswer) {
    score++;
    updateLocalStore();
    alert("Awesome! It's correct!");
  } else {
    score--;
    updateLocalStore();
    alert(`Oops, not correct! Correct answer is ${correctAnswer}`);
  }
});

function updateLocalStore() {
  localStorage.setItem("score", JSON.stringify(score));
}
