import "./App.css";
import Home from "./pages/Home/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Carwashing from "./pages/Carwashing";
import Cardenting from "./pages/Cardenting";
import Carpainting from "./pages/Carpainting";
import Enginediagnostics from "./pages/Enginediagnostics";
import Oilnfilters from "./pages/Oilnfilters";
import Breakrepair from "./pages/Breakrepair";
import Appointment from "./pages/Appointment/Appointment";
import Login from "./pages/Login/Login";
import Register from "./pages/Register";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ContactUs from "./pages/ContactUs/ContactUs";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route exact path="/appointment" element={<Appointment />}></Route>
          <Route exact path="/about" element={<About />}></Route>
          <Route exact path="/services" element={<Services />}></Route>
          <Route exact path="/carwashing" element={<Carwashing />}></Route>
          <Route exact path="/cardenting" element={<Cardenting />}></Route>
          <Route exact path="/carpainting" element={<Carpainting />}></Route>
          <Route
            exact
            path="/Enginediagnostics"
            element={<Enginediagnostics />}
          ></Route>
          <Route exact path="/oilnfilters" element={<Oilnfilters />}></Route>
          <Route exact path="/breakrepair" element={<Breakrepair />}></Route>
          <Route exact path="/contactus" element={<ContactUs />}></Route>
          <Route exact path="/login" element={<Login />}></Route>
          <Route exact path="/register" element={<Register />}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
