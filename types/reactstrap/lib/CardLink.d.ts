import { CSSModule } from '../index';

export interface CardLinkProps extends React.HTMLAttributes<HTMLElement> {
  tag?: React.ReactType;
  innerRef?: React.Ref<HTMLAnchorElement>;
  className?: string;
  cssModule?: CSSModule;
  href?: string;
}

declare const CardLink: React.StatelessComponent<CardLinkProps>;
export default CardLink;
