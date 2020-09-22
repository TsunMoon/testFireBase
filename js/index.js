const googleSignIn = () => {
    console.log("Vào hàm click 3");

    base_provider = new firebase.auth.GoogleAuthProvider();
    // base_provider.addScope('https://www.googleapis.com/auth/contacts.readonly');
    // firebase.auth().languageCode = 'pt';
    firebase.auth().signInWithPopup(base_provider).then(function(result){
        console.log(result);
        console.log("Success... Google account Linked 3");
        var token = result.credential.accessToken;
        
        var user = result.user;
        console.log(token ,user);
        firebase.auth().onAuthStateChanged(function(user) {
            if (user) {
              console.log("Đăng nhập thành công");
              var currentUser = firebase.auth().currentUser;2
              console.log(currentUser);
              console.log(currentUser.displayName);
              console.log(currentUser.email);
              console.log(currentUser.photoURL);
              localStorage.setItem("img",currentUser.photoURL);
              localStorage.setItem("currentUser", JSON.stringify(currentUser) );
              window.location.href = "home.html";
            } else {
              // No user is signed in.
            }
          });

    }).catch(function(err){
        console.log(err);
        console.log("Failed to do");
    })
};




