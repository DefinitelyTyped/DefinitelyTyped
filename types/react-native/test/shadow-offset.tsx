import * as React from "react";
import { StyleSheet, View } from "react-native";

// $ExpectError
<View style={{ shadowOffset: '123' }} />;

<View style={{ shadowOffset: { height: 123 } }} />;

StyleSheet.create({
  withShadow: {
    shadowOffset: { width: 3 },
  },
});

// $ExpectError
StyleSheet.create({
  wrongShadow: {
    shadowOffset: { xyz: 5 },
  },
});
