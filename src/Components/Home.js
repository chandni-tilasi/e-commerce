import React, { useContext, useEffect, useState } from 'react'
import Single from './Single';
import Header from './Header';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ItemContext from '../state/ItemContext';

function Home() {


    const [loader, setLoader] = useState(false);

    const itemData = useContext(ItemContext);

    useEffect(() => {
        (async function () {
            try {
                const response = await fetch("https://fakestoreapi.com/products");
                const data = await response.json();
                itemData.updateApi(data);

                setLoader(true)


            }
            catch (err) {
                console.log(err)
            }


        })();

    }, [])


    if (!loader) {
        return <h1 style={{ textAlign: "center", marginTop: "20px",display:"flex",justifyContent:"center",alignItems:"center",height:"40vh" }}>loading.....</h1>
    }

    return (
        <div className='homeCompo' >

            {

                (itemData.newApi.length !== 0) ? itemData.newApi.map((item) => {

                    return <Single item={item} key={item.id}  />
                }) :
                    itemData.api.map((item) => {

                        return <Single item={item} key={item.id} />
                    })
            }

        </div>
    )
}

export default Home