
import { Col, Image, Row } from "antd";
import Button from "components/shareable/Button";
import Heading from "components/shareable/Heading";
import { H3, Label1 } from "components/shareable/Typography";
import { BiUserCheck } from "react-icons/bi";
import { BsArrowRightShort } from "react-icons/bs";
import { FiUserPlus } from "react-icons/fi";
import { HiOutlineEmojiHappy } from "react-icons/hi";
import { TbAffiliate, TbWorld } from "react-icons/tb";
import coinImage from "../../../images/homepage/coin.svg";
import dashboardImage from "../../../images/homepage/herosection/dashboard.png";
import mugImage from "../../../images/homepage/mug.svg";

export default function HeroSection() {

  return (
    <div className="hero-section-wrapper relative">
      <div className="hero-section-header relative mx-auto container">
        <Heading
          emoji={HiOutlineEmojiHappy}
          title="bettor’s Trusted Choice"
          heading="Start the journey, make bets
and change your life"
          description="Bit deposit is a familiar money transaction site for 1xBit bettors. Bet with confidence 
				and ease through our secure platform."
          type="Primary"
          animate="slide-in-left"
          headingClassName="zigzag"
        />

        <div className="button-box flex content-center gap-20px">
          <Button
            title="Sign Up"
            variant="primary"
            size="medium"
            Icon={BsArrowRightShort}
            IconPosition="end"
            animate="bounce-in-top"
          />
          <Button
            title="Learn More"
            variant="blur"
            size="medium"
            animate="bounce-in-top"
            className="learn-btn"
          />
        </div>

        <span className="hero-coin absolute">
          <Image
            src={coinImage}
            width={125}
            height={145}
            alt="Coin"
          />
        </span>

        <span className="hero-mug absolute">
          <Image
            src={mugImage}
            width={125}
            height={145}
            alt="mug"
          />
        </span>
      </div>

      <div className="dashboard-img-wrapper relative">
        <div className="merged-img flex content-center relative mx-auto">
          <img
            src={dashboardImage}
            width={800}
            height={600}
            alt="dashboard"
            className="dashboard-show-img"
          />
          
        </div>
      </div>

      <Row className="hero-counts" gutter={[16, 16]}>
        <HeroCount
          className="borderless"
          heading="10K+"
          description="Active Users"
          Icon={BiUserCheck}
        />
        <HeroCount
          heading="1K+"
          description="Affiliate Members"
          Icon={TbAffiliate}
        />
        <HeroCount
          className="hero-count-block-3"
          heading="500+"
          description="Agents Worldwide"
          Icon={FiUserPlus}
        />
        <HeroCount
          heading="100+"
          description="Country Serving"
          Icon={TbWorld}
        />
      </Row>
    </div>
  );
}



const HeroCount = ({
  className,
  heading,
  description,
  Icon,
}) => {
  return (
    <Col
      xs={24}
      sm={12}
      md={12}
      lg={6}
      className={`hero-count-block flex content-center items-center gap-20px ${className}`}
    >
      <H3>{<Icon />}</H3>
      <div className="count-info flex flex-column content-between gap-0">
        <H3>{heading}</H3>
        <Label1>{description}</Label1>
      </div>
    </Col>
  );
};
