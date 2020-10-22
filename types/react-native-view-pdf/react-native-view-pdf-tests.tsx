import * as React from 'react';
import PDFView from 'react-native-view-pdf';

export default class extends React.Component {
    render(): JSX.Element {
        return (
            <PDFView
                resource="https://www.ets.org/Media/Tests/TOEFL/pdf/SampleQuestions.pdf"
                style={{ flex: 1 }} // custom props are allowed and passed to the underlying element
            />
        );
    }
}
