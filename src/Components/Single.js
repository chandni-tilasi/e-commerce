import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import Card from './Card'
import ItemContext from '../state/ItemContext'
import { toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
function Single(props) {
  const itemData = useContext(ItemContext);
  
  return (<>

    <div className="singleCompo " id='single'>
      <Link to={`/productdetails/${props.item.id}`}>

        <img src={props.item.image} alt="" />
        <div className='title' > {props.item.title} </div >
        <div>{props.item.price} <b>$</b></div>
        
      </Link>

      {
        (itemData.card.includes(props.item))?<button className='btn' onClick={()=>{
          itemData.cardUpdate(itemData.card.filter((c)=>c.id!==props.item.id))
        }} >remove from card</button>:<button className='btn'
        onClick={() => {
          itemData.cardUpdate([...itemData.card, props.item])
          toast.success("item added!",{
            position: toast.POSITION.TOP_RIGHT,}
          )
        }}
      > Add to card </button>
      }


    </div>
{/* <ToastContainer /> */}
  </>)
}

export default Single;