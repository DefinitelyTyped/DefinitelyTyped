import {CSSModule} from '../index';

interface Props {
  className?: string;
  cssModule?: CSSModule;
  tag?: React.ReactType;
  noGutters?: boolean;
}

declare var Row: React.StatelessComponent<React.HTMLProps<any>>;
export default Row;
