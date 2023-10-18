export interface Sizes {
    width: number;
    height: number;
}

export function WithSizes<SP extends object, P extends SP>(
    mapSizesToProps: (sizes: Sizes) => SP,
): (component: React.ComponentType<P>) => React.ComponentType<P>;

export default WithSizes;
