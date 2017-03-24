/// <reference types='tether' />

type Placement
  = 'top'
  | 'bottom'
  | 'left'
  | 'right'
  | 'top left'
  | 'top center'
  | 'top right'
  | 'right top'
  | 'right middle'
  | 'right bottom'
  | 'bottom right'
  | 'bottom center'
  | 'bottom left'
  | 'left top'
  | 'left middle'
  | 'left bottom';

interface Props {
  placement?: Placement;
  target: string;
  isOpen?: boolean;
  tether?: Tether.ITetherOptions;
  className?: string;
  toggle?: () => void;
}

declare var Popover: React.StatelessComponent<Props>;
export default Popover;