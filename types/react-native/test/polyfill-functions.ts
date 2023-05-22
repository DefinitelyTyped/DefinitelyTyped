import { polyfillGlobal, polyfillObjectProperty } from 'react-native/Libraries/Utilities/PolyfillFunctions';

polyfillGlobal('TextDecoder', () => new TextDecoder());

const myGlobal = {};
polyfillObjectProperty(myGlobal, 'ConstantOfOne', () => 1);
