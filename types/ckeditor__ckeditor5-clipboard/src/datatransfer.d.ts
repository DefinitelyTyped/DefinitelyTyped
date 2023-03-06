/**
 * A facade over the native [`DataTransfer`](https://developer.mozilla.org/en-US/docs/Web/API/DataTransfer) object.
 */
export default class CKDataTransfer {
    constructor(nativeDataTransfer: DataTransfer);

    /**
     * The array of files created from the native `DataTransfer#files` or `DataTransfer#items`.
     */
    readonly files: Array<File | null>;

    /**
     * Returns an array of available native content types.
     */
    readonly types: readonly string[];

    /**
     * Gets the data from the data transfer by its MIME type.
     *
     *    dataTransfer.getData( 'text/plain' );
     */
    getData(type: string): string;

    /**
     * Sets the data in the data transfer.
     */
    setData(type: string, data: string): void;

    /**
     * The effect that is allowed for a drag operation.
     */
    effectAllowed: DataTransfer['effectAllowed'];

    /**
     * The actual drop effect.
     */
    dropEffect: DataTransfer['dropEffect'];

    /**
     * Whether the dragging operation was canceled.
     */
    readonly isCanceled: boolean;
}
