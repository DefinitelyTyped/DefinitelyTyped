import {
    Artboard, View, Text, StyleSheet, TextStyles, render, renderToJSON, Platform
} from 'react-sketchapp';

// the styles object should be a mapped typed mapping the keys of the object literal to numbers
const styles = StyleSheet.create({
    red: {
        backgroundColor: '#FF00000'
    },
    flexRow: {
        flexDirection: 'row'
    }
});

// style references are numbers
const styleReference = styles.red;

const Document = () => <Artboard name="some artboard name" style={{ backgroundColor: '#FF0000' }} >
    <View name="some view name" style={{ backgroundColor: '#FF0000' }} >
        <Text name="some text name">text must be a string</Text>
    </View>
    <View style={styles.red}>
    </View>
</Artboard>;

render(<Document />);
renderToJSON(<Document />);

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
    }
});

const shouldBeSketch = Platform.OS;
const shouldBe1 = Platform.Version;
