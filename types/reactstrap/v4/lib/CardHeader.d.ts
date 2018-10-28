import { CSSModule } from '../index';

interface Props {
  tag?: React.ReactType;
  className?: string;
  cssModule?: CSSModule;
}

declare var CardHeader: React.StatelessComponent<Props>;
export default CardHeader;
