import React from 'react';
import ButtonComponent from '../commoncontrols/ButtonComponent';
import {useNavigate} from 'react-router-dom';

function HomeComponent() {
    let navigate = useNavigate(); 
    
    const routeChange = () =>{ 
      let path = `/login`; 
      navigate('/login');
    }
    return (
        <div>
            <h3 className='text-center my-3'>Welcome!</h3>
            <ButtonComponent variant={'success'} btnName={'I am patient'} triggerClick={routeChange} />
            <ButtonComponent variant={'primary'} btnName={'I am doctor'} triggerClick={routeChange} />
            <ButtonComponent variant={'info'} btnName={'I am admin'} triggerClick={routeChange} />
        </div>
    );
}

export default HomeComponent
