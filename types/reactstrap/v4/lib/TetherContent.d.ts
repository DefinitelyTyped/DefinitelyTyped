/// <reference types='tether' />
import * as ReactDOM from 'react-dom';
import { CSSModule } from '../index';

interface Props {
  className?: string;
  cssModule?: CSSModule;
  arrow?: string;
  disabled?: boolean;
  isOpen: boolean;
  toggle: () => void;
  tether: Tether.ITetherOptions;
  tetherRef?: (tether: Tether) => void;
  style?: ReactDOM.CSSProperties;
}

declare var TetherContent: React.StatelessComponent<Props>;
export default TetherContent;
