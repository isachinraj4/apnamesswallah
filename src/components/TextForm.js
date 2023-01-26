import React, { useState } from 'react'

export default function TextForm(props) {
    const [text, setText] = useState('');

    const onSubmit = () => {
        console.log("feedback submitted")
        let newFeedback = text.toUpperCase();
        setText(newFeedback);
        props.showAlert("Feedback submitted!", "success");
    }

    const onCancle = () => {
        setText("");
        props.showAlert("Feedback cancled!", "success");
    }

    const handelOnChange = (event) => {
        setText(event.target.value);
    }

    const removeSpaces = () =>{
        let newTxt = text.split(/[ ]+/);
        setText(newTxt.join(" "));
        props.showAlert("Extra spaces removed from feedback!", "success");
    }

    return (
    <>
        <div>
            <div className="mb-3" style={{color: props.mode === 'dark'? 'white': 'black'}}>
                <h1>{props.heading}</h1>
                <textarea className="form-control" style={{backgroundColor: props.mode === 'dark'? 'gray': 'white', color: props.mode === 'dark'? 'white': 'black'}}
                 value={text} onChange = {handelOnChange} id="myBox" rows="3"></textarea>
            </div>
            <button className="btn btn-primary mx-2" onClick={onSubmit} disabled= {text.trim().length === 0? true: false}>Submit</button>
            <button className="btn btn-primary mx-2 my-3" onClick={onCancle}>Cancle</button>
            <button className="btn btn-primary mx-2" onClick={removeSpaces}>Remove Extra Spaces</button>
        </div>

        <div className="container my-3" style={{color: props.mode === 'dark'? 'white': 'black'}}>
            <h1>Your feedback info</h1>
            <p>{(text.trim().length === 0) ? 0 : text.trim().split(/[ ]+/).length} words and {text.length} characters</p>
            <p>{0.008 * text.split(" ").length} minutes takes to read</p>
            <h2>Feedback preview</h2>
            <p>{text.length > 0 ? text: "Enter you feedback above to preview it here!"}</p>

        </div>
    </>
    )
}
