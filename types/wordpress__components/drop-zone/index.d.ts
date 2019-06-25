import { ComponentType, DragEvent } from '@wordpress/element';

declare namespace DropZone {
    interface Props {
        /**
         * A CSS class to be appended after the default components-drop-zone class.
         */
        className?: string;
        /**
         * A string to be shown within the drop zone area.
         * @defaultValue "Drop files to upload"
         */
        label?: string;
        /**
         * The function is called when dropping a file into the DropZone.
         *
         * @param files - Array of dropped files.
         * @param position - Indicates whether the drop event happened closer
         *     to the top or bottom edges and left or right ones.
         */
        onFilesDrop?(files: File[], position: HoverPosition): void;
        /**
         * The function is called when dropping an HTML file into the DropZone.
         *
         * @param html - The HTML string of the file being dropped.
         * @param position - Indicates whether the drop event happened closer
         *     to the top or bottom edges and left or right ones.
         */
        onHTMLDrop?(html: string, position: HoverPosition): void;
        /**
         * The function is generic drop handler called if the onFilesDrop or
         * onHTMLDrop are not called.
         *
         * @param event - Generic `onDrop` event.
         * @param position - Indicates whether the drop event happened closer
         *     to the top or bottom edges and left or right ones.
         */
        onDrop?(event: DragEvent<HTMLDivElement>, position: HoverPosition): void;
    }
    type HoverPosition = {
        x: 'left' | 'right';
        y: 'top' | 'bottom';
    } | null;
}
declare const DropZone: ComponentType<DropZone.Props>;

export default DropZone;
