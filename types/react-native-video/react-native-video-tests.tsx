import * as React from 'react';
import {
    StyleSheet,
    Text,
    View,
    ViewStyle
} from 'react-native';
import Video from 'react-native-video';

class SwiperTest extends React.Component {
    constructor(props: {}) {
        super(props);
    }

    render(): React.ReactElement<any> {
        return (
            <Video source={{uri: '//:example.com/test.mp4'}}/>
        );
    }
}

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
    },
});
