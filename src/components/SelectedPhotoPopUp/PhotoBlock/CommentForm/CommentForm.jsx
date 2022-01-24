import s from "./CommentForm.module.scss";

const CommentForm = ({
  commentFieldValue,
  nameFieldValue,
  setCommentFieldValue,
  setNameFieldValue,
  submitComment
}) => {
  const onNameFieldChange = (e) => {
    setNameFieldValue(e.target.value);
  };
  const commentFieldChange = (e) => {
    setCommentFieldValue(e.target.value);
  };

  return (
    <div className={s.commentForm}>
      <input
        onChange={onNameFieldChange}
        value={nameFieldValue}
        className={s.commentInput}
        type="text"
        placeholder="Ваше имя"
      />
      <input
        onChange={commentFieldChange}
        value={commentFieldValue}
        className={s.commentInput}
        type="text"
        placeholder="Ваш коментарий"
      />
      <button onClick={submitComment} className={s.commentButton}>
        Оставить комментарий
      </button>
    </div>
  );
};
export default CommentForm;
