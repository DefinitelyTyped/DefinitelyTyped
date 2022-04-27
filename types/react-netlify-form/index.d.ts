// Type definitions for react-netlify-form 2.1
// Project: https://github.com/escaladesports/react-netlify-form#readme
// Definitions by: Zhijiang Li <https://github.com/zhjngli>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import * as React from 'react';
import Recaptcha, { ReCAPTCHAProps } from 'react-google-recaptcha';

export interface NetlifyFormState {
    loading: boolean;
    error: boolean;
    success: boolean;
    recaptchaError?: boolean | undefined;
    recaptcha?: React.ReactElement | undefined;
}

export interface NetlifyFormProps {
    name: string;
    action?: string | undefined;
    honeypotName?: string | undefined;
    recaptcha?: ReCAPTCHAProps | undefined;
    children: (state: NetlifyFormState) => React.ReactElement;
}

declare class NetlifyForm extends React.Component<NetlifyFormProps, NetlifyFormState> {
    constructor(props: NetlifyFormProps);
    render(): React.ReactElement;
}

export default NetlifyForm;
