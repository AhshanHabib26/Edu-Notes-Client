import AboutUs from "../components/ui/AboutUs";
import Banner from "../components/ui/Banner";
import Categories from "../components/ui/Categories";
import Course from "../components/ui/Course";
import Instructor from "../components/ui/Instructor";
import Testimonial from "../components/ui/Testimonial";

const Home = () => {
  return (
    <div>
      <Banner />
      <Categories />
      <AboutUs />
      <Course />
      <Testimonial />
      <Instructor />
    </div>
  );
};

export default Home;
