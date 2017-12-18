import { CSSModule } from '../index';

export interface FormFeedbackProps {
  tag?: string;
  className?: string;
  cssModule?: CSSModule;
}

declare const FormFeedback: React.StatelessComponent<FormFeedbackProps>;
export default FormFeedback;
