import SubTittle from "../../components/subTitle/SubTitle";
import walmart from "../../assets/Walmart_Index_Only.png";
import cisco from "../../assets/cisco.png";
import volvo from "../../assets/Volvo_Index_Only.png";
import deloitte from "../../assets/deloitte.png";
import okta from "../../assets/okta.png";
const brands = [walmart, cisco, volvo, deloitte, okta];

const TrustedUser = () => {
  return (
    <section className="trusted-user" id="trusted-user">
      <div className="sub-title-container">
        <SubTittle subTitle={"Trusted by 45M+ users"} />
      </div>
      <div className="brands-container">
        {brands.map((brand, index) => {
          return <img src={brand} alt="brand" key={index} />;
        })}
      </div>
    </section>
  );
};

export default TrustedUser;
