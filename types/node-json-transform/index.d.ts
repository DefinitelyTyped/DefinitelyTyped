// Type definitions for node-json-transform 1.x
// Project: https://github.com/bozzltron/node-json-transform
// Definitions by: Yash Maheshwari <https://github.com/ymaheshwari1>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare function DataTransform(data: any, map: any): any;

declare function transform(data: any, map: any, context?: any): any;

declare function transformAsync(data: any, map: any, context?: any): any;

export { DataTransform, transform, transformAsync };
