import * as npmlog from "npmlog";

const prefix = "str";
const message = "otherStr";

['silly', 'verbose', 'info', 'http', 'warn', 'error'].forEach(lvl => npmlog.log(lvl, prefix, message));

npmlog.silly(prefix, message);
npmlog.verbose(prefix, message);
npmlog.info(prefix, message);
npmlog.http(prefix, message);
npmlog.warn(prefix, message);
npmlog.error(prefix, message);

// ES6 module does't support changing variable exported by `export let`
// npmlog.level = "silly";

npmlog.enableColor();
npmlog.disableColor();

npmlog.enableProgress();
npmlog.disableProgress();

npmlog.enableUnicode();
npmlog.disableUnicode();

npmlog.pause();
npmlog.resume();

npmlog.addLevel("new-level", 42);
npmlog.addLevel("styled-level", 42, {
    fg: 'red',
    bg: 'blue',
    bold: false,
    inverse: true,
    underline: true,
    bell: false
});

npmlog.addLevel("styled-level", 42, {
    fg: 'red',
    bold: false,
    underline: true,
}, 'display name');
