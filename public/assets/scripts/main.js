
var admin = require('firebase-admin');
var refreshToken; // Get refresh token from OAuth2 flow

admin.initializeApp({
  credential: admin.credential.refreshToken(refreshToken),
  databaseURL: 'https://og-codes.firebaseio.com/'
});


