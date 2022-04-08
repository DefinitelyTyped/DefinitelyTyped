import {
    Artboard,
    Document,
    Page,
    View,
    ViewProps,
    Text,
    StyleSheet,
    TextStyles,
    Svg,
    render,
    renderToJSON,
    Platform,
} from 'react-sketchapp';

import Circle from 'react-sketchapp/lib/components/Svg/Circle';
import Path from 'react-sketchapp/lib/components/Svg/Path';
import Rect from 'react-sketchapp/lib/components/Svg/Rect';

// the styles object should be a mapped typed mapping the keys of the object literal to numbers
const styles = StyleSheet.create({
    red: {
        backgroundColor: '#FF0000',
    },
    flexRow: {
        flexDirection: 'row',
    },
});

// style references are numbers
const styleReference = styles.red;

// Create a blue block
const BlueBlock = (props: ViewProps) => {
    const { name = "some blue block", style, ...otherProps } = props;

    return (
        <View
            name={name}
            style={{
                alignItems: 'center',
                backgroundColor: '#0000ff',
                height: 128,
                justifyContent: 'center',
                width: 64,
            }}
            {...otherProps}
        >
            <Text
            style={{
                color: '#fff',
            }}
            >
                Blue
            </Text>
        </View>
    );
};

// An Artboard
const SketchArtboard = () => (
    <Artboard name="some artboard name" style={styleReference}>
        <View name="some view name" style={styleReference}>
            <Text name="some text name">text must be a string</Text>
            <BlueBlock name="some fancy name" />
        </View>
        <View style={styles.red} />
    </Artboard>
);

// A Page containing multiple Artboards
const SketchPage = () => (
    <Page name="some page name">
        <SketchArtboard />
        <SketchArtboard />
    </Page>
);

// The Document containing a page
const SketchDocument = () => (
    <Document>
        <SketchPage />
    </Document>
);

render(<SketchDocument />);
renderToJSON(<SketchDocument />);

// Artboard is typed with a class so the prototype should be typed too (not very useful though)
Artboard.prototype.componentDidMount;

// TODO: currently this interface returns any but it looks like this method produces a side-effect
// and the return type isn't used anyway
TextStyles.create(context as any, {
    normal: {
        fontSize: 16,
    },
    heading: {
        fontSize: 16 * 1.618,
        fontWeight: 'bold',
    },
});

const shouldBeSketch = Platform.OS;
const shouldBe1 = Platform.Version;

const svg = () => (
    <Svg viewBox="0 0 24 24">
        <Rect x="0" y="0" width="24" height="24" fill="black" />
        <Circle cx="12" cy="12" r="6" fill="#ff0000" />
        <Path d="M10 10 H 14 L 12 14 L 10 10" />
    </Svg>
);

const secondSvg = () => (
    <Svg viewBox="0 0 24 24">
        <Svg.Rect x="0" y="0" width="24" height="24" fill="black" />
        <Svg.Circle cx="12" cy="12" r="6" fill="#ff0000" />
        <Svg.Path d="M10 10 H 14 L 12 14 L 10 10" />
    </Svg>
);
