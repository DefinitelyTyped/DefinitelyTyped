import { CSSModule } from '../index';

export interface CardBlockProps {
  tag?: React.ReactType;
  className?: string;
  cssModule?: CSSModule;
}

declare const CardBlock: React.StatelessComponent<CardBlockProps>;
export default CardBlock;
