import React from "react";
import "./Form.css";

function Form() {
  return (
    <form>
      <label>
        Product Name 
        <input type="text" />
      </label>
      <br />
      <label>
        Product Model
        <input type="text" />
      </label>

     
        <label>
          Barcode Id
          <input type="text" />
        </label>
        <br />
        <label>
          Description
          <input type="text" />
        </label>
        <br />
        <button>Add</button>
        <button>View</button>
        {/* <button>Button 3</button> */}
     
    </form>
  );
}

export default Form;
