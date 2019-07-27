import { CallbackType, LoadCallbackType } from './types';
import MediaFileReader from './build2/MediaFileReader';
import MediaTagReader from './build2/MediaTagReader';

// Type definitions for jsmediatags 3.9
// Project: https://github.com/aadsm/jsmediatags#readme
// Definitions by: Gunnar Már Óttarsson <https://github.com/gunnim>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

// tslint:disable-next-line:export-just-namespace
export = jsmediatags;
export as namespace jsmediatags;
declare namespace jsmediatags {

    function read(location: any, callbacks: CallbackType): void;

    class Reader {
        _file: any;
        _tagsToRead: Array<string>;
        _fileReader: typeof MediaFileReader;
        _tagReader: typeof MediaTagReader;

        constructor(file: any);

        setFileReader(fileReader: typeof MediaFileReader): Reader;

        setTagsToRead(tagsToRead: Array<string>): Reader;
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
    class Config {
        static addFileReader(fileReader: typeof MediaFileReader): typeof Config;
        static addTagReader(tagReader: typeof MediaTagReader): typeof Config;
        static removeTagReader(tagReader: typeof MediaTagReader): typeof Config;
        static EXPERIMENTAL_avoidHeadRequests(): void;
        static setDisallowedXhrHeaders(disallowedXhrHeaders: Array<string>): void;
        static setXhrTimeoutInSec(timeoutInSec: number): void;
    }
}
