import * as React from 'react';

import {
    View,
    StyleSheet,
  } from 'react-native';

import {} from 'react-native/types/experimental';

function TestExperimentalStyleSheetProps() {
  return (
    <>
    <View style={styles.experimental} />
    <View style={{marginInline: 2, marginInlineEnd: 3, marginBlock: 3}} />
    </>
  );
}

const styles = StyleSheet.create({
    experimental: {
        paddingBlock: 3,
        paddingInline: 2,
    }
})
