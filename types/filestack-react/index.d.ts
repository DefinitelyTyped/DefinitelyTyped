// Type definitions for filestack-react
// Project: https://github.com/filestack/filestack-react
// Definitions by: Phil Ting <https://github.com/philting>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import * as React from 'react';
import * as client from 'filestack-js';
// These two lines are not mergeable, and this error is considered a false positive
//   in eslint: https://eslint.org/docs/latest/rules/no-duplicate-imports
// tslint:disable-next-line:no-duplicate-imports
import type { ClientOptions, PickerFileMetadata, PickerOptions } from 'filestack-js';

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

export { client };
