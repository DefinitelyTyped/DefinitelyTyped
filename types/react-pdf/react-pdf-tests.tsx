import * as React from 'react';
import { Document, Page, pdfjs, PDFPageProxy } from 'react-pdf';
import { PDFDocumentProxy } from 'pdfjs-dist/types/src/display/api';

// Test special entry points
import { Document as DocumentEsmWebpack, Page as PageEsmWebpack } from 'react-pdf/dist/esm/entry.webpack';
import { Document as DocumentUmdWebpack, Page as PageUmdWebpack } from 'react-pdf/dist/umd/entry.webpack';
import { Document as DocumentEsmWebpack5, Page as PageEsmWebpack5 } from 'react-pdf/dist/esm/entry.webpack5';
import { Document as DocumentUmdWebpack5, Page as PageUmdWebpack5 } from 'react-pdf/dist/umd/entry.webpack5';
import { Document as DocumentEsmParcel, Page as PageEsmParcel } from 'react-pdf/dist/esm/entry.parcel';
import { Document as DocumentUmdParcel, Page as PageUmdParcel } from 'react-pdf/dist/umd/entry.parcel';
import { Document as DocumentEsmParcel2, Page as PageEsmParcel2 } from 'react-pdf/dist/esm/entry.parcel2';
import { Document as DocumentUmdParcel2, Page as PageUmdParcel2 } from 'react-pdf/dist/umd/entry.parcel2';

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

interface State {
    numPages: number | null;
    pageNumber: number;
    originalHeight: number | null;
    originalWidth: number | null;
}

export class MyApp extends React.Component<{}, State> {
    canvas: HTMLCanvasElement | null = null;

    constructor(props: {}) {
        super(props);
        this.state = {
            numPages: null,
            pageNumber: 1,
            originalHeight: null,
            originalWidth: null,
        };
    }

    onDocumentLoadSuccess = ({ numPages }: PDFDocumentProxy) => {
        this.setState({ numPages });
    }

    onPageLoadSuccess = ({ originalHeight, originalWidth }: PDFPageProxy) => {
        this.setState({
            originalHeight,
            originalWidth,
        });
    }

    render() {
        const { pageNumber, numPages, originalHeight, originalWidth } = this.state;

        return (
            <div>
                <Document
                    file="somefile.pdf"
                    onLoadSuccess={this.onDocumentLoadSuccess}
                    imageResourcesPath="/public"
                >
                    <Page
                        pageNumber={pageNumber}
                        onLoadSuccess={this.onPageLoadSuccess}
                        canvasRef={c => { this.canvas = c; }}
                     />
                </Document>

                <DocumentEsmWebpack file="somefile.pdf" onLoadSuccess={this.onDocumentLoadSuccess}>
                    <PageEsmWebpack pageNumber={pageNumber} onLoadSuccess={this.onPageLoadSuccess} />
                </DocumentEsmWebpack>

                <DocumentUmdWebpack file="somefile.pdf" onLoadSuccess={this.onDocumentLoadSuccess}>
                    <PageUmdWebpack pageNumber={pageNumber} onLoadSuccess={this.onPageLoadSuccess} />
                </DocumentUmdWebpack>

                <DocumentEsmWebpack5 file="somefile.pdf" onLoadSuccess={this.onDocumentLoadSuccess}>
                    <PageEsmWebpack5 pageNumber={pageNumber} onLoadSuccess={this.onPageLoadSuccess} />
                </DocumentEsmWebpack5>

                <DocumentUmdWebpack5 file="somefile.pdf" onLoadSuccess={this.onDocumentLoadSuccess}>
                    <PageUmdWebpack5 pageNumber={pageNumber} onLoadSuccess={this.onPageLoadSuccess} />
                </DocumentUmdWebpack5>

                <DocumentEsmParcel file="somefile.pdf" onLoadSuccess={this.onDocumentLoadSuccess}>
                    <PageEsmParcel pageNumber={pageNumber} onLoadSuccess={this.onPageLoadSuccess} />
                </DocumentEsmParcel>

                <DocumentUmdParcel file="somefile.pdf" onLoadSuccess={this.onDocumentLoadSuccess}>
                    <PageUmdParcel pageNumber={pageNumber} onLoadSuccess={this.onPageLoadSuccess} />
                </DocumentUmdParcel>

                <DocumentEsmParcel2 file="somefile.pdf" onLoadSuccess={this.onDocumentLoadSuccess}>
                    <PageEsmParcel2 pageNumber={pageNumber} onLoadSuccess={this.onPageLoadSuccess} />
                </DocumentEsmParcel2>

                <DocumentUmdParcel2 file="somefile.pdf" onLoadSuccess={this.onDocumentLoadSuccess}>
                    <PageUmdParcel2 pageNumber={pageNumber} onLoadSuccess={this.onPageLoadSuccess} />
                </DocumentUmdParcel2>

                <p>
                    Page {pageNumber} of {numPages}
                </p>
                <p>
                    PDF height: {originalHeight}
                    PDF width: {originalWidth}
                </p>
            </div>
        );
    }
}
