import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SignUpBtn = ({ uri, title }) => {
  return (
    <div className="signupbtn">
      <a href={uri}>{title}</a>
      <FontAwesomeIcon icon={faArrowRight} />
    </div>
  );
};

export default SignUpBtn;
