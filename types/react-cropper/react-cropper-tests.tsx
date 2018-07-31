import * as React from 'react';
import Cropper from 'react-cropper';
// If you choose not to use import, you need to assign Cropper to default
// var Cropper = require('react-cropper').default

class Demo extends React.Component {
    crop() {
        // image in dataUrl
        console.log((this.refs['cropper'] as any).getCroppedCanvas().toDataURL());
    }

    render() {
        return (
            <Cropper
                ref='cropper'
                src='http://fengyuanchen.github.io/cropper/img/picture.jpg'
                style={{ height: 400, width: '100%' }}
                // Cropper.js options
                aspectRatio={16 / 9}
                guides={false}
                crop={this.crop.bind(this) } />
        );
    }
}
