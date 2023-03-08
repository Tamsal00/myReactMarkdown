import React,{useState} from "react";
import "./previewer.css";
import {marked} from "marked";

export default function Previewer({ markdown }) {
  const html = marked(markdown);
  const [isExpanded,setIsExpended] = useState(false);

  return (
    <div id="preview" className={isExpanded ? "expanded" : ""}>
      <div id="pLabel">
        <h2>Previewer</h2>
        <img src="assests/1.png" 
        onClick={()=>setIsExpended(!isExpanded) }
        alt="img not found" />
      </div>
      <div id="divP" >
        <p dangerouslySetInnerHTML={{ __html: html }}></p>
      </div>
    </div>
  );
}
