import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faFacebook,
  faLinkedin,
  faInstagram,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import appleStore from "../../assets/appleStore.svg";
import playStore from "../../assets/playStore.svg";
import webStore from "../../assets/webStore.svg";
const footerMenus = [
  {
    title: "Product",
    listData: [
      {
        item: "Online whiteboard",
        uri: "#",
      },
      {
        item: "Apps & Integrations",
        uri: "#",
      },
      {
        item: "Templates",
        uri: "#",
      },
      {
        item: "Miroverse",
        uri: "#",
      },
      {
        item: "Miro Developer Platform",
        uri: "#",
      },
      {
        item: "Miro for Devices",
        uri: "#",
      },
      {
        item: "Security & Compliance",
        uri: "#",
      },
      {
        item: "Accessibility",
        uri: "#",
      },
      {
        item: "Changelog",
        uri: "#",
      },
    ],
    id: 1,
  },
  {
    title: "Solutions",
    listData: [
      {
        item: "Meetings and Workshops",
        uri: "#",
      },
      {
        item: "Brainstorming & Ideation",
        uri: "#",
      },
      {
        item: "Agile Workflows",
        uri: "#",
      },
      {
        item: "Diagramming",
        uri: "#",
      },
      {
        item: "Research & Design",
        uri: "#",
      },
      {
        item: "Strategy & Planning",
        uri: "#",
      },
      {
        item: "Mind Map",
        uri: "#",
      },
      {
        item: "Concept Map",
        uri: "#",
      },
      {
        item: "Online Sticky Notes",
        uri: "#",
      },
      {
        item: "Flowchart",
        uri: "#",
      },
      {
        item: "Wireframing",
        uri: "#",
      },
    ],
    id: 2,
  },
  {
    title: "Resources",
    listData: [
      {
        item: "Miro Academy",
        uri: "#",
      },
      {
        item: "Help Center",
        uri: "#",
      },
      {
        item: "Blog",
        uri: "#",
      },
      {
        item: "Status",
        uri: "#",
      },
      {
        item: "Miro Community",
        uri: "#",
      },
      {
        item: "Miro Professional Network",
        uri: "#",
      },
      {
        item: "Miro Experts Directory",
        uri: "#",
      },
      {
        item: "Miro Events",
        uri: "#",
      },
    ],
    id: 3,
  },
  {
    title: "Company",
    listData: [
      {
        item: "About us",
        uri: "#",
      },
      {
        item: "Careers 🚀",
        uri: "#",
      },
      {
        item: "Miro in the News",
        uri: "#",
      },
      {
        item: "Customer Stories",
        uri: "#",
      },
    ],
    id: 4,
  },
  {
    title: "Plans and Pricing",
    listData: [
      {
        item: "Pricing",
        uri: "#",
      },
      {
        item: "Business",
        uri: "#",
      },
      {
        item: "Enterprise",
        uri: "#",
      },
      {
        item: "Consultants",
        uri: "#",
      },
      {
        item: "Education",
        uri: "#",
      },
      {
        item: "Startups",
        uri: "#",
      },
      {
        item: "NPOs",
        uri: "#",
      },
    ],
    id: 5,
  },
];
const socialMedia = [
  {
    item: faTwitter,
    uri: "#",
  },
  {
    item: faFacebook,
    uri: "#",
  },
  {
    item: faLinkedin,
    uri: "#",
  },
  {
    item: faInstagram,
    uri: "#",
  },
  {
    item: faYoutube,
    uri: "#",
  },
];
const ctxLink = [
  {
    item: "© 2022 Miro",
    uri: "",
  },
  {
    item: "Terms of Service",
    uri: "#",
  },
  {
    item: "Privacy Policy",
    uri: "#",
  },
  {
    item: "Manage Cookies",
    uri: "#",
  },
];
const softwareStore = [appleStore, playStore, webStore];
const Footer = () => {
  return (
    <footer className="footer">
      <div className="container-nav">
        <div className="top-container">
          {footerMenus.map(({ title, listData, id }) => {
            return (
              <nav className="footer-nav" key={id}>
                <h6 className="title" key={id / 2.2}>
                  {title}
                </h6>
                <ul key={id / 3.3}>
                  {listData.map(({ item, uri }, index) => {
                    return (
                      <li key={index}>
                        <a key={index / 5.5} href={uri}>
                          {item}
                        </a>
                      </li>
                    );
                  })}
                </ul>
              </nav>
            );
          })}
        </div>
        <div className="bottom-container">
          <div className="left-container">
            <div className="social">
              {socialMedia.map(({ item, uri }, index) => {
                return (
                  <a href={uri} key={index / 1.11}>
                    <FontAwesomeIcon icon={item} key={index / 2.22} />
                  </a>
                );
              })}
            </div>
            <div className="ctx-item">
              {ctxLink.map(({ uri, item }, index) => {
                return (
                  <a href={uri} className="ctx-link" key={index / 1.1111}>
                    {item}
                  </a>
                );
              })}
            </div>
          </div>
          <div className="right-container">
            {softwareStore.map((store, index) => {
              return <img src={store} alt="" key={index / 3.33} />;
            })}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
