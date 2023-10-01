import { useState } from "react";
import Banner from "./Banner";
import CourseList from "./CourseList";

const meals  = {
  Fall: "Fall",
  Winter: "Winter",
  Spring: "Spring",
};

const MenuButton = ({ meal, selection, setSelection }) => (
  <div>
    <input
      type="radio"
      id={meal}
      className="btn-check"
      checked={meal === selection}
      autoComplete="off"
      onChange={() => setSelection(meal)}
    />
    <label className="btn btn-success mb-1 p-2" htmlFor={meal}>
      {meal}
    </label>
  </div>
);

const MenuSelector = ({ selection, setSelection }) => (
  <div className="btn-group">
    {Object.keys(meals).map((meal) => (
      <MenuButton
        key={meal}
        meal={meal}
        selection={selection}
        setSelection={setSelection}
      />
    ))}
  </div>
);

const Menu = ({ selection }) => <div className="card">{meals[selection]}</div>;

const MenuPage = (props) => {
  const { data } = props;
  const [selection, setSelection] = useState(() => Object.keys(meals)[0]);
  const [selectCard, setSelectCard] = useState([]);

  const toggleSelected = (item) => setSelectCard(
      selectCard.includes(item) ? selectCard.filter(x => x !== item) : [...selectCard, item]
  )

  return (
    <div>
      <MenuSelector selection={selection} setSelection={setSelection} />
      
      <CourseList courses={data.courses} selectedTerm={selection} selected={selectCard} toggleSelected={toggleSelected} />
    </div>
  );
};

export default MenuPage;