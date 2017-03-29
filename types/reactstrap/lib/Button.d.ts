interface Props extends React.HTMLProps<HTMLButtonElement> {
  outline?: boolean;
  active?: boolean;
  block?: boolean;
  color?: string;
  disabled?: boolean;
  tag?: React.ReactType;

  onClick?: React.MouseEventHandler<any>;
  size?: any;
  id?: string;
  style?: React.CSSProperties;
}

declare var Button: React.StatelessComponent<Props>;
export default Button;