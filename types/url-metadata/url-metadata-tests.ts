import * as urlMetadata from "url-metadata";

const opts: urlMetadata.Options = {
    userAgent: "url-metadata-test",
    fromEmail: "testing@url-metadata.com",
    maxRedirects: 3,
    timeout: 10000,
    descriptionLength: 10000,
    ensureSecureImageRequest: true
};
const url = "https://google.com";

urlMetadata(url, opts).then((result: urlMetadata.Result) => {
    result; // $ExpectType Result
});
