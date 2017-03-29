interface Props {
  tag?: React.ReactType;
  inverse?: boolean;
  color?: string;
  block?: boolean;
  outline?: boolean;
  className?: string;
  style?: React.CSSProperties;
}

declare var Card: React.StatelessComponent<Props>;
export default Card;

