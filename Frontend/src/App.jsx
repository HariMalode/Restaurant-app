import "./App.css";
//css imported
import {BrowserRouter as Router, Routes, Route } from "react-router-dom";

import {Toaster} from 'react-hot-toast'
//alert msg look

import Home from "./Pages/Home";
import NotFound from "./Pages/NotFound";
import Success from "./Pages/Success";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/success" element={<Success />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default App;
