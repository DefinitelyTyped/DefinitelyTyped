import apolloCore = require("@apollo/client/core");
import apolloHttp = require("@apollo/client/link/http");
import formDataAppendFile = require("./formDataAppendFile");
import isExtractableFile = require("./isExtractableFile");

declare namespace createUploadLink {
    type UploadLinkOptions =
        & apolloHttp.HttpOptions
        & Partial<{
            FormData: typeof FormData;
            formDataAppendFile: typeof formDataAppendFile;
            isExtractableFile: typeof isExtractableFile;
        }>;
}

/**
 * Creates a [terminating Apollo Link](https://www.apollographql.com/docs/link/overview/#terminating-links) capable of file uploads.
 * @see https://github.com/jaydenseric/apollo-upload-client#function-createuploadlink
 */
declare function createUploadLink(uploadLinkOptions?: createUploadLink.UploadLinkOptions): apolloCore.ApolloLink;

export = createUploadLink;
