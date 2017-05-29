interface Props extends React.HTMLProps<HTMLDivElement> {
  row?: boolean;
  check?: boolean;
  disabled?: boolean;
  tag?: React.ReactType;
  color?: string;
  className?: string;
}

declare var FormGroup: React.StatelessComponent<Props>;
export default FormGroup;
