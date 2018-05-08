import { CSSModule } from '../index';

export interface CardBodyProps extends React.HTMLAttributes<HTMLElement> {
  tag?: React.ReactType;
  className?: string;
  cssModule?: CSSModule;
  [others: string]: any;
}

declare const CardBody: React.StatelessComponent<CardBodyProps>;
export default CardBody;
