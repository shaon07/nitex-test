import { Col, Row } from "antd";
import { AiOutlineUserAdd } from "react-icons/ai";
import { BsArrowRightShort } from "react-icons/bs";
import { TbAffiliate } from "react-icons/tb";
import useIsView from "../../../hooks/useIsView";
import {
  default as coinBagImage,
  default as dashboardImage,
} from "../../../images/homepage/affiliate/dashboard.png";
import Button from "../../shareable/Button";
import Heading from "../../shareable/Heading";

export default function Affiliate() {
  const { inView, ref } = useIsView();
  const { inView: imgView, ref: imgRef } = useIsView();
  const { inView: imgView2, ref: imgRef2 } = useIsView();
  const { inView: imgView3, ref: imgRef3 } = useIsView();

  return (
    <div className="affiliate-wrapper">
      <Row gutter={[16, 16]} className="affiliate-one">
        <Col xs={{ span: 24, order: 2 }} lg={{ span: 12, order: 1 }} ref={ref}>
          <div className="affiliate-info">
            <Heading
              emoji={TbAffiliate}
              title="AFFILIATE"
              heading="Improve Your Finance with Bit Deposit."
              description="Our affiliates make it easy to lead a life of a millionaire. Introduce your community to us and become one of our partners. Get paid an unlimited commission amount every week. No hidden cut, No stress about meeting targets. So, what are you waiting for! Ready, get set, Go!"
              type="Primary-small"
              animate={`${inView ? "slide-in-right" : ""}`}
            />
            <Button
              title="Get Started"
              variant="primary"
              Icon={BsArrowRightShort}
              animate={`${inView ? "bounce-in-top" : ""}`}
              size="medium"
            />
          </div>
        </Col>
        <Col xs={{ span: 24, order: 1 }} lg={{ span: 12, order: 2 }}>
          <div className="affiliate-img" ref={imgRef}>
            <img
              src={coinBagImage}
              width={1000}
              height={100}
              alt="coinbag"
              className={`${imgView ? "slide-in-left" : ""}`}
            />
          </div>
        </Col>
      </Row>
      <Row gutter={[16, 16]} className="affiliate-two">
        <Col xs={{ span: 24, order: 2 }} lg={{ span: 12 }}>
          <div className="affiliate-info" ref={imgRef2}>
            <Heading
              emoji={AiOutlineUserAdd}
              title="Agent"
              heading="Join one of the most Lucrative Programs"
              description="Are you looking to generate a steady stream of income? Now you don't have to chase money, money will chase you. Join our agent program, and make a huge commission for your transactions."
              type="Primary-small"
              animate={`${imgView2 ? "slide-in-right" : ""}`}
            />
            <Button
              title="Get Started"
              variant="primary"
              Icon={BsArrowRightShort}
              animate={`${imgView2 ? "bounce-in-top" : ""}`}
            />
          </div>
        </Col>
        <Col xs={{ span: 24, order: 1 }} lg={{ span: 12 }} ref={imgRef3}>
          <div className="affiliate-img">
            <img
              src={dashboardImage}
              width={1000}
              height={100}
              alt="coinbag"
              className={`${
                imgView3
                  ? "animate__animated animate__rubberBand animate__delay-1s"
                  : ""
              }`}
            />
          </div>
        </Col>
      </Row>
    </div>
  );
}
