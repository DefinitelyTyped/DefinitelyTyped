// Port of https://github.com/missive/emoji-mart/blob/v2.8.0/stories/index.js

import React = require('react');
import { useState } from 'react';

import {
    Picker,
    Emoji,
    EmojiProps,
    CustomEmoji,
    BaseEmoji,
    NimbleEmojiIndex,
    emojiIndex,
    EmojiData,
    EmojiEntry,
} from 'emoji-mart';

declare var console: { log(...args: any[]): void };

const CUSTOM_EMOJIS: CustomEmoji[] = [
    {
        name: 'Party Parrot',
        short_names: ['parrot'],
        keywords: ['party'],
        imageUrl: 'http://cultofthepartyparrot.com/parrots/hd/parrot.gif',
    },
    {
        name: 'Octocat',
        short_names: ['octocat'],
        keywords: ['github'],
        imageUrl: 'https://assets-cdn.github.com/images/icons/emoji/octocat.png?v7',
    },
    {
        name: 'Squirrel',
        short_names: ['shipit', 'squirrel'],
        keywords: ['github'],
        imageUrl: 'https://assets-cdn.github.com/images/icons/emoji/shipit.png?v7',
    },
];

interface State {
    native: boolean;
    set: EmojiProps['set'] | 'native';
    emoji: string;
    title: string;
    custom: CustomEmoji[];
}

class Example extends React.Component<{}, State> {
    readonly state: Readonly<State> = {
        native: true,
        set: 'apple',
        emoji: 'point_up',
        title: 'Pick your emoji…',
        custom: CUSTOM_EMOJIS,
    };
    render() {
        return (
            <div>
                <div className="row">
                    <h1>Emoji Mart 🏬</h1>
                </div>

                <div className="row">
                    {(['native', 'apple', 'google', 'twitter', 'emojione', 'messenger', 'facebook'] as Array<
                        EmojiProps['set'] | 'native'
                    >).map(set => {
                        const props = { disabled: !this.state.native && set === this.state.set };

                        if (set === 'native' && this.state.native) {
                            props.disabled = true;
                        }

                        return (
                            <button
                                key={set}
                                value={set}
                                onClick={() => {
                                    if (set === 'native') {
                                        this.setState({ native: true });
                                    } else {
                                        this.setState({ set, native: false });
                                    }
                                }}
                                {...props}
                            >
                                {set}
                            </button>
                        );
                    })}
                </div>

                <div className="row">
                    <Picker
                        {...this.state}
                        // NOTE: The original code passes the this.state directly, which includes a potential
                        // invalid 'set' value. The value of 'set' happens to be ignored if native is true, but no
                        // good way to represent it in the typings.
                        set={this.state.set === 'native' ? undefined : this.state.set}
                        onClick={console.log}
                    />
                </div>
            </div>
        );
    }
}

const AutoCompleteExample: React.FC = () => {
    const [search, setSearch] = useState('');
    const changed = (e: React.ChangeEvent<HTMLInputElement>) => {
        const target = e.target as { value: any };
        setSearch(target.value);
    };

    const match = search.match(/:([a-z_]+)(:)?/);
    let suggestions: ReturnType<typeof emojiIndex.search> = [];
    if (match && match[2]) {
        // smiley is closed
        let emoji = emojiIndex.emojis[match[1]];
        const isSingleEmoji = (e: EmojiEntry): e is EmojiData => {
            return 'name' in e;
        };
        const isNativeEmoji = (e: EmojiData): e is BaseEmoji => {
            return 'native' in e;
        };
        if (!isSingleEmoji(emoji)) {
            emoji = emoji[1];
        }
        const native = (isNativeEmoji(emoji) && emoji.native) || '';
        setSearch(search.replace(match[0], native));
    } else if (match && match[1].length > 2) {
        suggestions = emojiIndex.search(match[1]) || [];
    }
    return (
        <div>
            {suggestions.map(emoji => {
                return 'native' in emoji && <span>{emoji.native}</span>;
            })}
            {match && <div>{match[0]}</div>}
            <input type="text" onInput={changed} placeholder="enter a message..." value={search} />
        </div>
    );
};
