import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom'
import './App.css';
import './components/WordListK'
import WordList from './components/WordListK';

function App() {
  return (
    <WordList />
  );
}

export default App;
