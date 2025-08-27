import ReactSignatureCanvas from "react-signature-canvas";
import SignaturePad = require("signature_pad");
import * as React from "react";

const ReactSignatureCanvasNoOptions: React.JSX.Element = <ReactSignatureCanvas />;

const ReactSignatureCanvasDotSizeFunctionOptions: React.JSX.Element = <ReactSignatureCanvas dotSize={() => 4} />;

const ReactSignatureCanvasAllOptions: React.JSX.Element = (
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
            title: "canvas",
            width: "50%",
            height: 300,
            className: "canvas",
            style: { border: "2px solid #000" },
        }}
        clearOnResize
    />
);

class Example extends React.Component {
    canvasRef = React.createRef<ReactSignatureCanvas>();

    componentDidMount() {
        if (this.canvasRef.current) {
            /** $ExpectType void */
            this.canvasRef.current.clear();
            /** $ExpectType void */
            this.canvasRef.current.fromData([[new SignaturePad.Point(1, 2, 3)]]);
            /** $ExpectType void */
            this.canvasRef.current.fromDataURL("url");
            /** $ExpectType void */
            this.canvasRef.current.fromDataURL("url", { height: 1, width: 4 });
            /** $ExpectType HTMLCanvasElement */
            this.canvasRef.current.getCanvas();
            /** $ExpectType SignaturePad */
            this.canvasRef.current.getSignaturePad();
            /** $ExpectType HTMLCanvasElement */
            this.canvasRef.current.getTrimmedCanvas();
            /** $ExpectType boolean */
            this.canvasRef.current.isEmpty();
            /** $ExpectType void */
            this.canvasRef.current.off();
            /** $ExpectType void */
            this.canvasRef.current.on();
            /** $ExpectType SignaturePad.Point[][] */
            this.canvasRef.current.toData();
            /** $ExpectType string */
            this.canvasRef.current.toDataURL();
        }
    }

    render() {
        return <ReactSignatureCanvas ref={this.canvasRef} />;
    }
}
