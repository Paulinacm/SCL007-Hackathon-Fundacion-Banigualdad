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
    <header>
    <div class="container" id="mainMenu">
      <div class="row">
        <div class="col-12 " id="menumain">
          <p id="contactos">Contactos <i class="fas fa-search" id="lupa"><i class="fas fa-ellipsis-v" id="menu"></i></i></p>

          <a href="#"  onclick="personal()" class="menu"><i class="far fa-user"><br>Personal</i></a>
          <a href="#" onclick="agregar()" class="menu"><i class="fas fa-user-plus" id="agregar"><br>Agregar</i></a>
          

        </div>
      </div>

      <body>

    <div id="pantalla1"></div>
    <div id="root" >
     
    </div>
    

    <div id="page3" class="container"></div>

    <button onclick="logOut()">Log out</button>
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

    document.getElementById("root").style.display="none"
   

   alert("hola")
}


/* 
let newBusinessKey = firebase.database().ref('users/boasfdisfbsfahb').child('products').push().key;
console.log(newBusinessKey);

firebase.database().ref('users/' + newBusinessKey).set({
  campo: newBusinessKey
}) 



/* let newBusinessKey = ""; 
const saveBusiness = (/* businessImage,  businessName, businessDescription, businessCategory, businessPhone, businessCity) => {
    /* let newBusinessKey = firebase.database().ref('business/boasfdisfbsfahb').child('products').push().key;
    console.log(newBusinessKey);
    firebase.database().ref('business/' + newBusinessKey).set({
      image: imgUrl,
      owner: businessName,
      description: businessDescription,
      key: newBusinessKey,
      category: businessCategory,
      phone: businessPhone,
      city: businessCity
    });
  };
  
  /* function onLikeClick(e) {
    let key = e.target.id;
    let oriKey = e.target.oid;
    let numberKey = e.target.nid;
    document.getElementById(key).style.background = "lightblue";
    firebase.database().ref(`recipe/${oriKey}`).child(`likes/${firebase.auth().currentUser.uid}`).set({
      user: firebase.auth().currentUser.uid,
    });
    firebase.database().ref(`recipe/${oriKey}`).child("likes").on("value", function (snapshot) {
      firebase.database().ref(`recipe/${oriKey}`).update({
        likesCount: snapshot.numChildren(),
      })
      console.log("There are " + snapshot.numChildren() + " likes");
      document.getElementById(numberKey).innerHTML = "";
      document.getElementById(numberKey).innerHTML = snapshot.numChildren();
    });
  } 
  
  
  var uploader = document.getElementById('uploader');
  var fileButton = document.getElementById('fileButton');
  let imgUrl = "";
  
  fileButton.addEventListener('change', function (e) {
    var file = e.target.files[0];
    var storageRef = firebase.storage().ref('Img/'
      + file.name);
    var task = storageRef.put(file);
    task.on('state_changed',
      function progress(snapshot) {
        var percentage = (snapshot.bytesTransferred /
          snapshot.totalBytes) * 100;
        uploader.value = percentage;
      },
      function error(err) {
      },
      function complete() {
      }
    );
    storageRef.getDownloadURL().then(function (url) {
      console.log(newBusinessKey);
      console.log(url);
      imgUrl = url;
      /* firebase.database().ref(`recipe/${newRecipeKey}`).update({
          urlImage : url 
        });
      // Insert url into an <img> tag to "download"
    }).catch(function (error) {
  
      // A full list of error codes is available at
      // https://firebase.google.com/docs/storage/web/handle-errors
      switch (error.code) {
        case 'storage/object-not-found':
          // File doesn't exist
          break;
  
        case 'storage/unauthorized':
          // User doesn't have permission to access the object
          break;
  
        case 'storage/canceled':
          // User canceled the upload
          break;
  
        case 'storage/unknown':
          // Unknown error occurred, inspect the server response
          break;
      }
    });
  })
  
  const saveBusinessIntoDatabase = () => {
    /* const businessImage = imgURL;
    const businessName = document.getElementById("name").value;
    const businessDescription = document.getElementById("description").value;
    const businessCategory = document.getElementById("category").value;
    const businessPhone = document.getElementById("phone").value;
    const businessCity = document.getElementById("city").value;
    /* const recipeTitle = titleRecipe.value;
    const recipeImage = imgUrl;
    const ownerName = firebase.auth().currentUser.email;
    saveBusiness(/* businessImage, businessName, businessDescription, businessCategory, businessPhone, businessCity);
  }
  
  document.getElementById("sendBusiness").addEventListener('click', saveBusinessIntoDatabase);

  const containerRoot = document.getElementById('root');

  const readRecipesFromDatabase = () => {

  
  
    let businessRef = firebase.database().ref('business');
    businessRef.on("child_added", function(business){
      // container2=document.getElementById('div');
      // containerRoot.appendChild(container2)

      const form = document.createElement('form');
     
      form.id='form_'+business.val().key;
      containerRoot.appendChild(form);


      const p=document.createElement('p');
      form.appendChild(p);
      p.setAttribute("id","name")
      const nameProfile=document.createTextNode(business.val().owner);
      p.appendChild(nameProfile);

});
} */