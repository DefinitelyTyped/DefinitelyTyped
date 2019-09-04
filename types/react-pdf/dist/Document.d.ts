import * as React from 'react';
import { PDFDocumentProxy } from 'pdfjs-dist';

export type RenderFunction = () => JSX.Element;

export interface Props {
    /**
     * Defines custom class name(s), that will be added to rendered element.
     * @default 'react-pdf__Document'
     */
    className?: string | string[];

    /**
     * Defines what the component should display in case of an error.
     * @default 'Failed to load PDF file.'
     */
    error?: string | React.ReactElement | RenderFunction;

    /**
     * Defines link target for external links rendered in annotations.
     * Defaults to unset, which means that default behavior will be used.
     */
    externalLinkTarget?: '_self' | '_blank' | '_parent' | '_top';

    /**
     * Defines what PDF should be displayed.
     * Its value can be an URL,
     * a file (imported using import ... from ... or from file input form element),
     * or an object with parameters
     *  (
     *   url - URL;
     *   data - data, preferably Uint8Array;
     *   range - PDFDataRangeTransport;
     *   httpHeaders - custom request headers, e.g. for authorization
     *   withCredentials - a boolean to indicate whether or not to include cookies in the request (defaults to false)
     *  )
     */
    file: any;

    /**
     * A function that behaves like ref,
     * but it's passed to main `<div>` rendered by `<Document>` component.
     */
    inputRef?: React.LegacyRef<HTMLDivElement>;

    /**
     * Defines what the component should display while loading.
     * @default 'Loading PDF…'
     */
    loading?: string | React.ReactElement | RenderFunction;

    /**
     * Defines what the component should display in case of no data.
     * @default 'No PDF file specified.'
     */
    noData?: string | React.ReactElement | RenderFunction;

    /**
     * Function called when an outline item has been clicked.
     * Usually, you would like to use this callback to move the user wherever they requested to.
     */
    onItemClick?: ({ pageNumber }: { pageNumber: string }) => void;

    /**
     * Function called in case of an error while loading a document.
     */
    onLoadError?: (error: Error) => void;

    /**
     * Function called when the document is successfully loaded.
     */
    onLoadSuccess?: (pdf: PDFDocumentProxy) => void;

    /**
     * Function called when a password-protected PDF is loaded.
     * Defaults to a function that prompts the user for password.
     */
    onPassword?: (callback: (...args: any[]) => any) => void;

    /**
     * Function called in case of an error while retrieving document source from `file` prop.
     */
    onSourceError?: (error: Error) => void;

    /**
     * Function called when document source is successfully retrieved from `file` prop.
     */
    onSourceSuccess?: () => void;

    /**
     * An object in which additional parameters to be passed to PDF.js can be defined.
     * For a full list of possible parameters, check PDF.js documentation on DocumentInitParameters.
     */
    options?: any;

    /**
     * Defines the rendering mode of the document.
     * @default 'canvas'
     */
    renderMode?: 'canvas' | 'svg' | 'none';

    /**
     * Defines the rotation of the document in degrees.
     * If provided, will change rotation globally,
     * even for the pages which were given rotate prop of their own.
     * 90 = rotated to the right, 180 = upside down, 270 = rotated to the left.
     */
    rotate?: number;

    children?: React.ReactNode;
}

export default class Document extends React.Component<Props> { }
