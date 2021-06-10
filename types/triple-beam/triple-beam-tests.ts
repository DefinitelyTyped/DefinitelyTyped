import tripleBeam = require('triple-beam');

const level: symbol = tripleBeam.LEVEL;
const message: symbol = tripleBeam.MESSAGE;
const splat: symbol = tripleBeam.SPLAT;
const configsObj: tripleBeam.Configs = tripleBeam.configs;

const cli: tripleBeam.Config = configsObj.cli;
const npm: tripleBeam.Config = configsObj.npm;
const syslog: tripleBeam.Config = configsObj.syslog;

const levels = cli.levels;
const colors = cli.colors;
