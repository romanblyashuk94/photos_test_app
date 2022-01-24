import Preloader from "../../common/Preloader/Preloader";
import CommentForm from "./CommentForm/CommentForm";
import s from "./PhotoBlock.module.scss";

const PhotoBlock = ({ selectedImage, ...props }) => {

  return (
    <div className={s.popUpPhotoBlock}>
      {selectedImage ? (
        <img className={s.photo} src={selectedImage} alt="photoImage" />
      ) : (
        <Preloader />
      )}
      <CommentForm {...props} />
    </div>
  );
};
export default PhotoBlock;
