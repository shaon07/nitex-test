
import { Col, Row } from "antd";
import Heading from "components/shareable/Heading";
import { H5, P2 } from "components/shareable/Typography";
import useIsView from "hooks/useIsView";
import { TfiReload } from "react-icons/tfi";
import batchImage from "../../../images/homepage/reward/batch.png";
import gemBoxImage from "../../../images/homepage/reward/gembox.png";
import giftBoxImage from "../../../images/homepage/reward/giftbox.png";
import knifeImage from "../../../images/homepage/reward/knife.png";

export default function Reward() {
  const { inView, ref } = useIsView();
  const { inView: cardView, ref: cardRef } = useIsView();
  return (
    <div className="reward-wrapper" ref={ref}>
      <Heading
        emoji={TfiReload}
        title="Offers and Rewards"
        heading="Unlock Daily Bonuses 
and Rewards"
        type="Secondary"
        animate={`${inView ? "slide-in-right" : ""}`}
      />

      <Row gutter={[16, 16]} ref={cardRef}>
        <Col
          xs={24}
          md={12}
          lg={6}
          className={`${cardView ? "slide-in-right" : ""}`}
        >
          <RewardBox
            className="borderless"
            image={knifeImage}
            title="Challanges"
            description="Tortor interdum condimentum nunc molestie quam lectus euismod
							pulvinar risus."
          />
        </Col>
        <Col
          xs={24}
          md={12}
          lg={6}
          className={`${cardView ? "slide-in-left" : ""}`}
        >
          <RewardBox
            image={gemBoxImage}
            title="Daily Login Bonus"
            description="Tortor interdum condimentum nunc molestie quam lectus euismod
							pulvinar risus."
          />
        </Col>
        <Col
          xs={24}
          md={12}
          lg={6}
          className={`${cardView ? "slide-in-left" : ""}`}
        >
          <RewardBox
            className="smallBorderless"
            image={giftBoxImage}
            title="Deposit Bonus"
            description="Tortor interdum condimentum nunc molestie quam lectus euismod
							pulvinar risus."
          />
        </Col>
        <Col
          xs={24}
          md={12}
          lg={6}
          className={`${cardView ? "slide-in-right" : ""}`}
        >
          <RewardBox
            image={batchImage}
            title="Enjoy Rewards"
            description="Tortor interdum condimentum nunc molestie quam lectus euismod
							pulvinar risus."
          />
        </Col>
      </Row>
    </div>
  );
}

const RewardBox = ({
  className,
  image,
  title,
  description,
}) => {
  return (
    <div className={`reward-card ${className}`}>
      <span className="card-img">
        <img src={`${image}`} width={70} height={70} alt="knife" />
        <H5>{title}</H5>
      </span>
      <P2>{description}</P2>
    </div>
  );
};
