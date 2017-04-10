interface Props {
  tag?: React.ReactType;
  className?: string;
  wrapTag?: React.ReactType;
  toggle?: () => void;
}

declare var ModalHeader: React.StatelessComponent<Props>;
export default ModalHeader;