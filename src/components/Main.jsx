import react from 'react';
import { ReactDOM } from 'react-dom';
import './Main.css';
function Main (){
    return(
        <div className="Main">
            <div className="container">
                 <div className="box"> 
                <h2>Welcome Back!</h2>
                <button>Add</button>
                 </div>
             <ul>
                <li><input type="checkbox" id="" /> feed the cows <button>delete</button> </li>
                <li><input type="checkbox" id="" />go buy groceries</li>
                <li><input type="checkbox" id="" />attend choir practice</li>
             </ul>
            
            </div>
        </div>
    )
}
export default Main