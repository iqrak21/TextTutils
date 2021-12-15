import React,{useState} from 'react'

export const Form = (props) => {
    const [Text,setText]=useState('');
    const handleUpClick=()=>{
        let newText=Text.toUpperCase();
        setText(newText);
    }
const handleOnChange=(event)=>{
setText(event.target.value);
}

const handleDownClick=()=>{
    let newText=Text.toLowerCase();
    setText(newText);
}
const handleClearText=()=>{
    let newText='';
    setText(newText);
}



    return (

        <div>
            <h1>{props.heading}</h1>
            <div class="mb-3 my-3">
                <textarea class="form-control" id="mybox" rows="8" value={Text} onChange={handleOnChange}></textarea>

                <button type="button" class="btn btn-primary my-3 mx-1" onClick={handleUpClick}>UpperCase</button>
                <button type="button" class="btn btn-primary my-3 mx-1" onClick={handleDownClick}>LowerCase</button>
                <button type="button" class="btn btn-primary my-3 mx-1" onClick={handleClearText}>Clear Text</button>
                
            </div>
            <div className="container">
                <h2>Text Analysis</h2><hr/>
                <p>Total Words : {Text.split(" ").length}</p> 
                <p>Total characters : {Text.length}</p>

            </div>
        </div>
    )
}
