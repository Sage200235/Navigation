import React from 'react';
import './footer.css';
import Msg from '../Images/msg.png'


const Footer = () => {
    return(
        <div className='Footer'>
            <div className='leftFooter'>
                <a className='footerNavs' href='#'>Terms of Service -</a> 
                <a className='footerNavs' href='#'>Privacy Notice -</a>
                <a className='footerNavs' href='#'>Takedown Policy -</a>
                <a className='footerNavs' href='#'>GDPR -</a>
                <a className='footerNavs' href='#'>Security -</a>
                <a className='footerNavs' href='#'>CSR Policy -</a>
                <a className='footerNavs' href='#'>Tax FAQs -</a>
                <a className='footerNavs' href='#'>Unsubscribe </a>
            </div>
            <div className='rightFooter'>
                <p className='copyright'>Copyright © Freshworks Inc. All Rights Reserved</p>
            </div>
            <div className='con'>
                <img src={Msg}/>
                <p>CONTACT SALES</p>
            </div>
    </div>
    );
}
export default Footer 