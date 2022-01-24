import s from "./SelectedPhotoPopUp.module.scss";
import closeIcon from "../..//assets/img/Close.svg";
import Photo from "../../assets/img/photo1.jpg";

const SelectedPhotoPopUp = (props) => {

  const closePhotoPopUp = () => {
    props.setIsPhotoSelect()
  }

  return (
    <div className={s.popUp}>
      <div className={s.popUpBody}>
        <div className={s.popUpContent}>
          <img onClick={closePhotoPopUp} className={s.closePopUp} src={closeIcon} alt="closePopUp" />
          <div className={s.PopUpContentWrapper}>
            <div className={s.popUpPhotoBlock}>
              <img className={s.photo} src={Photo} alt="photoImage" />
              <div className={s.comentForm}>
                <input
                  className={s.comentInput}
                  type="text"
                  placeholder="Ваше имя"
                />
                <input
                  className={s.comentInput}
                  type="text"
                  placeholder="Ваш коментарий"
                />
                <button className={s.comentButton}>Оставить комментарий</button>
              </div>
            </div>
            <div className={s.popUpComentsBlock}>
              <div className={s.popUpComentItem}>
                <p className={s.comentDate}>18.12.2019</p>
                <p className={s.comentText}>Отличное фото</p>
              </div>
              <div className={s.popUpComentItem}>
                <p className={s.comentDate}>18.12.2019</p>
                <p className={s.comentText}>Отличное фото</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default SelectedPhotoPopUp;
