/// <reference types='tether' />

import { CommonProps } from '../index';

interface Props extends Pick<CommonProps, Exclude<keyof CommonProps, 'tag'>> {
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
