import { faFacebook, faInstagram, faLinkedin, faTwitter, faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import { faVideo } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Link } from 'react-router-dom'


function Footer() {
  return (
    <>
     <div className='container-fluid p-3'>
        <div className='row w-100'>
          <div className='col-md-4 ms-2'>
          <div className='d-flex text-warning fs-3'>
            <FontAwesomeIcon icon={faVideo} className='me-3'/>{' '}
              <h3 className='text-warning'> Media Player</h3>
           
          </div>
          <p style={{textAlign:'justify'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut quaerat corporis corrupti rerum, fugit dignissimos deserunt neque provident ab aliquam nihil. Deserunt atque eaque est tenetur incidunt repudiandae neque exercitationem.</p>
    
          </div>
  
  
          <div className='col-md-2 d-md-flex justify-content-center'>
            <div>
              <h3> Links</h3>
              <Link to={'/'}><p  className='mt-4'>Landing Page</p></Link> 
              <Link to={'/home'}><p >Home Page</p></Link> 
              <Link to={'/watchHistory'}><p>Watch History</p></Link>
            </div>
          </div>
  
  
          <div className='col-md-2 d-md-flex justify-content-center'>
           <div>
            <h3>Guides</h3>
            <p className='mt-4'>React</p>
            <p>React Bootstrap</p>
            <p>Bootswatch</p>
           </div>
          </div>
          
          <div className='col-md-3 px-md-5'>
            <h3>Contact Us</h3>
            <div className='d-flex mt-4'>
              <input type="text" placeholder='Email ID' className='form-control' />
              <button className='btn btn-warning ms-3'>Subscribe</button>
            </div>
            <div className="d-flex justify-content-between mt-4">
            <FontAwesomeIcon icon={faInstagram} className='fa-2x'/>
            <FontAwesomeIcon icon={faTwitter} className='fa-2x'/>
            <FontAwesomeIcon icon={faWhatsapp} className='fa-2x'/>
            <FontAwesomeIcon icon={faLinkedin} className='fa-2x'/>
            <FontAwesomeIcon icon={faFacebook} className='fa-2x'/>
            </div>
          </div>
    
    
    
        </div>
     </div>
    </>
  )
}

export default Footer