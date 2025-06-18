import { Component } from "react";

interface Document {
    url?: string | undefined;
    base64?: string | undefined;
}

interface ShowThumbnail {
    scale?: number | undefined;
    rotationAngle?: number | undefined;
    onTop?: boolean | undefined;
    backgroundColor?: string | undefined;
    thumbCss?: string | undefined;
    selectedThumbCss?: string | undefined;
}

interface Watermark {
    text?: string | undefined;
    diagonal?: boolean | undefined;
    opacity?: string | undefined;
    font?: string | undefined;
    size?: string | undefined;
    color?: string | undefined;
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
    withCredentials?: boolean | undefined;
    password?: string | undefined;
    loader?: React.ReactNode | undefined;
    externalInput?: boolean | undefined;
    page?: number | undefined;
    scale?: number | undefined;
    scaleStep?: number | undefined;
    maxScale?: number | undefined;
    minScale?: number | undefined;
    css?: string | undefined;
    canvasCss?: string | undefined;
    rotationAngle?: number | undefined;
    onDocumentClick?: DocClickHandler | undefined;
    onPrevBtnClick?: BtnClickHandler | undefined;
    onNextBtnClick?: BtnClickHandler | undefined;
    onZoom?: ZoomClickHandler | undefined;
    onRotation?: RotationClickHandler | undefined;
    getMaxPageCount?: MaxPageCount | undefined;
    hideNavbar?: boolean | undefined;
    navbarOnTop?: boolean | undefined;
    hideZoom?: boolean | undefined;
    hideRotation?: boolean | undefined;
    showThumbnail?: ShowThumbnail | undefined;
    protectContent?: boolean | undefined;
    watermark?: Watermark | undefined;
    alert?: AlertHandler | undefined;
    navigation?: any;
}

declare class PDFViewer extends Component<PDFViewerProps> {
    static defaultProps: Partial<PDFViewerProps>;
    static propTypes: PDFViewerProps;
}

export = PDFViewer;
