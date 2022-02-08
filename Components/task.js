import React from 'react'
import './task.css'
import Diamond from '../Images/diamond.png'
import HomeIcon from '@mui/icons-material/Home';
import CallIcon from '@mui/icons-material/Call';
import InfoIcon from '@mui/icons-material/Info';
import {Link} from 'react-router-dom'


const Task = () => {
    return(
        <div>
            <div className='HeaDer'>
                <div className='LoGo'>
                <img src={Diamond}/>
                </div>
                <div className='NaV'>
                 <Link to='/' className='NaVs'><HomeIcon/> HOME</Link>
                 <Link to='/about' className='NaVs'> <InfoIcon/> ABOUT</Link>
               <Link to='/contact' className='NaVs'> <CallIcon/> CONTACT</Link>
                </div>
            </div>
        </div>
    )
}

export default Task