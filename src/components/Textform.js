import React ,{useState}from 'react'

    

export default function Textform(props) {
 
const handleUpClick =()=>{
    console.log("Uppercase was clicked" + text);
    
    let newText =text.toUpperCase();
    setText(newText)
    props. showAlert("Converted to Uppercase","success");
}
const handleDownClick=()=>{
  console.log("lowercase" +text);

  let newText= text.toLowerCase();
  setText(newText)
  props. showAlert("Converted to Lowercase","success");
}
const handleclearClick=()=>{
  let newText= " ";
  setText(newText)
  props. showAlert("Clera Screen","success");
}
 const handleCopy =()=>{
  var text =document.getElementById("myBox");
  text.select();
  navigator.clipboard.writeText(text.value);
  props. showAlert("Copy Text","success");
 }
const handleOnChange =(event)=>{
    console.log("On change");
    setText(event.target.value);
}
const handleExtraSpace =()=>{
  let newText= text.split(/[ ]+/);
  setText(newText.join(" "))
  props. showAlert("Remove ExtraSpace","success");
}



    const [text, setText] = useState('Enter text here');
  return (
    <>
    <div className='Container' style={{color:props.mode ==='dark'?'white':'black'}}>
   <h1>{props.heading}</h1> 
<div className="mb-3">
 
  <textarea className="form-control" style={{backgroundColor:props.mode ==='light'?'white':'#2a3139',color:props.mode ==='dark'?'white':'black'}}  value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
</div>
<button className="btn btn-primary" onClick={handleUpClick}>Convert to Uppercase</button>

<button className="btn btn-primary mx-2" onClick={handleDownClick}>Convert to Lowercase</button>
    
<button className="btn btn-primary" onClick={handleclearClick}>Clear text</button>
<button className="btn btn-primary mx-2" onClick={handleCopy}>Copy text</button> 
<button className="btn btn-primary mx-2" onClick={handleExtraSpace}>Remove extra space</button>
</div>

    <div className="container my-3" style={{color:props.mode ==='dark'?'white':'black'}}>
      <h2>Your Text Summary</h2>
      <p>{text.split(" ").length} words and {text.length} characters</p>
      <p>{0.008*text.split(" ").length} Minutes to read</p>    
    <h2>Preview</h2>
    <p>{text.length>0?text:"Enter something in the textbox above to preview it here"}</p>
    </div>
    </>
  )
}
