
import { Route, Routes, Link } from 'react-router-dom';
import About from './About';
import Contact from './Contact';
import Home from './Home';
import QuizApp from './QuizApp';

const Master= () => {
    return(
    <header>
        <nav style={{alignItems:'center'}}>
        <Link to="/" style={{marginRight:50}}>Home</Link>
        <Link to="/quiz" style={{marginRight:50}}>Quizzes</Link>
        <Link to="/About" style={{marginRight:50}}>About</Link>
        <Link to="/Contact" style={{marginRight:50}}>Contact</Link>
      </nav>
      <h1 style={{"color":"blue"}}>Quiz Created in React js</h1>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '40vh', color:"blue"}}>
      <Routes>
          <Route path="/" element={<Home></Home>} />
          <Route path="/quiz" element={<QuizApp></QuizApp>} />
          <Route path='/About' element={<About></About>}></Route>
          <Route path='/Contact' element={<Contact></Contact>}></Route>
        </Routes>
        </div>
    </header>
    )
}
export default Master;


