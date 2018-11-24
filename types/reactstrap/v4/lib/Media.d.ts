import { CommonProps } from '../index';

interface Props extends CommonProps {
  body?: boolean;
  bottom?: boolean;
  heading?: boolean;
  left?: boolean;
  list?: boolean;
  middle?: boolean;
  object?: boolean;
  right?: boolean;
  top?: boolean;
  href?: string;
  alt?: string;
}

declare var Media: React.StatelessComponent<Props>;
export default Media;
