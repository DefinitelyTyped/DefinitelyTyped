/// <reference types='tether' />

import { CommonProps } from '../index';

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

export interface UncontrolledProps extends Pick<CommonProps, Exclude<keyof CommonProps, 'tag'>> {
  placement?: Placement;
  target: string;
  disabled?: boolean;
  tether?: Tether.ITetherOptions;
  tetherRef?: (tether: Tether) => void;
  autohide?: boolean;
  delay?: number | { show: number, hide: number };
}

interface Props extends UncontrolledProps {
  toggle?: () => void;
  isOpen?: boolean;
}

declare var Tooltip: React.StatelessComponent<Props>;
export default Tooltip;
