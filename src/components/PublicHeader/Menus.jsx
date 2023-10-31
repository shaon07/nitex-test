import { Menu } from "antd";

export default function Menus({
  onClick,
  handleChange,
  items,
  current,
  mode = "horizontal",
}) {

  return (
    <>
      <div className={`header_nav_link w-full`}>
        <Menu
          onClick={onClick}
          selectedKeys={[current]}
          mode={mode}
          theme="dark"
          items={items}
          className="menu-items"
        />
      </div>
    </>
  );
}
