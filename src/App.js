import './App.css';
import image from "./photo.png"
 import car from "../src/BMW.mp4"
import './style.css'
function App() {
  return (
    <div className="App" style={{border:"solid 1px black", maxWidth:"100wv"}} >
  <h1 className="titel">MY NAME AYMEN HAJI</h1>
  <br/>
  <img src={image} alt="" />
  <img src="photo.png" alt="" />
 <video width="750" height="500" controls >
      <source src={car} type="video/mp4"/>
     </video>
     <br/>
     <p className="footer">HAVE A NICE DAY</p>
    </div>
  );
}

export default App;
