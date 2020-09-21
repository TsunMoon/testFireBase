const googleSignIn = () => {
    console.log("Vào hàm click");

    base_provider = new firebase.auth.GoogleAuthProvider();
    // base_provider.addScope('https://www.googleapis.com/auth/contacts.readonly');
    // firebase.auth().languageCode = 'pt';
    firebase.auth().signInWithPopup(base_provider).then(function(result){
        console.log(result);
        console.log("Success... Google account Linked");
    }).catch(function(err){
        console.log(err);
        console.log("Failed to do");
    })
}