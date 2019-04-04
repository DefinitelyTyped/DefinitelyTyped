import { CSSModule } from '../index';

interface Props {
  tag?: React.ElementType;
  className?: string;
  cssModule?: CSSModule;
}

declare var ModalFooter: React.StatelessComponent<Props>;
export default ModalFooter;
