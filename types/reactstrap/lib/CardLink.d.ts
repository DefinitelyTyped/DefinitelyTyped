import { CSSModule } from '../index';

export interface CardLinkProps extends React.HTMLAttributes<HTMLElement> {
  tag?: React.ReactType;
  innerRef?: string | ((instance: HTMLButtonElement) => any);
  className?: string;
  cssModule?: CSSModule;
  href?: string;
  [others: string]: any;
}

declare const CardLink: React.StatelessComponent<CardLinkProps>;
export default CardLink;
