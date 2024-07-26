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
    question: "Which language is primarily used for web development?",
    answers: [
      { text: "Python", correct: false },
      { text: "JavaScript", correct: true },
      { text: "C++", correct: false },
      { text: "Java", correct: false },
    ],
  },
  {
    question: "What is the largest planet in our solar system?",
    answers: [
      { text: "Earth", correct: false },
      { text: "Jupiter", correct: true },
      { text: "Saturn", correct: false },
      { text: "Mars", correct: false },
    ],
  },
  {
    question: "Who painted the Mona Lisa?",
    answers: [
      { text: "Vincent van Gogh", correct: false },
      { text: "Leonardo da Vinci", correct: true },
      { text: "Pablo Picasso", correct: false },
      { text: "Claude Monet", correct: false },
    ],
  },
  {
    question: "What is the chemical symbol for gold?",
    answers: [
      { text: "Au", correct: true },
      { text: "Ag", correct: false },
      { text: "Pb", correct: false },
      { text: "Pt", correct: false },
    ],
  },
  {
    question: "What is the square root of 64?",
    answers: [
      { text: "6", correct: false },
      { text: "7", correct: false },
      { text: "8", correct: true },
      { text: "9", correct: false },
    ],
  },
  {
    question: "Who wrote 'Pride and Prejudice'?",
    answers: [
      { text: "Charlotte Brontë", correct: false },
      { text: "Mark Twain", correct: false },
      { text: "Jane Austen", correct: true },
      { text: "Charles Dickens", correct: false },
    ],
  },
  {
    question: "In which year did the Titanic sink?",
    answers: [
      { text: "1905", correct: false },
      { text: "1912", correct: true },
      { text: "1918", correct: false },
      { text: "1923", correct: false },
    ],
  },
  {
    question: "What is the longest river in the world?",
    answers: [
      { text: "Amazon River", correct: false },
      { text: "Nile River", correct: true },
      { text: "Yangtze River", correct: false },
      { text: "Mississippi River", correct: false },
    ],
  },
  {
    question: "Which element is represented by the symbol 'O'?",
    answers: [
      { text: "Oxygen", correct: true },
      { text: "Osmium", correct: false },
      { text: "Oganesson", correct: false },
      { text: "Oxygenium", correct: false },
    ],
  },
  {
    question: "Who is the author of the Harry Potter series?",
    answers: [
      { text: "J.R.R. Tolkien", correct: false },
      { text: "George R.R. Martin", correct: false },
      { text: "J.K. Rowling", correct: true },
      { text: "Stephen King", correct: false },
    ],
  },
];

const questionElement = document.querySelector("#question");
const options = document.querySelector("ul");

let currentQuestionIndex = 0;
let score = 0;

if (questionElement) {
  const showQuestion = (question) => {
    questionElement.innerHTML = question.question;
    options.innerHTML = "";
    question.answers.forEach((opt) => {
      let button = document.createElement("button");
      button.classList.add("options");
      if (opt.correct) {
        button.dataset.correct = true;
      }
      button.innerHTML = opt.text;
      button.addEventListener("click", AnswerSelected);
      options.appendChild(button);
    });
  };

  const AnswerSelected = (ans) => {
    let selectBtn = ans.target;
    if (selectBtn.dataset.correct) {
      alert("Correct!");
      score++;
    } else {
      const correntAnswer = questions[currentQuestionIndex].answers.find(
        (answer) => {
          return answer.correct;
        }
      );
      console.log(correntAnswer);
      alert(`Wrong the right answer is ${correntAnswer.text}`);
    }

    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
      showQuestion(questions[currentQuestionIndex]);
    } else {
      let result = document.querySelector(".result");
      let displayScore = document.querySelector("#score");
      displayScore.innerHTML = `${score}/${questions.length}`;
      result.classList.remove("active");
      questionElement.classList.add("active");
      options.classList.add("active");
      document.querySelector(".dashboard-btn").addEventListener("click", () => {
        window.location.replace("../index.html");
      });
    }
  };

  showQuestion(questions[0]);
}
