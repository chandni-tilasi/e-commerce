import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import "../App.css"
import { AiOutlineSearch } from "react-icons/ai";
import ItemContext from '../state/ItemContext';
import { ToastContainer,toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function Header() {
  const stateItem = useContext(ItemContext);
  const [text, setText] = useState("");
  const [range, setRange] = useState(0);

  function changeHandler(e) {
    setText(e.target.value);
    const filterProduct = stateItem.api.filter((ele) => ele.title.toLowerCase().includes(text.toLowerCase()) || ele.description.toLowerCase().includes(text.toLowerCase()) && ele.price <= range)

    stateItem.newApiFun(filterProduct);
  }


  function changeRange(e) {
    setRange(e.target.value)
    const filterProduct = stateItem.api.filter((ele) => ele.title.toLowerCase().includes(text.toLowerCase()) || ele.description.toLowerCase().includes(text.toLowerCase()) && ele.price <= range)

    stateItem.newApiFun(filterProduct);
  }


  return (
   <>
   {/* <div className='forSpace'></div> */}
    <div className='headerContainer'>
      <li> <Link to="/"> <img  className='logo' src="https://couponedge.in/img/stores/meesho-store.png" /> </Link> </li>
      <li> <Link to="/card"> Card {stateItem.card.length} </Link> </li>
      <div className='searchContainer'>
        <input className='searchBox' value={text} onChange={changeHandler} type="search" placeholder="search here" />
        <AiOutlineSearch style={{ fontSize: "20px" }} />
       
      </div>
    </div>
    </>
  )
}

export default Header