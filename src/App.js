import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import Home from './pages';
import Signup from './pages/auth/Signup';
import AddBill from './pages/dashboard/AddBill';
import ViewReports from './pages/dashboard/ViewReports';

export default function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/view-reports" element={<ViewReports />} />
          <Route path="/add-bill" element={<AddBill />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/" element={<Home />} />
            
        </Routes>
      </div>
    </Router>
  );
}