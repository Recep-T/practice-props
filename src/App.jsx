import './App.css';
import Info from "./components/Info"
import img from "./assets/img.png";
const App =()=> {
  return (
    <div className="App">
     <h1 style ={{color:"#61DBFB", fontSize:"3rem"}}>Hello There</h1>
     <Info name = 'Recep' lastName = 'Taylanhan' jobTitle= 'React Developer' img ={img}/>
    </div>
  );
}

export default App;
