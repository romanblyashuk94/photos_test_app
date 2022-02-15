import s from "./Photos.module.scss";
import Photo from "./Photo/Photo";
import { useEffect, useState } from "react";
import { imagesAPI } from "../../api/api";
import Preloader from "../common/Preloader/Preloader";

const Photos = () => {
  const [photosData, setPhotos] = useState();

  useEffect(() => {
    getPhotosData();
  }, []);

  // callbacks:
  const getPhotosData = async () => {
    try {
      const photos = await imagesAPI.getImagesData();
      setPhotos(photos);
    } catch (error) {
      console.log(error);
    }
  };

  if (!photosData) return <Preloader />;

  return (
    <div className={s.photosWrapper}>
      {photosData.map((photo) => (
        <Photo
          key={photo.image_id}
          image={photo.src}
          imageId={photo.image_id}
        />
      ))}
    </div>
  );
};
export default Photos;
