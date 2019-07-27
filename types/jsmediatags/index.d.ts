// Type definitions for jsmediatags 3.9
// Project: https://github.com/aadsm/jsmediatags#readme
// Definitions by: Gunnar Már Óttarsson <https://github.com/gunnim>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference path="./build2/ArrayFileReader.d.ts" />
/// <reference path="./build2/BlobFileReader.d.ts" />
/// <reference path="./build2/ByteArrayUtils.d.ts" />
/// <reference path="./build2/ChunkedFileData.d.ts" />
/// <reference path="./build2/FLACTagContents.d.ts" />
/// <reference path="./build2/FLACTagReader.d.ts" />
/// <reference path="./build2/ID3v1TagReader.d.ts" />
/// <reference path="./build2/ID3v2FrameReader.d.ts" />
/// <reference path="./build2/ID3v2TagContents.d.ts" />
/// <reference path="./build2/ID3v2TagReader.d.ts" />
/// <reference path="./build2/MediaFileReader.d.ts" />
/// <reference path="./build2/MediaTagReader.d.ts" />
/// <reference path="./build2/MP4TagContents.d.ts" />
/// <reference path="./build2/MP4TagReader.d.ts" />
/// <reference path="./build2/NodeFileReader.d.ts" />
/// <reference path="./build2/StringUtils.d.ts" />
/// <reference path="./build2/XhrFileReader.d.ts" />

import { CallbackType, LoadCallbackType } from './types';
import MediaFileReader from './build2/MediaFileReader';
import MediaTagReader from './build2/MediaTagReader';

// tslint:disable-next-line:export-just-namespace
export = jsmediatags;
export as namespace jsmediatags;
declare namespace jsmediatags {
    function read(location: any, callbacks: CallbackType): void;

    class Reader {
        _file: any;
        _tagsToRead: string[];
        _fileReader: typeof MediaFileReader;
        _tagReader: typeof MediaTagReader;

        constructor(file: any);

        setFileReader(fileReader: typeof MediaFileReader): Reader;

        setTagsToRead(tagsToRead: string[]): Reader;
        setTagReader(tagReader: typeof MediaTagReader): Reader;

        read(callbacks: CallbackType): void;
        _getFileReader(): typeof MediaFileReader;
        _findFileReader(): typeof MediaFileReader;
        _getTagReader(fileReader: MediaFileReader, callbacks: CallbackType): void;
        _findTagReader(fileReader: MediaFileReader, callbacks: CallbackType): void;
        _loadTagIdentifierRanges(
            fileReader: MediaFileReader,
            tagReaders: Array<typeof MediaTagReader>,
            callbacks: LoadCallbackType
        ): void;
    }
    const Config: Config;
}

interface Config {
    addFileReader(fileReader: typeof MediaFileReader): Config;
    addTagReader(tagReader: typeof MediaTagReader): Config;
    removeTagReader(tagReader: typeof MediaTagReader): Config;
    EXPERIMENTAL_avoidHeadRequests(): void;
    setDisallowedXhrHeaders(disallowedXhrHeaders: string[]): void;
    setXhrTimeoutInSec(timeoutInSec: number): void;
}
