import { IObjectPath } from "./objectpath";
/**
 * Transforms an array of object paths into a request xml body. Does not do placeholder substitutions.
 *
 * @param objectPaths The object paths for which we want to generate a body
 */
export declare function writeObjectPathBody(objectPaths: IObjectPath[]): string;
