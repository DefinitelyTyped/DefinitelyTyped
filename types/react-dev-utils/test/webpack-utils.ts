import webpack = require('webpack');
import FileSizeReporter = require('react-dev-utils/FileSizeReporter');
import formatWebpackMessages = require('react-dev-utils/formatWebpackMessages');
import printBuildError = require('react-dev-utils/printBuildError');
import WebpackDevServerUtils = require('react-dev-utils/WebpackDevServerUtils');
import getCSSModuleLocalIdent = require('react-dev-utils/getCSSModuleLocalIdent');

FileSizeReporter.measureFileSizesBeforeBuild('src').then(previousFileSizes => {
    webpack().run((err, webpackStats) => {
        FileSizeReporter.printFileSizesAfterBuild(webpackStats, previousFileSizes, 'src');
    });
});

webpack().run((err, stats) => {
    const rawMessages = stats.toJson();
    const messages = formatWebpackMessages(rawMessages);
    if (!messages.errors.length && !messages.warnings.length) {
        console.log('Compiled successfully!');
    }
    if (messages.errors.length) {
        console.log('Failed to compile.');
        messages.errors.forEach(e => console.log(e));
        return;
    }
    if (messages.warnings.length) {
        console.log('Compiled with warnings.');
        messages.warnings.forEach(w => console.log(w));
    }
});

webpack().run((err) => {
    if (err) printBuildError(err);
});

// $ExpectType Promise<number | null>
WebpackDevServerUtils.choosePort('localhost', 3000);

// $ExpectType Urls
const urls = WebpackDevServerUtils.prepareUrls('http', 'localhost', 3000);

// $ExpectType Compiler
WebpackDevServerUtils.createCompiler({ webpack, config: {}, appName: 'app', urls, useYarn: true });

// $ExpectType ProxyConfigArrayItem[] || ProxyConfigArray
WebpackDevServerUtils.prepareProxy(undefined, 'build', '/test');

const loaderContext: webpack.loader.LoaderContext = null!;
// $ExpectType string
getCSSModuleLocalIdent(loaderContext, '', '', {});

// @ts-expect-error
getCSSModuleLocalIdent({}, '', '', {});
