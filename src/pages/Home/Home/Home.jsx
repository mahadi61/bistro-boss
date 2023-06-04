import { Helmet } from "react-helmet-async";
import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import Featured from "../featured/Featured";
import PopularMenu from "../popularMenu/PopularMenu";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Bistro | Home</title>
      </Helmet>
      <Banner></Banner>
      <section className="w-4/5 mx-auto">
        <Category></Category>
        <PopularMenu></PopularMenu>
      </section>
      <Featured></Featured>
    </div>
  );
};

export default Home;
