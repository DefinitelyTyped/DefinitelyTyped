import * as React from 'react';
import ReactNativePhotoView from 'react-native-photo-view';

const test: React.SFC = () => (
    <ReactNativePhotoView
        source={{uri: 'https://assets-cdn.github.com/images/modules/logos_page/GitHub-Logo.png'}}
        loadingIndicatorSource={{uri: 'https://assets-cdn.github.com/images/modules/logos_page/GitHub-Mark.png'}}
        fadeDuration={100}
        minimumZoomScale={0}
        maximumZoomScale={1}
        showsHorizontalScrollIndicator={true}
        showsVerticalScrollIndicator={true}
        scale={0.5}
        androidZoomTransitionDuration={1000}
        androidScaleType="center"
        onLoadStart={() => {
            console.log('onLoadStart');
        }}
        onLoad={() => {
            console.log('onLoad');
        }}
        onLoadEnd={() => {
            console.log('onLoadEnd');
        }}
        onProgress={(loaded: number, total: number) => {
            console.log(`onProgress ${loaded}/${total}`);
        }}
        onTap={(point: {x: number; y: number}, target?: React.ReactElement) => {
            console.log('onTap');
        }}
        onViewTap={(point: {x: number; y: number}, target?: React.ReactElement) => {
            console.log(`onViewTap ${point.x},${point.y} ${!!target ? 'targetted' : ''}`);
        }}
        onScale={(scale: number, target?: React.ReactElement) => {
            console.log(`onScale ${scale} ${!!target ? 'targetted' : ''}`);
        }}
    />
);
