import * as handtrackjs from 'handtrackjs';

const defaultParams = {
    flipHorizontal: true,
    outputStride: 16,
    imageScaleFactor: 0.7,
    maxNumBoxes: 20,
    iouThreshold: 0.5,
    scoreThreshold: 0.99,
    modelType: 'ssdlitemobilenetv2',
};

handtrackjs.load(defaultParams); // $ExpectType Promise<ObjectDetection>

const videoElement = document.createElement('video');

handtrackjs.startVideo(videoElement); // $ExpectType Promise<boolean>
handtrackjs.stopVideo(videoElement); // $ExpectType Promise<boolean>

new handtrackjs.ObjectDetection(defaultParams); // $ExpectType ObjectDetection
