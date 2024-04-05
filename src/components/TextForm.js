import React, { useState } from 'react'

export default function TextForm(props) {

    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText)
            props.showAlert("Converted To uppercase", "Success")
    }
    const handleLcClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted To lowercase", "Success")
    }
    const handleScClick = () => {
        const upText = text.split(" ");
        // console.log(upText);
       const capitalize = upText.map((item) => {
        // console.log(item)
        // console.log(item.slice(1).toLowerCase());
        return item[0].toUpperCase() +item.slice(1).toLowerCase(); 
       });
       setText(capitalize.join(" "));
        props.showAlert("Converted To sentence Case", "Success");
    }
    const handleClrClick = () => {
        let newText ='';
        setText(newText);
            props.showAlert("Cleared", "Success")
    }

    const handleRmvExSpace = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
            props.showAlert("Extra Space has been Removed", "Success")
    }
    const handleCopy = () => {
        var  text = document.getElementById('myBox');
        text.select();
        navigator.clipboard.writeText(text.value);   
        props.showAlert("Copied to Clipboard", "Success") 
    }

    const handleOnChange = (event) => {
        setText(event.target.value)
    }
    const [text, setText] = useState('Enter text here');
  return (
    <>
    <div className='container' style={{color: props.mode==='light'?'#042743':'white'}}>
            <h1>{props.heading}</h1>
            <div className="mb-3">
            <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='light'?'white':'#042743', color: props.mode==='light'?'#042743':'white'}} id="myBox" rows="3"></textarea>
            </div>
                <button type="button" className="btn btn-primary me-2" onClick={handleUpClick} >Convert to Uppercase</button>
                <button type="button" className="btn btn-primary me-2" onClick={handleLcClick} >Convert to LowerCae</button>
                <button type="button" className="btn btn-primary me-2" onClick={handleScClick} >Convert to Sentence Case</button>
                <button type="button" className="btn btn-primary me-2" onClick={handleClrClick} >Clear Text</button>
                <button type="button" className="btn btn-primary me-2" onClick={handleCopy} >Copy Text Text</button>
                <button type="button" className="btn btn-primary me-2" onClick={handleRmvExSpace} >Remove Extra Space</button>
    </div>
    <div className='container my-3'  style={{color: props.mode==='light'?'#042743':'white'}}>
        <h2>Your Text Summary</h2>
        <p>{text.split(" ").length} words and {text.length} characters</p>
        <p>{0.008 * text.split(" ").length} Minutes  read.</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:'Enter something  to see the preview.'}</p>
    </div>
    </>
  )
}
