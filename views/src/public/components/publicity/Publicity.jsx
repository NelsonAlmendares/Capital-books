import React from 'react'
import './publicity.css'
import Carousel from './Carousel'

const Publicity = () => {
    return (
    <div className="publicity container">
        <div className="publicity-container">
            <h3 className='publicity-title'>Promociones</h3>
            <Carousel/>
        </div>
    </div>
  )
}

export default Publicity