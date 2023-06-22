// Type definitions for filestack-react 4.0
// Project: https://github.com/filestack/filestack-react
// Definitions by: DefinitelyTyped <https://github.com/DefinitelyTyped>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import * as React from 'react';
import { ClientOptions, PickerFileMetadata, PickerOptions } from 'filestack-js';

export * as client from 'filestack-js';

interface PickerBaseProps {
    /**
     * Filestack api key
     */
    apikey: string;
    /**
     * https://filestack.github.io/filestack-js/interfaces/clientoptions.html
     */
    pickerOptions?: PickerOptions;
    /**
     * https://filestack.github.io/filestack-js/interfaces/pickeroptions.html
     */
    clientOptions?: ClientOptions;
    /**
     * A function to be called after successful completed action
     * @deprecated
     */
    onSuccess?: (result: PickerFileMetadata) => void;
    /**
     * Called when all files have been uploaded
     */
    onUploadDone?: (result: PickerFileMetadata) => void;
    /**
     * A function to be called when error occurs
     */
    onError?: (error: PickerFileMetadata) => void;
}

export type PickerInlineProps = PickerBaseProps;
export type PickerOverlayProps = PickerBaseProps;
export type PickerDropPaneProps = PickerBaseProps;
export const PickerInline: React.FC<PickerInlineProps>;
export const PickerOverlay: React.FC<PickerOverlayProps>;
export const PickerDropPane: React.FC<PickerDropPaneProps>;
