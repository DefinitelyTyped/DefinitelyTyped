import { Config } from 'karma';
import { join } from 'path';

declare const config: Config;

config.set({ coverageIstanbulReporter: {} });

config.set({
    coverageIstanbulReporter: {
        reports: ['html', 'lcovonly', 'text-summary'],
        dir: join(__dirname, 'coverage'),
        combineBrowserReports: true,
        fixWebpackSourcePaths: true,
        skipFilesWithNoCoverage: true,
        'report-config': { html: { subdir: 'html' } },
        thresholds: {
            emitWarning: false,
            global: {
                statements: 100,
                lines: 100,
                branches: 100,
                functions: 100,
            },
            each: {
                statements: 100,
                lines: 100,
                branches: 100,
                functions: 100,
                overrides: { 'baz/component/**/*.js': { statements: 98 } },
            },
        },
        verbose: true,
        instrumentation: { 'default-excludes': false },
    },
});
