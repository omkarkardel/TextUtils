import React, {useState} from "react";

export default function TextForm(props) {
    const handleUpClick = () => {
        //  console.log("Upper Case Was Click" + text);
         let newText = text.toUpperCase();
         setText(newText);
    }
    const handleLoClick = () => {
        //  console.log("Upper Case Was Click" + text);
         let newText = text.toLowerCase();
         setText(newText);
    }
    const handleClear = () => {
         let newText = '';
         setText(newText);
    }
    const handleCopy = () => {
      let text = document.getElementById("mybox");
      text.select();
      navigator.clipboard.writeText(text.value);
    }
    const RemoveExtraSpace = () => {
      let newText = text.split(/[ ]+/);
      setText(newText.join(" "));
    }

    const handleOnChange = (event) => {
        console.log("On Change");
        setText(event.target.value);
    }
    

const [text, setText] = useState('');
  return (
    <>
      <div className="container" style={{color: props.mode==='dark' ? 'white':'black'}}>
        <h1>{props.heading}</h1>
        <div className="mb-1">
        <textarea className="form-control" value={text} onChange={handleOnChange} id="mybox" rows="8" style={{backgroundColor:props.mode==='dark' ? 'grey':'white', color: props.mode==='dark' ? 'white':'black' }}></textarea>
        <button className=" btn btn-primary mx-1"onClick={handleUpClick}>UpperCase</button>
        <button className=" btn btn-primary mx-1"onClick={handleLoClick}>LowerCase</button>
        <button className=" btn btn-primary mx-1"onClick={handleClear}>Clear Text</button>
        <button className=" btn btn-primary mx-1"onClick={handleCopy}>Copy Text</button>
        <button className=" btn btn-primary mx-1"onClick={RemoveExtraSpace}>Remov Space</button>
        </div>
        <div className="container my-1" style={{color: props.mode==='dark' ? 'white':'black'}}>
            <h1>Your text summary</h1>
            <p>{text.split(" ").length} words and {text.length} characters</p>
            <p>{0.008 * text.split(" ").length} Minutes read</p>
            <h2>Preview</h2>
            <p>{text.length>0?text:"Enter something to preview here"}</p>
        </div>
       
      </div>
    </>
  );
}
