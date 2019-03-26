// Type definitions for cli-boxes 1.0
// Project: https://github.com/sindresorhus/cli-boxes
// Definitions by: BendingBender <https://github.com/BendingBender>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.1

export = boxes;
declare const boxes: boxes.Boxes;

declare namespace boxes {
    type BoxNames = 'single' | 'double' | 'round' | 'single-double' | 'double-single' | 'classic';

    type Boxes = Record<BoxNames, BoxDefinition>;

    interface BoxDefinition {
        topLeft: string;
        topRight: string;
        bottomRight: string;
        bottomLeft: string;
        vertical: string;
        horizontal: string;
    }
}
