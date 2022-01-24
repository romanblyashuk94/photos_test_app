import s from "./ComentItem.module.scss";

const CommentItem = ({description, name, id, image_id}) => {

  return (
    <div className={s.popUpComentItem}>
      <span className={s.commentName}>{name}</span>
      <span className={s.comentDate}>18.12.2019</span>
      <div className={s.comentText}>{description}</div>
    </div>
  );
};
export default CommentItem;
