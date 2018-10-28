import { CSSModule } from '../index';

interface Props {
  tag?: React.ReactType;
  className?: string;
  cssModule?: CSSModule;
}

declare var CardTitle: React.StatelessComponent<Props>;
export default CardTitle;
