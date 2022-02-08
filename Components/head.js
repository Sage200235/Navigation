import React from 'react';
import './head.css';
import Logo from '../Images/logo-pi.png'
import { borderRadius } from '@mui/system';
import USA from '../Images/usa.png';

const Head = () =>{
    return(
        <div>
            <div className='heaD'>
            <div>
            <div className='logo'> <img src={Logo} style={{width:"30px", height:"30px"}} />&nbsp;freshworks</div>
            </div>
            <div className='nav'>
            <a href='#'>Products</a>
                <a href='#'>Platform</a>
                <a href='#'>Company</a>
                <a href='#'>Resources</a>
                <a href='#'>Customers</a>
                <a href='#'>Support</a>
                <img src={USA} style={{width:"30px", height:"30px", borderRadius:"50px", border:"2px solid white"}} />
            </div>
            </div>

        </div>

    )
}

export default Head