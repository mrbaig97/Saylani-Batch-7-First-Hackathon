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
  
  
    firebase.database().ref(`menu/${menu}`).set(user)
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
  
  function getMenu() {
    firebase.database().ref(`menu`).on('value', (data) => {
      let datas = data.val();
      console.log(datas);
      var latestMenu = document.getElementById('menu')
      var currentMenu = document.getElementById("liveMenu")
      console.log(currentMenu);
          // var latestMenu = document.createElement("div")

          // console.log(latestMenu);
          var card = ` <div id="latestMenu" class="card" style="width: 18rem;">
          <img src="https://firebasestorage.googleapis.com/v0/b/login-signup-1a584.appspot.com/o/default%20dish.webp?alt=media&token=57b6870d-6680-4c94-b58d-f75998b7ba22">
        <div class="card-body">
          <h5 class="card-title">${datas.menu.item}</h5>
          <h6 class="card-subtitle mb-2 text-muted">${datas.menu.category}</h6>
          <p class="card-text">${datas.menu.price}</p>
        
        </div>
        </div>`
      
    
          latestMenu.innerHTML= card;
          // currentMenu.innerHTML = card;
    }
    )};
    
    

  
  