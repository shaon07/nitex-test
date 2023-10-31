import { Col, Row } from "antd";
import { useRef, useState } from "react";
import { BsArrowLeftShort, BsArrowRightShort } from "react-icons/bs";
import { MdTextsms } from "react-icons/md";
import SwiperCore from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

// @ts-ignore
import Button from "components/shareable/Button";
import Card from "components/shareable/Card";
import Heading from "components/shareable/Heading";
import { H3, Label2, P2, Small } from "components/shareable/Typography";
import useDimension from "hooks/useDimension";
import useIsView from "hooks/useIsView";
import { Autoplay, Navigation } from "swiper/modules";
import { sliderData } from "temp/slider";

SwiperCore.use([Navigation]);

export default function Testimonial() {
  const swiperRef = useRef(null);
  const { inView, ref } = useIsView();

  return (
    <div className="testimonial-wrapper">
      <Row className="testimonial-row-one">
        <Col xs={20} className="testimonial-text-one">
          <div className="testimonial-text">
            <Heading
              type="Primary-small"
              emoji={MdTextsms}
              title="Testimonials"
              heading="Hear from Our 
Satisfied Customers"
            />
          </div>
        </Col>

        <Col xs={4} className="testimonial-text-two">
          <div className="testimonial-buttons">
            <button onClick={() => swiperRef.current.swiper.slidePrev()}>
              <BsArrowLeftShort />
            </button>
            <button onClick={() => swiperRef.current.swiper.slideNext()}>
              <BsArrowRightShort />
            </button>
          </div>
        </Col>
      </Row>

      <Swiper
        // slidesPerView={3}
        slidesPerView={3}
        spaceBetween={30}
        ref={swiperRef}
        modules={[Autoplay]}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        className="mySwiper"
        breakpoints={{
          100: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1200: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
        }}
      >
        {sliderData.map((item, index) => {
          return (
            <SwiperSlide key={index} id={`slider${index}`}>
              <SliderCard item={item} />
            </SwiperSlide>
          );
        })}
      </Swiper>

      <Row ref={ref}>
        <Col
          xs={24}
          md={22}
          lg={20}
          xl={16}
          style={{ margin: "auto" }}
          className={`${inView ? "slide-in-bottom" : ""}`}
        >
          <div className="member-card text-white center">
            <H3>Become a Member Today</H3>
            <P2>
              Our members enjoy a streamlined betting process, personalized
              recommendations, and fast payouts. Take the first step towards a
              more rewarding betting experience by signing up today.
            </P2>

            <Button
              title="Get Started"
              variant="blur"
              Icon={BsArrowRightShort}
              className="member-btn"
            />
          </div>
        </Col>
      </Row>
    </div>
  );
}



const SliderCard = ({ item }) => {
  const { width } = useDimension();
  const [minText, setMinText] = useState(200);
  return (
    <Card className="slider-card">
      <span className="author-img">
        <img src={item.image} width={1000} height={100} alt="avatar" />
      </span>

      <div className="author-comment">
        <P2>
          {width <= 768 ? (
            <span>
              {item.description.slice(0, minText)}
              {item.description.length === minText ? (
                ""
              ) : (
                <span onClick={() => setMinText(item.description.length)}>
                  ...{" "}
                  <span className="testimonial-card-see-more">See More</span>
                </span>
              )}
            </span>
          ) : (
            item.description
          )}
        </P2>

        <div className="author-info">
          <Label2>{item.authorName}</Label2>
          <Small>{item.authorBio}</Small>
        </div>
      </div>
    </Card>
  );
};
