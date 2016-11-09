import AliasFieldPlugin = require('./AliasFieldPlugin');

import AliasPlugin = require('./AliasPlugin');

import AppendPlugin = require('./AppendPlugin');

import CloneBasenamePlugin = require('./CloneBasenamePlugin');

import ConcordExtensionsPlugin = require('./ConcordExtensionsPlugin');

import ConcordMainPlugin = require('./ConcordMainPlugin');

import ConcordModulesPlugin = require('./ConcordModulesPlugin');

import DescriptionFilePlugin = require('./DescriptionFilePlugin');

import DescriptionFileUtils = require('./DescriptionFileUtils');

import DirectoryExistsPlugin = require('./DirectoryExistsPlugin');

import FileExistsPlugin = require('./FileExistsPlugin');

import FileKindPlugin = require('./FileKindPlugin');

import getPaths, { basename } from './getPaths';

import { globToRegExp } from './globToRegExp';

import JoinRequestPlugin = require('./JoinRequestPlugin');

import LogInfoPlugin = require('./LogInfoPlugin');

import MainFieldPlugin = require('./MainFieldPlugin');

import ModuleAppendPlugin = require('./ModuleAppendPlugin');

import ModuleKindPlugin = require('./ModuleKindPlugin');

import ModulesInHierachicDirectoriesPlugin = require('./ModulesInHierachicDirectoriesPlugin');

import ModulesInRootPlugin = require('./ModulesInRootPlugin');

import NextPlugin = require('./NextPlugin');

import ParsePlugin = require('./ParsePlugin');

import Resolver = require('./Resolver');

import ResultPlugin = require('./ResultPlugin');

import Storage from './Storage'

import SymlinkPlugin = require('./SymlinkPlugin');

import TryNextPlugin = require('./TryNextPlugin');

import UnsafeCachePlugin = require('./UnsafeCachePlugin');

import UseFilePlugin = require('./UseFilePlugin');

import resolve = require('../');

import { BaseFileSystem } from './common-types'

const aplugin = new AliasFieldPlugin('a', 'b', 'c');

const aplugin2 = new AliasPlugin('a', {
    onlyModule: false,
    name: 'a',
    alias: 'b'
}, 'string')

const aplugin3 = new AppendPlugin('a', 'b', 'c');

const cplugin = new CloneBasenamePlugin('a', 'c');

const cplugin2 = new ConcordExtensionsPlugin('a', {}, 'b');

const cplugin3 = new ConcordMainPlugin('string', {}, 'string');

const cplugin4 = new ConcordModulesPlugin('string', {}, 'string');

const dplugin = new DescriptionFilePlugin('string', 'string', 'string');

DescriptionFileUtils.cdUp('./lib');
DescriptionFileUtils.getField({}, 'hi');
DescriptionFileUtils.loadDescriptionFile(resolve.ResolverFactory.createResolver({
    extensions: [''],
    fileSystem: {}
}), './lib', ['file'], function () { });

const dplugin1 = new DirectoryExistsPlugin('string', 'string');

const fplugin = new FileExistsPlugin('string', 's');

const fplugin2 = new FileKindPlugin('string', 's');

getPaths('./lib');

basename('./lib');

globToRegExp('lib/**');

const jplugin = new JoinRequestPlugin('string', 's');

const lplugin = new LogInfoPlugin('string');

const mplugin = new MainFieldPlugin('string', {
    name: 'hi',
    forceRelative: false
}, 's');

const mplugin2 = new ModuleAppendPlugin('string', 'ap', 's');

const mplugin3 = new ModuleKindPlugin('string', 's');

const mplugin4 = new ModulesInHierachicDirectoriesPlugin('string', ['arr'], 's');

const mplugin5 = new ModulesInRootPlugin('string', 'ap', 's');

const nplugin = new NextPlugin('string', 'ap');

const pplugin = new ParsePlugin('string', 'ap');

const resolver = new Resolver({} as BaseFileSystem);

const rplugin = new ResultPlugin('string');

const splugin = new SymlinkPlugin('string', 's');

const tplugin = new TryNextPlugin('string', 'ap', 's');

const uplugin = new UnsafeCachePlugin('string', function (e) { return false }, {}, 's');

const uplugin2 = new UseFilePlugin('string', 'ap', 's');

const s = new Storage(4);
