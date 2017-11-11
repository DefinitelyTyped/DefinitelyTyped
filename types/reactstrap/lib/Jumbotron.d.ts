import { CSSModule } from '../index';

export interface JumbotronProps {
  tag?: React.ReactType;
  fluid?: boolean;
  className?: string;
  cssModule?: CSSModule;
}

export const Jumbotron: React.StatelessComponent<JumbotronProps>;
export default Jumbotron;
