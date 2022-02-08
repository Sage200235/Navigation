import React from 'react';
import './posthero.css'
import Man from '../Images/manandgirl.png'
import Rightup from '../Images/right-up.png'


const Posthero = () =>{
    return(
        <div>
           <div className='parent'>
           <div className='image'>
               <img src={Man}/>
           </div>
            <div className='text'>
                <div className='heAd'>
                <header className='trY'>Try the business software used by over<br/> 50,000 companies across the globe to<br/> exceed customer and employee<br/> expectations.</header>
                </div>
                <div className='body'>
                    <div className='leFt'>
                    <div className='firstthree'>
                        <span>
                        <p>Customer Service</p>
                        <img className='arrow' src={Rightup}/>
                        </span>
                    </div>
                    <div  className='firstthree'>
                    <span>
                    <p>HR Management</p>
                    <img className='arrow2' src={Rightup}/>
                    </span>
                    </div>
                    <div  className='firstthree'>
                   <span>
                   <p>Marketing Automation</p>
                    <img className='arrow3' src={Rightup}/>
                   </span>
                    </div>
                    </div>
                    <div className='riGht'>
                    <div className='secondthree'>
                    <span>
                    <p>IT Service Management</p>
                    <img className='arrow4' src={Rightup}/>
                    </span>
                    </div>
                    <div className='secondthree'>
                    <p>Sales Automation</p>
                    <img className='arrow5' src={Rightup}/>
                    </div>
                    <div className='secondthree'>
                    <p>All products & Trials</p>
                    <img className='arrow6' src={Rightup}/>
                    </div>
                    </div>
                </div>
            </div>
           </div>
        </div>   
    )
}


export default Posthero