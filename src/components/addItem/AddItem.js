import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import { itemAdd } from "../itemList/itemsSlice";
import "./AddItem.css";

const AddItem = () => {
  const [value, setValue] = useState("");

  const dispatch = useDispatch();
  const addNewItem = (e) => {
    e.preventDefault();
    dispatch(
      itemAdd({
        id: uuidv4(),
        text: value,
        status: false,
      })
    );
    setValue("");
  };

  const changeInput = (e) => {
    setValue(e.target.value);
  };
  return (
    <form className="add-item" onSubmit={addNewItem}>
      <input
        type="text"
        value={value}
        onChange={(e) => changeInput(e)}
        placeholder="What needs to be done?"
      />
      <button
        className="btn-add"
        style={value !== "" ? { display: "block" } : null}
        type="submit"
      >
        Создать
      </button>
    </form>
  );
};

export default AddItem;
