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
            />
        );
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
