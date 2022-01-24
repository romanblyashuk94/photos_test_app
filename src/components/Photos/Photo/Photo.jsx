import { useState } from "react";
import SelectedPhotoPopUp from "../../SelectedPhotoPopUp/SelectedPhotoPopUp";
import s from "./Photo.module.scss";

const Photo = ({ image, imageId }) => {
  const [isPhotoSelect, setIsPhotoSelect] = useState(false);

  return (
    <div className={s.photoElement}>
      <img
        onClick={() => {
          setIsPhotoSelect(true);
        }}
        className={s.photo}
        src={image}
        alt="Photo1"
      />
      {isPhotoSelect ? (
        <SelectedPhotoPopUp imageId={imageId} setIsPhotoSelect={setIsPhotoSelect} />
      ) : null}
    </div>
  );
};
export default Photo;
