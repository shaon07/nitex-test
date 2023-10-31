import EmojiTitle from "../EmojiTitle";
import { H1, H3, H6, Label2, P1, P2 } from "../Typography";

const checkHeadingType = (type, heading, animate, headingClassName) => {
  switch (type) {
    case "Primary":
      return <H1 className={` ${animate} ${headingClassName}`}>{heading}</H1>;
    case "Secondary":
      return <H3 className={`${animate} ${headingClassName}`}>{heading}</H3>;
    case "Primary-small":
      return <H3 className={`${animate} ${headingClassName}`}>{heading}</H3>;
    case "Secondary-small":
      return <H6 className={`${headingClassName}`}>{heading}</H6>;

    default:
      return <H3 className={`${animate} ${headingClassName}`}>{heading}</H3>;
  }
};

const checkDescriptionType = (type, heading, animate, descriptionClassName) => {
  switch (type) {
    case "Primary":
      return (
        <P1 className={` ${animate} ${descriptionClassName}`}>{heading}</P1>
      );
    case "Secondary":
      return (
        <Label2 className={`${animate} ${descriptionClassName}`}>
          {heading}
        </Label2>
      );
    case "Primary-small":
      return (
        <P2 className={`${animate} ${descriptionClassName}`}>{heading}</P2>
      );
    case "Secondary-small":
      return (
        <P2 className={`${animate} ${descriptionClassName}`}>{heading}</P2>
      );

    default:
      return (
        <P2 className={`${animate} ${descriptionClassName}`}>{heading}</P2>
      );
  }
};

export default function Heading({
  type,
  emoji,
  title,
  heading,
  description,
  animate = "",
  headingClassName = "",
  descriptionClassName = "",
}) {
  return (
    <div className={`heading-wrapper ${type}`}>
      {emoji && title && (
        <EmojiTitle title={title} Icon={emoji} animate={animate} />
      )}
      {checkHeadingType(type, heading, animate, headingClassName)}
      {description &&
        checkDescriptionType(type, description, animate, descriptionClassName)}
    </div>
  );
}
