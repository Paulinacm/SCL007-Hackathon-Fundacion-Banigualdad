function loginUser(){
    const email = inputEmail.value;
    const pass = inputPassword.value;
  
    firebase.auth().signInWithEmailAndPassword(email, pass).catch(function(error) {
        let errorCode = error.code;
        let errorMessage = error.message;
        console.log(errorMessage);
        if (errorCode === "auth/invalid-email") {
            alert("Email inválido");
        }if (errorCode === "auth/user-disabled") {
            alert("Usuario deshabilitado");
        }if (errorCode === "auth/wrong-password") {
            alert("Contraseña incorrecta")
        }
    })
  }
  function watcher(){
    firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
            // User is signed in.
            name = user.displayName;
            email = user.email;
            // photoUrl = user.photoURL;
            emailVerified = user.emailVerified;
            uid = user.uid; 
            console.log(user.email);
            console.log("usuario activo");
            console.log("ID de usuario: " + uid); // ID del usuario
            console.log("Nombre de usuario: " + name); // nombre del usuario
            console.log("Email verificado: " + emailVerified); // email verificado con correo
            principalPage(); // ejecuta la función del main
        } else {
          // No user is signed in.
          console.log("no existe usuario activo");
          
        }
      });
  }
  watcher();
  
  // botón cerrar sesión, arroja null. 
  function logOut(){
    firebase.auth().signOut().then(function(){
        // Sign-out successful.
        console.log("Saliendo..")
        initialPage();
      }).catch(function(error) {
        // An error happened.
        console.log(error);
      });
  }
  
  function authAgain(){
    var user = firebase.auth().currentUser;
    var credential;
    // Prompt the user to re-provide their sign-in credentials
    user.reauthenticateAndRetrieveDataWithCredential(credential).then(function() {
        // User re-authenticated.
    }).catch(function(error) {
        // An error happened.
        console.log(error)
    });
  }
initialPage();
//login
const inputEmail = document.getElementById("email");
const inputPassword = document.getElementById("password");
const btnIngresar = document.getElementById("login");

btnIngresar.addEventListener("click", loginUser, false);

//página inicio sesión y crear cuenta
function initialPage() {
    let divRoot = document.getElementById("root");
    divRoot.innerHTML = `
   <a href="index.html"> <img  src="./assets/Logo_Banigualdad.jpg" class="logo"></a>
    <h4>Iniciar sesión</h4>
    <input id="email" type="text" placeholder="Email" >
    <input  id="password" type="text" placeholder="Contraseña">
    <button id="login"><p class="loginButton">Iniciar Sesión</p></button>
    <p>asesora@gmail.com - asesora </p>
    <br>
    <br>
    <p class="TyCText">Al aceptar indica que acepta los Términos y Condiciones</p>
    `
};

// página principal para usuarios logeados
function principalPage() {
    let divRoot = document.getElementById("root");
    divRoot.innerHTML = `
    <p>Página principal</p>
    <button onclick="logOut()">Log out</button>
    `
};

// const dbRef = firebase.database().ref(); // accede a la raíz de la base