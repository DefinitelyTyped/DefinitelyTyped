export = webgl;
declare function webgl(gl: any): {
    createProgram: (vertexShaderSrc: any, fragmentShaderSrc: any) => any;
    extendArray: (buffer: any, itemsInBuffer: any, elementsPerItem: any) => any;
    copyArrayPart: typeof copyArrayPart;
    swapArrayPart: typeof swapArrayPart;
    getLocations: (program: any, uniformOrAttributeNames: any) => {};
    context: any;
};
declare function copyArrayPart(array: any, to: any, from: any, elementsCount: any): void;
declare function swapArrayPart(array: any, from: any, to: any, elementsCount: any): void;
