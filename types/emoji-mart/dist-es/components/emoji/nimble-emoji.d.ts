import React = require('react');

import { EmojiProps, Data } from '../..';

export interface NimbleEmojiProps extends EmojiProps {
    data: Data;
}

declare const NimbleEmoji: React.SFC<NimbleEmojiProps>;

export { NimbleEmoji as default };
