

export default function Button({
  Icon,
  type,
  style,
  variant,
  onClick,
  title = "",
  animate = "",
  className = "",
  size = "small",
  iconClassName = "",
  IconPosition = "end",
  disabled = false,
  shadow = true,
}) {
  const btnStyle = variant === "blur" ? "btn-blur" : variant;

  return (
    <button
      className={`btnStyle ${animate}  ${
        Icon ? `Icon_wrapper` : ""
      } ${IconPosition} ${btnStyle} ${className} ${size} ${
        !disabled && shadow ? `shadow-${variant}` : ""
      }`}
      type={type || "button"}
      onClick={onClick}
      disabled={disabled}
      style={style}
    >
      {title}{" "}
      {Icon &&
        ((iconClassName = ""),
        (
          <span className={`icon ${iconClassName}`}>
            <Icon />
          </span>
        ))}
    </button>
  );
}
