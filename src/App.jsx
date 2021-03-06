import s from "./App.module.scss";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Photos from "./components/Photos/Photos";

const App = (props) => {
  return (
    <div className={s.appWrapper}>
      <div className={s.container}>
        <Header />
        <main className={s.mainContent}>
          <Photos />
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default App;
