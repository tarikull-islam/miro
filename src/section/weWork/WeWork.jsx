import weWorkImg from "../../assets/we-work.png";
import SignUpBtn from "../../components/SignUpBtn/SignUpBtn";
const WeWork = () => {
  return (
    <section className="we-work" id="we-work">
      <div className="container">
        <div className="wrapper">
          <img src={weWorkImg} alt="img" />
          <div className="text-container">
            <h3>The Ways</h3>
            <h4>The Work</h4>
            <p>How has our relationship with work changed?</p>
            <div className="btn">
              <SignUpBtn title={"View the report"} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WeWork;
