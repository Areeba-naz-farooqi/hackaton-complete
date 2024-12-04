import { getAuth, createUserWithEmailAndPassword } from "./firebase.js";

const login = ()=>{
    let login = document.getElementById("login")
    login.addEventListener(click,"login")

}


createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    console.log(user)
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log("errorMessage",errorCode)
  });



