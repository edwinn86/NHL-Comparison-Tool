import 'bulma/css/bulma.min.css';
import './App.css';
import sticks from './crossedSticks.png';
import { useState, useEffect } from 'react';
import SubmitButton from './components/SubmitButton';
import {  useRef } from 'react'
import FormBuilder from './components/FormBuilder';



//Top level component. Handles the switching of form types, including the type of button (submit or reset).

function App() {

  const [submitType, updateType] = useState('playerForms');
  const [color1, updateColor1] = useState('selected');
  const [color2, updateColor2] = useState('notSelected');
  const [formCount, addCount] = useState(1);
  const [resetCount, updateReset] = useState(0);
  const messageRef = useRef();


  useEffect(() => {
    if (messageRef.current) {
      messageRef.current.scrollIntoView(
        {
          behavior: 'smooth',
          block: 'end',
          inline: 'nearest'
        })
    }
  })


  //Checks selected form, updates buttons
  if (submitType === "playerForms" && color1 !== 'selected') {
    updateColor1('selected'); updateColor2('notSelected');
  } else if (submitType === "teamForms" && color2 !== 'selected') {
    updateColor2('selected'); updateColor1('notSelected');
  }


  return (
    <div ref = {messageRef} id="mainDiv">


      <div className="section headerSection">
        <div className="container">
          <h1 id="title">NHL Comparison Tool<img className="headPic" src={sticks} alt="headPic" /></h1>
          <br />
          <br />
          <div className="headerOptions">
          <h2>Compare: <button className={color1} onClick={() => { updateType('playerForms'); addCount(1) }}><h2>Players</h2></button> <button className={color2} onClick={() => { updateType('teamForms'); addCount(1); }}><h2>Teams</h2></button></h2>
          <SubmitButton formType={submitType} updateType={updateType} resetCount = {resetCount} updateReset= {updateReset} addCount={addCount}/>
          </div>
        </div>
      </div>
      <FormBuilder type={submitType} formCount={formCount} addCount={addCount} resetCount = {resetCount} />
    </div >
  );
}


//Handles the information stored 


export default App;
