import { CSSModule } from '../index';

interface Props {
  tag?: React.ReactType;
  className?: string;
  cssModule?: CSSModule;
  wrapTag?: React.ReactType;
  toggle?: () => void;
}

declare var ModalHeader: React.StatelessComponent<Props>;
export default ModalHeader;
