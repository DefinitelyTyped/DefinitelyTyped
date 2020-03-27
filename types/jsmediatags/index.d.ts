// Type definitions for jsmediatags 3.9
// Project: https://github.com/aadsm/jsmediatags#readme
// Definitions by: Gunnar Már Óttarsson <https://github.com/gunnim>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import { CallbackType, LoadCallbackType } from './types';
import MediaFileReader from './build2/MediaFileReader';
import MediaTagReader from './build2/MediaTagReader';

export as namespace jsmediatags;
export function read(location: any, callbacks: CallbackType): void;

export class Reader {
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
export const Config: Config;

export interface Config {
  addFileReader(fileReader: typeof MediaFileReader): Config;
  addTagReader(tagReader: typeof MediaTagReader): Config;
  removeTagReader(tagReader: typeof MediaTagReader): Config;
  EXPERIMENTAL_avoidHeadRequests(): void;
  setDisallowedXhrHeaders(disallowedXhrHeaders: string[]): void;
  setXhrTimeoutInSec(timeoutInSec: number): void;
}
