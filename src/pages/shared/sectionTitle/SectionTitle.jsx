const SectionTitle = ({ heading, subHeading }) => {
  return (
    <div className="w-80 mx-auto text-center my-4">
      <p className="text-yellow-500">---{subHeading}---</p>
      <h1 className="text-4xl uppercase border-y-4 py-4">{heading}</h1>
    </div>
  );
};

export default SectionTitle;
