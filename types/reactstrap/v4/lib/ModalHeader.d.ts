import { CSSModule } from '../index';

interface Props {
  tag?: React.ElementType;
  className?: string;
  cssModule?: CSSModule;
  wrapTag?: React.ElementType;
  toggle?: () => void;
}

declare var ModalHeader: React.StatelessComponent<Props>;
export default ModalHeader;
