import SignUpBtn from "../../components/SignUpBtn/SignUpBtn";
import SectionHeading from "../../components/sectionHeading/SectionHeading";
import homeImage from "../../assets/headerimage-without-text.png";
import stars from "../../assets/stars.svg";
import G2 from "../../assets/G2.svg";
import getApp from "../../assets/getApp.svg";
import capterra from "../../assets/capterra.svg";
import SubTitle from "../../components/subTitle/SubTitle";
const actionSvgs = [G2, getApp, capterra];

const Home = () => {
  return (
    <section className="home" id="home">
      <div className="container">
        <div className="image-container">
          <img src={homeImage} alt="" />
        </div>
        <div className="text-container">
          <div className="title">
            <SectionHeading title={"Take ideas from better to best"} />
          </div>
          <div className="sub-title-container">
            <SubTitle
              subTitle={
                "Miro is your team's visual platform to connect, collaborate, and create — together."
              }
            />
          </div>
          <form action="" method="post">
            <input placeholder="Enter your work email" type="text" />
            <SignUpBtn title="Sign up free" uri={"#"} />
            <label htmlFor="">Collaborate with your team within minutes</label>
          </form>
          <div className="ratting-container">
            <div className="ratting">
              <div className="stars">
                <img src={stars} alt="star" />
              </div>
              <span className="">Based on 5149+ reviews:</span>
            </div>
            <div className="svgs">
              {actionSvgs.map((svg, index) => {
                return <img src={svg} key={index} alt="img" />;
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
