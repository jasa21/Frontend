import React, {useState} from "react";
import { TrixEditor } from "react-trix";
import "trix/dist/trix";
import "trix/dist/trix.css";

function MyEditor() {
  const [value, setValue] = useState("")
  const handleChange = (e, event) => {
    console.log(event);
    setValue(event);
    // html is the new html content
    // text is the new text content
  };
  const handleSave = () => {
    console.log(value)
    // html is the new html content
    // text is the new text content
  };


    return (
    <div>
      <div>
          <TrixEditor
          placeholder="edit here"
          onChange={handleChange}/>
      </div>
        <div>
          <button onClick={handleSave}>Save</button>
        </div>
    </div>
    );
  }

export default MyEditor;