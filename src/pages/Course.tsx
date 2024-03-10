
import CourseData from "../components/ui/Courses/CourseData";
import Container from "../utils/Container";
import CourseHeading from "../components/ui/Courses/CourseHeading";
import { useState } from "react";

const Course = () => {

  const [toggleButton, setToggleButton] = useState(false)

  return (
    <div>
      <div>
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-11 mt-10">
            <div className="lg:col-span-3">
              <div className="w-full border p-3 rounded-md lg:mt-0">
                <div>
                  <h1>Hello</h1>
                </div>
              </div>
            </div>
            <div className="lg:col-span-8 ">
              <div className="w-full lg:w-12/12 ">
                <div className="ml-0 lg:ml-5 mt-8 lg:mt-0">
                  <CourseHeading  setToggleButton={setToggleButton}/>
                  <CourseData toggleButton={toggleButton} />
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Course;
