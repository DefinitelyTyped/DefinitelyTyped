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
