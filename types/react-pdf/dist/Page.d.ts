import * as React from 'react';
import { PDFPageProxy } from 'pdfjs-dist';

export type RenderFunction = () => JSX.Element;

export interface PDFPageItem {
    _transport: object;
    commonObjs: object;
    getAnnotations: (...args: any[]) => any;
    getTextContent: (...args: any[]) => any;
    getViewport: (...args: any[]) => any;
    render: (...args: any[]) => any;
}

export interface TextLayerItemInternal {
    fontName: string;
    itemIndex: number;
    page: PDFPageItem;
    rotate?: 0 | 90 | 180 | 270;
    scale?: number;
    str: string;
    transform: number[];
    width: number;
}

export interface LoadingProcessData {
    loaded: number;
    total: number;
}

export interface TextItem {
    str: string;
    dir: string;
    transform: number[];
    width: number;
    height:	number;
    fontName: string;
}

export interface Props {
    /**
     * Defines custom class name(s), that will be added to rendered element.
     * @default 'react-pdf__Page'
     */
    className?: string | string[];

    /**
     * A function that customizes how a text layer is rendered.
     * Passes itext item and index for item.
     */
    customTextRenderer?: (layer: TextLayerItemInternal) => JSX.Element;

    /**
     * Defines what the component should display in case of an error.
     * @default 'Failed to load PDF file.'
     */
    error?: string | React.ReactElement | RenderFunction;

    /**
     * Defines the height of the page.
     * If neither `height` nor `width` are defined, page will be rendered at the size defined in PDF.
     * If you define `width` and `height` at the same time, `height` will be ignored.
     * If you define `height` and `scale` at the same time, the height will be multiplied by a given factor.
     */
    height?: number;

    /**
     * A function that behaves like ref,
     * but it's passed to main `<div>` rendered by `<Page>` component.
     */
    inputRef?: React.LegacyRef<HTMLDivElement>;

    /**
     * Defines what the component should display while loading.
     * @default 'Loading page…'
     */
    loading?: string | React.ReactElement | RenderFunction;

    /**
     * Defines what the component should display in case of no data.
     * @default 'No page specified.'
     */
    noData?: string | React.ReactElement | RenderFunction;

    /**
     * Function called in case of an error while loading the page.
     */
    onLoadError?: (error: Error) => void;

    /**
     * Function called, potentially multiple times, as the loading progresses.
     */
    onLoadProgress?: (data: LoadingProcessData) => void;

    /**
     * Function called when the page is successfully loaded.
     */
    onLoadSuccess?: (page: PDFPageProxy) => void;

    /**
     * Function called in case of an error while rendering the page.
     */
    onRenderError?: (error: Error) => void;

    /**
     * Function called when the page is successfully rendered on the screen.
     */
    onRenderSuccess?: () => void;

    /**
     * Function called when annotations are successfully loaded.
     */
    onGetAnnotationsSuccess?: (annotations: any) => void;

    /**
     * Function called in case of an error while loading annotations.
     */
    onGetAnnotationsError?: (error: Error) => void;

    /**
     * Function called when text layer items are successfully loaded.
     */
    onGetTextSuccess?: (items: TextItem[]) => void;

    /**
     * Function called in case of an error while loading text layer items.
     */
    onGetTextError?: (error: Error) => void;

    /**
     * Defines which page from PDF file should be displayed.
     * @default 0
     */
    pageIndex?: number;

    /**
     * Defines which page from PDF file should be displayed.
     * If provided, pageIndex prop will be ignored.
     * @default 1
     */
    pageNumber?: number;

    /**
     * Defines whether annotations (e.g. links) should be rendered.
     * @default true
     */
    renderAnnotationLayer?: boolean;

    /**
     * Defines whether interactive forms should be rendered.
     * `renderAnnotationLayer` prop must be set to true.
     * @default false
     */
    renderInteractiveForms?: boolean;

    /**
     * Defines the rendering mode of the page.
     * @default 'canvas'
     */
    renderMode?: 'canvas' | 'svg' | 'none';

    /**
     * Defines whether a text layer should be rendered.
     * @default true
     */
    renderTextLayer?: boolean;

    /**
     * Defines the rotation of the page in degrees.
     * 90 = rotated to the right, 180 = upside down, 270 = rotated to the left.
     * Defaults to page's default setting, usually 0.
     */
    rotate?: number;

    /**
     * Defines the scale in which PDF file should be rendered.
     * @default 1.0
     */
    scale?: number;

    /**
     * Defines the width of the page.
     * If neither `height` nor `width` are defined, page will be rendered at the size defined in PDF.
     * If you define `width` and `height` at the same time, `height` will be ignored.
     * If you define `width` and `scale` at the same time, the width will be multiplied by a given factor.
     */
    width?: number;
}

export default class Page extends React.Component<Props> { }
