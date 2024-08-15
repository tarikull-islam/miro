import SectionHeading from "../../components/sectionHeading/SectionHeading";
import SubTitle from "../../components/subTitle/SubTitle";
import TransparentLink from "../../components/transparentLink/transparentLink";
import workImg from "../../assets/M3_integrations_all_integrations.png";

const ContactTools = () => {
  return (
    <section className="contact-tools" id="contact-tools">
      <div className="container">
        <div className="text-container">
          <div className="title">
            <SectionHeading title={`Connect your tools, close your tabs`} />
          </div>
          <div className="sub-title">
            <SubTitle
              subTitle={`Whether you want to edit your Google Docs, resolve Jira issues, or collaborate over Zoom, Miro has 100+ integrations with tools you already use and love.`}
            />
          </div>
          <TransparentLink pera="Learn more" />
        </div>
        <div className="img-container">
          <img src={workImg} alt="work" />
        </div>
      </div>
    </section>
  );
};

export default ContactTools;
