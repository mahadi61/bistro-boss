import useMenu from "../../../hooks/useMenu";
import MenuItem from "../../shared/menuItem/MenuItem";
import SectionTitle from "../../shared/sectionTitle/SectionTitle";

const PopularMenu = () => {
  const [menu] = useMenu();
  const popular = menu.filter((item) => item.category === "popular");

  return (
    <div>
      <SectionTitle
        heading={"FROM OUR MENU"}
        subHeading={"Check it out"}
      ></SectionTitle>

      <div className="grid md:grid-cols-2 mb-9 gap-10">
        {popular.map((item) => (
          <MenuItem key={item._id} item={item}></MenuItem>
        ))}
      </div>
    </div>
  );
};

export default PopularMenu;
