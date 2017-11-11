import { CSSModule } from '../index';

export interface FadeProps {
  baseClass?: string;
  baseClassIn?: string;
  tag?: React.ReactType;
  className?: string;
  cssModule?: CSSModule;
  transitionAppearTimeout?: number;
  transitionEnterTimeout?: number;
  transitionLeaveTimeout?: number;
  transitionAppear?: boolean;
  transitionEnter?: boolean;
  transitionLeave?: boolean;
  onLeave?: () => void;
  onEnter?: () => void;
}

export const Fade: React.StatelessComponent<FadeProps>;
export default Fade;
