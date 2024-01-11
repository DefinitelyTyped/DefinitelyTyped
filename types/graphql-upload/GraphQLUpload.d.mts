import { GraphQLScalarType } from "graphql";
import { FileUpload } from "./processRequest.mjs";

export { FileUpload } from "./processRequest.mjs";

declare const GraphQLUpload: GraphQLScalarType<Promise<FileUpload>, never>;

export default GraphQLUpload;
