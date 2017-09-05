
import unorm = require("unorm");

function listNormalizations(raw: string) {
  return [
    unorm.nfd(raw),
    unorm.nfkd(raw),
    unorm.nfc(raw),
    unorm.nfkc(raw),
  ];
}
