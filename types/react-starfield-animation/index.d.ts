// Type definitions for react-starfield-animation 1.0
// Project: https://github.com/transitive-bullshit/react-starfield-animation
// Definitions by: Nick McCurdy <https://github.com/nickmccurdy>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import { ComponentType, CSSProperties } from 'react';

export interface StarfieldAnimationProps {
    numParticles?: number;
    lineWidth?: number;
    alphaFactor?: number;
    depth?: number;
    size?: {
        width: number;
        height: number;
    };
    style?: CSSProperties;
}

declare const StarfieldAnimation: ComponentType<StarfieldAnimationProps>;
export default StarfieldAnimation;
