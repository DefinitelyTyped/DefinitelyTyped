import * as React from 'react';
import {
    StyleSheet,
    Text,
    View,
    ViewStyle
} from 'react-native';
import Video from 'react-native-video';

class VideoTest extends React.Component {
    constructor(props: {}) {
        super(props);
    }

    render(): React.ReactElement<any> {
        return (
            <Video
                source={{ uri: '//:example.com/test.mp4' }}
                onProgress={this.onProgress}
                onError={this.onError}
                onLoad={this.onLoad}
            />
        );
    }

    onError = (error: {
      error: {
        '': string,
        errorString: string
      }
    }): void => {
        console.log(error.error[''], error.error.errorString);
    }

    onLoad = (data: {
      canPlayFastForward: boolean,
      canPlayReverse: boolean,
      canPlaySlowForward: boolean,
      canPlaySlowReverse: boolean,
      canStepBackward: boolean,
      canStepForward: boolean,
      currentTime: number,
      duration: number,
      naturalSize: {
        height: number;
        width: number;
        orientation: 'horizontal' | 'landscape';
      }
    }): void => {
      console.log(data.canPlayFastForward, data.canPlayReverse, data.canPlaySlowForward, data.canPlaySlowReverse,
      data.canStepBackward, data.canStepForward, data.currentTime, data.duration, data.naturalSize.height, data.naturalSize.width, data.naturalSize.orientation);
    }

    onProgress = (data: {
        currentTime: number,
        playableDuration: number,
    }): void => {
        console.log(data.currentTime, data.playableDuration);
    }
}

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
    },
});
