import { useDispatch } from "react-redux";
import { statusChange } from "../../actions";
import "./Item.css";

const Item = ({ id, text, status, onDelete }) => {
  const chengeCheckbox = () => {
    dispatch(statusChange(id));
  };

  const dispatch = useDispatch();
  return (
    <div className="item">
      <label htmlFor={`text ${id}`}>
        <input
          type="checkbox"
          id={`text ${id}`}
          defaultChecked={status === true ? "checked" : null}
          onChange={chengeCheckbox}
        ></input>
        {text}
      </label>
    </div>
  );
};

export default Item;
