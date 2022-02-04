const loginForm = document.querySelector("#login-form");
const loginInput = loginForm.querySelector("input");
const link = document.querySelector("a");

const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden"; //관습 string만 포함된 변수는 대문자로 표기하고, string을 저장하고 싶을 때 사용 [중요한 정보를 담은게 아니기 때문임]
const USERNAME_KEY = "user_key";

function onLoginSubmit(event) {
    event.preventDefault();
    loginForm.classList.add(HIDDEN_CLASSNAME);
    const username = loginInput.value;  //the user inputed user name and saving that on local storage
    localStorage.setItem(USERNAME_KEY, username);
    paintGreetings(username);
}

function paintGreetings(username) {
    greeting.innerText = `🥇${username}'s To Do List🥇`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
}

function handleLink(tomato) {
    tomato.preventDefault();
    link.innerText = "Sorry, you can't going there.";
}

const savedUsername = localStorage.getItem(USERNAME_KEY); //add local storage get information and delete information. the tiny DB API on browser

if (savedUsername === null) {
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit); //waiting for submit event
} else {
    paintGreetings(savedUsername);
}
link.addEventListener("click", handleLink);