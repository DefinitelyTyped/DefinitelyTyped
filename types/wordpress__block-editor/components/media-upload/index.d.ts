// tslint:disable:no-unnecessary-generics
import { ComponentType } from '@wordpress/element';

import { default as MediaPlaceholder } from '../media-placeholder';

declare namespace MediaUpload {
    interface Props<T extends boolean>
        extends Pick<MediaPlaceholder.Props<T>, 'addToGallery' | 'allowedTypes' | 'multiple' | 'onSelect' | 'value'> {
        children?: never;
        /**
         * If `true`, the component will initiate all the states required to represent a gallery. By
         * default, the media modal opens in the gallery edit frame, but that can be changed using
         * the `addToGallery`flag.
         */
        gallery?: boolean;
        /**
         * CSS class added to the media modal frame.
         */
        modalClass?: string;
        /**
         * A callback invoked to render the Button opening the media library.
         */
        render(props: {
            /**
             * A function opening the media modal when called.
             */
            open(): void;
        }): JSX.Element;
        /**
         * Title displayed in the media modal.
         * @defaultValue "Select or Upload Media"
         */
        title?: string;
    }
}
declare function MediaUpload<T extends boolean = false>(props: MediaUpload.Props<T>): JSX.Element;

export default MediaUpload;
