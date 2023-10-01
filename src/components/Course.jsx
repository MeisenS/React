import "./Course.css";

const Course = (props) => {
  const course = props.course;
  const selected = props.selected;
  const toggleSelected = props.toggleSelected;
  return (
    <div className="card" onClick={() => toggleSelected(course)}>
            <div className={`card-body ${selected.includes(course) ? 'selected' : ''}`}>
                <h3 className="card-title">{course.term} CS {course.number}</h3>
                <p className="card-text">{course.title}</p>
                <hr className="custom-divider"/> 
                <p className="card-text">{course.meets}</p>
            </div>
        </div>
  );
};

export default Course;
