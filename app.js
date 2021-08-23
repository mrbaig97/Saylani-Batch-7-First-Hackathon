

onSignup = () => {
  // get input values
  let email = document.getElementById("email");
  let password = document.getElementById("password");
  let contact = document.getElementById("contact");
  let userName = document.getElementById("userName")
  let message = document.getElementById("message");

  let user = {
    email: email.value,
    password: password.value,
    contact: contact.value,
    userName: userName.value,
    message: message.value

  }

  firebase.auth().createUserWithEmailAndPassword(email.value, password.value)
    .then((userCredential) => {
      // Signed in 
      var user = userCredential.user;
      console.log(user)
      message.innerHTML = "Signup Successfull "
      setTimeout(() => {
        message.innerHTML = "";
        location.href = "login.html";
      }, 2000);
      var user = {
        userName: userName.value,
        email: email.value,
        password: password.value

      }
      firebase.database().ref(`users/${userCredential.user.uid}`).set(user)
        .then(() => {
          alert("User register hogaya")
          window.location = "login.html"
        })





    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      message.innerHTML = errorMessage
      setTimeout(() => {
        message.innerHTML = "";

      }, 2000);
      console.log(errorCode)
      console.log(errorMessage)
      // ..
    });


}




onLogin = () => {
  // get input values
  let email = document.getElementById("email");
  let password = document.getElementById("password");
  let message = document.getElementById("message");

  let user = {
    email: email.value,
    password: password.value,
  }


  // console.log(user);
  console.log(message);
  firebase.auth().signInWithEmailAndPassword(email.value, password.value)
    .then((userCredential) => {
      // Signed in

      firebase.database().ref(`users/${userCredential.user.uid}`).on('value', (data) => {
        console.log(data.val())

        // var name = document.getElementById("name")
        // var data = data.val()
        // // name = data.userName
        // name.innerHTML = data.userName
        // console.log(idx)

        // console.log(name)
        // console.log(username)



        // name.innerHTML = username.value



      })



      var user = userCredential.user;
      message.innerHTML = "Signin Successfull "
      setTimeout(() => {
        message.innerHTML = "";
        location.href = "index.html";
      }, 3000);


      // ...
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      message.innerHTML = errorMessage
      setTimeout(() => {
        message.innerHTML = "";

      }, 2000);
      console.log(errorCode)
      console.log(errorMessage)
      // ..

    });


}

// onLogout = () => {
//   let message = document.getElementById("message");
//   localStorage.removeItem("user");
//   message.innerHTML = "Good Bye.!";
//   // clear state
//   setTimeout(() => {
//     location.href = "login.html";
//   }, 2000);

// }



restrauntsSignup = () => {
  // get input values
  let email = document.getElementById("email");
  let password = document.getElementById("password");
  let country = document.getElementById("country");
  let restrauntName = document.getElementById("resturarant Name")
  let message = document.getElementById("message");

  let user = {
    email: email.value,
    password: password.value,
    country: country.value,
    restrauntName: restrauntName.value,
    message: message.value

  }

  firebase.auth().createUserWithEmailAndPassword(email.value, password.value)
    .then((userCredential) => {
      // Signed in 
      var user = userCredential.user;
      console.log(user)
      message.innerHTML = "Signup Successfull "
      setTimeout(() => {
        message.innerHTML = "";
        location.href = "login.html";
      }, 2000);
      var user = {
        restrauntName: restrauntName.value,
        email: email.value,
        password: password.value

      }
      firebase.database().ref(`resturaunts/${userCredential.user.uid}`).set(user)
        .then(() => {
          alert("restraunt register hogaya")
          window.location = "login.html"
        })





    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      message.innerHTML = errorMessage
      setTimeout(() => {
        message.innerHTML = "";

      }, 2000);
      console.log(errorCode)
      console.log(errorMessage)
      // ..
    });


}
orderMenu = () => {

  // get input values
  let item = document.getElementById("itemName");
  let price = document.getElementById("price");
  let category = document.getElementById("category");
  var menu = 'menu';
  let user = {
    item: item.value,
    price: price.value,
    category: category.value

  }

    var key = Math.random() *52364765
    
  firebase.database().ref(`menu/${menu.uid + key.toFixed()  }`).set(user)
    .then(() => {
      alert("menu register hogaya")
      // window.location = "login.html"
    })






    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      message.innerHTML = errorMessage
      setTimeout(() => {
        message.innerHTML = "";

      }, 2000);
      console.log(errorCode)
      console.log(errorMessage)
      // ..
    });

 
}

// function getMenu() {
//   var starCountRef = firebase.database().ref(`menu/`);
//   starCountRef.on('child_added', (data) => {
//     let datas = data.val();
//     console.log(datas);
//     var latestMenu = document.getElementById('menu')
//     var latestMenu = document.createElement("div")
//     console.log(latestMenu);
//     var card = ` <div id="latestMenu" class="card" style="width: 18rem;">
//   <div class="card-body">
//     <h5 class="card-title">${data.item}</h5>
//     <h6 class="card-subtitle mb-2 text-muted">${data.category}</h6>
//     <p class="card-text">${data.price}</p>
//     <a href="#" class="card-link">Card link</a>
//     <a href="#" class="card-link">Another link</a>
//   </div>
//   </div>`
// console.log(card);
//     latestMenu.innerHTML= card;
//   }
//   )};


  
  
  
    

