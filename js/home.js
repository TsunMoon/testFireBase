const logOut = () => {
    console.log("Vào hàm logout");
    firebase.auth().signOut().then(function() {
        // Sign-out successful.
        console.log("log out success 123");
        window.location.href = "index.html";
      }).catch(function(error) {
        // An error happened.
      });
}

var currentUser = firebase.auth().currentUser;
              console.log(currentUser);
console.log(localStorage.getItem("img"));
document.getElementById("imgID").src = localStorage.getItem("img");
