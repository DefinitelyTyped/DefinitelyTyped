interface Props extends React.HTMLProps<HTMLFormElement> {
  inline?: boolean;
  tag?: React.ReactType;
  className?: string;
}

declare var Form: React.StatelessComponent<Props>;
export default Form;