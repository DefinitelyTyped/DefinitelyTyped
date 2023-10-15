export default interface Config {
    checkUpToDate?: boolean | undefined;
    writeToDisk?: boolean | undefined;
    assumeUpToDate?: boolean | undefined;
    preserveWhitespace?: boolean | undefined;
    output?: "vdom" | "html" | undefined;
    writeVersionComment?: boolean | undefined;
    ignoreUnrecognizedTags?: boolean | undefined;
    escapeAtTags?: boolean | undefined;
    autoKeyEnabled?: boolean | undefined;
}
