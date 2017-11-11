import { CSSModule } from '../index';

export interface ContainerProps {
  tag?: React.ReactType;
  fluid?: boolean;
  className?: string;
  cssModule?: CSSModule;
}

export const Container: React.StatelessComponent<ContainerProps>;
export default Container;
