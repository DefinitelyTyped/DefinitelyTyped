import * as React from 'react';
import {
    LayoutChangeEvent,
    NativeSyntheticEvent,
    NativeScrollEvent,
    StyleSheet,
    Text,
    View,
    ViewStyle,
} from 'react-native';
import Carousel, { Pagination, ParallaxImage, AdditionalParallaxProps, } from 'react-native-snap-carousel';

class StringCarousel extends Carousel<string> {}

class SnapCarouselTest extends React.Component {
    data = ['Item #1', 'Item #2', 'Item #3'];

    renderItem({ item }: { item: string }): React.ReactNode {
        return (
            <View style={styles.item}>
                <Text>{item}</Text>
            </View>
        );
    }

    renderParallaxItem({ item }: { item: string }, parallaxProps?: AdditionalParallaxProps): React.ReactNode {
        return (
            <ParallaxImage
                source={{ uri: 'http://via.placeholder.com/350x150' }}
                containerStyle={{ height: 350, width: 350 }}
                parallaxFactor={0.5}
                showSpinner={true}
                {...parallaxProps}
            />
        );
    }

    render(): React.ReactElement<any> {
        return (
            <View>
                <StringCarousel
                    data={this.data}
                    renderItem={item => this.renderItem(item)}
                    itemWidth={75}
                    sliderWidth={300}
                    containerCustomStyle={styles.container}
                    enableMomentum={true}
                    keyboardDismissMode='interactive'
                    onSnapToItem={this.onSnapToItem}
                    onScroll={this.onScroll}
                    onLayout={this.onLayout}
                    scrollEndDragDebounceValue={100}
                    vertical={false}
                />
                <StringCarousel
                    data={this.data}
                    renderItem={item => this.renderParallaxItem(item)}
                    itemHeight={75}
                    sliderHeight={300}
                    vertical={true}
                    hasParallaxImages={true}
                />
            </View>
        );
    }

    private readonly onSnapToItem = (index: number) => {
        console.log("Snapped to: ", index);
    }

    private readonly onScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
        console.log("Scrolled: ", event);
    }

    private readonly onLayout = (event: LayoutChangeEvent) => {
        console.log("Layout: ", event);
    }
}

class SnapCarouselWithPaginationTest extends React.Component<{}, {activeSlide: number}> {
    constructor(props: {}) {
        super(props);
        this.state = { activeSlide: 0 };
    }

    renderItem({ item }: { item: string }): React.ReactNode {
        return (
            <View style={styles.item}>
                <Text>{item}</Text>
            </View>
        );
    }

    render(): React.ReactElement<any> {
        return (
            <View>
                <StringCarousel
                    data={['Item #1', 'Item #2']}
                    renderItem={item => this.renderItem(item)}
                    itemWidth={75}
                    sliderWidth={300}
                    keyboardDismissMode='interactive'
                    onSnapToItem={(index) => this.setState({ activeSlide: index })}
                />
                <Pagination
                        dotsLength={2}
                        activeDotIndex={this.state.activeSlide}
                        containerStyle={{ backgroundColor: 'rgba(0, 0, 0, 0.75)' }}
                        dotStyle={{
                            width: 10,
                            height: 10,
                            borderRadius: 5,
                            marginHorizontal: 8,
                            backgroundColor: 'rgba(255, 255, 255, 0.92)'
                        }}
                        inactiveDotOpacity={0.4}
                        inactiveDotScale={0.6}
                        />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    } as ViewStyle,
    item: {
        width: 75
    } as ViewStyle,
});
