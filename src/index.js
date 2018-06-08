import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as firebase from 'firebase';

const config = {
    apiKey: "AIzaSyDD7wbqvHtNJduUMyroD9hJ2M5Cg2IhWSo",
    authDomain: "react-portfolio-8cce8.firebaseapp.com",
    databaseURL: "https://react-portfolio-8cce8.firebaseio.com",
    projectId: "react-portfolio-8cce8",
    storageBucket: "react-portfolio-8cce8.appspot.com",
    messagingSenderId: "216167146701"
};
firebase.initializeApp(config);

ReactDOM.render(<App />, document.getElementById('root'));
