import React from "react";
import "./CourseList.css";
import Course from "./Course";

const CourseList = (props) => {
  const courses = props.courses;
  const selectedTerm = props.selectedTerm;
  const selected = props.selected;
  const toggleSelected = props.toggleSelected;
  const selectedCourses = Object.values(courses).filter(
    (courseInfo) => courseInfo.term === selectedTerm
  );
  return (
    <div>
      <div className="product-list">
        {Object.entries(selectedCourses).map(([key, value]) => (
          <Course
            key={key}
            course={value}
            selected={selected}
            toggleSelected={toggleSelected}
          />
        ))}
      </div>
    </div>
  );
};

export default CourseList;
