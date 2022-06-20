import ItemList from "../itemList/ItemList.js";
import "./App.css";

const App = () => {
  return (
    <div className="app">
      <h1 className="title">todos</h1>
      <ItemList />
    </div>
  );
};

export default App;
