import { CSSModule } from '../index';

interface Props {
  tag?: React.ReactType;
  className?: string;
  cssModule?: CSSModule;
}

declare var CardBlock: React.StatelessComponent<Props>;
export default CardBlock;
