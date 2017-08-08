import { CSSModule } from '../index';

interface Props {
  tag?: string;
  className?: string;
  cssModule?: CSSModule;
}

declare var FormFeedback: React.StatelessComponent<Props>;
export default FormFeedback;
