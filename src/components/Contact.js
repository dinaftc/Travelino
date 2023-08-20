import travel from "./images/travel.jpg";
import { Link } from "react-router-dom";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
const Contact = () => {
  return (
    <div className="text-center relative">
      <Link className="flex text-center items-center justify-center" to='Contact'>
      <p className="font-bold text-4xl pr-5 pb-3">Plan Your Vacation</p>
      <ArrowForwardIosIcon color="primary" />
      </Link>
        <p className="text-xl mr-2">
          For many people organizing a trip is a headache, so let us do that for
          you, we only need dates and destinations
        </p>
      
      <div className="flex justify-center p-8 m-8">
        <img src={travel} alt="" className="rounded-xl h-screen " />
      </div>{" "}
    </div>
  );
};

export default Contact;
