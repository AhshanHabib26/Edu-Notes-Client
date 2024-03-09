import { TComment } from "./SCReviews";

interface ICommentProps {
  comment: TComment;
}

const SCReviewCard: React.FC<ICommentProps> = ({ comment }) => {
  return (
    <div className="mt-5 shadow rounded-lg p-4">
      <div className="flex items-center">
        <img className="w-[50px] h-[50px] object-cover rounded-full" src={comment.image} alt="" />
        <div className="ml-3">
          <h1>{comment.name}</h1>
          <div className="flex items-center">
            <p>{comment.rating}</p>
            <p className=" text-md poppins-regular text-[#FC4F4F] ml-5">{comment.time}</p>
          </div>
        </div>
      </div>
      <div className="mt-3">
        <p className=" text-md poppins-light text-justify">{comment.review}</p>
      </div>
    </div>
  );
};

export default SCReviewCard;
