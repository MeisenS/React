import React from "react";

const CourseList = (props) => {
  const courses = props.courses;
  return (
    <div>
      <table>
        <tbody>
          {Object.entries(courses).map(([key, value]) => (
            <tr>
              <th>{value.term}
              
              {value.number}</th>
              
              
              {value.meets}
             
              {value.title}
              
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CourseList;
