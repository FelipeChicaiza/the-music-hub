import PropTypes from "prop-types";
import './CatInfo.css';

const CatInfo = ({ name, origin, lifespan, description,image }) => {
  return (
    <div className="catInfo-div">
      <img src={image} alt={`${name}`} className="cat-image" />
      <p className="catInfo-text">{name}</p>
      <p className="catInfo-text">{origin}</p>
      <p className="catInfo-text">{lifespan}</p>
      <p className="catInfo-text">{description}</p>
    </div>
  );
};

export default CatInfo;