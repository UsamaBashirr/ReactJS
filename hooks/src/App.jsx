
import './App.css';
import Contact from './Contact';
import About from './About';
import Button from './Button';
import {BrowserRouter,Route , Routes} from "react-router-dom";
// import Pokemon from './Pokemon';
// import CompA from './CompA';
// import CovidLive from './CovidLive';



function App() {

  return (
    <>
    <BrowserRouter>
      <Button />
      <Routes>
        <Route path = '/' element={<About />} />
        <Route path = '/Contact' element={<Contact />} />
      </Routes>
     
      {/* <Pokemon /> */}
      {/* <CovidLive /> */}
      {/* <CompA /> */}
      </BrowserRouter>
    </>
  );
}

export default App;
