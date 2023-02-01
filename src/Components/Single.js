import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import Card from './Card'
import ItemContext from '../state/ItemContext'
function Single(props) {
  const itemData = useContext(ItemContext);
  
  return (<>

    <div className="singleCompo">
      <Link to={`/productdetails/${props.item.id}`}>

        <img src={props.item.image} />
        <div className='title' > {props.item.title} </div >
        <div>{props.item.price}</div>
      </Link>

      {
        (itemData.card.includes(props.item))?<button className='btn' onClick={()=>{
          itemData.cardUpdate(itemData.card.filter((c)=>c.id!==props.item.id))
        }} >remove from card</button>:<button className='btn'
        onClick={() => {
          itemData.cardUpdate([...itemData.card, props.item])
          
        }}
      > Add to card </button>
      }


    </div>

  </>)
}

export default Single;