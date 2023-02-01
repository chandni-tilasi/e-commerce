import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ItemContext from '../state/ItemContext';
function ProductDetails() {
    const params = useParams();
    const [details, setDetails] = useState({});
    const [loader,setLoader] = useState(false);
    const itemData = useContext(ItemContext)

    useEffect(() => {
        (async function () {
            try {
                
                const response = await fetch(`https://fakestoreapi.com/products/${params.id}`);
                const data = await response.json();
                setDetails(data);
                setLoader(true);
                console.log(details);

            }
            catch (err) {
                console.log("errroorrr hai bhai yha par")
            }
        })();
       
    }, [])
    if(!loader){
        return <h1 style={{ textAlign: "center", marginTop: "20px" }}>  loading.... </h1>
    }

    return (
        <div className="singleCompo detailsCard">
        
       <div>
       <img src={details.image} />
        <div className='title' > {details.title} </div >
        <p>  {details.description} </p>
        {
        (itemData.card.includes(details))?<button className='btn' onClick={()=>{
          itemData.cardUpdate(itemData.card.filter((c)=>c.id!==details.id))
        }} >remove from card</button>:<button className='btn'
        onClick={() => {
          itemData.cardUpdate([...itemData.card, details])
          
        }}
      > Add to card </button>
      }

       </div>
       
      
    </div>
    )
}

export default ProductDetails