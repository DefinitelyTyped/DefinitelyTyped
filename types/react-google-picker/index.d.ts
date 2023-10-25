/// <reference types="gapi" />
/// <reference types="google.picker" />

import * as React from "react";

export interface GooglePickerProps {
    clientId: string;
    developerKey: string;
    scope?: ReadonlyArray<string>;
    viewId?: keyof typeof google.picker.ViewId;
    mimeTypes?: ReadonlyArray<string>;
    query?: string;
    authImmediate?: boolean;
    origin?: string;
    onChange?: (result: google.picker.ResponseObject) => void;
    onAuthenticate?: (oauthToken: string) => void;
    onAuthFailed?: (response: GoogleApiOAuth2TokenObject) => void;
    createPicker?: (google: typeof self.google, oauthToken: string) => void;
    multiselect?: boolean;
    navHidden?: boolean;
    disabled?: boolean;
}

export default class GooglePicker extends React.Component<React.PropsWithChildren<GooglePickerProps>> {}
