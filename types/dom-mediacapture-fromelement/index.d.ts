// The same editor's draft defines canvas extensions, but those extensions are widely supported and
// already defined in the standard DOM type definitions.

// Versioning:
// Until the specification is finalized, the major version number is 0. Although not necessary for
// version 0, consider incrementing the minor version number for breaking changes.

interface HTMLMediaElement {
    /**
     * The **`captureStream()`** method of the {@linkcode HTMLMediaElement} interface returns a {@linkcode MediaStream} object representing the media being rendered in real time to the media element.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLMediaElement/captureStream)
     */
    captureStream(): MediaStream;
}
