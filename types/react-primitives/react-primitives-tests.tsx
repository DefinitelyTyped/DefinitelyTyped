import * as React from 'react';
import {
    Animated,
    Dimensions,
    Easing,
    Image,
    PixelRatio,
    Platform,
    Text,
    Touchable,
    View,
    StyleSheet
} from 'react-primitives';

const { Image: AnimatedImage } = Animated;

const { width, height } = Dimensions.get('window');
const { width: screenWidth, height: screenHeight } = Dimensions.get('screen');

const styles = StyleSheet.create({
    container: {
        height: screenHeight
    },
    nav: {
        width: screenWidth,
        height: 20
    },
    image: {
        width,
        height: 100
    },
    text: {
        fontSize: 14 * PixelRatio.get()
    }
});

interface State {
    opacity: Animated.Value;
}

export default class Component extends React.Component<{}, State> {
    state: State = {
        opacity: new Animated.Value(0)
    };

    componentDidMount() {
        Animated.timing(this.state.opacity, {
            toValue: 1,
            duration: 10000,
            easing: Easing.cubic,
            useNativeDriver: false,
        }).start();
        if (Platform.OS === 'sketch') {
            console.log('The Platform is sketch');
        }
    }

    render() {
        const {
            state: { opacity }
        } = this;

        return (
            <View style={styles.container}>
                <View style={styles.nav}>
                    <Text>My Awesome App!</Text>
                </View>
                <AnimatedImage
                    style={[styles.image, { opacity }]}
                    source={{ uri: 'source' }}
                />
                <Image style={styles.image} source={{ uri: 'source' }} />
                <Text style={styles.text}>Hii</Text>
                {Platform.OS === 'ios' && (
                    <View>
                        <Text>IOS Specific Text!</Text>
                    </View>
                )}
                <Touchable onPress={() => undefined}>
                    <Text>Touch me!</Text>
                </Touchable>
                <View>
                    <Text>Helloooooo</Text>
                    <Touchable>
                        <Text>Touch me too!</Text>
                    </Touchable>
                </View>
            </View>
        );
    }
}
