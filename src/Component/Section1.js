import React from 'react'
import '../Style/Section1.css'
import Vishal from  '../Images/vishalR.png'

function Section1() {
  return (
    
       
            <div className='row mx-2' >

            <div className='col-sm-6 px-5 paddingMinus' style={{padding:"80px 0px"}}>
                <div className='row '>
                    <div className='row intro' style={{textAlign:"start"}}><h3>Hello,My name is</h3></div>
                    <div className='row name'  style={{textAlign:"start",color:"	#00ff00"}}><p>Vishal Kumar</p></div>
                    <div className='i-titles'>
                        <div className='i-title-wrapper'>  
                    <div className='row skill'  style={{textAlign:"start"}}><h4>Front End Developer</h4></div>
                    <div className='row skill'  style={{textAlign:"start"}}><h5>UI/UX Designer</h5></div>
                    <div className='row skill'  style={{textAlign:"start"}}><h5>React.js Developer</h5></div>
                    <div className='row skill'  style={{textAlign:"start"}}><h5>Image Editor</h5></div>
                    </div>
                    </div>
                    <div className='row b'><p className='description'>I designed and develope website for Customer of all sizes like Laptop tablet & Mobile
                      Specializing in React js ,Mordern website web service and online store
                        
                        
                 </p></div>
                </div>
                </div>

                <div className='col-sm-6  py-5 smSize' style={{padding:"80px 0px",position:"relative"}}>
                    <div className='clip-path-a'></div>
                <div className='row justify-content-center none'>
                {/* <div className='row'><h4>Hello,My name is</h4></div>
                    <div className='row'><h4>Vishal Kumar</h4></div>
                    <div className='i-titles'>
                    <div className='row'><h4>Front End Developer</h4></div>
                    <div className='row'><h5>UI/UX Designer</h5></div>
                    <div className='row'><h5>React.js Developer</h5></div>
                    <div className='row'><h5>Image Editor</h5></div>
                    </div>  */}
                    <img src={Vishal} alt="com plete" className="img-fluid size" / >
                </div>
                </div>
                     
            </div>

    
  )
}

export default Section1