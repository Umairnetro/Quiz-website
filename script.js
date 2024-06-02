// Home
const joinBtn = document.querySelector("#join-btn");

if (joinBtn) {
  joinBtn.addEventListener("click", () => {
    window.location.href = "register.html";
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
      window.location.href = "index.html";
    } else {
      alert("Invalid username or password");
    }
  });
}
// trigger
const startBtn = document.querySelector("#start-btn");
console.log(startBtn);
if (localStorage.getItem("username")) {
  const userdisplay = JSON.parse(localStorage.getItem("username"));
  document.querySelector(".name").innerHTML =
    "Welcome, " + userdisplay.username;
  joinBtn.classList.add("active");
  startBtn.classList.remove("active");
}
