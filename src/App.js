
import './App.css';
import About from './Components/About';
import Contact from './Components/Contact';
import Home from './Components/Home';
import Projects from './Components/Projects';
import Skills from './Components/Skills';


function App() {
  return (
    <div className="App"style={{backgroundColor:"#1d293a"}}>     
     <Home></Home>
     <About></About>
     <Skills></Skills>
     <Projects></Projects>
     <Contact></Contact>
    </div>
  );
}

export default App;
