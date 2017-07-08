interface Props {
  bar?: boolean;
  multi?: boolean;
  tag?: string;
  value?: string | number;
  max?: string | number;
  animated?: boolean;
  striped?: boolean;
  color?: string;
  className?: string;
  barClassName?: string;
}

declare var Progress: React.StatelessComponent<Props>;
export default Progress;