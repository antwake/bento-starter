import firebase from 'firebase/app'
import 'firebase/auth'

// The configuration below is not sensitive data. You can serenely add your config here
const config = {
  apiKey: 'AIzaSyBJJ8I3VBoX8nue3TGRRLVkKCTGyu2qi3w',
  authDomain: 'epicerie-mai-2019.firebaseapp.com',
  databaseURL: 'https://epicerie-mai-2019.firebaseio.com',
  projectId: 'epicerie-mai-2019',
  storageBucket: 'epicerie-mai-2019.appspot.com',
  messagingSenderId: '358081810881',
  appId: '1:358081810881:web:55b38f3a3b633dd4'
}

firebase.initializeApp(config)
