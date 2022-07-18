
  import React , {useState} from 'react';
  import ReactDOM from 'react-dom';
  import '../index.css';
  import App from '../App';
  import {Container, Button} from 'react-bootstrap'
  import axios from "axios";
  import $ from 'jquery'
  import WordListF from "../components/WordListF"
import WordListPK from './WordListPK';
  
  export default function WordList() {
    function sayhello(){
        alert("hello");
    }
    function Words(props) {
      const [checked, setChecked] = useState(false);
      const handleChange1 = () => {
        setChecked(!checked); console.log(checked)
      };
        return <li><input type="checkbox" checked={checked}
        onChange= {handleChange1} id={props.item} value={props.item}></input>{ props.item }</li>
    
      }
        
       function WordListK() {
        let wordlistK = ["make", "they", "too", "jump", "move", "run", "two", "again", "help", "new", "there", "she", "so", "soon", "that", "there", "use", "could", "live", "one", "then", "three"]
    const [word , setWord] = useState(wordlistK);
    const [addWord , setAddWord] = useState("");
    //const [wordList , setWordList] = useState([]);
    
    const handleChangeAddWord = event =>{
      setAddWord(event.target.value);
    }
    const handleClick = event =>{
      setWord([...word , addWord]);    }
    console.log(word);
        //     const [ word, setWord] = useState(wordlistK);
    //     const [newWord , setNewList] = useState("");
    //     const handleInputChange = event =>{
    //         setNewList(event.target.value) ;
    //        console.log(handleInputChange);
    //     };
    //     console.log(setNewList)
        
    //     const handleAdd = ()=>{
    //         const newList = word.concat({newWord});
    //         setWord(newList);
    //         console.log(setNewList);
    //         console.log(handleInputChange);
    //     }
    //     const handleInput = event =>{ setWord((word) => [...word, word])}
    //  console.log(newWord)
    //     const logValue = () => {
    //         console.log(word);
    //       };

          function addWordK(){
            let newWord = document.querySelector(".addNewKWord");
            let word = document.getElementById("wordK").value;
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
        
        
        return (
          <>
          
            <ul>
            {word.map((wordlistKs) => <Words item={wordlistKs} />)}            </ul>
            <div className="input-group mb-3">
           
           <input onChange={handleChangeAddWord} className="form-control" id="wordF" aria-label="Username" />

         </div>
         <button type="button" onClick= {handleClick} className="btn btn-light addword">Add</button>
         <button type="button"  className="btn btn-light">Remove</button>
            
          </>
        );
      }
    return (
     
     <div> 

         <nav className="navbar navbar-expand-lg" style={{backgroundColor: '#f0bfdf'}}>
<div className="container-fluid">
  <a className="navbar-brand" href="#">
    <img src="/docs/5.2/assets/brand/bootstrap-logo.svg" alt width={30} height={24} className="d-inline-block align-text-top" />
    Spell Me
  </a>
  <div className="collapse navbar-collapse d-flex flex-column align-items-end" id="navbarNav">
    <ul className="navbar-nav ">
      <li className="nav-item">
        <a className="nav-link active" aria-current="page" href="#">Parent</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Register</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Pricing</a>
      </li>
      <li className="nav-item">
        <a className="nav-link disabled">Disabled</a>
      </li>
    </ul>
  </div>
</div>
</nav>
  <div className="container">
    <div className="row">
      <h1 className="title">Word Lists</h1> 
    </div>         
    <div className="row justify-content-center">
      <div className="col-4 mx-auto columns ">
        <div className="card cardPK" style={{width: '18rem'}}>
          <div className="slider1 dropdown">
            <img src="../../../assets/pk.png" className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title kbody">Pre k</h5>
            </div>
          </div>
          <ul className=" pkbody list-group list-group-flush addNewPKWord">
          </ul>
          <div className="card-body">
            <WordListPK />
          </div>
        </div>
      </div>
      <div className="col-4 mx-auto">
        <div className="card cardK" style={{width: '18rem'}}>
          <div className="slider2">
            <img src="../../../assets/k.jpg" className="card-img-top" alt="..." />
            <div className="card-body">
              {/* <h5 class="card-title">Kindergarten</h5> */}
            </div>
          </div>
          <ul className=" kbody list-group list-group-flush addNewKWord">
          </ul>
          <div className="card-body">
            < WordListK />
          </div>
        </div>                      
      </div>
      <div className="col-4 mx-auto">
        <div className="card cardF" style={{width: '18rem'}}>
          <div className="slider3">
            <img src="../../../assets/1gde.png" className="card-img-top" alt="..." />
            <div className="card-body">
              {/* <h5 class="card-title">First Grade</h5> */}
            </div>
          </div>
          <ul className=" fbody list-group list-group-flush addNewFWord">
          </ul>
          <div className="card-body">
               <WordListF />
        
          </div>
        </div>
      </div>
    </div>
  </div>
  <div id="metered-frame" />
  </div>

        );
       
    
    }
  
  

