/// <reference types='tether' />

import { CSSModule } from '../index';

export interface TetherContentProps {
  className?: string;
  cssModule?: CSSModule;
  arrow?: string;
  disabled?: boolean;
  isOpen: boolean;
  toggle: () => void;
  tether: Tether.ITetherOptions;
  tetherRef?: (tether: Tether) => void;
  style?: React.CSSProperties;
}

declare const TetherContent: React.StatelessComponent<TetherContentProps>;
export default TetherContent;
