import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

import Login from "../pages/Login";
import Register from "../pages/Register";
import PrivateRouter from "./PrivateRouter";

const AppRouter = () => {

    
  return (
    <Router>
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="register" element={<Register />} />
      

     
    
         
    
   
    </Routes>
  </Router>
   

  );
};

export default AppRouter;
