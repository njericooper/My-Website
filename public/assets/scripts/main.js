var admin = require ('firebase-admin');
var refreshToken; // Get refresh token from OAuth2 flow

admin.initializeApp({
  credential: admin.credential.refreshToken(refreshToken),
  databaseURL: 'https://og-codes.firebaseio.com/'
});

const firebaseConfig = {
  apiKey: "AIzaSyDuWg8Y8lKT_ZnMdGbo2REGT_BrqR3tXW8",
  authDomain: "og-codes.firebaseapp.com",
  databaseURL: "https://og-codes.firebaseio.com",
  projectId: "og-codes",
  storageBucket: "og-codes.appspot.com",
  messagingSenderId: "166622941576",
  appId: "1:166622941576:web:43fae4fa738e1267"
};
firebaseConfig();
