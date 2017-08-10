import { CSSModule } from '../index';

interface Props {
  tag?: React.ReactType;
  className?: string;
  cssModule?: CSSModule;
}

declare var ModalBody: React.StatelessComponent<Props>;
export default ModalBody;
