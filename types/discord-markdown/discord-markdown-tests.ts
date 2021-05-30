import { htmlOutput, htmlTag, parser, toHTML } from 'discord-markdown';
import type { Output } from 'simple-markdown';

// $ExpectType string
toHTML('');

// $ExpectType string
toHTML('', {});

// $ExpectType string
toHTML('', {}, parser, htmlOutput);

declare const numberOutput: Output<number>;
// $ExpectType number
toHTML('', {}, parser, numberOutput);

// $ExpectError
toHTML('', {}, parser);
// $ExpectError
toHTML('', {}, htmlOutput);

toHTML('', {
    cssModuleNames: {
        foo: 'bar',
    },
    embed: true,
    escapeHTML: true,
    discordOnly: true,
    discordCallback: {
        channel: node => {
            node; // $ExpectType DiscordChannelNode
            return '';
        },
    },
});

// $ExpectType ASTNode[]
parser('');

for (const node of parser('')) {
    switch (node.type) {
        case 'strong':
            node; // $ExpectType StrongNode
            break;
        case 'discordChannel':
            node; // $ExpectType DiscordChannelNode
            break;
        case 'discordEmoji':
            node; // $ExpectType DiscordEmojiNode
            break;
    }
}

// $ExpectType string
htmlTag('', '');

// $ExpectType string
htmlTag('', '', {});

// $ExpectType string
htmlTag('', '', {}, false);

// $ExpectType string
htmlTag('', '', {}, false, { cssModuleNames: {} });

// $ExpectType string
htmlTag('', '', {}, { cssModuleNames: {} });
