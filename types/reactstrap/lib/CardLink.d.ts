import { CSSModule } from '../index';

export interface CardLinkProps {
  tag?: React.ReactType;
  innerRef?: string | ((instance: HTMLButtonElement) => any);
  className?: string;
  cssModule?: CSSModule;
  href?: string;
}

export const CardLink: React.StatelessComponent<CardLinkProps>;
