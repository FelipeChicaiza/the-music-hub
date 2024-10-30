import PropTypes from "prop-types";
import './CatInfo.css';
import { Link } from "react-router-dom";

const CatInfo = ({ header, name, origin, lifespan, description, temperament, image, imageId }) => {
  console.log({ name, origin, lifespan, description, temperament, image, imageId });

  return header ? (
    <div className="catInfo-div">
      <p className="catInfo-text">{name}</p>
      <p className="catInfo-text">{origin}</p>
      <p className="catInfo-text">{lifespan}</p>
      <p className="catInfo-text">{description}</p>
    </div>
  ) : (
    <div className="catInfo-div">
      <img src={image} alt={`${name}`} className="cat-image" />
      <Link className="catInfo-text" to={`/${name}`} state={{ name:name, origin:origin, lifespan:lifespan, description:description, imageId:imageId, temperament:temperament  }}>{name}
      </Link>
      <p className="catInfo-text">{origin}</p>
      <p className="catInfo-text">{lifespan}</p>
      <p className="catInfo-text">{description}</p>
    </div>
  );
};

CatInfo.propTypes = {
  name: PropTypes.string.isRequired,
  origin: PropTypes.string.isRequired,
  lifespan: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  imageId: PropTypes.string,
  temperament: PropTypes.string,
  image: PropTypes.string,
};

export default CatInfo;