import Cover from "../../shared/cover/Cover";
import MenuItem from "../../shared/menuItem/MenuItem";

const MenuCategory = ({ items, title, coverImg }) => {
  return (
    <div>
      {title && (
        <Cover
          img={coverImg}
          title={title}
          subTitle={
            "Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
          }
        ></Cover>
      )}
      <div className="w-4/5 mx-auto py-7">
        <div className="grid md:grid-cols-2 mb-9 gap-10">
          {items.map((item) => (
            <MenuItem key={item._id} item={item}></MenuItem>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MenuCategory;
