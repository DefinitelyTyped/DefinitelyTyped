import { CSSModule } from '../index';
import { ThemeColor } from "./Color";

export interface ProgressProps {
  bar?: boolean;
  multi?: boolean;
  tag?: string;
  value?: string | number;
  max?: string | number;
  animated?: boolean;
  striped?: boolean;
  color?: ThemeColor;
  className?: string;
  cssModule?: CSSModule;
  barClassName?: string;
}

declare const Progress: React.StatelessComponent<ProgressProps>;
export default Progress;
