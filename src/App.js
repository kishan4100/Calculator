import react, { useState } from "react"; 
 
function App() {

  const[cal,setCal] = useState("")
  const[result,setResult] = useState("")

  const ops = ["/","*","+","-","."]

  const updateCAl = (value) =>{
    if(
      ops.includes(value) && cal === "" || 
      ops.includes(value) && ops.includes(cal.slice(-1))
    ){
      return;
    }
    setCal(cal + value)
    
    if(!ops.includes(value)){
      setResult(eval(cal+value).toString())
    }
  

  }

  console.log(cal);
  console.log(result);



  function createDigits() {
    let digits = []
    for( let i=1; i<10; i++ ){
      digits.push(<button onClick={()=>{updateCAl(i.toString())}} key={i}>{i}</button>)
    }
    return digits
  }

 

  const calculate = ()=>{
    setCal(eval(cal).toString())
  }
  const handleClear = ()=>{
    setCal("")
    setResult("")
  }

  return (
    <div className="App">
        <div className="heading">
          <h1>Basic Calculator</h1>
        </div>
        <div className="calculator">
           <div className="display">
             { result ? <span>({result})</span>: "" }{ cal || 0}
           </div>
           <div className="operators">
             <button onClick={handleClear} > AC </button>
             <button onClick={()=>{updateCAl("/")}} >/</button>
             <button onClick={()=>{updateCAl("*")}} >*</button>
             <button onClick={()=>{updateCAl("+")}}>+</button>
             <button onClick={()=>{updateCAl("-")}} >-</button>
             <button>DEL</button>
           </div>
           <div className="digits">
            {createDigits()}
           <button onClick={()=>{updateCAl("0")}}>0</button>
           <button onClick={()=>{updateCAl(".")}}>.</button>
           <button onClick={calculate} >=</button>
           </div>
        </div>

    </div>
  );
}

export default App;
