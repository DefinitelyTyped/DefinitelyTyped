// Type definitions for ascii-cats 1.1
// Project: https://github.com/bbihq/ascii-cats
// Definitions by: Piotr Błażejewicz <https://github.com/peterblazejewicz>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/**
 * @description Returns some ASCII cats.
 * You know, for spicing up your command line. With cats.
 */
declare function asciiCats(cat?: asciiCats.CatName): string;

/**
 *  🐈 ascii cats for node and cli
 */
declare namespace asciiCats {
    type CatName =
        | 'grumpy'
        | 'approaching'
        | 'tubby'
        | 'confused'
        | 'playful'
        | 'thoughtful'
        | 'delighted'
        | 'nyan'
        | 'resting'
        | 'octocat'
        | 'ready-to-attack'
        | 'awake'
        | 'sleepy'
        | 'got-dat-cat'
        | 'hector'
        | 'leroy'
        | 'longcat'
        | 'mini'
        | 'nyancat-2'
        | 'paws'
        | '^'
        | 'big-cat'
        | 'lazzzy'
        | 'sit'
        | 'lion'
        | 'panther'
        | 'fat'
        | 'cat-watch'
        | 'tiger'
        | 'box'
        | 'couple'
        | 'tails'
        | 'bug'
        | 'tree'
        | 'angel'
        | 'ass'
        | 'lucky'
        | 'sexy'
        | 'fish-bowl'
        | 'halloween';

    const catNames: string[];
}
export = asciiCats;
