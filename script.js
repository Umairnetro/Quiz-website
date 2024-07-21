// Home
const joinBtn = document.querySelector("#join-btn");

if (joinBtn) {
  joinBtn.addEventListener("click", () => {
    window.location.href = "./other-pages/register.html";
  });
}

// Register
const username = document.querySelector("#username");
const password = document.querySelector("#password");
const email = document.querySelector("#email");
const registerBtn = document.querySelector("#register-btn");

if (registerBtn) {
  registerBtn.addEventListener("click", (e) => {
    e.preventDefault();

    if (!username.value || !email.value || !password.value) {
      alert("Please fill all the fields");
      return;
    } else {
      const user = {
        username: username.value,
        email: email.value,
        password: password.value,
      };
      localStorage.setItem("username", JSON.stringify(user));
      window.location.href = "login.html";
    }
  });
}

// Login
const loginBtn = document.querySelector("#login-btn");
if (loginBtn) {
  loginBtn.addEventListener("click", (e) => {
    e.preventDefault();
    const userLogin = {
      email: email.value,
      password: password.value,
    };

    const user = JSON.parse(localStorage.getItem("username"));

    if (
      userLogin.email === user.email &&
      userLogin.password === user.password
    ) {
      sessionStorage.setItem("username", JSON.stringify(user));
      window.location.href = "../index.html";
    } else {
      alert("Invalid username or password");
    }
  });
}
// trigger
const startBtn = document.querySelector("#start-btn");
if (startBtn) {
  if (localStorage.getItem("username")) {
    const userdisplay = JSON.parse(localStorage.getItem("username"));
    document.querySelector(".name").innerHTML =
      "Welcome, " + userdisplay.username;
    joinBtn.classList.add("active");
    startBtn.classList.remove("active");
  }

  startBtn.addEventListener("click", () => {
    window.location.href = "./other-pages/quiz.html";
  });
}

// Quiz
const questions = [
  {
    question: "What is the capital of France?",
    answers: [
      { text: "Paris", correct: true },
      { text: "London", correct: false },
      { text: "Rome", correct: false },
      { text: "Berlin", correct: false },
    ],
  },
  // Add more questions as needed
];

const questionElement = document.querySelector("#question");
const options = document.querySelector("ul");

let currentQuestionIndex = 0;
let score = 0;

console.log(questionElement, options);

const showQuestion = (question) => {
  questionElement.innerHTML = question.question;
  question.answers.forEach((opt) => {
    let button = document.createElement("button");
    button.classList.add("options");
    button.innerHTML = opt.text;
    button.addEventListener("click", AnswerSelected);
    options.appendChild(button);
  });
};

const AnswerSelected = (ans) => {
  console.log("me");
};

showQuestion(questions[0]);
