//Renders correct button depending on submitType


function SubmitButton(props){

    console.log(props.formType);
    

    if(props.formType === "playerCards" || props.formType === "teamCards"){

        return( <button id="submitButton" onClick={() => { props.updateType("playerForms"); props.addCount(1); props.updateReset(props.resetCount + 1)}}>Reset</button> );

    } else if(props.formType === 'playerForms'){

        return( <button id="submitButton" onClick={() => { props.updateType("playerCards"); }}>Submit Players</button> );
    } else {
        return( <button id="submitButton" onClick={() => { props.updateType("teamCards"); }}>Submit Teams </button> );
    }
    

}


export default SubmitButton;