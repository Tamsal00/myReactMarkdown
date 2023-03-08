import "./editor.css";
import React, {useState} from "react";

export default function Editor({onInputChange}) {

  const [markdown,setMarkdown]=useState('Welcome to my react markdown');
  const [editorExpanded, setEditorExpanded] = useState(false);

  function handleInputChange(event){
       const newMarkdown = event.target.value;
       setMarkdown(newMarkdown);
       onInputChange(newMarkdown);
  }

  return (
    <div id="editor" className={editorExpanded ? "editorExpanded" : ""}>
         <div id="Label">
            <h2>Editor</h2>
            <img src="assests/1.png" 
              onClick={()=>setEditorExpanded(!editorExpanded) }
            alt="img not found"/>
         </div>
         <div className="text">
         <textarea value={markdown} className={editorExpanded ? "textExpand" : ""} onChange={handleInputChange}>
         </textarea>
         </div>
    </div>
  )
}
