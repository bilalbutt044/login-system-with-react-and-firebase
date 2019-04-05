import app from 'firebase/app';


const config = {
    apiKey: "AIzaSyASvHELnXfG71kM-6KXuW1s-dEMuQ1HhVI",
    authDomain: "login-system-f7172.firebaseapp.com",
    databaseURL: "https://login-system-f7172.firebaseio.com",
    projectId: "login-system-f7172",
    storageBucket: "login-system-f7172.appspot.com",
    messagingSenderId: "578047877992"
  };

  app.initializeApp(config);
  // class Firebase {
  //   constructor() {
  //     app.initializeApp(config);
      
  //     this.auth = app.auth();
  //   }

  //   signUp = (email, password) => {
  //     this.auth.createUserWithEmailAndPassword(email, password);
  //   }

  //   signIn = (email, password) => {
  //     this.auth.signInWithEmailAndPassword(email, password);
  //   }

  //   signOut = () => this.auth.signOut();
    
  //   // passwordReset = email => this.auth.sendPasswordResetEmail(email);

  //   // passwordUpdate = password => this.auth.currentUser.updatePassword(password);

  // }
  
  export default app;
  