/* eslint-disable react-hooks/exhaustive-deps */
import s from "./SelectedPhotoPopUp.module.scss";
import closeIcon from "../..//assets/img/Close.svg";
import { useEffect, useRef, useState } from "react";
import useOnClickOutside from "../../hooks/useOnClickOutside";
import PhotoBlock from "./PhotoBlock/PhotoBlock";
import ComentsBlock from "./ComentsBlock/ComentsBlock";
import { imagesAPI } from "../../api/api";

const SelectedPhotoPopUp = ({ imageId, setIsPhotoSelect }) => {
  const [selectedImage, setSelectedImage] = useState();
  const [imageComments, setImageComments] = useState([]);
  const [nameFieldValue, setNameFieldValue] = useState("");
  const [commentFieldValue, setCommentFieldValue] = useState("");

  useEffect(() => {
    imagesAPI.getLargeImage(imageId).then((image) => setSelectedImage(image));
  }, []);

  useEffect(() => {
    updateComments();
  }, []);

  const updateComments = () => {
    imagesAPI.getImageComments(imageId).then((comments) => {
      if (Array.isArray(comments)) {
        setImageComments(comments);
      } else {
        setImageComments([]);
      }
    });
  };

  const submitComment = () => {
    imagesAPI
      .submitComment(imageId, nameFieldValue, commentFieldValue)
      .then((response) => {
        updateComments();
        setNameFieldValue("");
        setCommentFieldValue("");
      })
      .catch(() => console.log("error"));
  };
  const closePhotoPopUp = () => {
    setIsPhotoSelect(false);
  };

  const ref = useRef();
  useOnClickOutside(ref, closePhotoPopUp);

  return (
    <div className={s.popUp}>
      <div className={s.popUpBody}>
        <div ref={ref} className={s.popUpContent}>
          <img
            onClick={closePhotoPopUp}
            className={s.closePopUp}
            src={closeIcon}
            alt="closePopUp"
          />
          <div className={s.PopUpContentWrapper}>
            <PhotoBlock
              selectedImage={selectedImage}
              setNameFieldValue={setNameFieldValue}
              setCommentFieldValue={setCommentFieldValue}
              nameFieldValue={nameFieldValue}
              commentFieldValue={commentFieldValue}
              submitComment={submitComment}
            />
            <ComentsBlock imageComments={imageComments} />
          </div>
        </div>
      </div>
    </div>
  );
};
export default SelectedPhotoPopUp;
