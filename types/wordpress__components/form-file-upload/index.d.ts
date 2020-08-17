import { ChangeEventHandler, ComponentType } from 'react';

import IconButton from '../icon-button';

declare namespace FormFileUpload {
    interface BaseProps {
        /**
         * A string passed to input element that tells the browser which file
         * types can be upload to the upload by the user use.
         *
         * Further info: {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/file#Unique_file_type_specifiers}
         */
        accept?: string;
        /**
         * Whether to allow multiple selection of files or not.
         */
        multiple?: boolean;
        /**
         * Callback function passed directly to the `input` file element.
         */
        onChange: ChangeEventHandler<HTMLInputElement>;
    }
    interface IconButtonProps extends BaseProps, Partial<Omit<IconButton.Props, 'onChange'>> {
        render?: never;
    }
    interface RenderProps extends BaseProps {
        /**
         * Callback function used to render the UI. If passed the component
         * does not render any UI and calls this function to render it. This
         * function receives an object with the property openFileDialog. The
         * property is a function that when called opens the browser window to
         * upload files.
         */
        render(props: { openFileDialog(): void }): JSX.Element;
        children?: never;
    }
    type Props = IconButtonProps | RenderProps;
}
declare const FormFileUpload: ComponentType<FormFileUpload.Props>;

export default FormFileUpload;
