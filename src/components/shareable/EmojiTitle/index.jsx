
export default function EmojiTitle({ title, Icon, animate = "0" }) {
  return (
    <div className="title">
      <div className="emoji-title">
        <span>{Icon && <Icon />}</span>
        <p className={`${animate}`}>{title}</p>
      </div>
    </div>
  );
}
