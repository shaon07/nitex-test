
import { Col, Row } from "antd";
import Heading from "components/shareable/Heading";
import { P2 } from "components/shareable/Typography";
import useIsView from "hooks/useIsView";
import { AiOutlineHeart } from "react-icons/ai";
import cupImage from "../../../images/homepage/our-feature/cup.png";
import helmetImage from "../../../images/homepage/our-feature/helmet.png";
import targetImage from "../../../images/homepage/our-feature/target.png";
import walletImage from "../../../images/homepage/our-feature/wallet.png";

export default function OurFeature() {
  const { inView, ref } = useIsView();
  const { inView: cardView, ref: cardRef } = useIsView();
  const { inView: cardView2, ref: cardRef2 } = useIsView();
  const { inView: cardView3, ref: cardRef3 } = useIsView();
  const { inView: cardView4, ref: cardRef4 } = useIsView();

  return (
    <div className="our-feature-wrapper" ref={ref} id="feature">
      <Heading
        emoji={AiOutlineHeart}
        title="Our Features"
        heading="Unlock the Full Potential of 
Our Features"
        type="Secondary"
        animate={`${inView ? "animate__bounceInUp" : ""}`}
      />

      <Row gutter={[32, 32]}>
        <Col
          ref={cardRef}
          xs={24}
          lg={12}
          className={`feature-card-wrapper ${
            cardView ? "tracking-in-expand" : ""
          }`}
        >
          <div className="feature-card">
            <div className="feature-card-title">
              <Heading
                heading="1xbit"
                description="The King Of Sports Betting"
                type="Secondary-small"
                animate="animate__shakeX"
              />
            </div>
            <span>
              <img
                src={cupImage}
                width={1000}
                height={100}
                alt="cup"
                className={` ${cardView ? "bounce-in-top" : ""}`}
              />
            </span>
            <P2>
              Easily bet on popular events and receive generous payouts.
              User-friendly interface for easy betting and account management.
              Bitcoin and currency options for hassle-free deposits and
              withdrawals.
            </P2>
          </div>
        </Col>
        <Col
          ref={cardRef2}
          xs={24}
          lg={12}
          className={`feature-card-wrapper ${
            cardView2 ? "tracking-in-expand" : ""
          }`}
        >
          <div className="feature-card">
            <div className="feature-card-title">
              <Heading
                heading="Exchange"
                description="Meet Our Versatile Wallet"
                type="Secondary-small"
              />
            </div>
            <span>
              <img
                src={walletImage}
                width={1000}
                height={100}
                alt="cup"
                className={` ${cardView2 ? "bounce-in-top" : ""}`}
              />
            </span>
            <P2>
              Transfer money, make payments, exchange currencies, and anything
              else you want with zero fees. Enjoy the fastest, safest, and
              easiest transaction across the globe.
            </P2>
          </div>
        </Col>
        <Col
          ref={cardRef3}
          xs={24}
          lg={12}
          className={`feature-card-wrapper ${
            cardView3 ? "tracking-in-expand" : ""
          }`}
        >
          <div className="feature-card">
            <div className="feature-card-title">
              <Heading
                heading="Vip Levels"
                description="Discover The Most Majestic Advantages"
                type="Secondary-small"
              />
            </div>
            <span>
              <img
                src={helmetImage}
                width={1000}
                height={100}
                alt="cup"
                className={` ${cardView3 ? "bounce-in-top" : ""}`}
              />
            </span>
            <P2>
              Increase your performance, gather more points, and achieve the
              goal. Enjoy exclusive benefits by exploring new levels. Our VIPs
              are rewarded with unlimited Daily Bonuses and Deposit Bonuses,
              Extra Points.
            </P2>
          </div>
        </Col>
        <Col
          ref={cardRef4}
          xs={24}
          lg={12}
          className={`feature-card-wrapper ${
            cardView4 ? "tracking-in-expand" : ""
          }`}
        >
          <div className="feature-card">
            <div className="feature-card-title">
              <Heading
                heading="Quizzes"
                description="Gather Points to Redeem"
                type="Secondary-small"
                animate={`${cardView4 ? "slide-in-left" : ""}`}
              />
            </div>
            <span>
              <img
                src={targetImage}
                width={1000}
                height={100}
                alt="cup"
                className={` ${cardView4 ? "bounce-in-top" : ""}`}
              />
            </span>
            <P2>
              Participate in our daily quizzes, show your presumption skill, and
              earn points for every prediction. Soccer, Cricket, Basketball,
              Hockey many more options are here. See your daily winner list, and
              personal stats.
            </P2>
          </div>
        </Col>
      </Row>
    </div>
  );
}
