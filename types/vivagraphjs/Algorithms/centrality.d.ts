export = centralityWrapper;
declare function centralityWrapper(): {
    betweennessCentrality: typeof betweennessCentrality;
    degreeCentrality: typeof degreeCentrality;
};
declare function betweennessCentrality(g: any): {
    key: any;
    value: any;
}[];
declare function degreeCentrality(g: any, kind: any): {
    key: any;
    value: any;
}[];
