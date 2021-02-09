import React,{useState} from "react";

function InputArea(props){
                    const [input,setinput]=useState('');

                    function handleChange(event){
                                        const value =event.target.value
                                        setinput(value);
  }


         return(
                             
                    <div className="form">
        <input
        onChange={handleChange}
        value={input}
         type="text" />
        <button>
          <span 
          onClick={()=>{
          props.onAdd(input);
          setinput("");
          }}
        >Add</span>
        </button>
      </div>
         )
}
export default InputArea