import { Col, Row } from "antd";
import { H6 } from "components/shareable/Typography";
import facebook from "../../images/icons/facebook.svg";
import linkedin from "../../images/icons/linkedin.svg";
import tiktok from "../../images/icons/tiktok.svg";
import twitter from "../../images/icons/twitter.svg";
import youtube from "../../images/icons/youtube.svg";

export const Services = [
  "Affiliate",
  "Agent",
  "1xTransfer",
  "Quizzes",
  "Challenges",
];
export const Rewards = [
  "Daily Login Bonus",
  "Deposit Bonus",
  "Winner List",
];
export const About = ["Support", "FAQ", "Blog"];

export const paymentsOptions = [
  "bkash",
  "nagad",
  "rocket",
  "upay",
  "city",
];



export default function PublicFooter() {
  return (
    <footer className="container-fluid footer-fluid">
      <div className="footer-wrapper container">
        <Row gutter={[16, 16]} className="footer-row">
          <Col xs={24} lg={6}>
            <div className="footer-left">
                

              <div className="footer-social">
                <h6 className="mb-2">Connect with us</h6>

                <ul className="footer-social-icon">
                  <li>
                      <img
                        src={facebook}
                        width={25}
                        height={25}
                        alt="facebook"
                      />
                  </li>
                  <li>
                      <img
                        src={youtube}
                        width={25}
                        height={25}
                        alt="facebook"
                      />
                  </li>
                  <li>
                      <img
                        src={tiktok}
                        width={25}
                        height={25}
                        alt="facebook"
                      />
                  </li>
                  <li>
                      <img
                        src={linkedin}
                        width={25}
                        height={25}
                        alt="facebook"
                      />
                  </li>
                  <li>
                      <img
                        src={twitter}
                        width={25}
                        height={25}
                        alt="facebook"
                      />
                  </li>
                </ul>
              </div>
            </div>
          </Col>

          <Col xs={24} lg={10}>
            <Row gutter={[16, 16]} className="footer-list">
              <Col xs={12} md={8}>
                <H6 className="text-white">Services</H6>
                <ul className="footer-menu">
                  {Services.map((item, index) => (
                    <li key={index}>
                      <a href={`/`}>{item}</a>
                    </li>
                  ))}
                </ul>
              </Col>

              <Col xs={12} md={8}>
                <H6 className="text-white">Rewards</H6>
                <ul className="footer-menu">
                  {Rewards.map((item, index) => (
                    <li key={index}>
                      <a href={`/`}>{item}</a>
                    </li>
                  ))}
                </ul>
              </Col>

              <Col xs={12} md={8}>
                <H6 className="text-white">About</H6>
                <ul className="footer-menu">
                  {About.map((item, index) => (
                    <li key={index}>
                      <a href={`/`}>{item}</a>
                    </li>
                  ))}
                </ul>
              </Col>
            </Row>
          </Col>
        </Row>
      </div>
    </footer>
  );
}
