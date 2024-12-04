import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./Dashboard";
import CreateBlog from "./CreateBlog";
import SingleBlog from "./SingleBlog";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/create-blog" element={<CreateBlog />} />
        <Route path="/blogs/:id" element={<SingleBlog />} />
      </Routes>
    </Router>
  );
};

export default App;
