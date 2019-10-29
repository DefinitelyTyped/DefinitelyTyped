import * as React from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import { PDFDocumentProxy } from 'pdfjs-dist';

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

interface State {
    numPages: number | null;
    pageNumber: number;
}

export class MyApp extends React.Component<{}, State> {
    constructor(props: {}) {
        super(props);
        this.state = {
            numPages: null,
            pageNumber: 1,
        };
    }

    onDocumentLoadSuccess = ({ numPages }: PDFDocumentProxy) => {
        this.setState({ numPages });
    }

    render() {
        const { pageNumber, numPages } = this.state;

        return (
            <div>
                <Document
                    file="somefile.pdf"
                    onLoadSuccess={this.onDocumentLoadSuccess}
                >
                    <Page pageNumber={pageNumber} />
                </Document>
                <p>Page {pageNumber} of {numPages}</p>
            </div>
        );
    }
}
