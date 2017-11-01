import { CSSModule } from '../index';

interface Props {
  tag?: React.ReactType;
  size?: string;
  className?: string;
  cssModule?: CSSModule;
}

declare var InputGroup: React.StatelessComponent<Props>;
export default InputGroup;
