import { CSSModule } from '../index';

export interface CardHeaderProps {
  tag?: React.ReactType;
  className?: string;
  cssModule?: CSSModule;
}

declare const CardHeader: React.StatelessComponent<CardHeaderProps>;
export default CardHeader;
