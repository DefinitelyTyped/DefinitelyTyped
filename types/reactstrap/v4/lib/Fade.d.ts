import { CommonProps } from '../index';

interface Props extends CommonProps {
  baseClass?: string;
  baseClassIn?: string;
  transitionAppearTimeout?: number;
  transitionEnterTimeout?: number;
  transitionLeaveTimeout?: number;
  transitionAppear?: boolean;
  transitionEnter?: boolean;
  transitionLeave?: boolean;
  onLeave?: () => void;
  onEnter?: () => void;
}

declare var Fade: React.StatelessComponent<Props>;
export default Fade;
