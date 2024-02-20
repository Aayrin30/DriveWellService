import './App.css';
import Home from './Pages/Home';
import About from './Pages/About';
import Services from './Pages/Services';
import Carwashing from './Pages/Carwashing';
import Cardenting from './Pages/Cardenting';
import Carpainting from './Pages/Carpainting';
import Enginediagnostics from './Pages/Enginediagnostics';
import Oilnfilters from './Pages/Oilnfilters';
import Breakrepair from './Pages/Breakrepair';
import Contactus from './Pages/Contactus';
import Appointment from './Pages/Appointment';
import Login from './Pages/Login';
import Register from './Pages/Register';
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";


function App() {
  return (
   <> 
 <BrowserRouter>
 <Navbar/>
 <Routes>
  <Route exact path='/' element={ <Home />}></Route>
  <Route exact path="/appointment" element={<Appointment/>}></Route>
  <Route exact path="/about" element={<About />}></Route>
  <Route exact path="/services" element={<Services />}></Route>
  <Route exact path="/carwashing" element={<Carwashing />}></Route>
  <Route exact path="/cardenting" element={<Cardenting />}></Route>
  <Route exact path="/carpainting" element={<Carpainting />}></Route>
  <Route exact path='/Enginediagnostics' element={<Enginediagnostics />}></Route>
  <Route exact path="/oilnfilters" element={<Oilnfilters />}></Route>
  <Route exact path="/breakrepair" element={<Breakrepair />}></Route>
  <Route exact path="/contactus" element={<Contactus/>}></Route>
  <Route exact path='/login' element={ <Login />}></Route>
  <Route exact path='/register' element={<Register/>}></Route>
 </Routes>
 <Footer />
 </BrowserRouter>
   </>
  );
}

export default App;
