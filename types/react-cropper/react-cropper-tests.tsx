import * as React from 'react';
import Cropper from 'react-cropper';
// If you choose not to use import, you need to assign Cropper to default
// var Cropper = require('react-cropper').default

/**
 * initializes cropper with string reference
 */
class Demo extends React.Component {
    crop() {
        // image in dataUrl
        console.log((this.refs['cropper'] as any).getCroppedCanvas().toDataURL());
    }

    render() {
        return (
            <Cropper
                ref="cropper"
                src="https://fengyuanchen.github.io/cropperjs/images/picture.jpg"
                style={{ height: 400, width: '100%' }}
                // Cropper.js options
                aspectRatio={16 / 9}
                guides={false}
                crop={this.crop.bind(this)}
            />
        );
    }
}

/**
 * initializes cropper with ref using useRef hook
 */
const DemoFunctionComponent: React.FunctionComponent<any> = () => {
    const cropper = React.useRef<Cropper>();

    const crop = () => {
        console.log(cropper.current?.getData(true));
    };

    return (
        <Cropper
            ref={cropper}
            src="https://fengyuanchen.github.io/cropperjs/images/picture.jpg"
            style={{ height: 400, width: '100%' }}
            // Cropper.js options
            aspectRatio={16 / 9}
            crop={crop}
        />
    );
};

function testCropperRef() {
    const refIsWorking = (
        <Cropper
            ref={(el: Cropper) => {
                el.getCroppedCanvas();
                if (el !== null) {
                    // el is a cropperjs element
                    el.getCroppedCanvas();
                    // el is also a React.Component instance
                    el.props;
                }
            }}
        />
    );

    const refIsOptional = <Cropper />;
}
