import * as npmlog from "npmlog";

const prefix = "str";
const message = "otherStr";

["silly", "verbose", "info", "timing", "http", "notice", "warn", "error", "silent"].forEach(lvl => npmlog.log(lvl, prefix, message));

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
npmlog.progressEnabled();

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

npmlog.addLevel("broadcast", 10);

npmlog.broadcast(prefix, message);
npmlog.broadcast(message);

npmlog.on("broadcast", () => {});

const msg: npmlog.MessageObject = {
    id: 1,
    level: "broadcast",
    prefix,
    message,
    messageRaw: message,
};

npmlog.emit("broadcast", msg);
