import Rebase from 're-base'
import firebase from 'firebase/app'
import 'firebase/database'


// Ce qui va initialiser notre application
const firebaseApp = firebase.initializeApp({ 
    apiKey: "AIzaSyDpL4S75VbEp7B3DrQjLDbNiV1djy3s75s",
    authDomain: "messagerie-app-63f55.firebaseapp.com",
    databaseURL: "https://messagerie-app-63f55-default-rtdb.firebaseio.com"
})

// Sera la base de données
const base = Rebase.createClass(firebase.database())

export { firebaseApp} // export nommée

export default base