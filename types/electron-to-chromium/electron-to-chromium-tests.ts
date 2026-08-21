import e2c = require("electron-to-chromium");

e2c.versions;
e2c.fullVersions;
e2c.chromiumVersions;
e2c.fullChromiumVersions;

e2c.electronToChromium("123");
e2c.electronToChromium(123);
e2c.chromiumToElectron("123");
e2c.chromiumToElectron(123);
e2c.electronToBrowserList("123");
e2c.electronToBrowserList(123);

import _versions = require("electron-to-chromium/versions");
import _fullVersions = require("electron-to-chromium/full-versions");
import _chromiumVersions = require("electron-to-chromium/chromium-versions");
import _fullChromiumVersions = require("electron-to-chromium/full-chromium-versions");
