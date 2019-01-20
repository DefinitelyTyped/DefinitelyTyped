import * as ReactDOM from 'react-dom';
import { CSSModule } from '../index';

interface Props extends ReactDOM.HTMLProps< HTMLElement> {
  className?: string;
  cssModule?: CSSModule;
  tag?: React.ReactType;
  noGutters?: boolean;
}

declare var Row: React.StatelessComponent<Props>;
export default Row;
