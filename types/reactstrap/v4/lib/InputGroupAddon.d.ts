import { CSSModule } from '../index';

interface Props {
  tag?: React.ElementType;
  className?: string;
  cssModule?: CSSModule;
}

declare var InputGroupAddon: React.StatelessComponent<Props>;
export default InputGroupAddon;
