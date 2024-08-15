import SignUpBtn from "../../components/SignUpBtn/SignUpBtn";
import SectionHeading from "../../components/sectionHeading/SectionHeading";
import SubTitle from "../../components/subTitle/SubTitle";
const contentData = [
  {
    title: "Free forever",
    subTittle: `Our free plan gives you unlimited team members, 3 boards, and 300+ expert-made templates. Signing up with your work email lets you bring in your team faster. See our 
pricing plans for more features.`,
    id: 1,
  },
  {
    title: "Easy integrations",
    subTittle: `Miro has 100+ powerful integrations with tools you already use like G Suite, Slack, and Jira, so your workflow is seamless. View the full list in our Marketplace .`,
    id: 2,
  },
  {
    title: "Security first",
    subTittle: `We treat your data like you would — with the utmost care. We follow industry-leading security standards and give you tools to protect intellectual property. Learn more at our Trust Center .`,
    id: 3,
  },
];

const Collaborate = () => {
  return (
    <section className="collaborate" id="collaborate">
      <div className="container">
        <div className="heading-container">
          <div className="title-container">
            <SectionHeading title={"Collaborate without constraints"} />
            <span className="pin-board">your idea starts here</span>
          </div>
        </div>
        <div className="content-container">
          {contentData.map((data, index) => {
            return (
              <div className="item" key={index + 1}>
                <h3 className="title" key={index + 2}>
                  {data.title}
                </h3>
                <SubTitle subTitle={data.subTittle} key={index + 3} />
              </div>
            );
          })}
        </div>
        <div className="signup-handle">
          <SignUpBtn title={"Sign up free"} />
        </div>
      </div>
    </section>
  );
};

export default Collaborate;
