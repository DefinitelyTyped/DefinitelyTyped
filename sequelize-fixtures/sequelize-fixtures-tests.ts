/// <reference path="../sequelize/sequelize.d.ts" />
/// <reference path="sequelize-fixtures.d.ts" />

import Sequelize = require('sequelize');
import SequelizeFixtures = require('sequelize-fixtures');

var sequelize = new Sequelize("", "");

SequelizeFixtures.loadFile("", {}).then(() => { });
SequelizeFixtures.loadFile("", {}, { encoding: "utf8" }).then(() => { });

SequelizeFixtures.loadFiles([], {}).then(() => { });
SequelizeFixtures.loadFiles([], {}, { log: m => { } }).then(() => { });

SequelizeFixtures.loadFixture({}, {}).then(() => { });
sequelize.transaction(function (tx) {
    SequelizeFixtures.loadFixture({}, {}, { transaction: tx }).then(() => { });
});

SequelizeFixtures.loadFixtures([], {}).then(() => { });
SequelizeFixtures.loadFixtures([], {}, { transformFixtureDataFn: (data) => { return data; } }).then(() => { });