import React from "react";
import{BrowserRouter,Routes,Route} from 'react-router-dom';
import Home from './component/Home';
import Contact from './component/contact/Contact';
import Member from "./component/Member";
import About from './component/About/About';
import Navbar from './Navbar/App';
import Footer from './home/footer';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Navbar/>}>
      <Route index element={<Home />} />
      <Route path='about' element={<About/>}/>
      <Route path='member' element={<Member/>}/>
      <Route path='contact' element={<Contact/>}/>
      <Route path='*' element={<h1>error</h1>}/>
      </Route>
    </Routes>
    <Footer/>
    </BrowserRouter>
  );
}

export default App;
