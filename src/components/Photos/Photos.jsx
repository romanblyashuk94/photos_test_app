import s from "./Photos.module.scss";
import Photo from "./Photo/Photo";
import { useEffect, useState } from "react";
import { imagesAPI } from "../../api/api";
import Preloader from "../common/Preloader/Preloader";
import SelectedPhotoPopUp from "../SelectedPhotoPopUp/SelectedPhotoPopUp";

const Photos = (props) => {
  const [photosData, setPhotos] = useState([]);


  useEffect(() => {
    imagesAPI.getImagesData().then((photos) => {
      setPhotos(photos);
    });
  }, []);

  if (!photosData) return <Preloader />;
  debugger
  return (
    <div className={s.photosWrapper}>
      {photosData.map((photo) => (
        <Photo key={photo.image_id} photo={photo.src} />
      ))}
    </div>
  );
};
export default Photos;
