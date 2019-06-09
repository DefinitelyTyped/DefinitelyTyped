import * as emojiFlags from 'emoji-flags';

function emojiFlagTest() {
  var usFlag = emojiFlags.countryCode('US');
  var usFlagEmoji = emojiFlags.countryCode('US').emoji;

  var dkFlag = emojiFlags.DK;
  var dkFlagEmoji = emojiFlags.DK.emoji;
}
