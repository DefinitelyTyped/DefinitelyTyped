import { CSSModule } from '../index';

export interface CardBlockProps {
  tag?: React.ReactType;
  className?: string;
  cssModule?: CSSModule;
}

export const CardBlock: React.StatelessComponent<CardBlockProps>;
export default CardBlock;
