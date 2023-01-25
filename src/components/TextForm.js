import React, { useState } from 'react'

export default function TextForm(props) {
    const [text, setText] = useState('');

    const onSubmit = () => {
        console.log("feedback submitted")
    }

    const handelOnChange = () => {
        setText(this)
        console.log("valueis changing")
    }

    return (
    <div>
        <div className="mb-3">
            <h1>{props.heading}</h1>
            {/* <label htmlFor="textExp" className="form-label">Example textarea</label> */}
            <textarea className="form-control" value={text} onChange = {handelOnChange} id="exampleFormControlTextarea1" rows="3"></textarea>
        </div>
        <button className="btn btn-primary" onClick={onSubmit}>Submit</button>
    </div>
    )
}
