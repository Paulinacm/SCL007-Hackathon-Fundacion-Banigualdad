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
    <div class="center-developer">
   <a href="index.html"> <img  src="./assets/logo_web-01.png" class="logo"></a>
    <h4>Iniciar sesión</h4>
    <input id="email" type="text" placeholder="Email" >
    <input id="password" type="text" placeholder="Contraseña">
    <button id="login"><p class="loginButton">Iniciar Sesión</p></button>
    <p>asesora@gmail.com - asesora </p>
    <br>
    <br>
    <a href="index.html" class="TyCText">Volver al Inicio</a>
    </div>
    `
};

// página principal para usuarios logeados
function principalPage() {
    let divRoot = document.getElementById("root");
    divRoot.innerHTML = `
   <header class="chat-header">
   <button style="margin: 0px auto; display:block;" class="btn btn-outline-light mt-2" onclick="logOut()">Log out</button>
   <header>
   <div class="container" id="mainMenu">
     <div class="row">
       <div class="col-12 " id="menumain">
         
         <a href="#" onclick="personal()" class="menu"><i class="far fa-user" id="personal"><br>Personal</i></a>
         <a href="#" onclick="agregar()" class="menu"><i class="fas fa-user-plus" id="agregar"><br>Agregar</i></a>
         

       </div>
     </div>
</header>
   <div id="pantalla1"></div>
   <div id="root2" ></div>
   

   <div id="page3" class="container">
       <form id="enter-login" class="container-fluid2">
         <div id="app1">
           <p>Nombre</p>
           <input id="name" type="text">
           <p>Description</p>
           <textarea id="description" name="description" cols="30" rows="10"></textarea>
           <p>Categoría</p>
           <input id="category" type="text">
           <p>Whatsapp</p>
           <input id="phone" type="text">
           <p>Ciudad</p>
           <input id="city" type="text">
         </div>
         <div class="form upload">
           <p id="app4">Imagen</p>
           <div class="progress">
  <div class="progress-bar" role="progressbar" style="width: 25%;" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">25%</div>
</div>
           <br> <input style="margin-bottom:20px;" type="file" value="upload" id="fileButton" name="elegir archivo" /></br>
           <button class="btn btn-success" id="sendBusiness">Enviar</button>
         </div>
       </form>
     </div>
   

    
    `
};

// const dbRef = firebase.database().ref(); // accede a la raíz de la base
const personal = function () {
    document.getElementById("page3").style.display="none"
    document.getElementById("pantalla1").style.display="block"
    document.getElementById('pantalla1').innerHTML = `

    <img id="fotoContacto" src="./assets/Ellipse.png">
    <p href="#"id="nombreContacto">Marian Alicia</p>
    <p id="hora">12:30</p>
    <hr id="linea">
    <img id="fotoContacto" src="./assets/fabiola.png">
    <p id="nombreContacto">Fabiola Barra</p>
    <p id="hora">8:30</p>
    <hr id="linea2">
    <img id="fotoContacto" src="./assets/cecilia.png">
    <p id="nombreContacto">Cecilia Valenzuela</p>
    <p id="hora">18:11</p>
    <hr id="linea2">
    <img id="fotoContacto" src="./assets/gloria.png">
    <p id="nombreContacto">Gloria Naranjo</p>
    <p id="hora">16:30</p>
    <hr id="linea2">
    
    `
}



const agregar =  function () {
    document.getElementById("pantalla1").style.display="none"
    document.getElementById("page3").style.display="block"
    document.getElementById('page3').innerHTML = `
    <form id="enter-login" class="container-fluid2">
    <div id="app1">
      <p>Nombre</p>
      <input id="name" type="text">
      <p>Description</p>
      <textarea id="description" name="description" cols="30" rows="10"></textarea>
      <p>Categoría</p>
      <input id="category" type="text">
      <p>Whatsapp</p>
      <input id="phone" type="text">
      <p>Ciudad</p>
      <input id="city" type="text">
    </div>
    <div class="form upload">
      <p id="app4">Imagen</p>
      <progress value="0" max="100" id="uploader">0%</progress><br>
      <br> <input type="file" value="upload" id="fileButton" name="elegir archivo" /></br>
      <button id="sendBusiness">Submit</button>
    </div>
  </form>`

    document.getElementById("root2").style.display="none"
}