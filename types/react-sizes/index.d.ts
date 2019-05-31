// Type definitions for react-sizes 2.0
// Project: https://github.com/renatorib/react-sizes#readme
// Definitions by: {@janKir,@micahstubbs} <https://github.com/janKir> <https://github.com/micahstubbs>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// adapted from https://github.com/renatorib/react-sizes/issues/13#issuecomment-483725124

export interface Sizes {
    width: number;
    height: number;
}

type mapSizesToProps<SP extends object> = (sizes: Sizes) => SP;

export function withSizes<SP extends object, P extends SP>(
    mapSizesToProps: mapSizesToProps<SP>
): (component: React.ComponentType<P>) => React.ComponentType<P>;

export as namespace withSizes;
