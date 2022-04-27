import { ReactNativeFile, ReactNativeFileOptions, extractFiles } from 'extract-files';

const options: ReactNativeFileOptions = { name: '', type: '', uri: '' };

new ReactNativeFile(options);

interface StreamLike {
    pipe: () => void;
}

// Support NodeJS streams
const isStreamLike = (value: any): value is StreamLike =>
    value !== null && typeof value === 'object' && typeof value.pipe === 'function';

extractFiles({}, '', isStreamLike);

extractFiles({});
