import PreloaderGif from "../../../assets/img/preloader.gif";
import s from "./Preloader.module.scss";

const Preloader = (props) => {
  return (
    <div className={s.preloaderBlock}>
      <img src={PreloaderGif} alt="preloader" />
    </div>
  );
};
export default Preloader;
