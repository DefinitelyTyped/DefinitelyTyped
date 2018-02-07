import { CSSModule } from '../index';

export interface CardFooterProps {
  tag?: React.ReactType;
  className?: string;
  cssModule?: CSSModule;
}

declare const CardFooter: React.StatelessComponent<CardFooterProps>;
export default CardFooter;
