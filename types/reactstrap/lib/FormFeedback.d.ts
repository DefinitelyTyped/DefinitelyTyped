import * as React from 'react';
import { CSSModule } from '../index';

export type FormFeedbackProps<T = {}> = React.HTMLAttributes<HTMLElement> & {
  tag?: string;
  className?: string;
  cssModule?: CSSModule;
  valid?: boolean;
} & T;

declare class FormFeedback<T = {}> extends React.Component<FormFeedbackProps<T>> {}
export default FormFeedback;
