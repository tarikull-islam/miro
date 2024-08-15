import vmwere from "../../assets/vmware.svg";
import Docusign from "../../assets/Docusign-Testimonials-280-60-Baseline.svg";
import frog from "../../assets/frog.svg";
import feMail_1 from "../../assets/Mask_group-1.png";
import feMail_2 from "../../assets/Jane-Docusign-Testimonials_2x.png";
import feMail_3 from "../../assets/Mask_group.png";
import SectionHeading from "../../components/sectionHeading/SectionHeading";
import SignUpBtn from "../../components/SignUpBtn/SignUpBtn";
import SubTitle from "../../components/subTitle/SubTitle";
const data = [
  {
    company: {
      image1: vmwere,
      description: `“When the pandemic hit, those of us who thrive on in-person collaboration were worried that our creativity and productivity would suffer. Miro was the perfect tool to help us with collaboration, whiteboarding, and retrospectives while remote.”`,
    },
    employee: {
      image2: feMail_1,
      name: "Roxanne Mustafa",
      position: "Design Team Lead at VMware",
    },
    id: 1,
  },
  {
    company: {
      image1: Docusign,
      description: `“Miro helps solve one of the major gaps in product design: how to manage tasks across product designers whose projects are in different tools.”`,
    },
    employee: {
      image2: feMail_2,
      name: "Jane Ashley",
      position: "Head of Design at DocuSign",
    },
    id: 2,
  },
  {
    company: {
      image1: frog,
      description: `“As we used Miro we moved from skepticism to belief to innovation, and now we have a tool that’s at the core of what we do and will continue to extend into the future.”`,
    },
    employee: {
      image2: feMail_3,
      name: "Laura Baird",
      position: "Associate Design Director at frog",
    },
    id: 3,
  },
];

const BestTeams = () => {
  return (
    <section className="best-teams" id="best-teams">
      <div className="container">
        <div className="top-container">
          <div className="heading">
            <SectionHeading title={"Loved by the world's best teams"} />
          </div>
          <div className="btn-container">
            <div className="btn-wrapper">
              <SignUpBtn data-bg="tra" title={"See all customer stories"} />
            </div>
          </div>
        </div>
        <div className="bottom-container">
          {data.map(({ company, employee, id }) => {
            return (
              <div className="card" key={id / 111.1}>
                <div className="company">
                  <img src={company.image1} alt="company-img" />
                  <div className="description">
                    <SubTitle subTitle={company.description} />
                  </div>
                </div>
                <div className="employee">
                  <div className="img-container">
                    <img src={employee.image2} alt="img" />
                  </div>
                  <div className="info">
                    <span className="name">{employee.name}</span>
                    <span className="position">{employee.position}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default BestTeams;
