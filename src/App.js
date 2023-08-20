
import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
} from "react-router-dom";
import Home from './pages/Home';
import Offers from './pages/Offers';
import Destinations from './pages/Destinations';
import Contact from './pages/Contact';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/Destinations*' element={<Destinations/>}/>
        <Route path='/Contact*' element={<Contact/>}/>
        <Route path='/Offers*' element={<Offers/>}/>
       
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
