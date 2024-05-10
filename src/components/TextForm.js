import React, { useState } from "react"

export default function TextForm(props) {
    const [text, setText] = useState("")

    const handleUpClick = () => {
        setText(text.toUpperCase())
    }
    const handleDownClick = () => {
        setText(text.toLowerCase())
    }
    const handleOnChange = (event) => {
        setText(event.target.value)
    }
    const handleClearClick = () => {
        setText("")
    }
    const handleCopyClick = () => {
        const text = document.getElementById('MyBox');
        text.select();
        navigator.clipboard.writeText(text.value);
        document.getSelection().removeAllRanges();
    }

    return (
        <>
            <div className={`container text-${props.mode === 'black' ? 'white' : 'black'}`}>
                <h4>{props.heading}</h4>
                <div className="mb-3" >
                    <textarea className="form-control" value={text} id="MyBox" rows="5" style={{ backgroundColor: props.mode === 'black' ? 'grey' : 'white', color: props.mode === 'dark' ? 'white' : 'black' }} onChange={handleOnChange}></textarea>
                </div>
                <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleUpClick}> Convert to UpperCase </button>
                <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleDownClick}> Convert to LowerCase </button>
                <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleCopyClick}> Copy Text </button>
                <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleClearClick}> Clear text </button>
            </div>
            <div className={`container text-${props.mode === 'black' ? 'white' : 'black'}`}>
                <h4>Text Summary</h4>
                {/* <p>{text.split(" ").length} words, {text.length} letters</p> */}
                <p>{text.split(" ").length - text.split(" ").filter(item => item === "").length} words, {text.length} letters</p>
            </div>
        </>
    )
}