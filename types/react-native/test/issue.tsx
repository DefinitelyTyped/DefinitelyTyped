// https://github.com/DefinitelyTyped/DefinitelyTyped/pull/18278
import { StyleSheet, ViewStyle } from 'react-native';

export interface IAccordionStyle {
  container: ViewStyle;
}

export default StyleSheet.create<IAccordionStyle>({
  container: {
    borderTopWidth: StyleSheet.hairlineWidth,
  },
});
