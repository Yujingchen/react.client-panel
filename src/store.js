import { createStore, combineReducers, compose } from "redux";
import firebase from "firebase";
import "firebase/firestore";
import { reactReduxFirebase, firebaseReducer } from "react-redux-firebase";
import { reduxFirestore, firestoreReducer } from "redux-firestore";
import notifyReducer from "./reducers/notifyReducer";
import settingsReducer from "./reducers/settingsReducer";
//Reducers
//@todo

const firebaseConfig = {
  apiKey: "AIzaSyBqka2A4AKlczfdMayrHnr-y6W6TT4bcVM",
  authDomain: "reactclientpanel-febc0.firebaseapp.com",
  databaseURL: "https://reactclientpanel-febc0.firebaseio.com",
  projectId: "reactclientpanel-febc0",
  storageBucket: "reactclientpanel-febc0.appspot.com",
  messagingSenderId: "847753217554"
};

const rrfConfig = {
  userProfile: "users",
  useFirestoreForProfile: true //Firestore for Profile instead of Realtime DB
};

//Init firebase instance
firebase.initializeApp(firebaseConfig);
//Init firestore
const firestore = firebase.firestore();
const settings = {};
firestore.settings(settings);

// Add reactReduxFirebase enhancer when making store creator
const createStoreWithFirebase = compose(
  reactReduxFirebase(firebase, rrfConfig), // firebase instance as first argument
  reduxFirestore(firebase) // <- needed if using firestore
)(createStore);

const rootReducer = combineReducers({
  firebase: firebaseReducer,
  firestore: firestoreReducer, // <- firestoreneeded if using
  notify: notifyReducer,
  settings: settingsReducer
});

// Check for settings in localStorage
if (localStorage.getItem("settings") == null) {
  //Default settings
  const defaultSetiings = {
    disableBalanceOnAdd: true,
    disableBalanceOnEdit: false,
    allowRegistration: false
  };
  //Set to localStorage
  localStorage.setItem("settings", JSON.stringify(defaultSetiings));
  //store default settings(js object) as string in local storage
}

//Create initial state
const initialState = { settings: JSON.parse(localStorage.getItem("settings")) };
// create initialState with settings stored in localstorage that is parsed back to json fotmat
//Create store
const store = createStoreWithFirebase(
  rootReducer,
  initialState,
  compose(
    reactReduxFirebase(firebase),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

export default store;
