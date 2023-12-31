import "bootstrap/dist/css/bootstrap.min.css";
import "./Course.css";
import { Link } from "react-router-dom";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import { useProfile } from "../utilities/profile";

const Course = (props) => {
  const course = props.course;
  const selected = props.selected;
  const toggleSelected = props.toggleSelected;
  const cantSelect = props.cantSelect;
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [profile, profileLoading, profileError] = useProfile();
  // console.log(profile)
  if (profileError) return <h1>Error loading profile: {`${profileError}`}</h1>;
  if (profileLoading) return <h1>Loading user profile</h1>;
  if (!profile) return <h1>No profile data</h1>;

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
          {isAuthenticated && profile?.isAdmin && (
            <Link
            className="btn btn-primary"
            to={`/courses/${course.term[0]}${course.number}`}
          >
              Edit
            </Link>
          )}
          
        </p>
      </div>
    </div>
  );
};

export default Course;
