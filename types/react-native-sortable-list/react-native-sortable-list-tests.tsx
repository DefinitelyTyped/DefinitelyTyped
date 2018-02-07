import * as React from 'react';
import {
    Animated,
    Easing,
    AppRegistry,
    StyleSheet,
    Text,
    Image,
    View,
    Dimensions,
    ViewStyle,
    TextStyle,
    ImageStyle,
} from 'react-native';
import SortableList, {RowProps } from 'react-native-sortable-list';

const window = Dimensions.get('window');

const data = {
    0: {
        image: 'https://placekitten.com/200/200',
        text: 'Chloe',
    },
    1: {
        image: 'https://placekitten.com/200/201',
        text: 'Jasper',
    },
    2: {
        image: 'https://placekitten.com/200/202',
        text: 'Pepper',
    },
    3: {
        image: 'https://placekitten.com/200/203',
        text: 'Oscar',
    },
    4: {
        image: 'https://placekitten.com/200/204',
        text: 'Dusty',
    },
    5: {
        image: 'https://placekitten.com/200/205',
        text: 'Spooky',
    },
    6: {
        image: 'https://placekitten.com/200/210',
        text: 'Kiki',
    },
    7: {
        image: 'https://placekitten.com/200/215',
        text: 'Smokey',
    },
    8: {
        image: 'https://placekitten.com/200/220',
        text: 'Gizmo',
    },
    9: {
        image: 'https://placekitten.com/220/239',
        text: 'Kitty',
    },
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#eee',
        paddingTop: 60,
    } as ViewStyle,

    list: {
        flex: 1,
    } as ViewStyle,

    contentContainer: {
        width: window.width,
        paddingHorizontal: 30,
    } as ViewStyle,

    row: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'white',
        padding: 16,
        marginVertical: 5,
        height: 90,
        width: window.width - 30 * 2,
        borderRadius: 4,
        shadowColor: 'rgba(0,0,0,0.2)',
        shadowOpacity: 1,
        shadowOffset: {height: 2, width: 2},
        shadowRadius: 2,
    } as ViewStyle,

    image: {
        width: 60,
        height: 60,
        marginRight: 30,
        borderRadius: 30,
    } as ImageStyle,

    text: {
        fontSize: 24,
    } as TextStyle,

});

class Basic extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <SortableList
                    style={styles.list}
                    contentContainerStyle={styles.contentContainer}
                    data={data}
                    renderRow={this._renderRow}/>
            </View>
        );
    }

    _renderRow = ({data, active}: RowProps) => {
        return <Row data={data} active={active}/>
    }
}

interface RowState {
    style: {
        shadowRadius: Animated.Value
        transform: {scale: Animated.Value}[]
    }
}

class Row extends React.Component<RowProps, RowState> {

    state = {
        style: {
            shadowRadius: new Animated.Value(2),
            transform: [{scale: new Animated.Value(1)}],
        }
    };

    componentWillReceiveProps(nextProps: RowProps) {
        if (this.props.active !== nextProps.active) {
            if (this.props.active !== nextProps.active) {
                if (nextProps.active) {
                    this.startActivationAnimation();
                } else {
                    this.startDeactivationAnimation();
                }
            }
        }
    }

    startActivationAnimation = () => {
        const {style} = this.state;

        Animated.parallel([
            Animated.timing(style.transform[0].scale, {
                duration: 100,
                easing: Easing.out(Easing.quad),
                toValue: 1.1
            }),
            Animated.timing(style.shadowRadius, {
                duration: 100,
                easing: Easing.out(Easing.quad),
                toValue: 10
            }),
        ]).start();
    };

    startDeactivationAnimation = () => {
        const {style} = this.state;

        Animated.parallel([
            Animated.timing(style.transform[0].scale, {
                duration: 100,
                easing: Easing.out(Easing.quad),
                toValue: 1
            }),
            Animated.timing(style.shadowRadius, {
                duration: 100,
                easing: Easing.out(Easing.quad),
                toValue: 2
            }),
        ]).start();
    };

    render() {
        const {data} = this.props;

        return (
            <Animated.View style={[
                styles.row,
                this.state.style,
    ]}>
                <Image source={{uri: data.image}} style={styles.image}/>
                <Text style={styles.text}>{data.text}</Text>
            </Animated.View>
        );
    }
}


AppRegistry.registerComponent('Basic', () => Basic);
