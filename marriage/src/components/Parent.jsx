import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Message from "./Message";
import {Link,Routes,Route} from "react-router-dom"

const Riyaz=()=>{
    <>
    <div>
    <Link to="" style={{marginRight:100}}>Home</Link>
    <Link to="/about">About</Link>
    </div>
    <Routes>
        <Route path="/" element={<Home/>}>

        </Route>
    </Routes>
    </>
}
export default Riyaz;