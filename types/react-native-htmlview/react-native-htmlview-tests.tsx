import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';
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
  allowFontScaling: false,
};

const defaultNodeProps = {
  style: {
    fontFamily: 'Arial',
  },
};

const defaultRootProps = {
  style: {
    padding: 10,
  },
};

class Simple extends React.Component {
  onPressLink = () => {
    // Do someting
  }

  render() {
    return (
      <HTMLView
        value="<br><b>This is html</b><div><p>Yo P</p></p>"
        addLineBreaks={false}
        stylesheet={styles}
        onLinkPress={this.onPressLink}
        NodeComponent={Text}
        nodeComponentProps={defaultNodeProps}
        RootComponent={View}
        rootComponentProps={defaultRootProps}
        TextComponent={Text}
        textComponentProps={defaultTextProps}
      />
    );
  }
}
