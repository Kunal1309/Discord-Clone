      const signUpForm = document.querySelector(".signup-form");
      const fullName = document.querySelector(".full-name")
      const email = document.getElementById("email")
      const userId = document.getElementById("userid")
      const password = document.getElementById("pass")
      const confirmPass = document.getElementById("confirm")
      const nameErr = document.querySelector(".name-err");
      const mailErr = document.querySelector(".mail-err");
      var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
      const userErr = document.querySelector(".user-err");
      const ageErr = document.querySelector(".age-err");
      const age = document.getElementById("age")
      const passErr = document.querySelector(".pass-err");
      const successMsg = document.querySelector(".success");
      const gender = document.getElementsByName('gender')
      let genderValue;
      appData = [];
      window.addEventListener('load',()=>{
        fetch("https://userdata-api.onrender.com")
          .then((res) => res.json())
          .then((data) => appData.push(...data));
      })

      signUpForm.addEventListener("submit", (e) => {
        e.preventDefault()
        console.log(e)
        if (fullName.value == "" && fullName.value.length < 5) {
          nameErr.style.display = "block";
          setTimeout(() => {
            nameErr.style.display = "none";
          }, 1500);
          return;
        }

        for(let i = 0; i < gender.length; i++){
          if(gender[i].checked){
            genderValue = gender[i].value;
          }
        }

        if (email.value == "" && !email.value.match(validRegex)) {
          mailErr.innerText = "Please enter a valid email";
          mailErr.style.display = "block";
          setTimeout(() => {
            mailErr.style.display = "none";
            mailErr.innerText = "";
          }, 1500);
          return;
        } else if (email.value !== "") {
          for (let i = 0; i < appData.length; i++) {
            if (appData[i].email === email.value) {
              mailErr.innerText = "This email already exist in our records!";
              mailErr.style.display = "block";
              setTimeout(() => {
                mailErr.style.display = "none";
                mailErr.innerText = "";
              }, 1500);
              return;
            }
          }
        }
        if (userId.value !== "") {
          for (let i = 0; i < appData.length; i++) {
            if (appData[i].id == userId.value) {
              userErr.style.display = "block";
              setTimeout(() => {
                userErr.style.display = "none";
              }, 1500);
              return;
            }
          }
        }

        if (age.value == "") {
          ageErr.innerText = "Please enter age";
          ageErr.style.display = "block";
          setTimeout(() => {
            ageErr.innerText = "";
            ageErr.style.display = "none";
          }, 1500);
          return;
        } else if (age.value < 18) {
          ageErr.innerText = "Sorry only 18+ can register";
          ageErr.style.display = "block";
          setTimeout(() => {
            ageErr.innerText = "";
            ageErr.style.display = "none";
          }, 1500);
          return;
        }

        if (pass.value !== confirmPass.value) {
          passErr.style.display = "block";
          setTimeout(() => {
            passErr.style.display = "none";
          }, 1500);
          return;
        }
        const date = new Date();
        let current = date.toLocaleString();
        let user = {
          name: fullName.value,
          email: email.value,
          id: userId.value,
          gender: genderValue,
          pass: password.value,
          date: current,
        };


        fetch('https://userdata-api.onrender.com', {
          method:'POST',
          body: JSON.stringify(user),
          headers: {
            "Content-type" : 'application/json'
          }
        }).then((res) =>res.json())
        .then((data) => console.log(data))
         .catch((err)=> console.log(err));

        signUpForm.reset();
        successMsg.style.display = "block";
      });