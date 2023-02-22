import React, { useContext } from 'react'
import ItemContext from '../state/ItemContext'
import { ToastContainer,toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "../App.css"
import "./card.css"
export default function Card() {
  const cardData = useContext(ItemContext);

  


  return <>
  <div className='forSpace'></div>
    <div className='card-container'>
   {
    cardData.card.map((ele)=>{
      return  <div className="singleCompo" style={{display:"flex"}}>
      <img src={ele.image} />
      <div className='title' > {ele.title} </div>
      <div>{ele.price} <b>$</b></div>
        <span> rating-{ele.rating.rate} </span>
      <button className='btn' onClick={()=>{
          cardData.cardUpdate(cardData.card.filter((c)=>c.id!==ele.id))
          toast.success("item removed from card!",{
            position: toast.POSITION.TOP_RIGHT,}
          )
        }}  >remove from card</button>
 </div>
    })
   }
  <ToastContainer />
  </div>
  </>
}
