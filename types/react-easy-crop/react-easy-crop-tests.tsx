import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Cropper, { Area, Location, CropperProps } from 'react-easy-crop';

// To avoid TS 3.5 dependency
type Omit<T, K extends keyof any> = Pick<T, Exclude<keyof T, K>>;

const App = () => {
    const [state, setState] = React.useState<
      Omit<CropperProps, 'onCropChange'>
    >({
      image:
        'https://img.huffingtonpost.com/asset/5ab4d4ac2000007d06eb2c56.jpeg?cache=sih0jwle4e&ops=1910_1000',
      crop: { x: 0, y: 0 },
      zoom: 1,
      rotation: 0,
      aspect: 4 / 3,
      minZoom: 1,
      maxZoom: 10,
      cropShape: 'rect',
      cropSize: { width: 200, height: 200 },
      showGrid: false,
      zoomSpeed: 1,
      crossOrigin: 'cross-ori',
      style: {
        containerStyle: {},
        imageStyle: {},
        cropAreaStyle: {},
      },
      classes: {
        containerClassName: 'container-simon',
        imageClassName: 'image-simon',
        cropAreaClassName: 'crop-area-simon',
      },
      restrictPosition: true,
      initialCroppedAreaPixels: {
        width: 100,
        height: 100,
        x: 10,
        y: 10,
      },
    });

    const onCropChange = (crop: Location) => {
      console.log(`onCropChange: { x: ${crop.x}, y: ${crop.y} }`);
      setState(s => ({ ...s, crop }));
    };

    const onCropComplete = (croppedArea: Area, croppedAreaPixels: Area) => {
      console.log('onCropComplete:');
      console.log(croppedArea, croppedAreaPixels);
    };

    const onZoomChange = (zoom: number) => {
      console.log(`onZoomChange: ${zoom}`);
      setState(s => ({ ...s, zoom }));
    };

    const onImgError = () => {
      console.log(`onImgError`);
    };

    return (
      <div className="App">
        <div className="crop-container">
          <Cropper
            image={state.image}
            crop={state.crop}
            zoom={state.zoom}
            rotation={state.rotation}
            aspect={state.aspect}
            minZoom={state.minZoom}
            maxZoom={state.maxZoom}
            cropShape={state.cropShape}
            cropSize={state.cropSize}
            showGrid={state.showGrid}
            zoomSpeed={state.zoomSpeed}
            crossOrigin={state.crossOrigin}
            onCropChange={onCropChange}
            onCropComplete={onCropComplete}
            onZoomChange={onZoomChange}
            onImgError={onImgError}
            style={state.style}
            classes={state.classes}
            restrictPosition={state.restrictPosition}
            initialCroppedAreaPixels={state.initialCroppedAreaPixels}
          />
        </div>
      </div>
    );
};

const AppFactory = React.createFactory(App);

ReactDOM.render(AppFactory(), document.getElementById('app'));
