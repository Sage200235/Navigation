import React from 'react';
import './Hero.css'
import Suit from '../Images/suit-lady.png';


const Heropage = () => {
    return(
        <div>
            <div className='hero'>
                <div className='left'>
               <div className='delight'>
                <h1>Delight made<br/> easy</h1>
                <p>We make it fast and easy for your business to delight<br/> customers and employees.</p>
               </div>
               <div className='button'>
                <button className='button1'>FREE TRIALS</button>
                <button className='button2'>CONTACT SALES</button>
               </div>
                </div>
                <div className='right'>
                    <img src={Suit}/>
                </div>
            </div>
        </div>
    )
}

export default Heropage 