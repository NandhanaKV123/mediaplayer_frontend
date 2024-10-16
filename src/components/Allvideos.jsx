import React, { useEffect, useState } from 'react'
import Videocard from './Videocard'
import { addvideoToCategoryApi, getVideoApi } from '../services/allApi'
import Category from './Category'

function Allvideos(addVideoStatus,setVideoStatus) {

  const [allvideos,setAllVideos]=useState([])
  const [deletevideoStatus,setDeleteVideoStatus]=useState({})


  // side effect
  const getAllvideo=async()=>{
    const result =await getVideoApi()
    // console.log(result);
    setAllVideos(result.data)
    
  }
  console.log(allvideos);

  const ondrop=(e)=>{
    e.preventDefault()
  }

  const VideoDrop=async(e)=>{
    const {category,video}=JSON.parse(e.dataTransfer.getData("dataShare"))
    console.log(category,video);

    const newArray = category.allvideos.filter((item)=>item.id!=video.id)
    const newCategory={
      category:category.category,
      allvideos:newArray,
      id:category.id
    }

    const result=await addvideoToCategoryApi(category.id,newCategory)
    console.log(result);
    if(result.status>=200 && result.status<300){
      setVideoStatus(result.data)
    }
    else{
      toast.error('Something went wrong')
    }
    

    
  }
  


  // to handle side effects
  useEffect(()=>{
    getAllvideo()
  },[addVideoStatus,deletevideoStatus])              // [] - useEffect is called when the component render to the browser






  return (
    <div droppable onDragOver={(e)=>ondrop(e)} onDrop={(e)=>VideoDrop(e)}>
      <h4>All Videos</h4>
        
        
              {allvideos.length>0?

          <div className="container">
        <div className="row">

          {allvideos.map((item)=>(
          <div className='col-md-3 p-2'>
          <Videocard video={item} setDeleteVideoStatus={setDeleteVideoStatus}/>
        </div>
          ))}

        
          
        </div>
      </div>

       :
      <div className="container">
        <div className="row">
        <div className="col-md-4"></div>

          <div className="col-md-4 p-2">
            <img src="https://cdn-icons-png.freepik.com/256/16530/16530579.png?semt=ais_hybrid" alt="no image" className='w-75' />
            <h5 className='text-warning text-center p-2'>No videos yet.......</h5>
          </div>
          <div className="col-md-4"></div>
        </div>
      </div>
}
      
      </div>
  )
}

export default Allvideos