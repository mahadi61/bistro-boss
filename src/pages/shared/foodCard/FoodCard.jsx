const FoodCard = ({ item }) => {
  const { name, image, price, recipe } = item;

  return (
    <div>
      <div className="card  bg-base-100 shadow-xl">
        <figure>
          <img src={image} alt="Shoes" />
          <p className="absolute top-4 right-4 bg-[#111827] text-white py-3 px-5 font-bold">
            ${price}
          </p>
        </figure>
        <div className="card-body items-center">
          <h2 className="card-title">{name}</h2>
          <p>{recipe.length < 66 ? recipe : recipe.slice(0, 66)}</p>
          <div className="card-actions">
            <button className="btn btn-outline border-0 border-b-4 mt-5 text-[#BB8506] hover:text-[#BB8506] uppercase">
              Add To Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
