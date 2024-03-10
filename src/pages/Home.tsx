import AboutUs from "../components/ui/AboutUs";
import Banner from "../components/ui/Banner";
import Categories from "../components/ui/Categories";
import Course from "../components/ui/Course";
import Testimonial from "../components/ui/Testimonial";

const Home = () => {
  return (
    <div>
      <Banner />
      <Categories />
      <AboutUs />
      <Course />
      <Testimonial />
    </div>
  );
};

export default Home;
