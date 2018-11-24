import { CommonProps } from '../index';

interface Props extends CommonProps {
  top?: boolean;
  bottom?: boolean;
  src?: string;
  width?: string;
  height?: string;
  alt?: string;
}

declare var CardImg: React.StatelessComponent<Props>;
export default CardImg;
