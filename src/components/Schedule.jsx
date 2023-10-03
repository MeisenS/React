import "./Schedule.css";

const Schedule = (props) => {
  const selectedCourses = props.selectedCourses;
  console.log(selectedCourses);
  return (
    <div className="contain">
        <h1>Course Selection</h1>
      {selectedCourses.map((eachCourse) => (
        <div className="card">
          <div className="card-body">
            <p className="card-text">
              {eachCourse.term} {eachCourse.number} {eachCourse.title}
              {eachCourse.meets}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Schedule;
