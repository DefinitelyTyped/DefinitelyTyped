export = centralityWrapper;
declare function centralityWrapper(): {
    betweennessCentrality: typeof betweennessCentrality;
    degreeCentrality: typeof degreeCentrality;
};
declare function betweennessCentrality(g: any): Array<{
    key: any;
    value: any;
}>;
declare function degreeCentrality(
    g: any,
    kind: any,
): Array<{
    key: any;
    value: any;
}>;
