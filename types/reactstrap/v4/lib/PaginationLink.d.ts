import * as ReactDOM from 'react-dom';
import { CSSModule } from '../index';

interface Props extends ReactDOM.HTMLProps<HTMLAnchorElement> {
  'aria-label'?: string;
  className?: string;
  cssModule?: CSSModule;
  next?: boolean;
  previous?: boolean;
  tag?: React.ReactType;
}

declare var PaginationLink: React.StatelessComponent<Props>;
export default PaginationLink;
