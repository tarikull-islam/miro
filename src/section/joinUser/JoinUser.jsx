import SignUpBtn from "../../components/SignUpBtn/SignUpBtn";

const JoinUser = () => {
  return (
    <section className="join-user" id="join-user">
      <div className="container">
        <div className="wrapper">
          <div className="title">
            <h2>Join 45M+ users today</h2>
          </div>
          <div className="sub-title">
            <p>Start for free — upgrade anytime.</p>
          </div>
          <div className="uri-container">
            <a href="#" className="outer-uri">
              Joining as an organization? Contact Sales
            </a>
          </div>
          <div className="btn-container">
            <div className="btn-wrapper">
              <SignUpBtn title={"Sign up free"} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JoinUser;
