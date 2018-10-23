import * as React from 'react';
import Video from 'react-native-video';

<Video
    source={{ uri: '//:example.com/test.mp4' }}
    onProgress={data => console.log(data.currentTime, data.playableDuration, data.seekableDuration)}
    onError={error => console.log(error.error[''], error.error.errorString)}
    onLoad={data => {
        console.log(data.canPlayFastForward, data.canPlayReverse, data.canPlaySlowForward, data.canPlaySlowReverse,
        data.canStepBackward, data.canStepForward, data.currentTime, data.duration, data.naturalSize.height, data.naturalSize.width, data.naturalSize.orientation);
    }}
/>;
