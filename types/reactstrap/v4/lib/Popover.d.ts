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

interface Props extends Pick<CommonProps, Exclude<keyof CommonProps, 'tag'>> {
  placement?: Placement;
  target: string;
  isOpen?: boolean;
  tether?: Tether.ITetherOptions;
  toggle?: () => void;
}

declare var Popover: React.StatelessComponent<Props>;
export default Popover;
