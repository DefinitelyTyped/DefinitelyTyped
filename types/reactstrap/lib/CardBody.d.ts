import { CSSModule } from '../index';

export interface CardBodyProps {
  tag?: React.ReactType;
  className?: string;
  cssModule?: CSSModule;
}

export const CardBody: React.StatelessComponent<CardBodyProps>;
export default CardBody;
