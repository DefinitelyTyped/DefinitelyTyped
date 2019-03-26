import {
    Artboard,
    Document,
    Page,
    View,
    Text,
    StyleSheet,
    TextStyles,
    render,
    renderToJSON,
    Platform,
} from 'react-sketchapp';

// the styles object should be a mapped typed mapping the keys of the object literal to numbers
const styles = StyleSheet.create({
    red: {
        backgroundColor: '#FF00000',
    },
    flexRow: {
        flexDirection: 'row',
    },
});

// style references are numbers
const styleReference = styles.red;

// An Artboard
const SketchArtboard = () => (
    <Artboard name="some artboard name" style={styleReference}>
        <View name="some view name" style={styleReference}>
            <Text name="some text name">text must be a string</Text>
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
