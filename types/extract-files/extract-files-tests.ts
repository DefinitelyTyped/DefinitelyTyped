import {
    ReactNativeFile,
    ReactNativeFileOptions,
    extractFiles,
    isExtractableFile,
    ExtractableFileMatcher,
} from 'extract-files';

const options: ReactNativeFileOptions = {
    name: '',
    type: '',
    uri: '',
};

new ReactNativeFile(options);

const isFile: ExtractableFileMatcher = (value: any) => isExtractableFile(value) || true;

extractFiles({}, '', isFile);

extractFiles({});
