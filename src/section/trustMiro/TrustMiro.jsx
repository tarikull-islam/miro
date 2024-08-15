import { useState } from "react";
import SectionHeading from "../../components/sectionHeading/SectionHeading";

const data = [
  {
    id: 1,
    title: "ISO",
    subTitle: "ISO-27001 enterprise-grade security compliant",
  },
  {
    id: 2,
    title: "#1",
    subTitle: "Visual Collaboration Platform on G2",
  },
  { id: 3, title: "99%", subTitle: "of the Fortune 100 are customers" },
  { id: 4, title: "1,000+", subTitle: "community- and expert-built templates" },
  { id: 5, title: "45M+", subTitle: "users around the world" },
  { id: 6, title: "100+", subTitle: "integrations with technology partners" },
];
const TrustMiro = () => {
  const [isSlide, setIsSlide] = useState(
    window.innerWidth < 762 ? true : false
  );
  window.addEventListener("resize", () => {
    window.innerWidth < 762 ? setIsSlide(true) : setIsSlide(false);
  });
  return (
    <section className="trust-miro" id="trust-miro">
      <div className="container">
        <div className="top-container">
          <div className="heading">
            <SectionHeading
              title={"Why companies large and small trust Miro"}
            />
          </div>
          <div className="outer-uri">
            <a href="#" className="uri">
              Contact Sales to request a demo
            </a>
          </div>
        </div>
        <div className="bottom-container">
          {data.map(({ title, subTitle, id }) => {
            return (
              <div className="item" key={id / 2.2222}>
                <h3 className="title">{title}</h3>
                <h4 className="sub-title">{subTitle}</h4>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TrustMiro;
