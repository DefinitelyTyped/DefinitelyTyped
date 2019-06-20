import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Cropper, { Area, Location, Size } from 'react-easy-crop';

interface State {
  imageSrc: string;
  crop: Location;
  zoom: number;
  aspect: number;
  minZoom?: number;
  maxZoom?: number;
  cropShape?: 'rect' | 'round';
  cropSize?: Size;
  showGrid?: boolean;
  zoomSpeed?: number;
  crossOrigin?: string;
  style?: {
    containerStyle: React.CSSProperties,
    imageStyle: React.CSSProperties,
    cropAreaStyle: React.CSSProperties
  };
  classes?: {
    containerClassName: string,
    imageClassName: string,
    cropAreaClassName: string
  };
  restrictPosition?: boolean;
  initialCroppedAreaPixels?: Area;
}

class App extends React.Component<{}, State> {
  constructor(props: any) {
    super(props);
    this.state = {
      imageSrc:
        'https://img.huffingtonpost.com/asset/5ab4d4ac2000007d06eb2c56.jpeg?cache=sih0jwle4e&ops=1910_1000',
      crop: { x: 0, y: 0 },
      zoom: 1,
      aspect: 4 / 3,
      minZoom: 1,
      maxZoom: 10,
      cropShape: 'rect',
      cropSize: { width: 200, height: 200 },
      showGrid: false,
      zoomSpeed: 1,
      crossOrigin: 'cross-ori',
      style: {
        containerStyle:  {  },
        imageStyle: {  },
        cropAreaStyle: {  }
      },
      classes: {
        containerClassName: 'container-simon',
        imageClassName: 'image-simon',
        cropAreaClassName: 'crop-area-simon'
      },
      restrictPosition: true,
      initialCroppedAreaPixels: {
          width: 100,
          height: 100,
          x: 10,
          y: 10
      }
    };
  }

  onCropChange = (crop: Location) => {
    console.log(`onCropChange: { x: ${crop.x}, y: ${crop.y} }`);
    this.setState({ crop });
  }

  onCropComplete = (croppedArea: Area, croppedAreaPixels: Area) => {
    console.log('onCropComplete:');
    console.log(croppedArea, croppedAreaPixels);
  }

  onZoomChange = (zoom: number) => {
    console.log(`onZoomChange: ${zoom}`);
    this.setState({ zoom });
  }

  onImgError = () => {
    console.log(`onImgError`);
  }

  render() {
    return (
      <div className="App">
        <div className="crop-container">
          <Cropper
            image={this.state.imageSrc}
            crop={this.state.crop}
            zoom={this.state.zoom}
            aspect={this.state.aspect}
            minZoom={this.state.minZoom}
            maxZoom={this.state.maxZoom}
            cropShape={this.state.cropShape}
            cropSize={this.state.cropSize}
            showGrid={this.state.showGrid}
            zoomSpeed={this.state.zoomSpeed}
            crossOrigin={this.state.crossOrigin}
            onCropChange={this.onCropChange}
            onCropComplete={this.onCropComplete}
            onZoomChange={this.onZoomChange}
            onImgError={this.onImgError}
            style={this.state.style}
            classes={this.state.classes}
            restrictPosition={this.state.restrictPosition}
            initialCroppedAreaPixels={this.state.initialCroppedAreaPixels}
          />
        </div>
      </div>
    );
  }
}

const AppFactory = React.createFactory(App);

ReactDOM.render(
    AppFactory(),
    document.getElementById('app')
);
