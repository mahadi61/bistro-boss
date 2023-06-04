import { Helmet } from "react-helmet-async";
import banner3 from "../../../assets/menu/banner3.jpg";
import Cover from "../../shared/cover/Cover";
import PopularMenu from "../../Home/popularMenu/PopularMenu";

const Menu = () => {
  return (
    <div>
      <Helmet>
        <title>Bistro | Menu</title>
      </Helmet>
      <Cover
        img={banner3}
        title={"our menu"}
        subTitle={"WOULD YOU LIKE TO TRY A NEW DISH?"}
      ></Cover>
      <section className="w-4/5 mx-auto">
        <PopularMenu></PopularMenu>
      </section>
      <Cover
        img={banner3}
        title={"our menu"}
        subTitle={"WOULD YOU LIKE TO TRY A NEW DISH?"}
      ></Cover>
      <section className="w-4/5 mx-auto">
        <PopularMenu></PopularMenu>
      </section>
      <Cover
        img={banner3}
        title={"our menu"}
        subTitle={"WOULD YOU LIKE TO TRY A NEW DISH?"}
      ></Cover>
      <section className="w-4/5 mx-auto">
        <PopularMenu></PopularMenu>
      </section>
    </div>
  );
};

export default Menu;
