import React,{useState} from 'react'
import PropTypes from 'prop-types'


export default function TextForm(props) {

    const [text,setText] = useState('');

    const handleUpClick=()=>{
        const newText=text.toUpperCase();
        setText(newText);
    }
    const handleOnChange=(event)=>{
        setText(event.target.value);
    }
    const handleLoClick=()=>{
        const newText=text.toLowerCase();
        setText(newText);
    }
    const handleBold=(event)=>{
        let x=document.getElementById('exampleFormControlTextarea1');
        if(x.style.fontWeight==="bold")
        x.style.fontWeight="normal";
        else
        x.style.fontWeight="bold"
    }
    const speak = () => {
        let msg = new SpeechSynthesisUtterance();
        msg.text = text;
        window.speechSynthesis.speak(msg);
    }
    const copyText=() => {
        navigator.clipboard.writeText(text);
    }
    const clearText=() => {
        setText('');
    }
  return (
    <>
        <div className={`container mt-30 mb-3 text-${props.mode==='light'?'dark':'light'}`}>
            <h3>{props.title}</h3>
            <div className="mb-3">
            <textarea className="form-control" value={text} onChange={handleOnChange} id="exampleFormControlTextarea1" rows="8" placeholder='Enter text here ^_-'></textarea>
            <button className="btn btn-primary my-4 me-4" onClick={handleUpClick}>To Upper Case</button>
            <button className="btn btn-primary my-4 me-4" onClick={handleLoClick}>To Lower Case</button>
            <button className="btn btn-primary my-4 me-4" onClick={speak}>Speak</button>
            <button className="btn btn-primary my-4 me-4" onClick={handleBold}>Bold</button>
            <button className="btn btn-primary my-4 me-4" onClick={copyText}>Copy</button>
            <button className="btn btn-primary my-4 me-4" onClick={clearText}>Clear</button>
            </div>
        </div>
        <div className={`container my-5 text-${props.mode==='light'?'dark':'light'}`}>
            <h3>Text Summary</h3>
            <p>{text.trim().length ? text.match(/\S+/g).length : 0} words and {text.length} characters.</p>
            <p>{text.trim().length ? text.match(/\S+/g).length * 0.008: 0} minutes read </p>
            <h3>Preview</h3>
            <p>{text}</p>
        </div>
    </>
  )
}

TextForm.propTypes = {
    title : PropTypes.string
}

