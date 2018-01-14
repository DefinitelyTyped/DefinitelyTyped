import { CSSModule } from '../index';

export interface CardLinkProps {
  tag?: React.ReactType;
  innerRef?: string | ((instance: HTMLButtonElement) => any);
  className?: string;
  cssModule?: CSSModule;
  href?: string;
}

declare const CardLink: React.StatelessComponent<CardLinkProps>;
export default CardLink;
