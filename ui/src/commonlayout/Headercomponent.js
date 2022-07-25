import React, {useState} from "react";
import { Link, useNavigate } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useDispatch, useSelector } from 'react-redux';

function HeaderComponent({isLoggedIn}){

  const dispatchLogin = useDispatch();
    let navigate = useNavigate();

    const logOutHandle = () =>{
      sessionStorage.clear();
      dispatchLogin({type: 'logout'});
      navigate('/');
    }

    return(
        <Navbar bg="primary" variant="dark">
        <Container className="text-center">
          <Link to="/">Doctor Everywhere</Link>
          {
            isLoggedIn ? (<div><i className="bi bi-box-arrow-in-right" style={{color: '#fff', cursor: 'pointer'}} onClick={()=> logOutHandle()} >Logout</i></div>) : ''
          }
          
          <Nav className="me-auto">
            {/* <Link to="/login">Login</Link> */}
          </Nav>
        </Container>
      </Navbar>
    )
}

export default HeaderComponent;