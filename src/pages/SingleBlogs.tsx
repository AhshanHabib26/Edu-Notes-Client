import SingleBlogInfo from "../components/ui/SingleBlog/SingleBlogInfo";
import Container from "../utils/Container";

const SingleBlogs = () => {
  return (
    <div>
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-11 my-12">
          <div className="lg:col-span-8 ">
            <div className="w-full lg:w-10/12 ">
              <SingleBlogInfo />
            </div>
          </div>
          <div className="lg:col-span-3">
            <div className="w-full border p-3 rounded-md mt-8 lg:mt-0">
              <h1>Hello</h1>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default SingleBlogs;