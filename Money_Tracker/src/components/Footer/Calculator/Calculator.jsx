import { useState } from "react";
import axios from "axios";
import "./Calculator.css";

const Calculator = () => {
  const [ammount, setAmmount] = useState("");
  const [purpose, setPurpose] = useState("");

  const [serverResponse, setServerResponse] = useState([]);

const createTransaction = async() => {
  const response = await axios.post('http://localhost:3000/api/v1/transactions/create', {type: purpose, price: ammount})
  setServerResponse(response.data.message)
}

  return (
    <>
      <div className="Calculator">
        <h1>Calculator</h1>
        <hr />
        <div className="entry-form">
          <div className="entry-form-ammount">
            <input 
            name="ammount" 
            value={ammount}
            onChange={(e)=>{setAmmount(e.target.value)}}
            placeholder='Enter ammount here'
            className="input" 
            />
          </div>
          <div className="entry-form-ammount">
            <input 
            name="purpose"
            value={purpose}
            onChange={(e)=>{setPurpose(e.target.value)}}
            placeholder='Enter purpose here' 
            className="input" 
            />
          </div>
          <button
          onClick={()=>{createTransaction()}}
          >
            Add transaction
          </button>
          {serverResponse && <p>{serverResponse}</p>}
        </div>
      </div>
    </>
  );
};

export default Calculator;
