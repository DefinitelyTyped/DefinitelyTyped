import tripleBeam = require('triple-beam');

const level: string = tripleBeam.LEVEL;
const message: string = tripleBeam.MESSAGE;
const splat: string = tripleBeam.SPLAT;
const configsObj: tripleBeam.Configs = tripleBeam.configs;

const cli: tripleBeam.Config = configsObj.cli;
const npm: tripleBeam.Config = configsObj.npm;
const syslog: tripleBeam.Config = configsObj.syslog;

const levels = cli.levels;
const colors = cli.colors;
