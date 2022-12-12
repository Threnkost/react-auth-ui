import { useRef } from 'react';

const CustomInput = ({ type, name, value, placeholder, onChange }) => {
  
  const textRef  = useRef();
  const inputRef = useRef();

  const handleFocus = (e) => {
    const { value } = e.target;
    
    if(value !== "")
    {
      textRef.current.classList.remove("input-text-anim");

      textRef.current.style.fontSize = "0.7rem";
      textRef.current.style.left     = "10px";
      textRef.current.style.top      = "-0.3rem";
      textRef.current.style.color    = "#000";
      textRef.current.style.backgroundColor = "#fff";
    }
    else 
    {
      textRef.current.classList.add("input-text-anim");
    }
  }

  return (
    <div className="flex flex-col" style={{position: "relative"}}>
      <input
        ref={inputRef}
        className="input p-3 border rounded"
        type={type}
        name={name} 
        onChange={(e) => {
          handleFocus(e);
          onChange(e);
        }}
        onFocus={handleFocus}
      />
      <label className="input-text input-text-anim text-slate-400" ref={textRef} onClick={() => inputRef.current.focus()} >
        {placeholder.toUpperCase()}
      </label>
    </div>
  );
}

export default CustomInput;