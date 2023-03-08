import Editor from "../editor/Editor"
import Previewer from "../previewer/Previewer"
import "./home.css"
import React, { useState } from "react";

export default function Home() {

  const [markdown, setMarkdown] = useState("");

  function handleInputChange(newMarkdown) {
    setMarkdown(newMarkdown);
  }
  return (
    <div className="home">
      <Editor onInputChange={handleInputChange} />
      <Previewer markdown={markdown} />
    </div>
  )
}
