interface Props {
  row?: boolean;
  check?: boolean;
  disabled?: boolean;
  tag?: React.ReactType;
  color?: string;
  className?: string;
}

declare var FormGroup: React.StatelessComponent<Props>;
export default FormGroup;
