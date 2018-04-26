import { CSSModule } from '../index';

export interface CardHeaderProps extends React.HTMLAttributes<HTMLElement> {
  tag?: React.ReactType;
  className?: string;
  cssModule?: CSSModule;
  [others: string]: any;
}

declare const CardHeader: React.StatelessComponent<CardHeaderProps>;
export default CardHeader;
