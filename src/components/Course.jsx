import "bootstrap/dist/css/bootstrap.min.css";
import "./Course.css";
import { Link } from "react-router-dom";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";

const Course = (props) => {
  const course = props.course;
  const selected = props.selected;
  const toggleSelected = props.toggleSelected;
  const cantSelect = props.cantSelect;
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setIsAuthenticated(!!user);
    });
    return () => unsubscribe();
  }, []);
  return (
    <div className="card" onClick={() => toggleSelected(course)}>
      <div
        className={`card-body ${selected.includes(course) ? "selected" : ""} ${
          cantSelect.includes(course) ? "noSelection" : ""
        }`}
        onClick={
          !cantSelect.includes(course) ? () => toggleSelected(course) : null
        }
      >
        <h3 className="card-title">
          {course.term} CS {course.number}
        </h3>
        <p className="card-text">{course.title}</p>
        <hr className="custom-divider" />
        <p className="card-text">{course.meets}</p>
        <p>
          <Link
            className="btn btn-primary"
            to={`/courses/${course.term[0]}${course.number}`}
          >
            Edit
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Course;
