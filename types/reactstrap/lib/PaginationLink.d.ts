import { CSSModule } from '../index';

export interface PaginationLinkProps extends React.HTMLProps<HTMLAnchorElement> {
  'aria-label'?: string;
  className?: string;
  cssModule?: CSSModule;
  next?: boolean;
  previous?: boolean;
  tag?: React.ReactType;
}

declare const PaginationLink: React.StatelessComponent<PaginationLinkProps>;
export default PaginationLink;
