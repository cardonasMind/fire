import React from 'react'
import Showcase1 from '../Bilder/showcase-img-1.png';
import Showcase2 from '../Bilder/showcase-img-2.png';



const Showcase = () => {
  return (
    <section className="hero mb-5">
      <div className='row'>
          <div className="col-4 d-flex flex-end">
            <img className='hero-img' src="https://win22imgstorage.blob.core.windows.net/images/showcase-img-1.png" alt="" />
          </div>
          <div className="col-4 d-flex flex-column align-items-center justify-content-center text-center">
            <h1><strong>Sale Up <br />To 50% Off</strong></h1>
            <p>Online shopping free home delivery over $100</p>
            <button className='btn'>SHOP NOW</button>
          </div>
          <div className="col-4">
            <img className='hero-img' src="https://win22imgstorage.blob.core.windows.net/images/showcase-img-2.png" alt="" />
          </div>
        </div>
    </section>
  )
}

export default Showcase



        {/* <div className="container">
          <div className="showcase-content">
            <img className="_img-left" src={Showcase1} alt="female"/>
            <div><h1><strong>SALE UP <br/> To 50% off</strong></h1></div>
            <p>Online shopping free home delivery over $100</p>
            <div className="general_button">
              <a href = "#"><button type= "button" className="btn special_button"></button></a>
            </div>
            <div><img className="_img-right" src={Showcase2} alt="male"/></div>
          </div>
        </div> */}

