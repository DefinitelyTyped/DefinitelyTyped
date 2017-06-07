interface Props extends React.HTMLProps<any> {
  className?: string;
  tag?: React.ReactType;
  noGutters?: boolean;
}

declare var Row: React.StatelessComponent<Props>;
export default Row;