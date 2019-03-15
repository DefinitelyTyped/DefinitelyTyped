// Type definitions for animation-frame 0.1.7
// Project: https://github.com/kof/animation-frame
// Definitions by: Qinfeng Chen <https://github.com/qinfchen>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

interface AnimationFrame {
    new(): AnimationFrame;
    request(callback: () => void): void;
}

declare var AnimationFrame: AnimationFrame;

