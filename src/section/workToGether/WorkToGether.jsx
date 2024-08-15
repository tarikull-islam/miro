import SectionHeading from "../../components/sectionHeading/SectionHeading";
import SubTitle from "../../components/subTitle/SubTitle";
import TransparentLink from "../../components/transparentLink/transparentLink";
import workImg from "../../assets/hybridwork.png";

const WorkToGether = () => {
  return (
    <section className="work-to-gether" id="work-to-gether">
      <div className="container">
        <div className="text-container">
          <div className="title">
            <SectionHeading title={"Work together, wherever you work"} />
          </div>
          <div className="sub-title">
            <SubTitle
              subTitle={
                "In the office, remote, or a mix of the two, with Miro, your team can connect, collaborate, and co-create in one space no matter where you are."
              }
            />
          </div>
          <TransparentLink uri={"#"} />
        </div>
        <div className="img-container">
          <img src={workImg} alt="work" />
        </div>
      </div>
    </section>
  );
};

export default WorkToGether;
