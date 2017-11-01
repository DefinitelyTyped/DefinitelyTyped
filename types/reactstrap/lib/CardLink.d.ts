import { CSSModule } from '../index';

interface Props {
  tag?: React.ReactType;
  innerRef?: string | ((instance: HTMLButtonElement) => any);
  className?: string;
  cssModule?: CSSModule;
  href?: string;
}

declare var CardLink: React.StatelessComponent<Props>;
export default CardLink;
