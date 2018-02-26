import { CSSModule } from '../index';

export interface ProgressProps extends React.HTMLAttributes<HTMLElement> {
  bar?: boolean;
  multi?: boolean;
  tag?: string;
  value?: string | number;
  max?: string | number;
  animated?: boolean;
  striped?: boolean;
  color?: string;
  className?: string;
  cssModule?: CSSModule;
  barClassName?: string;
}

declare const Progress: React.StatelessComponent<ProgressProps>;
export default Progress;
