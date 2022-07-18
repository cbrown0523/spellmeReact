import React , {useState} from 'react';
import ReactDOM from 'react-dom';
import '../index.css';
import App from '../App';
import {Container, Button} from 'react-bootstrap'
import axios from "axios";
import $ from 'jquery'
import WordListF from "../components/WordListF"
import WordListPK from './WordListPK';

export default CheckBox = () => {
    const [checked, setChecked] = React.useState(false);
  
    const handleChange = () => {
      setChecked(!checked);
    };
  
    return (
      <div>
        <label>
          <input
            type="checkbox"
            checked={checked}
            onChange={handleChange}
          />
         
        </label>
        </div>
         );
        };
        