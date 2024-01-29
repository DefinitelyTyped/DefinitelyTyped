import { GraphQLScalarType } from "graphql";
import processRequest, { FileUpload } from "./processRequest.mjs";

// We are keeping this export just to avoid breaking changes, but it should be removed on the next major release.
export { FileUpload } from "./processRequest.mjs";

export default class Upload {
    promise: Promise<FileUpload>;
    resolve: (file: FileUpload) => void;
    file: FileUpload | undefined;
    reject: (reason?: any) => void;
}

export type GraphQLUpload = GraphQLScalarType<any, any>;

export type processRequest = typeof processRequest;
