import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemContext from "../state/ItemContext";
import { toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
function ProductDetails() {
  const params = useParams();
  const [details, setDetails] = useState({});
  const [loader, setLoader] = useState(false);
  const itemData = useContext(ItemContext);
const [clicked,setClicked] = useState(false);
function clickHandle(){
    setClicked(true);
}
  useEffect(() => {
    (async function () {
      try {
        const response = await fetch(
          `https://fakestoreapi.com/products/${params.id}`
        );
        const data = await response.json();
        setDetails(data);
        setLoader(true);
        console.log(details);
      } catch (err) {
        console.log(err);
      }
    })();
  }, []);
  if (!loader) {
    return (
      <h1 style={{ textAlign: "center", marginTop: "10px" }}> loading.... </h1>
    );
  }

  return (
    <>
      <div className="forSpace"></div>
      <div className=" detailsCard"   >
        <div className="subDetailsContainer"  >
          <img src={details.image} alt="" />
          <div className="title"> {details.title} </div>
          <h3> {details.description} </h3>
          <div>
            {details.price} <b>$</b>
          </div>
          <span> rating-{details.rating.rate} </span> <br />
          {itemData.card.includes(details) ? (
            <div className="btnContainer">
              <button
                className="btn"
                onClick={() => {
                  itemData.cardUpdate(
                    itemData.card.filter((c) => c.id !== details.id)
                  );
                  toast.success("item removed from card!",{
                    position: toast.POSITION.TOP_RIGHT,}
                  )
                }}
              >
                remove from card
              </button>
             
            </div>
          ) : (
            <div className="btnContainer">
              <button
                className="btn"
                onClick={() => {
                  itemData.cardUpdate([...itemData.card, details]);
                  toast.success("item added!",{
                    position: toast.POSITION.TOP_RIGHT,}
                  )
                }}
              >
                {" "}
                Add to card{" "}
              </button>
             
            </div>
          )}
          {/* <button className="btn" onClick={clickHandle}>Buy Now</button> */}
        </div>
      </div>
      {/* <ToastContainer /> */}
    </>
  );
}

export default ProductDetails;
