import * as React from 'react';
import { CSSModule } from '../index';

export interface FormFeedbackProps extends React.HTMLAttributes<HTMLElement> {
  [key: string]: any;
  tag?: string;
  className?: string;
  cssModule?: CSSModule;
  valid?: boolean;
}

declare class FormFeedback<T = {[key: string]: any}> extends React.Component<FormFeedbackProps> {}
export default FormFeedback;
