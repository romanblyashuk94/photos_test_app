import { useState } from "react";
import SelectedPhotoPopUp from "../../SelectedPhotoPopUp/SelectedPhotoPopUp";
import s from "./Photo.module.scss";

const Photo = (props) => {
  const [isPhotoSelect, setIsPhotoSelect] = useState(false);

  return (
    <div className={s.photoElement}>
      <img onClick={() => {setIsPhotoSelect(true)} } className={s.photo} src={props.photo} alt="Photo1" />
      {isPhotoSelect ? <SelectedPhotoPopUp setIsPhotoSelect={setIsPhotoSelect} /> : null}
    </div>
    
  );
};
export default Photo;
