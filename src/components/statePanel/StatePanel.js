import { useDispatch} from "react-redux";
import { activeFilterChanged, itemDeleted } from "../itemList/itemsSlice";


import "./StatePanel.css";
const StatePanel = (props) => {
  const dispatch = useDispatch();

  const changeFilter = (e) => {
  console.log(e.target.innerText);
  dispatch(activeFilterChanged(e.target.innerText) )
}
 const clearComplited = () => {
  dispatch(itemDeleted())
 }
  return (
    <div className="state-panel">
      <span>{props.count} items left</span>
      <div className="state-filters">
        <button className="" onClick={changeFilter}>All</button>
        <button className="" onClick={changeFilter}>Active</button>
        <button className="" onClick={changeFilter}>Complited</button>
      </div>
      <button onClick={clearComplited}>Clear complited</button>
    </div>
  );
};

export default StatePanel;
