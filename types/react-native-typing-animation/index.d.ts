// Type definitions for react-native-typing-animation 0.1
// Project: https://github.com/watadarkstar/react-native-typing-animation#readme
// Definitions by: Ankan Bhattacharya <https://github.com/Ankan002>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import { StyleSheetProperties } from 'react-native';

export interface TypingAnimationProps {
    style?: StyleSheetProperties;
    dotColor?: string;
    dotStyles?: StyleSheetProperties;
    dotRadius?: number;
    dotMargin?: number;
    dotAmplitude?: number;
    dotSpeed?: number;
    dotY?: number;
    dotX?: number;
}

export function TypingAnimation(props: TypingAnimationProps): JSX.Element;
