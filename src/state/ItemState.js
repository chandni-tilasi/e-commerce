import { useState } from "react";
import ItemContext from "./ItemContext";

const ItemState = (props) => {

  const [api, setApi] = useState([]);
  const [headerText, setHeaderText] = useState("");
  const [headerRange, setHeaderRange] = useState(1000);
  const [card, setCard] = useState([]);
  const [newApi, setNewApi] = useState([])


  const updateApi = (data) => {
    setApi(data);

  }
 

  const Textupdate = (items) => {
    setHeaderText(items);
  }

  const rangeUpdate = (data) => {
    setHeaderRange(data);
  }

  function cardUpdate(data) {
    setCard(data);
  }


  function newApiFun(data) {
    setNewApi(data);
  }

  return (
    <ItemContext.Provider value={{ headerText, Textupdate, headerRange, rangeUpdate, card, cardUpdate, api, updateApi, newApi, setNewApi, newApi, newApiFun }}>
      {props.children}
    </ItemContext.Provider>
  );
};

export default ItemState;
