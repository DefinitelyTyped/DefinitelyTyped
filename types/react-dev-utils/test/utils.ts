import webpack = require('webpack');
import checkRequiredFiles = require('react-dev-utils/checkRequiredFiles');
import clearConsole = require('react-dev-utils/clearConsole');
import getProcessForPort = require('react-dev-utils/getProcessForPort');
import launchEditor = require('react-dev-utils/launchEditor');
import openBrowser = require('react-dev-utils/openBrowser');
import printHostingInstructions = require('react-dev-utils/printHostingInstructions');
import getCacheIdentifier = require('react-dev-utils/getCacheIdentifier');

// $ExpectType boolean
checkRequiredFiles(['public/index.html', 'src/index.js']);

// $ExpectType void
clearConsole();

// $ExpectType string | null
getProcessForPort(3000);

// $ExpectType void
launchEditor(__filename, 2);
// $ExpectType void
launchEditor(__filename, 2, 10);

// $ExpectType boolean
openBrowser('http://localhost:3000');

// $ExpectType void
printHostingInstructions({}, '', '', 'build', true);

// $ExpectType string
getCacheIdentifier('prod', ['react-dev-utils', 'chalk']);
