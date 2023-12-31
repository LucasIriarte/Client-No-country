import Header from "../../components/header/Header";
import HomeBody from "../../components/home/Home";
import { Footer } from "../../components/footer/Footer";

const Home = () => {
  return (
    <div className="max-w-screen-2xl min-h-screen flex flex-col mx-auto">
      <div>
        <Header />
      </div>
      <div>
        <HomeBody />
      </div>
      <div className="mt-auto">
        <Footer />
      </div>
    </div>
  );
};

export default Home;
