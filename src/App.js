import React from "react";

import News from "./components/News";
import Navbar from "./components/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" exact element={<News category="general" />} />
        <Route path="/business" exact element={<News category="business" />} />
        <Route path="/sports" exact element={<News category="sports" />} />
        <Route path="/entertainment" exact element={<News category="entertainment" />} />
        <Route path="/science" exact element={<News category="science" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
