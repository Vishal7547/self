
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Component/Navbar';
import Error from './Component/Error'
// import Section1 from './Component/Section1';
// import About from './Component/About';
// import Project from './Component/Project';
// import Contact from './Component/Contact';
// import Myskill from './Component/Myskill';
import Homes from './Component/Homes';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";



import {HashRouter as Router,Route,Routes} from 'react-router-dom'


function App() {
  return (
    <div style={{backgroundColor:"black",color:"white"}}>
      <Router>
        <Home/>

    <Routes> 

<Route exact path="/home" element={ <Homes />} > </Route>
{/* <Route path="/about" element={<About/>} > </Route> */}
{/* <Route path="/mySkill" element={<Myskill/>} > </Route> */}
{/* <Route path="/project" element={<Project/>} > </Route> */}
{/* <Route path="/contactUs" element={<Contact/>} > </Route> */}
<Route path="*" element={<Error/>} > </Route>
</Routes> 
   {/* <About />
   <Myskill />
   <Project/>
   <Contact /> */}
 
    </Router>
   
    </div>
  );
}

export default App;
