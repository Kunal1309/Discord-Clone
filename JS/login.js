const loginId = document.getElementById("login-id");
const loginPass = document.getElementById("login-pass");
const loginForm = document.querySelector(".login-form");
const loginErr = document.querySelector(".login-err");
const guestLogin = document.querySelector(".guest");

loginArr = [];

window.addEventListener('load', ()=>{
    fetch("https://userdata-api.onrender.com")
      .then((res) => res.json())
      .then((data) => loginArr.push(...data));
})


guestLogin.addEventListener("click", () => {
  let localId = "Guest";
  let gender = "male";
  localStorage.setItem("userId", JSON.stringify(localId));
  localStorage.setItem("gender", JSON.stringify(gender));
  return (location.href = "homepage.html");
});

loginForm.addEventListener("submit", (e) => {
  e.preventDefault();
  if (loginId.value !== "" && loginPass.value !== "") {
    for (var i = 0; i < loginArr.length; i++) {
      if (
        loginArr[i].email == loginId.value &&
        loginArr[i].pass == loginPass.value
      ) {
        let localId = loginArr[i].id;
        let gender = loginArr[i].gender;
        localStorage.setItem("userId", JSON.stringify(localId));
        localStorage.setItem("gender", JSON.stringify(gender));
        return (location.href = "homepage.html");
      }
    }
    if (i == loginArr.length) {
      loginErr.style.display = "block";
      setTimeout(() => {
        loginErr.style.display = "none";
      }, 1500);
      loginForm.reset();
      return;
    }
  }
  if (loginArr.length == 0) {
    loginErr.style.display = "block";
    setTimeout(() => {
      loginErr.style.display = "none";
    }, 1500);
    loginForm.reset();
    return;
  }
});
