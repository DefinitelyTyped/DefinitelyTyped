// Type definitions for react-sizes 2.0
// Project: https://github.com/renatorib/react-sizes#readme
// Definitions by: janKir <https://github.com/janKir>, Micah Stubbs <https://github.com/micahstubbs>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.5

export interface Sizes {
    width: number;
    height: number;
}

export function WithSizes<SP extends object, P extends SP>(
    mapSizesToProps: (sizes: Sizes) => SP
): (component: React.ComponentType<P>) => React.ComponentType<P>;

export default WithSizes;
