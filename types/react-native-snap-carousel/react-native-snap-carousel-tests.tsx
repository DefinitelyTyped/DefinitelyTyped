import * as React from 'react';
import {
    LayoutChangeEvent,
    NativeSyntheticEvent,
    NativeScrollEvent,
    StyleSheet,
    Text,
    View,
    ViewStyle
} from 'react-native';

import Carousel from 'react-native-snap-carousel';

class SnapCarouselTest extends React.Component {
    render(): React.ReactElement<any> {
        return (
            <View>
                <Carousel
                    itemWidth={75}
                    sliderWidth={300}
                />
                <Carousel
                    itemWidth={75}
                    sliderWidth={300}
                    containerCustomStyle={styles.container}
                    enableMomentum={true}
                    keyboardDismissMode='interactive'
                    onSnapToItem={this.onSnapToItem}
                    onScroll={this.onScroll}
                    onLayout={this.onLayout}
                    vertical={false}
                >
                    <View
                        style={styles.item}
                    >
                        <Text>Item #1</Text>
                    </View>
                </Carousel>
                <Carousel
                    itemHeight={75}
                    sliderHeight={300}
                    vertical={true}
                />
            </View>
        );
    }

    private onSnapToItem = (index: number) => {
        console.log("Snapped to: ", index);
    }

    private onScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
        console.log("Scrolled: ", event);
    }

    private onLayout = (event: LayoutChangeEvent) => {
        console.log("Layout: ", event);
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    item: {
        width: 75
    }
});
