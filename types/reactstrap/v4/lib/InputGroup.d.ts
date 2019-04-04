import { CSSModule } from '../index';

interface Props {
  tag?: React.ElementType;
  size?: string;
  className?: string;
  cssModule?: CSSModule;
}

declare var InputGroup: React.StatelessComponent<Props>;
export default InputGroup;
