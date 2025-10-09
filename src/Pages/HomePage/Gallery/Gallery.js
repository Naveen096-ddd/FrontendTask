import React from 'react'
import './gallery.css';
import { GalleryList } from '../../../assets/assests'
function Cards() {
  return (
    <div className='cards'>
        <h1 style={{textAlign:'center'}}>Gallery</h1><hr/>
        <div className='cards-items'>
            {GalleryList.map((item,index)=>{
                return (
                <div key={index} className='sub-card'>
                    <img src={item.gallery_img}/>
                </div>
            )
            })}
        </div>
      <button className='btn'>View More</button>
    </div>
  )
}

export default Cards
