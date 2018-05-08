import { CSSModule } from '../index';

export interface ContainerProps extends React.HTMLAttributes<HTMLElement> {
  tag?: React.ReactType;
  fluid?: boolean;
  className?: string;
  cssModule?: CSSModule;
}

declare const Container: React.StatelessComponent<ContainerProps>;
export default Container;
