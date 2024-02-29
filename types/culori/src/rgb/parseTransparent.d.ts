export default parseTransparent;

declare function parseTransparent(str: "transparent"): {
    mode: "rgb";
    r: 0;
    g: 0;
    b: 0;
    alpha: 0;
};
declare function parseTransparent(str: unknown): undefined;
