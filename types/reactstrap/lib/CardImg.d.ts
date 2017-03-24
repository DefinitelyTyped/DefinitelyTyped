interface Props {
  tag?: React.ReactType;
  top?: boolean;
  bottom?: boolean;
  className?: string;
  src?: string;
  width?: string;
  height?: string;
  alt?: string;
}

declare var CardImg: React.StatelessComponent<Props>;
export default CardImg;