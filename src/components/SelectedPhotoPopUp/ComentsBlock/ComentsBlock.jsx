import CommentItem from "./CommentItem/CommentItem";
import s from "./CommentsBlock.module.scss";

const ComentsBlock = ({ imageComments }) => {
  return (
    <div className={s.popUpComentsBlock}>
      {imageComments.map((comment) => (
        <CommentItem key={comment.id} {...comment} />
      ))}
    </div>
  );
};
export default ComentsBlock;
