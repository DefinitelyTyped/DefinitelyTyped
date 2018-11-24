import { CommonProps } from '../index';

interface Props extends CommonProps {
  wrapTag?: React.ReactType;
  toggle?: () => void;
}

declare var ModalHeader: React.StatelessComponent<Props>;
export default ModalHeader;
