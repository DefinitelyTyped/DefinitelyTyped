import * as React from "react";
import * as QrReader from "react-qr-reader";

export class Test extends React.Component {
    render() {
        return (
            <QrReader
                onError={(err) => { console.log(err); }}
                onScan={(data) => { console.log(data); }}
                facingMode={'user'}
            />
        );
    }
}

const test: React.FC = () => {
    const qrRef = React.useRef<QrReader>(null);

    const handleScan = (data: string | null) => {
    };

    const handleError = (err: any) => {
    };

    qrRef.current!.openImageDialog();

    return <>
        <div>
            <QrReader
                ref={qrRef}
                delay={300}
                facingMode={"environment"}
                showViewFinder={false}
                onError={handleError}
                onScan={handleScan}
                style={{ width: '90%', height: '90%' }}
            />
        </div>
    </>;
};
