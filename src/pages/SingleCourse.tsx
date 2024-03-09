import SCAbout from "../components/ui/SingleCourse/SCAbout";
import SCBInstructors from "../components/ui/SingleCourse/SCBInstructors";
import SCBanner from "../components/ui/SingleCourse/SCBanner";
import SCContent from "../components/ui/SingleCourse/SCContent";
import SCRequirements from "../components/ui/SingleCourse/SCRequirements";
import SCWhoThis from "../components/ui/SingleCourse/SCWhoThis";
import Container from "../utils/Container";

const SingleCourse = () => {
  return (
    <div>
      <SCBanner />
      <div>
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-11 my-8">
            <div className="lg:col-span-9 ">
              <div className="w-full lg:w-10/12 ">
                <SCAbout />
                <SCRequirements />
                <SCWhoThis />
                <SCContent />
                <SCBInstructors />
              </div>
            </div>
            <div className="lg:col-span-2">
              <div className="w-full bg-slate-600">Right Side</div>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default SingleCourse;
