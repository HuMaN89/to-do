import { useDispatch, useSelector } from "react-redux";
import { createSelector } from "@reduxjs/toolkit";
import { itemDeleted } from "./itemsSlice"; 
import AddItem from "../addItem/AddItem";
import Item from "../item/Item";
import "./ItemList.css";
import StatePanel from "../statePanel/StatePanel";

const ItemList = () => {
  const filteredItemsSelector = createSelector(
    (state) => state.items.activeFilter,
    (state) => state.items.items,
    (activeFilter, items) => {
      if (activeFilter === "All") {
        return items;
      } else if (activeFilter === "Active") {
        return items.filter((item) => item.status === false);
      } else if (activeFilter === "Complited") {
        return items.filter((item) => item.status === true);
      }  
    }


  );
  const dispatch = useDispatch();

  let count = 0;
  const filteredItems = useSelector(filteredItemsSelector);

  const renderItemsList = (arr) => {
    return arr.map(({ id, text, status }) => {
      count +=1;
      return (
        <Item
          key={id}
          id={id}
          text={text}
          status={status}
        />
      );
    });
  };

  const elements = renderItemsList(filteredItems);

  return (
    <div className="item-list">
      <AddItem />
      <ul>{elements}</ul>
      <StatePanel count={count}/>
      {/* <input
        type="checkbox"
        class="custom-checkbox"
        id="happy"
        name="happy"
        value="yes"
      />
      <label for="happy">Happy</label> */}
    </div>
  );
};

export default ItemList;
