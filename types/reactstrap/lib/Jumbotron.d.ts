import { CSSModule } from '../index';

export interface JumbotronProps extends React.HTMLAttributes<HTMLElement> {
  tag?: React.ReactType;
  fluid?: boolean;
  className?: string;
  cssModule?: CSSModule;
}

declare const Jumbotron: React.StatelessComponent<JumbotronProps>;
export default Jumbotron;
