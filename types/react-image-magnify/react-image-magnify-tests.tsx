import * as React from 'react';

import ReactImageMagnify from 'react-image-magnify';

class TestImageMagnify extends React.Component {
    render() {
        return (
            <ReactImageMagnify
                smallImage={{
                    alt: 'Wristwatch by Ted Baker London',
                    isFluidWidth: true,
                    src:
                        'https://ethanselzer.github.io/react-image-magnify/static/media/wristwatch_687.8ea75ffc.jpg',
                }}
                largeImage={{
                    src:
                        'https://ethanselzer.github.io/react-image-magnify/static/media/wristwatch_687.8ea75ffc.jpg',
                    width: 1200,
                    height: 1800,
                }}
            ></ReactImageMagnify>
        );
    }
}

const App: React.FC = () => {
    return (
        <div>
            <ReactImageMagnify
                enlargedImageContainerDimensions={{ width: '100%', height: '100%' }}
                smallImage={{
                    alt: 'Testing',
                    isFluidWidth: false,
                    width: 300,
                    height: 400,
                    src: "https://ethanselzer.github.io/react-image-magnify/static/media/wristwatch_687.8ea75ffc.jpg"
                }}
                largeImage={{
                    width: 1200,
                    height: 1200,
                    src: "https://ethanselzer.github.io/react-image-magnify/static/media/wristwatch_1200.c9182206.jpg"
                }}
            >
            </ReactImageMagnify>
        </div>
    );
};

export default App;
