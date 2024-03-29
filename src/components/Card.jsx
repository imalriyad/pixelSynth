import img1 from "../assets/img-1.jpg";
import loader from "../assets/loader.svg";

const Card = () => {
  const loading = true;

  return (
    <div className={loading ? "bg-[#ecf0f1] rounded-md" : ""}>
      <img
        src={loading ? loader : img1}
        alt="genarated image"
        className={`rounded-md drop-shadow-md `}
      />
    </div>
  );
};

export default Card;
