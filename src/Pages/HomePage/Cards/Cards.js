import React from 'react'
import './card.css';
import { ServiceList } from '../../../assets/assests'
function Cards() {
  return (
    <div className='cards'>
        <h1 style={{textAlign:'center'}}>Services</h1><hr/>
        <div className='cards-items'>
            {ServiceList.map((item,index)=>{
                return  (
                <div key={index} className='sub-card'>
                    <h3>{item.service_name}</h3>
                    <img src={item.service_img}/>
                    <p>{item.service_content}</p>
                </div>
            )

            })}
        </div>
        <button className='btn'>View More</button>
      
    </div>
  )
}

export default Cards
