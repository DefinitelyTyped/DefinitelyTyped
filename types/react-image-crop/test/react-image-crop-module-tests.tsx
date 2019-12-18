import * as React from 'react';
import * as ReactCrop from 'react-image-crop';

interface TestState {
    crop?: ReactCrop.Crop;
    percentCrop?: ReactCrop.PercentCrop;
}

const initialState = {
    crop: {
        x: 100,
        y: 200,
    },
    percentCrop: {
        x: 0,
        y: 0,
    },
};

// Basic use case
class SimpleTest extends React.Component<{}, TestState> {
    state = initialState;

    onChange = (crop: ReactCrop.Crop, percentCrop: ReactCrop.PercentCrop) => {
        this.setState({
            crop,
            percentCrop,
        });
    }

    render() {
        return <ReactCrop src="imageSrc" onChange={this.onChange} crop={this.state.crop} />;
    }
}

// Set an aspect ratio to crop
class AspectRatioTest extends React.Component<{}, TestState> {
    state = initialState;

    onChange = (crop: ReactCrop.Crop, percentCrop: ReactCrop.PercentCrop) => {
        this.setState({
            crop,
            percentCrop,
        });
    }

    onImageLoaded = (image: HTMLImageElement) => {
        this.setState({
            crop: ReactCrop.makeAspectCrop(
                {
                    x: 0,
                    y: 0,
                    aspect: 16 / 9,
                    width: 50,
                    unit: 'px',
                },
                image.width,
                image.height
            ),
        });
    }

    render() {
        return (
            <ReactCrop
                src="imageSrc"
                onChange={this.onChange}
                onImageLoaded={this.onImageLoaded}
                crop={this.state.crop}
            />
        );
    }
}

// Testing renderComponent
class RenderComponentTest extends React.Component {
    render() {
        const videoComponent = (
            <video autoPlay loop style={{ display: 'block', maxWidth: '100%' }}>
                <source src="sample.mp4" type="video/mp4" />
            </video>
        );

        return (
            <ReactCrop
                src="imageSrc"
                onChange={(crop, percentCrop) => console.log(crop, percentCrop)}
                renderComponent={videoComponent}
            />
        );
    }
}

// All available props
class CompleteTest extends React.Component<{}, TestState> {
    state = initialState;

    onChange = (crop: ReactCrop.Crop, percentCrop: ReactCrop.PercentCrop) => {
        this.setState({
            crop,
            percentCrop,
        });
    }

    onImageLoaded = (image: HTMLImageElement) => {
        this.setState({
            crop: ReactCrop.makeAspectCrop(
                {
                    x: 0,
                    y: 0,
                    aspect: 16 / 9,
                    width: 20,
                    unit: 'px',
                },
                image.width,
                image.height
            ),
        });
    }

    onImageError = (event: React.SyntheticEvent<HTMLImageElement>) => {
        console.warn('Error loading image');
    }

    render() {
        return (
            <ReactCrop
                src="imageSrc"
                onChange={this.onChange}
                onImageLoaded={this.onImageLoaded}
                crop={this.state.crop}
                minWidth={30}
                minHeight={30}
                maxWidth={90}
                maxHeight={90}
                keepSelection={true}
                disabled={false}
                style={{ border: '1px solid black', position: 'relative' }}
                onComplete={() => console.log('Crop complete')}
                onDragStart={() => console.log('Drag start')}
                onDragEnd={() => console.log('Drag end')}
                crossorigin="anonymous"
                onImageError={this.onImageError}
                className="my-cropper"
                locked={false}
                renderComponent={<div></div>}
                ruleOfThirds={false}
                circularCrop={false}
            />
        );
    }
}
