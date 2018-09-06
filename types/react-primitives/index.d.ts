// Type definitions for react-primitives 0.6
// Project: https://github.com/lelandrichardson/react-primitives
// Definitions by: Ahmed Ghoneim <https://github.com/aghoneim92>
//                 David Pett <https://github.com/davidpett>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

import { ComponentType } from 'react';
import {
    Animated,
    Dimensions,
    Easing,
    Image,
    PixelRatio,
    PlatformOSType as RNPlatformOSType,
    PlatformStatic as RNPlatformStatic,
    StyleSheet,
    Text,
    TouchableOpacityProps,
    View
} from 'react-native';

export const Touchable: ComponentType<TouchableOpacityProps>;

// react-primitives also supports react-sketchapp and react-vr as platforms
export type PlatformOSType = RNPlatformOSType | 'sketch' | 'vr';
interface PlatformStatic extends RNPlatformStatic {
  OS: PlatformOSType;
}
export const Platform: PlatformStatic;

export {
    Animated,
    Dimensions,
    Easing,
    Image,
    PixelRatio,
    StyleSheet,
    Text,
    View
};
