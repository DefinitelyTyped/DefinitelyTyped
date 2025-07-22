type Dimensions = ReturnType<typeof HTMLElement.prototype.getBoundingClientRect> & {
    x: number;
    y: number;
    top: number;
    left: number;
};

interface Args {
    liveMeasure?: boolean;
}

declare function useDimensions<
    // eslint-disable-next-line @definitelytyped/no-unnecessary-generics
    T extends HTMLElement = HTMLElement,
>(args?: Args): [
    (node: T) => void,
    Dimensions | {},
    HTMLElement,
];

export = useDimensions;
