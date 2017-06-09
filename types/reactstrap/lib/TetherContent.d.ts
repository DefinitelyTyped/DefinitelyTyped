/// <reference types='tether' />

interface Props {
  className?: string;
  arrow?: string;
  disabled?: boolean;
  isOpen: boolean;
  toggle: () => void;
  tether: Tether.ITetherOptions;
  tetherRef?: (tether: Tether) => void;
  style?: React.CSSProperties;
}

declare var TetherContent: React.StatelessComponent<Props>;
export default TetherContent;