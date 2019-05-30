import * as React from 'react';
import { Document, Page } from 'react-pdf';

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

    onDocumentLoadSuccess = ({ numPages }: { numPages: number }) => {
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
