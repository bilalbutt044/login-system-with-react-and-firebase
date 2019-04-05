import app from 'firebase';

const config = {
    apiKey: "AIzaSyBbXU3hWsvXFl7TECX8spdLxoQ05oI4Hok",
    authDomain: "dlstockr.firebaseapp.com",
    databaseURL: "https://dlstockr.firebaseio.com",
    projectId: "dlstockr",
    storageBucket: "dlstockr.appspot.com",
    messagingSenderId: "578047877992"
  };


  class Firebase {
    constructor() {
      app.initializeApp(config);
      
      this.auth = app.auth();
     
    }

    signUp = (email, password) => {
      return this.auth.createUserWithEmailAndPassword(email, password);
    }

    signIn = (email, password) => {
     return  this.auth.signInWithEmailAndPassword(email, password);
    }

    signOut = () => this.auth.signOut();
    
    passwordReset = email => this.auth.sendPasswordResetEmail(email);

    // passwordUpdate = password => this.auth.currentUser.updatePassword(password);

  }
  
  const firebase = new Firebase();
  export default firebase;
  

