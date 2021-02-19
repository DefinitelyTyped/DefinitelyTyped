// Type definitions for pdf-viewer-reactjs 2.2
// Project: https://github.com/ansu5555/pdf-viewer-reactjs#readme
// Definitions by: Ansuman Ghosh <https://github.com/ansu5555>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

import { Component } from 'react';

interface Document {
    url?: string;
    base64?: string;
}

interface ShowThumbnail {
    scale?: number;
    rotationAngle?: number;
    onTop?: boolean;
    backgroundColor?: string;
    thumbCss?: string;
    selectedThumbCss?: string;
}

interface Watermark {
    text?: string;
    diagonal?: boolean;
    opacity?: string;
    font?: string;
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
type MaxPageCount = (pageCount: number) => void;

interface PDFViewerProps {
    document: Document;
    withCredentials?: boolean;
    password?: string;
    loader?: React.ReactNode;
    externalInput?: boolean;
    page?: number;
    scale?: number;
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
    getMaxPageCount?: MaxPageCount;
    hideNavbar?: boolean;
    navbarOnTop?: boolean;
    hideZoom?: boolean;
    hideRotation?: boolean;
    showThumbnail?: ShowThumbnail;
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
