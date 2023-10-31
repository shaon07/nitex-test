import { Col, Row } from "antd";
import Card from "components/shareable/Card";
import Heading from "components/shareable/Heading";
import useIsView from "hooks/useIsView";
import { AiOutlineQuestionCircle } from "react-icons/ai";
import clockImage from "../../../images/homepage/why-choose-us/clock.png";
import fireImage from "../../../images/homepage/why-choose-us/fire.png";
import lineImage from "../../../images/homepage/why-choose-us/lines.png";
import signImage from "../../../images/homepage/why-choose-us/sign.png";

export default function WhyChooseUs() {
  const { ref, inView } = useIsView();

  return (
    <div className="why-choose-us-wrapper relative" ref={ref}>
      <img
        src={lineImage}
        width={100}
        height={100}
        alt="lines"
        className="lines absolute"
      />
      <Heading
        emoji={AiOutlineQuestionCircle}
        title="why CHoose US?"
        heading="What Makes Us Different"
        type="Secondary"
        animate={`${inView ? "animate__shakeX" : ""}`}
      />
      <Row gutter={[32, 32]}>
        <Col xs={24} lg={12} xl={8}>
          <Card className={`${inView ? "slide-in-top" : ""}`}>
            <span>
              <img
                src={clockImage}
                width={140}
                height={140}
                alt="clock"
                className={`${inView ? "bounce-in-top" : ""}`}
              />
            </span>
            <h5>24/7 Deposit & Withdraw</h5>
            <p>
              Want to make a deposit/withdrawal right now? Every day, even every
              second we are available for you.
            </p>
          </Card>
        </Col>
        <Col xs={24} lg={12} xl={8}>
          <Card className={`${inView ? "slide-in-top" : ""}`}>
            <span>
              <img
                src={signImage}
                width={140}
                height={140}
                alt="clock"
                className={`${inView ? "bounce-in-top" : ""}`}
              />
            </span>
            <h5>Users Trusted Medium</h5>
            <p>
              We have been regarded as a trusted medium to our valued clients
              from the very beginning.
            </p>
          </Card>
        </Col>
        <Col xs={24} lg={12} xl={8}>
          <Card className={`${inView ? "slide-in-top" : ""}`}>
            <span>
              <img
                src={fireImage}
                width={140}
                height={140}
                alt="clock"
                className={`${inView ? "bounce-in-top" : ""}`}
              />
            </span>
            <h5>Superfast Support System</h5>
            <p>
              Our support team is always ready to solve your problems. We
              provide quick solutions for our users.
            </p>
          </Card>
        </Col>
      </Row>
    </div>
  );
}
