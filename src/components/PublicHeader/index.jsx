/* eslint-disable jsx-a11y/anchor-is-valid */
import Button from "components/shareable/Button";
import useDimension from "hooks/useDimension";
import { useEffect, useState } from "react";
import { AiOutlineQuestionCircle, AiOutlineTag } from "react-icons/ai";
import { BiAward } from "react-icons/bi";
import { IoSettingsOutline } from "react-icons/io5";
import { MdOutlineClose } from "react-icons/md";
import { TfiMenu } from "react-icons/tfi";
import logo from "../../images/logo.png";
import Menus from "./Menus";

const items = [
  {
    label: <a href="#">Home</a>,
    key: "Quiz",
    icon: <a href="#"><AiOutlineQuestionCircle /></a>,
  },
  {
    label: <a href="#hero-section">About us</a>,
    key: "SubMenu",
    icon: <AiOutlineTag />,
  },
  {
    label: <a href="#feature">Contact us</a>,
    key: "vip-level",
    icon: <BiAward />,
  },
  {
    label: <a href="#testimonial">Testimonials</a>,
    key: "support",
    icon: <IoSettingsOutline />,
  },
];

export default function PublicHeader() {
  const [current, setCurrent] = useState("mail");
  const { width } = useDimension();
  const [collapsed, setCollapsed] = useState(false);
  

  const handleChange = (value) => {
    console.log(`selected ${value}`);
  };

  const onClick = (e) => {
    setCurrent(e.key);
    // router.push(`/${e.key}`);
  };

  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };

  useEffect(() => {
    setCollapsed(false);
  },[] );

  return (
    <div className="header-fluid">
      <header
        className={`header-wrapper container relative flex content-between items-center`}
      >
        <div className="logo-wrapper flex items-center gap-15px">
            <img
              src={logo}
              width={100}
              height={100}
              alt="logo"
              className="logo"
              priority
            />

          {width <= 991 && !collapsed && (
            <Button
              title="Log In"
              variant="primary"
              className="mobile-header-login-btn btn-blur"
              shadow={false}
            />
          )}
        </div>

        <div className={`header-menu flex content-between items-center`}>
          <Menus
            current={current}
            handleChange={handleChange}
            onClick={onClick}
            items={items}
          />
        </div>

        {collapsed && (
          <div className="mobile-menu">
            <Menus
              current={current}
              handleChange={handleChange}
              onClick={onClick}
              items={items}
              mode="inline"
            />
          </div>
        )}

        <button className="menu-toggler" onClick={toggleCollapsed}>
          {collapsed ? <MdOutlineClose /> : <TfiMenu />}
        </button>
      </header>
    </div>
  );
}
