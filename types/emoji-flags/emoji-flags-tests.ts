import * as emojiFlags from 'emoji-flags';

function emojiFlagTest() {
    emojiFlags.countryCode('US');
    emojiFlags.countryCode('US').emoji;

    emojiFlags.DK;
    emojiFlags.DK.emoji;
}
