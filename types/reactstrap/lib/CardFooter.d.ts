import { CSSModule } from '../index';

export interface CardFooterProps extends React.HTMLAttributes<HTMLElement> {
  tag?: React.ReactType;
  className?: string;
  cssModule?: CSSModule;
}

declare const CardFooter: React.StatelessComponent<CardFooterProps>;
export default CardFooter;
