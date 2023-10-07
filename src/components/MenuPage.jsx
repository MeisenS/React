import { useState } from "react";
import Modal from "./Modal";
import Schedule from "./Schedule";
import { useEffect } from 'react';
import { courseConflict } from "../utilities/conflict";
import CourseList from "./CourseList";

const meals = {
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
  const [open, setOpen] = useState(false);
  const openModal = () => setOpen(true);
  const closeModal = () => setOpen(false);
  const [noSelection, setNoSelection] = useState([]);
    useEffect(() => {
        const noSelectionList = Object.values(data.courses).filter(course1 => selectCard.some(course2 => courseConflict(course1, course2)));
        setNoSelection(noSelectionList);
    }, [selectCard]);

  const toggleSelected = (item) =>
    setSelectCard(
      selectCard.includes(item)
        ? selectCard.filter((x) => x !== item)
        : [...selectCard, item]
    );

  return (
    <div>
      <MenuSelector selection={selection} setSelection={setSelection} />

      <button
        className="btn btn-outline-dark"
        style={{ float: "right" }}
        onClick={openModal}
      >
        Course Plan
      </button>

      <Modal open={open} close={closeModal}>
        {selectCard.length == 0 ? (
          <div>
            <h5>You have not selected any course yet.</h5>
            <h5>Please click on any course card to select.</h5>
          </div>
        ) : (
          <Schedule selectedCourses={selectCard} />
        )}
      </Modal>

      <CourseList
        courses={data.courses}
        selectedTerm={selection}
        selected={selectCard}
        toggleSelected={toggleSelected}
        cantSelect={noSelection}
      />
    </div>
  );
};

export default MenuPage;
