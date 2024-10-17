
import './App.css'
import Counter from './counter'
import Counter1 from './counter1'


function App() {

//
// function useState(num){
//      function innnerState(value){
//           num = value
//      }
//      return [num,innnerState]
// }

// const [num , setCount] = useState(5)
// console.log(useState(5))


 function handleClick(){
        alert('hello')
 }
      
  const handleClick2= ()=>{
       alert('hello from btn 2')
  }

  const handleClick3 = ()=>{
    alert('hello from btn 3')
  }

  const handleClick4= (item1, item2) =>{
    const cal = item1 * item2
    alert("hello from btn four" + " " + cal)
  }

  // on mouse inter
  const handleMouseInter= (item1, item2) =>{
    const cal = item1 * item2
    alert("hello from btn four" + " " + cal)
  }
  return (
    <>
     <Counter1></Counter1>
     <Counter></Counter>
    
      
       <h1>bTn handler</h1>
       <button onClick={handleClick}>click</button>
       <button onClick={handleClick2}>click2</button>
       <button onClick={handleClick3}>click3</button>
       {/* if we want to pass the arguement on the params by the on click than we need to write the function on the btn onClick{} */}
       <button onClick={()=>handleClick4(10,20)}>Click 4</button>
      {/* //we can write an anonimous function on oClick{}*/}
       <button onClick={()=>{alert('hello from btn 5')}}>click 5</button> 
       {/* handle mouse event handler */}
       <button onMouseUp={()=>{alert('hello from btn 5')}}>Mouse Enter</button> 
    </>
  )
}

export default App
