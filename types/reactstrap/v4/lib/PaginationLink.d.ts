import { CommonProps } from '../index';

interface Props extends CommonProps, React.ComponentPropsWithoutRef<'a'> {
  'aria-label'?: string;
  next?: boolean;
  previous?: boolean;
}

declare var PaginationLink: React.StatelessComponent<Props>;
export default PaginationLink;
