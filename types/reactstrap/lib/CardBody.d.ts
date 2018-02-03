import { CSSModule } from '../index';

export interface CardBodyProps extends React.HTMLAttributes<HTMLElement> {
  tag?: React.ReactType;
  className?: string;
  cssModule?: CSSModule;
}

declare const CardBody: React.StatelessComponent<CardBodyProps>;
export default CardBody;
