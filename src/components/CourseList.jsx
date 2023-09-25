import React from "react";
import "./CourseList.css";
import Course from "./Course";

const CourseList = (props) => {
  const courses = props.courses;
  return (
    <div>
      <div className="product-list">
        {Object.entries(courses).map(([key, value]) => (
          <Course key={key} course={value} />
        ))}
      </div>
    </div>
  );
};

export default CourseList;
