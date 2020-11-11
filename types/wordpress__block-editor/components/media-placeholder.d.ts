// tslint:disable:no-unnecessary-generics
import { Dashicon, DropZone } from '@wordpress/components';
import { ComponentType, MouseEventHandler } from 'react';

declare namespace MediaPlaceholder {
    interface Props<T extends boolean> extends Pick<DropZone.Props, 'onHTMLDrop'> {
        /**
         * A string passed to `FormFileUpload` that tells the browser which file types can be uploaded
         * to the upload window the browser use e.g: `image#<{(|,video#<{(|`.
         *
         * This property is similar to the `allowedTypes` property. The difference is the format
         * and the fact that this property affects the behavior of `FormFileUpload` while
         * `allowedTypes` affects the behavior `MediaUpload`.
         *
         * See: {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/file#Unique_file_type_specifiers }
         */
        accept?: string;
        /**
         * If `true`, and if  `gallery === true` the gallery media modal opens directly in the media
         * library where the user can add additional images. When uploading/selecting files on the
         * placeholder, the placeholder appends the files to the existing files list. If `false` the
         * gallery media modal opens in the edit mode where the user can edit existing images, by
         * reordering them, remove them, or change their attributes. When uploading/selecting files
         * on the placeholder the files replace the existing files list.
         * @defaultValue false
         */
        addToGallery?: boolean;
        /**
         * Array with the types of the media to upload/select from the media library.
         *
         * @remarks
         * Each type is a string that can contain the general mime type e.g: `image`, `audio`,
         * `text`, or the complete mime type e.g: `audio/mpeg`, `image/gif`.
         *
         * If allowedTypes is unset all mime types should be allowed.  This property is similar to
         * the `accept` property. The difference is the format and the fact that this property
         * affects the behavior of `MediaUpload` while `accept` affects the behavior
         * `FormFileUpload`.
         */
        allowedTypes?: string[];
        children?: never;
        className?: string;
        /** Undocumented. */
        dropZoneUIOnly?: boolean;
        /**
         * Icon to display left of the title.
         */
        icon?: Dashicon.Icon | JSX.Element;
        /**
         * If `true`, the property changes the look of the placeholder to be adequate to scenarios
         * where new files are added to an already existing set of files, e.g., adding files to a
         * gallery.
         *
         * If `false` the default placeholder style is used.
         *
         * @defaultValue false
         */
        isAppender?: boolean;
        /**
         * An object that can contain a `title` and `instructions` properties. These properties are
         * passed to the placeholder component as `label` and `instructions` respectively.
         */
        labels?: {
            title?: string;
            instructions?: string;
        };
        /** Undocumented. */
        mediaPreview?: JSX.Element;
        /**
         * Optionally pass in `noticeUI` obtained from `withNotices` HOC.
         */
        notices?: JSX.Element;
        onCancel?(): void;
        onDoubleClick?: MouseEventHandler<HTMLDivElement>;
        /**
         * Callback called when an upload error happens.
         */
        onError?(message: string): void;
        onSelectURL?(src: string): void;
        multiple?: T;
        value?: T extends true ? number[] : number;
        onSelect(
            value: T extends true ? Array<{ id: number } & { [k: string]: any }> : { id: number } & { [k: string]: any }
        ): void;
    }
    // type Props<T extends boolean> = BaseProps<T>;
    // interface PropsWithMultiple extends BaseProps {
    //     multiple: true;
    //     onSelect(values: Array<{ id: number } & { [k: string]: any }>): void;
    //     value?: number[];
    // }
    // interface PropsWithoutMultiple extends BaseProps {
    //     multiple?: false;
    //     onSelect(value: { id: number } & { [k: string]: any }): void;
    //     value?: number;
    // }
    // type Props = PropsWithoutMultiple | PropsWithMultiple;
}
declare function MediaPlaceholder<T extends boolean = false>(props: MediaPlaceholder.Props<T>): JSX.Element;

export default MediaPlaceholder;
