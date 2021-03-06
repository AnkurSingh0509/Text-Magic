import React, {useState} from 'react'


export default function TextForm(props) {
    const handleUpClick = ()=>{
        console.log("Uppercase was clicked: " +  text);
        let newText = text.toUpperCase();
        setText(newText)
        
    }

    const handleLoClick = ()=>{ 
        let newText = text.toLowerCase();
        setText(newText)
        
    }

    const handleClearClick = ()=>{ 
        let newText = '';
        setText(newText)
        
    }

    const handleOnChange = (event)=>{
        // console.log("On change");
        setText(event.target.value)
    }

    const handleCopy=()=>{
       var text= document.getElementById("mybox")
        text.select();
        navigator.clipboard.writeText(text.value)
        document.getSelection().removeAllRanges();
    }

    const [text, setText] = useState(''); 
    // text = "new text"; // Wrong way to change the state
    // setText("new text"); // Correct way to change the state
    return (
        <>
        <div className="container" style={{color:props.mode=== 'dark' ? 'white ':'#042743' }}> 
            <h1>{props.heading}</h1>
            <div className="mb-3"> 
            <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode=== 'dark' ? '#13466e ':'white' , color:props.mode=== 'dark' ? 'white ':'#042743', }}  id="myBox" rows="8"></textarea>
            </div>
            <button disabled={text.length===0}className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to Uppercase</button>
            <button disabled={text.length===0} className="btn btn-primary mx-1" onClick={handleLoClick}>Convert to Lowercase</button>
            <button disabled={text.length===0} className="btn btn-primary mx-1" onClick={handleClearClick}>Clear Text</button>
            <button disabled={text.length===0} className="btn btn-primary mx-1" onClick={handleCopy}>Copy Text</button>
        </div>
        <div className="container my-3" style={{color:props.mode=== 'dark' ? 'white ':'#042743' }} >
            <h2>Your text summary</h2>
            <p>{text.split(" ").filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
            <p>{0.008 *text.split(" ").filter((element)=>{return element.length!==0}).length}Minustes Taken</p>
            <h2>Preview</h2>
            <p>{text.length>0?text:"enter something to preview"}</p>
        </div>
        </>
    )
}
