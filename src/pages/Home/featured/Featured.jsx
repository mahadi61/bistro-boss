import featuredImg from "../../../assets/home/featured.jpg";
import SectionTitle from "../../shared/sectionTitle/SectionTitle";
import "./Featured.css";

const Featured = () => {
  return (
    <div className="featured-item bg-fixed">
      <div className="w-4/5 mx-auto py-20 text-white">
        <SectionTitle
          heading={"FROM OUR MENU"}
          subHeading={"Check it out"}
        ></SectionTitle>
        <div className="md:flex justify-center items-center gap-9">
          <div>
            <img src={featuredImg} alt="" />
          </div>
          <div className="e">
            <p>Aug 20, 2029</p>
            <p>WHERE CAN I GET SOME?</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
              voluptate facere, deserunt dolores maiores quod nobis quas quasi.
              Eaque repellat recusandae ad laudantium tempore consequatur
              consequuntur omnis ullam maxime tenetur.
            </p>
            <button className="btn btn-outline border-0 border-b-4 mt-5 text-white">
              Order Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
