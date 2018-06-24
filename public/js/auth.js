////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// RAJOUTER LE #secret-link dans les modifs pour faire apparaitre le lien si l'utilisateur est connecté !     //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////

firebase.auth().onAuthStateChanged(function(user) {
  let logged = document.getElementById("logged-button");
  let loggin = document.getElementById("loggin-button");
  let newuser = document.getElementById("newuser-button");
  // let secret_link = document.getElementById('secret-link');
  // let animation = document.getElementById('animation');

  if (user) {
    loggin.style.display = "none";
    newuser.style.display = "none";
    // secret_link.style.display = "initial";
    // animation.style.display = "initial";
    logged.style.display = "initial";

    document.getElementById("userpage").innerText = user.email;
    // document.getElementById('welcome').innerText = `Hello ${user.email} !`;

    // console.log("// User is signed in.");
    // console.log(user.email);
    // socket.emit('adduser', user.email);
    // localStorage.setItem('user_email', user.email);

    console.log("user is signed in");
  } else {
    loggin.style.display = "initial";
    newuser.style.display = "initial";
    // secret_link.style.display = "none";
    // animation.style.display = "none";
    logged.style.display = "none";

    console.log("!! User is NOT signed in.");
  }
});

function login() {
  let email = document.getElementById("inputEmail").value;
  let password = document.getElementById("inputPassword").value;

  firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then(function() {
      console.log("authentification is a success");
    })
    .catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // ...
      alert(error.message);
    });
}

function logout() {
  console.log("user wants to log out");
  firebase
    .auth()
    .signOut()
    .catch(function(error) {
      console.log("signing out is a FAILURE !");
      console.log(error);
    });

  // socket.emit('subuser');
  // console.log("signing out is a success !");
  // localStorage.removeItem('user_email');
}

function register() {
  let email = document.getElementById("newuserEmail").value;
  let password = document.getElementById("newuserPassword").value;
  let username = document.getElementById("newUsername").value;

  firebase
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // ...
      console.log("error : " + error.message);
    });

  // let user = {
  //     email : email,
  //     username : username
  // };
  // socket.emit('register', user);
}
