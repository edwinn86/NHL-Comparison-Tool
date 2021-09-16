//Renders correct button depending on submitType


function SubmitButton(props){
    

    if(props.formType === "PlayerCards" || props.formType === "TeamCards"){

        return( <button onClick={() => { props.updateType("Players"); }}>Reset</button> );

    } else if(props.formType === 'Players'){

        return( <button onClick={() => { props.updateType("PlayerCards"); }}>Submit</button> );
    } else {
        return( <button onClick={() => { props.updateType("TeamCards"); }}>Submit</button> );
    }
    

}


export default SubmitButton;