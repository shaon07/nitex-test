import { H6 } from "@components/shareable/Typography";
import { Col, Row } from "antd";
import Image from "next/image";
import Link from "next/link";
import { BsTelephone } from "react-icons/bs";
import { FaRegEnvelope } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";

export const Services: string[] = [
  "Affiliate",
  "Agent",
  "1xTransfer",
  "Quizzes",
  "Challenges",
];
export const Rewards: string[] = [
  "Daily Login Bonus",
  "Deposit Bonus",
  "Winner List",
];
export const About: string[] = ["Support", "FAQ", "Blog"];

export const paymentsOptions: string[] = [
  "bkash",
  "nagad",
  "rocket",
  "upay",
  "city",
];

export const policy = [
  {
    link: "https://bitdeposit.com/pages/terms",
    title: "Privacy & Policy",
  },
  {
    link: "https://bitdeposit.com/pages/policy",
    title: "Terms & Conditions",
  },
  {
    link: "https://bitdeposit.com/pages/instructions",
    title: "Instruction",
  },
  {
    link: "https://bitdeposit.com/pages/about",
    title: "About Us",
  },
];

export default function PublicFooter() {
  return (
    <footer className="container-fluid footer-fluid">
      <div className="footer-wrapper container">
        <Row gutter={[16, 16]} className="footer-row">
          <Col xs={24} lg={6}>
            <div className="footer-left">
              <Link href={`/`}>
                <Image
                  src={`/assets/images/logo.png`}
                  width={100}
                  height={40}
                  alt="footer_logo"
                  className="footer-logo"
                  priority
                />
              </Link>

              <p style={{ paddingRight: "1rem" }}>
                Bit deposit is a familiar money transaction site for 1xBit
                bettors. Bet with confidence and ease through our secure
                platform.
              </p>

              <address className="footer-info">
                <div className="footer-info-text">
                  <span>
                    <IoLocationSharp />
                  </span>
                  <a>Gulshan-2, Dhaka, Bangladesh</a>
                </div>
                <div className="footer-info-text">
                  <span>
                    <FaRegEnvelope />
                  </span>
                  <span>
                    <a href="mailto:bitdepositbd@gmail.com">
                      bitdepositbd@gmail.com
                    </a>
                  </span>
                </div>

                <div className="footer-info-text">
                  <span>
                    <BsTelephone />
                  </span>
                  <span>
                    <a href="tel:+8801531550810">+8801531550810</a>
                  </span>
                </div>
              </address>

              <div className="footer-social">
                <h6>Connect with us</h6>

                <ul className="footer-social-icon">
                  <li>
                    <Link href={`/`}>
                      <Image
                        src={`/assets/images/icons/facebook.svg`}
                        width={25}
                        height={25}
                        alt="facebook"
                      />
                    </Link>
                  </li>
                  <li>
                    <Link href={`/`}>
                      <Image
                        src={`/assets/images/icons/youtube.svg`}
                        width={25}
                        height={25}
                        alt="facebook"
                      />
                    </Link>
                  </li>
                  <li>
                    <Link href={`/`}>
                      <Image
                        src={`/assets/images/icons/tiktok.svg`}
                        width={25}
                        height={25}
                        alt="facebook"
                      />
                    </Link>
                  </li>
                  <li>
                    <Link href={`/`}>
                      <Image
                        src={`/assets/images/icons/linkedin.svg`}
                        width={25}
                        height={25}
                        alt="facebook"
                      />
                    </Link>
                  </li>
                  <li>
                    <Link href={`/`}>
                      <Image
                        src={`/assets/images/icons/twitter.svg`}
                        width={25}
                        height={25}
                        alt="facebook"
                      />
                    </Link>
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
                      <Link href={`/`}>{item}</Link>
                    </li>
                  ))}
                </ul>
              </Col>

              <Col xs={12} md={8}>
                <H6 className="text-white">Rewards</H6>
                <ul className="footer-menu">
                  {Rewards.map((item, index) => (
                    <li key={index}>
                      <Link href={`/`}>{item}</Link>
                    </li>
                  ))}
                </ul>
              </Col>

              <Col xs={12} md={8}>
                <H6 className="text-white">About</H6>
                <ul className="footer-menu">
                  {About.map((item, index) => (
                    <li key={index}>
                      <Link href={`/`}>{item}</Link>
                    </li>
                  ))}
                </ul>
              </Col>
            </Row>
          </Col>

          <Col xs={24} lg={8} className="footer-right">
            <div className="payment-options">
              <H6>We Accept</H6>
              <ul className="payment-item-wrapper flex flex-wrap gap-10px">
                {paymentsOptions.map((item, index) => (
                  <li key={index}>
                    <Link href={`/`}>
                      <Image
                        src={`/assets/images/homepage/testimonial/${item}.png`}
                        width={48}
                        height={48}
                        alt={item}
                      />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="apps-info">
              <h6>Download Our Apps</h6>
              <div className="app-card">
                <div className="cardBD">
                  <h6 className="text-BD">BD</h6>
                  <Link
                    href={`https://play.google.com/store/apps/details?id=com.app.bitdepositbd&pli=1`}
                    target="_blank"
                  >
                    <p className="">Download App</p>
                    <h6 className="text-deposit">
                      BIT <b>DEPOSIT</b>
                    </h6>
                  </Link>
                </div>

                <div className="cardBet">
                  <Image
                    src={`/assets/images/footer/1xbit-round.svg`}
                    width={50}
                    height={30}
                    alt="bet"
                    className="bit-image"
                  />
                  <Link
                    href={`https://1xbit6.com/downloads/androidclient/releases_android/1xbit/site/1xbit.apk`}
                    target="_blank"
                  >
                    <p className="">Download App</p>
                    <div className="bit-icon">
                      <Image
                        src={`/assets/images/footer/1xbit.svg`}
                        width={62}
                        height={20}
                        alt="1xbit"
                      />
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </Col>
        </Row>

        <Row className="footer-policy-info" gutter={[16, 16]}>
          <Col xs={24} lg={12} className="footer-policies">
            {policy.map((item, index) => (
              <Link href={`${item.link}`} target="_blank" key={index}>
                {item.title}
              </Link>
            ))}
          </Col>
          <Col xs={24} lg={12} className="footer-copyright-wrapper">
            <p className="copyright">
              Copyright &copy; {new Date().getFullYear()} All Rights Reserved by{" "}
              <a href="bitdeposit.com">BitDeposit.com</a>
            </p>
          </Col>
        </Row>
      </div>
    </footer>
  );
}
