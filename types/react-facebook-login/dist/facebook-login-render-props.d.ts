// Specific use case when adding custom render component
// https://www.npmjs.com/package/react-facebook-login#facebook-button-without-styling
// Definitions by: Hafiz Temuri <https://github.com/temurih>

import * as React from 'react';
import { ReactFacebookLoginProps, ReactFacebookLoginState } from '..';

export interface RenderProps {
    onClick: () => void;
    isDisabled: boolean;
    isProcessing: boolean;
    isSdkLoaded: boolean;
}

export interface ReactFacebookLoginRenderProps extends ReactFacebookLoginProps {
    render?: (renderProps: RenderProps) => React.ReactChild;
}

export default class FacebookLoginRender extends React.Component<
    ReactFacebookLoginRenderProps,
    ReactFacebookLoginState
> {}
