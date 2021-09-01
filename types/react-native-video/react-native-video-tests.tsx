import * as React from 'react';
import Video, { FilterType } from 'react-native-video';

<Video
    source={{ uri: '//:example.com/test.mp4', headers: { accept: "*/*" }, type: 'mp4' }}
    onProgress={data => console.log(data.currentTime, data.playableDuration, data.seekableDuration)}
    onError={error => console.log(error.error[''], error.error.errorString)}
    onLoad={data => {
        console.log(
            data.canPlayFastForward,
            data.canPlayReverse,
            data.canPlaySlowForward,
            data.canPlaySlowReverse,
            data.canStepBackward,
            data.canStepForward,
            data.currentPosition,
            data.currentTime,
            data.duration,
            data.naturalSize.height,
            data.naturalSize.width,
            data.naturalSize.orientation,
            data.audioTracks,
            data.textTracks,
        );
    }}
    onPlaybackRateChange={({playbackRate}) => console.log(playbackRate)}
    posterResizeMode={"cover"}
    onPictureInPictureStatusChanged={data => {
        console.log(data.isActive);
    }}
    filterEnable={true}
    filter={FilterType.MONO}
    selectedAudioTrack={{ type: 'index', value: 6 }}
    selectedVideoTrack={{ type: 'auto' }}
    preventsDisplaySleepDuringVideoPlayback={true}
/>;
