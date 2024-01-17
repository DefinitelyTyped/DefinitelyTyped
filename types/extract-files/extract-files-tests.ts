import extractFiles from "extract-files/extractFiles.mjs";
import isExtractableFile from "extract-files/isExtractableFile.mjs";

interface StreamLike {
    pipe: () => void;
}

// Support NodeJS streams
const isStreamLike = (value: any): value is StreamLike =>
    value !== null && typeof value === "object" && typeof value.pipe === "function";

extractFiles({}, isStreamLike, "");

extractFiles({}, isExtractableFile);
