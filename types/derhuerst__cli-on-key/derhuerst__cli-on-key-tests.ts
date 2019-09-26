import onKeypress = require("@derhuerst/cli-on-key");
import { Key, OffKeyPress } from "@derhuerst/cli-on-key";

const onKey = (key: Key): void => undefined;
const offKeypress: OffKeyPress = onKeypress(process.stdin, onKey);
