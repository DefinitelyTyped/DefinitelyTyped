import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { CSSModule } from '../index';

export type FormFeedbackProps<T = {}> = ReactDOM.HTMLAttributes<HTMLElement> & {
  tag?: string;
  className?: string;
  cssModule?: CSSModule;
  valid?: boolean;
} & T;

declare class FormFeedback<T = {[key: string]: any}> extends React.Component<FormFeedbackProps<T>> {}
export default FormFeedback;
