import React from 'react'
import '../Style/Myskill.css'
import {Carousel} from 'react-bootstrap'
import Skills from '../Images/1.png'
import Responsive from '../Images/2.png'
import projects from '../Images/3.png'

function Myskill() {
  return (
    <div  id='scroll-b'>

      
      <div className='row mt-5' style={{textAlign:"center"}}><h1 style={{color:"	#00ff00"}}>MY Skill</h1></div>
    <div className='border'></div>
     <div className='row justify-content-center pt-3'>  
      <Carousel>
  <Carousel.Item interval={1000}>
    <img
      className="d-block w-100  img-fluid "
      src={Skills}
      alt="First slide"
      style={{maxHeight:"500px",minHeight:"200px"}}
    />
    {/* <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption> */}
  </Carousel.Item>
  <Carousel.Item interval={500}>
    <img
      className="d-block w-100  img-fluid "
      src={Responsive}
      alt="Second slide"
      style={{maxHeight:"500px",minHeight:"200px"}}
    />
    {/* <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption> */}
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100 img-fluid"
      src={projects}
      alt="Third slide"
      style={{maxHeight:"500px",minHeight:"200px"}}
    />
    {/* <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption> */}
  </Carousel.Item>
</Carousel>
    </div>
    </div>
  )
}

export default Myskill