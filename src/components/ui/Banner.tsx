import { Link } from "react-router-dom";
import Container from "../../utils/Container";
import ImgOne from "../../assets/images/BImgOne.jpg";
import ImgTwo from "../../assets/images/BImgTwo.jpg";
import { PhoneCall } from "lucide-react";

const Banner = () => {
  return (
    <div className="bg-[#001D25] py-12 lg:py-24">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5 place-content-center mb-32 lg:mb-0">
          <div className="flex flex-col justify-center">
            <h1 className="text-5xl lg:text-7xl text-white max-w-[15ch] poppins-bold">
              Take Student <span className="text-[#fc4f4f]">Experience</span> To
              the Next Level
            </h1>
            <p className="my-5 text-md max-w-[65ch] text-white poppins-light">
              We'll use new ideas and tools to give them the best support
              possible, so they can learn and grow happily. Together, we'll take
              their experience to a whole new level!
            </p>
            <div className="mt-3">
              <Link
                className="bg-[#fc4f4f] p-4 text-lg text-white rounded-lg poppins-regular"
                to="/"
              >
                Find Courses
              </Link>
            </div>
          </div>
          <div className="mt-10 lg:mt-0">
            <div className=" flex items-center relative">
              <div>
                <img
                  className="w-[200px] h-[250px]  lg:w-[250px] lg:h-[300px] object-cover  rounded-tl-[80px] rounded-br-[80px] shadow-2xl"
                  src={ImgTwo}
                  alt="Girl Image"
                />
              </div>
              <div className=" absolute right-[20px] lg:right-[130px] top-28">
                <img
                  className="w-[200px] h-[250px]  lg:w-[250px] lg:h-[300px]  object-cover rounded-tr-[80px] rounded-bl-[80px] shadow-2xl"
                  src={ImgOne}
                  alt="Boy Image"
                />
              </div>
            </div>
            <div className=" bg-[#fc4f4f] flex items-center w-[220px] mt-5 justify-evenly p-3 rounded-lg absolute right-[200px] lg:right-[350px]">
              <PhoneCall color="#fff" size={25} />
              <div>
                <p className="text-lg font-semibold text-white poppins-regular">
                  Online Support
                </p>
                <a
                  className="text-md text-white poppins-light"
                  href="tel:+8801646418365"
                >
                  +8801646418365
                </a>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Banner;
