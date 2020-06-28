// Type definitions for pdf-viewer-reactjs 2.0
// Project: https://github.com/ansu5555/pdf-viewer-reactjs#readme
// Definitions by: Ansuman Ghosh <https://github.com/ansu5555>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

import { Component, Props } from 'react';

interface Document {
    url?: string;
    base64?: string;
}

interface Watermark {
    text?: string;
    diagonal?: boolean;
    opacity?: string;
    size?: string;
    color?: string;
}

interface Err {
    message: string;
}

type DocClickHandler = () => void;
type BtnClickHandler = (page: number) => void;
type ZoomClickHandler = (scale: number) => void;
type RotationClickHandler = (angle: number) => void;
type AlertHandler = (err: Err) => React.ReactNode;

interface PDFViewerProps extends Props<PDFViewer> {
    document: Document;
    loader?: React.ReactNode;
    page?: number;
    scale?: number;
    defaultScale?: number;
    scaleStep?: number;
    maxScale?: number;
    minScale?: number;
    css?: string;
    canvasCss?: string;
    rotationAngle?: number;
    onDocumentClick?: DocClickHandler;
    onPrevBtnClick?: BtnClickHandler;
    onNextBtnClick?: BtnClickHandler;
    onZoom?: ZoomClickHandler;
    onRotation?: RotationClickHandler;
    hideNavbar?: boolean;
    navbarOnTop?: boolean;
    hideZoom?: boolean;
    hideRotation?: boolean;
    protectContent?: boolean;
    watermark?: Watermark;
    alert?: AlertHandler;
    navigation?: any;
}

declare class PDFViewer extends Component<PDFViewerProps> {
    static defaultProps: Partial<PDFViewerProps>;
    static propTypes: PDFViewerProps;
}

export = PDFViewer;
