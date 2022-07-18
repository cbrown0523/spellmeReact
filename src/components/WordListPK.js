import React , {useState} from 'react';
  import ReactDOM from 'react-dom';
  import '../index.css';
  import App from '../App';
  import {Container, Button} from 'react-bootstrap'
  import axios from "axios";
  import $ from 'jquery'

  export default function WordListPK(props) {
  
    let wordlistPK = ["even", "felt", "camp", "land", "few", "front", "hundred","country", "kept", "grew", "finger", "across", "feel", "cause", "enough", "center", "different", "knew", "between", "gone"]
    const [ word, setWord] = useState([wordlistPK]);
    const [newWord , setNewList] = useState("");
    const handleInputChange = event =>{
        setNewList(event.target.value) ;
    };
    
    const handleAdd = ()=>{
        const newList = word.concat({newWord});
        setWord(newList);

    }
    const handleInput = event =>{ setWord((word) => [...word, word])}
 
    const logValue = () => {
        console.log(word);
      };
    
    return (
      <>
      
        <ul>
          {wordlistPK.map((wordlistPKs) => <Words item={wordlistPKs} />)}
        </ul>
        <div className="input-group mb-3">
       
       <input  className="form-control" id="wordF" aria-label="Username" />

     </div>
     <button type="button" onChange= {handleInputChange} className="btn btn-light addword">Add</button>
     <button type="button" onClick= {handleAdd} className="btn btn-light">Remove</button>
        
      </>
    );
  }
  function Words(props) {
    return <li><input type="checkbox" id={props.item} value={props.item}></input>{ props.item }</li>
  }
  function addWordPK(){
    let newWord = document.querySelector(".addNewPKWord");
    let word = document.getElementById("wordPK").value;
    let input = document.createElement("input");
   input.setAttribute("type","checkbox");
   input.setAttribute("value", word);
   input.classList.add("checkbox");
   input.id = word;
   let label = document.createElement("label");
    let li = document.createElement('li');
   li.className = `list-group-item ${word} `  ;

   li.innerHTML = word;
   let new1 = newWord.appendChild(li);
   let new2 = new1.appendChild(label);
 let new3 = new2.appendChild(input);
   }