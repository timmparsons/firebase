/**
 * To find your Firebase config object:
 * 
 * 1. Go to your [Project settings in the Firebase console](https://console.firebase.google.com/project/_/settings/general/)
 * 2. In the "Your apps" card, select the nickname of the app for which you need a config object.
 * 3. Select Config from the Firebase SDK snippet pane.
 * 4. Copy the config object snippet, then add it here.
 */
const firebaseConfig = {
  apiKey: "AIzaSyBmso0D2bXaWRBCFBWczAvR8tNOWVAADyY",
  authDomain: "friendlychat-70c1d.firebaseapp.com",
  projectId: "friendlychat-70c1d",
  storageBucket: "friendlychat-70c1d.appspot.com",
  messagingSenderId: "98081008822",
  appId: "1:98081008822:web:cdd63893e9bf185d388a17"
};

export function getFirebaseConfig() {
  if (!config || !config.apiKey) {
    throw new Error('No Firebase configuration object provided.' + '\n' +
      'Add your web app\'s configuration object to firebase-config.js');
  } else {
    return config;
  }
}