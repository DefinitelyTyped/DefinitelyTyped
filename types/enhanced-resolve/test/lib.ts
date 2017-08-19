import AliasFieldPlugin = require('enhanced-resolve/lib/AliasFieldPlugin');

import AliasPlugin = require('enhanced-resolve/lib/AliasPlugin');

import AppendPlugin = require('enhanced-resolve/lib/AppendPlugin');

import CloneBasenamePlugin = require('enhanced-resolve/lib/CloneBasenamePlugin');

import ConcordExtensionsPlugin = require('enhanced-resolve/lib/ConcordExtensionsPlugin');

import ConcordMainPlugin = require('enhanced-resolve/lib/ConcordMainPlugin');

import ConcordModulesPlugin = require('enhanced-resolve/lib/ConcordModulesPlugin');

import DescriptionFilePlugin = require('enhanced-resolve/lib/DescriptionFilePlugin');

import DescriptionFileUtils = require('enhanced-resolve/lib/DescriptionFileUtils');

import DirectoryExistsPlugin = require('enhanced-resolve/lib/DirectoryExistsPlugin');

import FileExistsPlugin = require('enhanced-resolve/lib/FileExistsPlugin');

import FileKindPlugin = require('enhanced-resolve/lib/FileKindPlugin');

import getPaths, { basename } from 'enhanced-resolve/lib/getPaths';

import { globToRegExp } from 'enhanced-resolve/lib/globToRegExp';

import Storage from 'enhanced-resolve/lib/Storage';

import { AbstractInputFileSystem } from 'enhanced-resolve/lib/common-types';

import JoinRequestPlugin = require('enhanced-resolve/lib/JoinRequestPlugin');

import LogInfoPlugin = require('enhanced-resolve/lib/LogInfoPlugin');

import MainFieldPlugin = require('enhanced-resolve/lib/MainFieldPlugin');

import ModuleAppendPlugin = require('enhanced-resolve/lib/ModuleAppendPlugin');

import ModuleKindPlugin = require('enhanced-resolve/lib/ModuleKindPlugin');

import ModulesInHierachicDirectoriesPlugin = require('enhanced-resolve/lib/ModulesInHierachicDirectoriesPlugin');

import ModulesInRootPlugin = require('enhanced-resolve/lib/ModulesInRootPlugin');

import NextPlugin = require('enhanced-resolve/lib/NextPlugin');

import ParsePlugin = require('enhanced-resolve/lib/ParsePlugin');

import Resolver = require('enhanced-resolve/lib/Resolver');

import ResultPlugin = require('enhanced-resolve/lib/ResultPlugin');

import SymlinkPlugin = require('enhanced-resolve/lib/SymlinkPlugin');

import TryNextPlugin = require('enhanced-resolve/lib/TryNextPlugin');

import UnsafeCachePlugin = require('enhanced-resolve/lib/UnsafeCachePlugin');

import UseFilePlugin = require('enhanced-resolve/lib/UseFilePlugin');

import resolve = require('enhanced-resolve');

const aplugin = new AliasFieldPlugin('a', 'b', 'c');

const aplugin2 = new AliasPlugin('a', {
    onlyModule: false,
    name: 'a',
    alias: 'b'
}, 'string')

const aplugin3 = new AppendPlugin('a', 'b', 'c');

const cplugin = new CloneBasenamePlugin('a', 'c');

const cplugin2 = new ConcordExtensionsPlugin('a', {
    any: 'string',
    right: false
}, 'b');

const cplugin3 = new ConcordMainPlugin('string', {
    any: 'string',
    right: false
}, 'string');

const cplugin4 = new ConcordModulesPlugin('string', {
    any: 'string',
    right: false
}, 'string');

const dplugin = new DescriptionFilePlugin('string', 'string', 'string');

DescriptionFileUtils.cdUp('./lib');
DescriptionFileUtils.getField({}, 'hi');
DescriptionFileUtils.loadDescriptionFile(resolve.ResolverFactory.createResolver({
    extensions: [''],
    fileSystem: {} as AbstractInputFileSystem
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

const resolver = new Resolver({} as AbstractInputFileSystem);

const rplugin = new ResultPlugin('string');

const splugin = new SymlinkPlugin('string', 's');

const tplugin = new TryNextPlugin('string', 'ap', 's');

const uplugin = new UnsafeCachePlugin('string', function (e) { return false }, {
    hi: 'string',
    hello: true
}, 's');

const uplugin2 = new UseFilePlugin('string', 'ap', 's');

const s = new Storage(4);
