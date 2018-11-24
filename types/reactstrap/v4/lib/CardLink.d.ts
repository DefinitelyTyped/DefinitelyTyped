import { CommonProps } from '../index';

interface Props extends CommonProps {
  getRef?: string | ((instance: HTMLButtonElement) => any);
  href?: string;
}

declare var CardLink: React.StatelessComponent<Props>;
export default CardLink;
