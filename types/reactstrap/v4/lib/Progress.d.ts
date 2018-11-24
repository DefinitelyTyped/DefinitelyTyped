import { CommonProps } from '../index';

interface Props extends Pick<CommonProps, Exclude<keyof CommonProps, 'tag'>> {
  bar?: boolean;
  multi?: boolean;
  tag?: string;
  value?: string | number;
  max?: string | number;
  animated?: boolean;
  striped?: boolean;
  color?: string;
  barClassName?: string;
}

declare var Progress: React.StatelessComponent<Props>;
export default Progress;
