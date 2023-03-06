// Type definitions for ink-text-animation 0.1
// Project: https://github.com/yardnsm/ink-text-animation
// Definitions by: Martin Badin <https://github.com/martin-badin>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import { Component, ReactNode } from 'react';

export interface InkTextAnimationProps {
    children?: ReactNode;
    name?: 'rainbow' | 'pulse' | 'glitch' | 'radar' | 'neon';
    speed?: number;
}

export default class InkTextAnimation extends Component<InkTextAnimationProps> {}
