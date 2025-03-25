import React from "react"

function InputField({label, value, onChange}) {

  return (
    <>
        <label>{label}</label>
        <input type="text" value={value} onChange={onChange}/>
    </>
  )
}

export default InputField;
