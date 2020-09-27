import * as React from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import { PDFPageProxy } from 'react-pdf/dist/Page';
import { PDFDocumentProxy } from 'pdfjs-dist';

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

interface State {
    numPages: number | null;
    pageNumber: number;
    originalHeight: number | null;
    originalWidth: number | null;
}

export class MyApp extends React.Component<{}, State> {
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
                <Document file="somefile.pdf" onLoadSuccess={this.onDocumentLoadSuccess}>
                    <Page pageNumber={pageNumber} onLoadSuccess={this.onPageLoadSuccess} />
                </Document>
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
