import React from 'react'
import './waterson.css'
import Pearson from '../Images/pearson.png'
import Brewog from '../Images/brewog.png'
import Bridge from '../Images/bridgestone.png'
import Travix from '../Images/travix.png'
import Klarna from '../Images/klarna.png'
import Vice from '../Images/vice.png'
import Deichmann from '../Images/diechmann.png'
import Waterstons from '../Images/waterstons.png'
import Fiverr from '../Images/fiverr.png'
import Exa from '../Images/exabytes.png'
import Scho from '../Images/schoeler.png'
import Multi from '../Images/multichoice.png'
import Blue from '../Images/blue nile.png'
import Train from '../Images/traimline.png'
import Engel from '../Images/engel.png'
import Itv  from '../Images/itv.png'
import Hero from '../Images/delivery.png'
import Katz from '../Images/katz.png'
import Water from '../Images/water.png'
import Upright from '../Images/upright.png'
import Inverted from '../Images/inverted.png'
import Eclipse from '../Images/dots.png'


const Waterson = () => {
  return(
    <div>
        <div className='waterson'>
        <div className='teXt'>
          <header className='text1'>Trusted by 50K+ customers big and small</header>
          <p className='text2'>We are a leading provider of modern SaaS solutions that solve multiple, complex business problems to companies of all sizes. Businesses from more than 120 countries around the world use Freshworks’ products to delight their customers and employees every day. </p>
        </div>
        <div className='logos'>
          <div className='logos1'>
           <img src={Pearson}/>
           <img src={Brewog}/>
           <img src={Bridge}/>
           <img src={Travix}/>
           <img src={Klarna}/>
           <img src={Vice}/>
          </div>
          <div className='logos2'>
          <img src={Deichmann}/>
          <img src={Waterstons}/>
          <img src={Fiverr}/>
          <img src={Exa}/>
          <img src={Scho}/>
          <img src={Multi}/>
          </div>
          <div className='logos3'>
          <img src={Blue}/>
          <img src={Train}/>
          <img src={Engel}/>
          <img src={Itv}/>
          <img src={Hero}/>
          <img src={Katz}/>
          </div>
        </div>
        </div>
        <div className='waterson2'>
          <div className='waterlogo'>
          <img className='quote' src={Upright}/>
          <img className='stons' src={Water}/>
          <img className='quote' src={Inverted}/>
          </div>
          <div className='alex'>
            <p>“The Freshworks team was a great asset during implementation and continue to be a key partner for Waterstons as we look to further mature and improve our services to customers, tailored to their specific needs.”</p>
            <p><b>Alex Bookless, Head of Managed Services, Waterstons</b></p>
          </div>
          <div className='eclipse'>
            <img src={Eclipse}/>
          </div>
        </div>

   </div>
)
}

export default Waterson