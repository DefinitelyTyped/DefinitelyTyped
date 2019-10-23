import { CSSModule } from '../index';

interface Props {
  body?: boolean;
  bottom?: boolean;
  className?: string;
  cssModule?: CSSModule;
  heading?: boolean;
  left?: boolean;
  list?: boolean;
  middle?: boolean;
  object?: boolean;
  right?: boolean;
  tag?: React.ReactType;
  top?: boolean;
  href?: string;
  alt?: string;
}

declare var Media: React.StatelessComponent<Props>;
export default Media;
