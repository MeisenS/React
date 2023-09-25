import './Course.css'

const Course = (props) => {
    const course = props.course;
    return (
        <div className="card">
            <div className="card-body">
                <h3 className="card-title">{course.term} CS {course.number}</h3>
                <p className="card-text">{course.title}</p>
                <hr className="custom-divider"/> 
                <p className="card-text">{course.meets}</p>
            </div>
        </div>
    )
};

export default Course;