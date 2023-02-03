import React, { useContext } from 'react'
import ItemContext from '../state/ItemContext'
import "../App.css"
export default function Card() {
  const cardData = useContext(ItemContext);
  return <>
  <div className='forSpace'></div>
   {
    cardData.card.map((ele)=>{
      return  <div className="singleCompo" style={{display:"flex"}}>
      <img src={ele.image} />
      <div className='title' > {ele.title} </div>
      <button className='btn' onClick={()=>{
          cardData.cardUpdate(cardData.card.filter((c)=>c.id!==ele.id))
        }} >remove from card</button>
 </div>
    })
   }
  </>
}
