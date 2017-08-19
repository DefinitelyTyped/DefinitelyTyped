interface Props {
  baseClass?: string;
  baseClassIn?: string;
  tag?: React.ReactType;
  className?: string;
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