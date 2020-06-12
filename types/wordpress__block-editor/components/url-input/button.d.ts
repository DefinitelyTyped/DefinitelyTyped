import { ComponentType } from 'react';

import URLInput from './';

declare namespace URLInputButton {
    interface Props extends Pick<URLInput.Props, 'onChange'> {
        children?: never;
        /**
         * This should be set to the attribute (or component state) property used to store the URL.
         */
        url: string;
    }
}
declare const URLInputButton: ComponentType<URLInputButton.Props>;

export default URLInputButton;
