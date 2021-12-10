import React = require('react');

import { EmojiProps, Data } from '../..';

export interface NimbleEmojiProps extends EmojiProps {
    data: Data;
}

declare const NimbleEmoji: React.FC<NimbleEmojiProps>;

export { NimbleEmoji as default };
