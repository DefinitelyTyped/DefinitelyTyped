import { CSSModule } from '../index';

export interface FormFeedbackProps extends React.HTMLAttributes<HTMLElement> {
  tag?: string;
  className?: string;
  cssModule?: CSSModule;
  valid?: boolean;
  [others: string]: any;
}

declare const FormFeedback: React.StatelessComponent<FormFeedbackProps>;
export default FormFeedback;
