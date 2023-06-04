import { Helmet } from "react-helmet-async";
import banner3 from "../../../assets/menu/banner3.jpg";
import dessertBg from "../../../assets/menu/dessert-bg.jpeg";
import pizzaBg from "../../../assets/menu/pizza-bg.jpg";
import saladBg from "../../../assets/menu/salad-bg.jpg";
import soupBg from "../../../assets/menu/soup-bg.jpg";
import useMenu from "../../../hooks/useMenu";
import Cover from "../../shared/cover/Cover";
import SectionTitle from "../../shared/sectionTitle/SectionTitle";
import MenuCategory from "../menuCategory/MenuCategory";

const Menu = () => {
  const [menu] = useMenu();
  const desserts = menu.filter((item) => item.category === "dessert");
  const soup = menu.filter((item) => item.category === "soup");
  const salad = menu.filter((item) => item.category === "salad");
  const pizza = menu.filter((item) => item.category === "pizza");
  const offered = menu.filter((item) => item.category === "offered");

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
      <SectionTitle
        heading={"TODAY'S OFFER"}
        subHeading={"Don't miss"}
      ></SectionTitle>
      {/* offer menu item */}
      <MenuCategory items={offered}></MenuCategory>
      {/* desserts menu item */}
      <MenuCategory
        items={desserts}
        title="Desserts"
        coverImg={dessertBg}
      ></MenuCategory>
      {/* pizza menu item */}
      <MenuCategory
        items={pizza}
        title="Pizza"
        coverImg={pizzaBg}
      ></MenuCategory>
      {/* salad menu item */}
      <MenuCategory
        items={salad}
        title="Salad"
        coverImg={saladBg}
      ></MenuCategory>
      {/* Soup menu item */}
      <MenuCategory items={soup} title="Soup" coverImg={soupBg}></MenuCategory>
    </div>
  );
};

export default Menu;
