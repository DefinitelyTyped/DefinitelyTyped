import { ApolloLink } from '@apollo/client/core';
import { HttpOptions } from '@apollo/client/link/http';
import formDataAppendFile from './formDataAppendFile';
import isExtractableFile from './isExtractableFile';

export type UploadLinkOptions = HttpOptions &
    Partial<{
        FormData: typeof FormData;
        formDataAppendFile: typeof formDataAppendFile;
        isExtractableFile: typeof isExtractableFile;
    }>;

/**
 * Creates a [terminating Apollo Link](https://www.apollographql.com/docs/link/overview/#terminating-links) capable of file uploads.
 * @see https://github.com/jaydenseric/apollo-upload-client#function-createuploadlink
 */
export default function createUploadLink(uploadLinkOptions?: UploadLinkOptions): ApolloLink;
