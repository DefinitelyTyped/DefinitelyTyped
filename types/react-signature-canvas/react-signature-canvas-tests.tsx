import ReactSignatureCanvas from 'react-signature-canvas';
import SignaturePad = require('signature_pad');
import * as React from 'react';

const ReactSignatureCanvasNoOptions: JSX.Element = <ReactSignatureCanvas />;

const ReactSignatureCanvasDotSizeFunctionOptions: JSX.Element = <ReactSignatureCanvas dotSize={() => 4} />;

const ReactSignatureCanvasAllOptions: JSX.Element = (
    <ReactSignatureCanvas
        dotSize={2}
        minWidth={2}
        maxWidth={2}
        throttle={2}
        minDistance={2}
        backgroundColor="blue"
        penColor="red"
        velocityFilterWeight={2}
        onBegin={(event: MouseEvent) => {}}
        onEnd={(event: MouseEvent) => {}}
        canvasProps={{
            title: 'canvas',
            width: '50%',
            height: 300,
            className: 'canvas',
            style: { border: '2px solid #000' },
        }}
        clearOnResize
    />
);

class Example extends React.Component {
    canvasRef = React.createRef<ReactSignatureCanvas>();

    componentDidMount() {
        if (this.canvasRef.current) {
            this.canvasRef.current.clear();
            this.canvasRef.current.fromData([[new SignaturePad.Point(1, 2, 3)]]);
            this.canvasRef.current.fromDataURL('url');
            this.canvasRef.current.fromDataURL('url', { height: 1, width: 4 });
            const isEmptyResult: boolean = this.canvasRef.current.isEmpty();
            this.canvasRef.current.off();
            this.canvasRef.current.on();
            const toDataResult: SignaturePad.Point[][] = this.canvasRef.current.toData();
            const toDataURLResult: string = this.canvasRef.current.toDataURL();
        }
    }

    render() {
        return <ReactSignatureCanvas ref={this.canvasRef} />;
    }
}
