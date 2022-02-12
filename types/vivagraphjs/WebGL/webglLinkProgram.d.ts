export = webglLinkProgram;
/**
 * Defines UI for links in webgl renderer.
 */
declare function webglLinkProgram(): {
    load: (glContext: any) => void;
    position: (linkUi: any, fromPos: any, toPos: any) => void;
    createLink: (ui: any) => void;
    removeLink: (ui: any) => void;
    updateTransform: (newTransform: any) => void;
    updateSize: (w: any, h: any) => void;
    render: () => void;
    bringToFront: (link: any) => void;
    getFrontLinkId: () => any;
};
