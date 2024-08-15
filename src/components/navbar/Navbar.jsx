import { useState } from "react";
import logo from "../../assets/logo.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark, faBars, faAngleUp } from "@fortawesome/free-solid-svg-icons";
import SignUpBtn from "../SignUpBtn/SignUpBtn";

const menuItemLinks = [
  {
    name: "Product",
    id: 1,
    children: [
      {
        name: "one",
        link: "",
        id: 4,
      },
      {
        name: "tow",
        link: "",
        id: 5,
      },
      {
        name: "three",
        link: "",
        id: 6,
      },
      {
        name: "four",
        link: "",
        id: 7,
      },
    ],
  },
  {
    name: "Solutions",
    id: 2,
    children: [
      {
        name: "one2",
        link: "",
        id: 8,
      },
      {
        name: "tow2",
        link: "",
        id: 9,
      },
      {
        name: "three2",
        link: "",
        id: 10,
      },
      {
        name: "four2",
        link: "",
        id: 11,
      },
    ],
  },
  {
    name: "Resources",
    id: 3,
    children: [
      {
        name: "one3",
        link: "",
        id: 12,
      },
      {
        name: "tow3",
        link: "",
        id: 13,
      },
      {
        name: "three3",
        link: "",
        id: 14,
      },
      {
        name: "four3",
        link: "",
        id: 15,
      },
    ],
  },
  {
    name: "Enterprise",
    id: 32,
    link: "",
  },
  {
    name: "Pricing",
    id: 33,
    link: "",
  },
];

// ! NAV-ITEM JSX
export const Item = ({ title, link }) => {
  return (
    <li className="nav-item">
      <a href={link} className="nav-link">
        {title}
      </a>
    </li>
  );
};
// ! COLLAPSE BUTTON JSX
export const CollapseBtn = ({ title }) => {
  return (
    <button className="collapse-btn">
      <span>{title}</span>
      <span className="arrow-icon">
        <FontAwesomeIcon icon={faAngleUp} />
      </span>
    </button>
  );
};

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  window.addEventListener("resize", () => {
    if (window.innerWidth > 792) {
      setToggle(false);
    }
  });
  return (
    <header className="header">
      <nav className={`nav container-nav ${toggle ? "fly" : ""}`} id="nav">
        <div className="left-container">
          <a href="/" className="nav-brand">
            <img src={logo} alt="logo" />
          </a>
          <ul className="nav-list">
            {menuItemLinks.map((data, index) => {
              if (data.children) {
                return (
                  <li className="nav-item" key={index / 1.3331}>
                    <CollapseBtn title={data.name} />
                    <ul className="collapse-menu">
                      {data.children.map(({ name, link, id }) => {
                        return (
                          <Item key={id / 43.33} title={name} link={link} />
                        );
                      })}
                    </ul>
                  </li>
                );
              } else {
                return (
                  <Item
                    key={data.id / 34.3}
                    title={data.name}
                    link={data.link}
                  />
                );
              }
            })}
            <div className="ctx-item">
              <Item title={"Contact Sales"} link={"#"} />
              <Item title={"Login"} link={"#"} />
              <SignUpBtn uri={"/"} title={"Sign up free"} />
            </div>
          </ul>
        </div>
        <div className="right-container">
          <div className="ctx-item">
            <Item title={"Contact Sales"} link={"#"} />
            <Item title={"Login"} link={"#"} />
            <SignUpBtn uri={"/"} title={"Sign up free"} />
          </div>
          <div className="toggle-fly-menu">
            {toggle ? (
              <FontAwesomeIcon
                onClick={() => setToggle(false)}
                icon={faXmark}
              />
            ) : (
              <FontAwesomeIcon onClick={() => setToggle(true)} icon={faBars} />
            )}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
