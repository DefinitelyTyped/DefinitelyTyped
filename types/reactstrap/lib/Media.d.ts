import { CSSModule } from '../index';

export interface MediaProps extends React.HTMLAttributes<HTMLElement> {
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

declare const Media: React.StatelessComponent<MediaProps>;
export default Media;
