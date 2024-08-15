import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const TransparentLink = ({ uri }) => {
  return (
    <div className="transparent-link">
      <a href={uri}>Learn more</a>
      <FontAwesomeIcon icon={faArrowRight} />
    </div>
  );
};

export default TransparentLink;
