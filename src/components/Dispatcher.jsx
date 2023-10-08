import { BrowserRouter, Routes, Route } from "react-router-dom";
import MenuPage from "./MenuPage";
import CourseForm from "./CourseForm";
import { useParams } from 'react-router-dom';

const CourseFormWrapper = ({ data }) => {
    const { courseId } = useParams();
    const course = data.courses[courseId];

    if (!course) {
      return <div>404</div>;
    }
    return <CourseForm course={course} />;
  }

const Dispatcher = ({data}) => (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<MenuPage data={data}/>}></Route>
            <Route path="/courses/:courseId" element={<CourseFormWrapper data={data} />} />
        </Routes>
    </BrowserRouter>
);

export default Dispatcher;