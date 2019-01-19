import * as React from 'react';
import * as ReactDOM from 'react-dom';

declare namespace FormControlFeedback {
    export interface FormControlFeedbackProps extends ReactDOM.HTMLProps<FormControlFeedback> {
        bsClass?: string;
    }
}
declare class FormControlFeedback extends React.Component<FormControlFeedback.FormControlFeedbackProps> { }
export = FormControlFeedback;
