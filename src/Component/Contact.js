
import '../Style/Contact.css'
import React, { useRef,useState } from 'react';
import emailjs from '@emailjs/browser';

function Contact() {
    const [done ,setDone]=useState(false)
    const email =<svg xmlns="http://www.w3.org/2000/svg"
     width="30"
      height="30"
       fill="red"
        class="bi bi-envelope"
         viewBox="0 0 16 16">
    <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z"/>
  </svg> ;

  const phone =<svg xmlns="http://www.w3.org/2000/svg" 
  width="30"
   height="30"
    fill="green"
     class="bi bi-phone" 
     viewBox="0 0 16 16">
  <path d="M11 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h6zM5 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H5z"/>
  <path d="M8 14a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"/>
</svg> ;

const home =<svg xmlns="http://www.w3.org/2000/svg"
 width="30"
  height="30"
   fill="yellow"
    class="bi bi-house" 
    viewBox="0 0 16 16">
<path fill-rule="evenodd" d="M2 13.5V7h1v6.5a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5V7h1v6.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5zm11-11V6l-2-2V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5z"/>
<path fill-rule="evenodd" d="M7.293 1.5a1 1 0 0 1 1.414 0l6.647 6.646a.5.5 0 0 1-.708.708L8 2.207 1.354 8.854a.5.5 0 1 1-.708-.708L7.293 1.5z"/>
</svg> ;

const take = useRef();
function LoginHandel(e){

   

    e.preventDefault()
    emailjs.sendForm('service_24tkf4m', 'template_evxt0y5', take.current, 'oCg5ylzBIENHkqkad')
    .then((result) => {
        console.log(result.text);
        setDone(true)
    }, (error) => {
        console.log(error.text);
    });
}

  return (
    <div  id='scroll-d'>
        <div className='container'>
            <div className='row'>
            <div className='row mt-5' style={{textAlign:"center"}}><h1 style={{color:"	#00ff00"}}>Contact Us</h1></div>
    <div className='border'></div>
            </div>
            <div className='row mt-5'>
                <div className='col-md-6 col-sm-12 '>

                    <div className='row contactCenter'><h1>Lets discuss</h1></div>
                    <div className='row contactCenter'><h1>your project</h1></div>
                    <div className='row mt-5 contactCenter'><p>{phone}<b style={{marginLeft:"10px"}}>9798517945</b></p></div>
                    <div className='row pt-3 contactCenter'><p>{email}<b style={{marginLeft:"10px"}}>vishalk80269@gmail.com</b></p></div>
                    <div className='row pt-3 contactCenter'><p>{home}<b style={{marginLeft:"10px"}}>Bhagalpur,bihar,812005  India
                        
                       
                        </b></p></div>

                </div>
                <div className='col-md-6 col-sm-12 contactMargin'>
                    <div className='row contactCenter topMt'>
                        <p>
                            <b>Whats your story ?</b>
                          <p style={{opacity:"0.5",fontWeight:"200",fontSize:"large"}}>  Get in touch Always available for freelancing the right project 
                           comes along me</p>
                        </p>


                    </div>
                    <div className='row'>
                    <form ref={take} onSubmit={LoginHandel}>
  <div className="mb-5">
    <input  type="text" name="user_name" className="form-control borderChange" id="exampleInputName"  placeholder='Name' />
  </div>

  <div className="mb-5">
    <input  type="email"  name="user_email" className="form-control borderChange" id="exampleInputEmail1"  placeholder='Email' />
  </div>

  <div className="mb-3">
  <textarea className="form-control borderChange"  name="message" id="exampleFormControlTextarea1" rows="10" />
</div>
 
  
  <button type="submit"  class="btn btn-success px-5">Submit</button> {done && "Thank You"}
</form>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Contact