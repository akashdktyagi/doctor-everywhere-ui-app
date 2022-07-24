import React from "react";
import './App.css';
import HeaderComponent from './commonlayout/Headercomponent';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomeComponent from './components/HomeComponent';
import LoginComponent from './components/LoginComponent';
import { useSelector } from 'react-redux';
import UserDashboard from './components/UserDashboard/UserDashboard';
import Protected from './components/UserDashboard/Protected';

function App() {

  const { isAuthenticated } = useSelector((state) => state.root);

  return (
    <div className="App">
      <Router>
        <HeaderComponent isLoggedIn={isAuthenticated} />
        <Routes>
          <Route path='/' element={<HomeComponent />} />
          <Route path='/login' element={<LoginComponent />} />
          <Route
            path="/dashboard"
            element={<Protected isAuthenticated={isAuthenticated}><UserDashboard /></Protected>}
          />
        </Routes>
      </Router>

    </div>
  );
}

export default App;
