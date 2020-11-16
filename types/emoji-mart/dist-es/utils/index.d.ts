import { EmojiSet } from './shared-props';
import { Data } from './data';
import { BaseEmoji } from './emoji-index/nimble-emoji-index';

declare function getEmojiDataFromNative(nativeString: string, set: EmojiSet, data: Data): BaseEmoji;

export { getEmojiDataFromNative };
