import { Data } from "./data";
import { BaseEmoji } from "./emoji-index/nimble-emoji-index";
import { EmojiSet } from "./shared-props";

declare function getEmojiDataFromNative(nativeString: string, set: EmojiSet, data: Data): BaseEmoji;

export { getEmojiDataFromNative };
