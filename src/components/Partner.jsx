import React from 'react'
import img1 from '../assets/partner1.png'

import img2 from "../assets/partner2.png";
import img3 from "../assets/partner3.png";

function Partner() {
  return (
   <>
   <div className='container-fluid pt-4  d-md-block'style={{ backgroundColor: '#37383c' }}  >
    <div className='row'>
        <div className=' col-md-6'>
            <h2 className='text-white fs-bold m-2 text-left'>50 + More
                <br/>
                Trusted Companies Partner
            </h2>
        </div>
        <div className='col-md-6'>
            <div className='row pb-1'>
                <div className='col-3'>
                    <img src={img1} className='img-fluid'/>
                </div>
                 <div className='col-3'>
                    <img src={img2} className='img-fluid'/>
                </div>
                 <div className='col-3'>
                     <img src={img3} className='img-fluid'/>
                </div>
            </div>
        </div>
    </div>
   </div>
   </>
  )
}

export default Partner