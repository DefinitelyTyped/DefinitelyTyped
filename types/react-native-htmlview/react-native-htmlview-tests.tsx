import * as React from 'react';
import { Text, StyleSheet } from 'react-native';
import HTMLView from 'react-native-htmlview';

const styles = StyleSheet.create({
  strong: {},
  a: {},
  p: {},
  h1: {},
  h2: {},
  h3: {},
  h4: {},
  h5: {},
  h6: {},
});

const defaultTextProps = {
  style: {
    fontSize: 14,
  },
};

class Simple extends React.Component {
    onPressLink = () => {
        // Do someting
    }

    render() {
        return (
            <HTMLView
                TextComponent={Text}
                textComponentProps={defaultTextProps}
                value="<br><b>This is html</b><div><p>Yo P</p></p>"
                addLineBreaks={false}
                stylesheet={styles}
                onLinkPress={this.onPressLink}
            />
        );
    }
}
