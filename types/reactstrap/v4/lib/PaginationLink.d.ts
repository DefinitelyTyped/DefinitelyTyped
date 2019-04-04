import { CSSModule } from '../index';

interface Props extends React.HTMLProps<HTMLAnchorElement> {
  'aria-label'?: string;
  className?: string;
  cssModule?: CSSModule;
  next?: boolean;
  previous?: boolean;
  tag?: React.ElementType;
}

declare var PaginationLink: React.StatelessComponent<Props>;
export default PaginationLink;
