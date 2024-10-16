import { faCloudArrowUp, faFilm } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { AddVideoapi } from '../services/allApi';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function Add({setAddVideoStatus}) {


  const [VideoDetails , setVideoDetails] = useState({
    caption:"",
    imageUrl:"",
    emdedLink:""
  })

    const [show, setShow] = useState(false);
    
     console.log(VideoDetails);


     

    const handleClose = () => {setShow(false);
      handleCancel()
    }
    const handleShow = () => setShow(true);

    // const getEmbedLink=(e)=>{
    //   const link = e.target.value
    //   if(link.startsWith('http://youtu.be/')){
    //     const embedL = ` https://www.youtube.com/embed/${slice(17,28)}`
    //     setVideoDetails({...VideoDetails,embedLink:embedL})

    //   }
    //   else{
    //     const embedL=` https://www.youtube.com/embed/${slice(-11)}`
    //     setVideoDetails({...VideoDetails,embedLink:embedL})


    //   }
    // }

    const handleCancel=()=>{
      setVideoDetails({
        caption:"",
        imageUrl:"",
        emdedLink:""
      })

    }

    const handleAdd=async()=>{

      

      const { caption,imageUrl,emdedLink }=VideoDetails
      if(!caption || !imageUrl || !emdedLink){
        toast.info('Please fill the form completely')
      }
      else{
        if(VideoDetails.emdedLink.startsWith('http://youtu.be/')){
          const embedL = `https://www.youtube.com/embed/${VideoDetails.emdedLink.slice(17,28)}`
         // setVideoDetails({...VideoDetails,emdedLink:embedL})

         const result=await AddVideoapi({...VideoDetails,emdedLink:embedL})
         console.log(result);

         if(result.status>=200 && result.status<300){
           toast.success('Video Uploaded Successfully')
           handleClose()
           setAddVideoStatus(result.data)
         }
         else{
           toast.error('Something Went Wrong')
           handleClose()
         }
 
      }
        else{
          const embedL=`https://www.youtube.com/embed/${VideoDetails.emdedLink.slice(-11)}`
         //  setVideoDetails({...VideoDetails,emdedLink:embedL})

          const result=await AddVideoapi({...VideoDetails,emdedLink:embedL})
          console.log(result);

          if(result.status>=200 && result.status<300){
           toast.success('Video Uploaded Successfully')
           handleClose()
           setAddVideoStatus(result.data)
         }
         else{
           toast.error('Something Went Wrong')
           handleClose()
         }
 
 
        }
      }


    }






  return (
    <>
        <div className='d-flex align-items-center'>
            <h5><span className='d-none d-md-inline'>Upload New Video</span></h5>
            <button className='btn pb-3' onClick={handleShow}><FontAwesomeIcon icon={faCloudArrowUp} className='fs-5' /></button>
        </div>


        <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title className='text-warning'> <FontAwesomeIcon icon={faFilm} /> Upload Videos</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <h6> Please fill the following details...</h6>
            <div className='border border-secondary rounded p-3'>
                <form>
                   <input value={VideoDetails.caption} className='form-control' type="text" placeholder='Video Caption' onChange={(e)=>setVideoDetails({...VideoDetails,caption:e.target.value})}/>
                   <br /> <br />
                   <input value={VideoDetails.imageUrl} className='form-control' type="text" placeholder='Video Image' onChange={(e)=>setVideoDetails({...VideoDetails,imageUrl:e.target.value})}/>
                   <br /> <br />
                   <input value={VideoDetails.emdedLink} className='form-control' type="text" placeholder='Video Url' onChange={(e)=>setVideoDetails({...VideoDetails,emdedLink:e.target.value})}/>

                </form>
            </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCancel}>
            Cancel
          </Button>
          <Button variant="warning" type='button' onClick={handleAdd}>
            Upload
          </Button>
        </Modal.Footer>
      </Modal>
      <ToastContainer position='top-center' autoClose={2000} theme="coloured" />


    </>
  )
}

export default Add