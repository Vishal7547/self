import React from 'react'
import '../Style/Project.css'
import CardSlide from '../JquerTool/CardSlide'


function Project() {
  return (
    <div  id='scroll-c'>
        <div className='row mt-5'>
        <div className='row mt-5' style={{textAlign:"center"}}><h1 style={{color:"	#00ff00"}}>PROJECT</h1></div>
    <div className='border'></div>
    <div className='row backImage'>
     <div className='container'>
         <div className='row mx-5 dx' >
             <CardSlide />
         </div>
     </div>
    </div>
        </div>
    </div>
  )
}

export default Project