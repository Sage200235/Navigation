import React from 'react';
import './prefooter.css'
import Imagef from '../Images/facebookblue.png'
import Imagef2 from '../Images/facebook-re.png'
import Imagey from '../Images/youtube.red.png'
import Imagey2 from '../Images/youtube-r.png'
import Imaget from '../Images/twit.blue.jpg'
import Imaget2 from '../Images/twit-r.png'
import Imagel from '../Images/LinkedIn-logo.png'
import Imagel2 from '../Images/linkd-r.png'
import Imageg from '../Images/glass.green.png'
import Imagep from '../Images/fresh.jpg'
import Imaged from '../Images/glaszdo.png'



const Prefooter = () => {
    return(
        <div className='footerContact'>
            <div className='Contacts'>
            <div  className='contactNav'>
                <ul>
                    <div className='Fresh'>
                   <img src={Imagep} className='freshW'/>
                   <p>freshworks</p>
                   </div>
                  <li><a className='freshNav' href='#'> Freshdesk</a></li>
                  <li><a className='freshNav' href='#'> Freshsales</a></li>
                  <li><a className='freshNav' href='#'> Freshmarketer</a></li>
                  <li><a className='freshNav' href='#'> Freshservices</a></li>
                  <li><a className='freshNav' href='#'> Freshteam</a></li>

               </ul>
         </div>     

                <div className='Company'>
                    <p>COMPANY</p>
                    <a className='companyNavs' href='#'>About</a>
                    <a className='companyNavs' href='#'>leadership</a>
                    <a className='companyNavs' href='#'>Board of directors</a>
                    <a className='companyNavs' href='#'>Investors</a>
                    <a className='companyNavs' href='#'>Customers</a>
                    <a className='companyNavs' href='#'>Affiliates</a>
                    <a className='companyNavs' href='#'>Partners</a>
                    <a className='companyNavs' href='#'>Philanthrophy</a>
                    <a className='companyNavs' href='#'>Careers</a>
                    <a className='companyNavs' href='#'>News room</a>
                    <a className='companyNavs' href='#'>GDPR</a>
                    <a className='companyNavs' href='#'>Tax FAQs</a>
                    <a className='companyNavs' href='#'>Contacts us</a>
                </div>
                      <div className='mainIconContainer'>
                      <p>CONNECT WITH US</p>
                    <div className='iconsContainer'>

                        <div className='Icons'>

                             <a href='#'>
                             <img src={Imagef2} className='face'/>
                             <img src={Imagef} className='Overlay'/>
                             </a>

                        </div>
                        <div className='Icons2'>

                            <a href='#'>
                             <img src={Imaget2} className='Tweet'/>
                             <img src={Imaget} className='Overlay2'/>
                            </a>

                        </div>
                            <div className='Icons3'>


                                    <a href='#'>
                                        <img src={Imagey2} className='Tube'/>
                                        <img src={Imagey} className='Overlay3'/>
                                    </a>

                            </div>

                    </div>
                    <div className='iconsContainer2'>

                        <div className='Icons4'>
                            <a href='#'>
                               <img src={Imagel2} className='Link'/>
                               <img src={Imagel} className='Overlay4'/>
                            </a>
                        </div>
                        <div className='Icons5'>
                            <a href='#'>
                                <img src={Imaged} className='Glass'/>
                                <img src={Imageg} className='Overlay5'/>
                            </a>
                        </div>
                    </div>
                    </div>
                    </div>

                </div>


    );
}
export default Prefooter 