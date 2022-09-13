import React = require('react');

import { Emoji, EmojiData, EmojiProps, I18n, CategoryName } from '..';

export interface Props {
    emojis?: Array<string | EmojiData> | undefined;
    hasStickyPosition?: boolean | undefined;
    id: CategoryName;
    name: string;
    native: boolean;
    perLine: number;
    emojiProps: EmojiProps;
    recent?: string[] | undefined;
    i18n: I18n;
}

export default class Category extends React.Component<Props> {
    // all methods and properties inside this are most likely intended to be private
}
