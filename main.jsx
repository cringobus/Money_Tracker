import './Calculator.css'

const handleClick = () => {
  alert("Button clicked!");
};

const Calculator = () => {
  return (
    <>
      <div className="Calculator">
          <h1>Calculator</h1> 
          <div className="entry-form">
            <div className="entry-form-ammount">
                <p style={{ alignSelf: 'left' }}>Ammount</p>
                <input name="ammount" style={{ height: '30px', width: '150px' }}/>   
            </div> 
            <div className="entry-form-purpose">
                <p style={{ alignSelf: 'right' }}>Purpose</p>
                <input name="purpose" style={{ height: '30px', width: '150px' }}/>   
            </div>
            <div className="entry-form-category">
                <p style={{ alignSelf: 'left' }}>Category</p>
                <input name="category" style={{ height: '30px', width: '150px' }}/>    
            </div>
            <div className="entry-form-comment">
                <p style={{ alignSelf: 'right' }}>Comment</p>
                <input name="comment" style={{ height: '30px', width: '150px' }}/> 
            </div>
          </div>
          <button onClick={handleClick}>
            Submit Data
          </button>
        </div>

    </>
  );
};

export default Calculator;