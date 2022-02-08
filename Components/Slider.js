import React from 'react'
import { Carousel } from 'antd';
import './Slider.css'
import { SearchOutlined } from '@ant-design/icons';
import { Button, Tooltip } from 'antd';

const Slider = () => {
    const contentStyle = {
        height: '500px',
        color: '#000',
        lineHeight: '160px',
        textAlign: 'center',
      };


    return(
        <>
        <div style={{marginTop:"50px"}}>
         <Carousel autoplay effect="fade">
    <div className='Slide1'>
      <h3 style={contentStyle}>1</h3>
    </div>
    <div className='Slide2'>
      <h3 style={contentStyle}>
      <Button type="dashed" icon={<SearchOutlined />}> Search
    </Button></h3>
    </div>
    <div className='Slide3'>
      <h3 style={contentStyle}>3</h3>
    </div>
    <div className='Slide4'>
      <h3 style={contentStyle}>4</h3>
    </div>
  </Carousel>,
  </div>
        </>
    )
}

export default Slider