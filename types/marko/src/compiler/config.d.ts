export default interface Config {
    checkUpToDate?: boolean;
    writeToDisk?: boolean;
    assumeUpToDate?: boolean;
    preserveWhitespace?: boolean;
    output?: 'vdom' | 'html';
    writeVersionComment?: boolean;
    ignoreUnrecognizedTags?: boolean;
    escapeAtTags?: boolean;
    autoKeyEnabled?: boolean;
}
