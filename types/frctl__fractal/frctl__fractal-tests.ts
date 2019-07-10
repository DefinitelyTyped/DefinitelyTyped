// Source: https://fractal.build/guide

/* Create a new Fractal instance and export it for use elsewhere if required */
import { create } from '@frctl/fractal';

const fractal = create();

/* Set the title of the project */
fractal.set('project.title', 'FooCorp Component Library');
fractal.set('project.version', 'v1.0');
fractal.set('project.author', 'Mickey Mouse');

/* Tell Fractal where the components will live */
fractal.components.set('path', __dirname + '/src/components');

/* Tell Fractal where the documentation pages will live */
fractal.docs.set('path', __dirname + '/src/docs');

/* Specify a directory of static assets */
fractal.web.set('static.path', __dirname + '/public');

/* Set the static HTML build destination */
fractal.web.set('builder.dest', __dirname + '/build');

// Source: https://fractal.build/guide/components/configuration

fractal.components.set('default.collated', true);
fractal.components.set('default.collator', (markup: string, item: any) => {
    return `<!-- Start: @${item.handle} -->\n${markup}\n<!-- End: @${item.handle} -->\n`;
});
fractal.components.set('default.context', {
    'site-name': 'FooCorp'
});
fractal.components.set('default.display', {
    'max-width': '400px'
});
fractal.components.set('default.prefix', 'foobar');
fractal.components.set('default.preview', '@my-preview-layout');
fractal.components.set('default.status', 'wip');
fractal.components.set('ext', '.handlebars');
fractal.components.set('label', 'Patterns');
fractal.components.set('path', __dirname + '/src/components');
fractal.components.set('statuses', {
    doing: {
        label: "Doing",
        description: "I'm doing it.",
        color: '#F00'
    },
    done: {
        label: "Done",
        description: "I'm done with this.",
        color: "green"
    }
});
fractal.components.set('title', 'Patterns');
fractal.components.set('yield', 'rendered_content');

// Source: https://fractal.build/guide/docs/configuration

fractal.docs.set('default.context', {
    'site-name': 'FooCorp'
});
fractal.docs.set('default.prefix', 'foobar');
fractal.docs.set('default.status', 'wip');
fractal.docs.set('ext', '.html');
fractal.docs.set('indexLabel', 'Listing');
fractal.docs.set('label', 'Pages');
fractal.docs.set('markdown', false);
fractal.docs.set('markdown.smartypants', false);
fractal.docs.set('path', __dirname + '/src/docs');
fractal.docs.set('statuses', {
    doing: {
        label: "Doing",
        description: "I'm doing it.",
        color: '#F00'
    },
    done: {
        label: "Done",
        description: "I'm done with this.",
        color: "green"
    }
});
fractal.docs.set('title', 'Pages');

// Source: https://fractal.build/guide/web/configuration

fractal.web.set('builder.concurrency', 5);
fractal.web.set('builder.dest', __dirname + '/export');
fractal.web.set('builder.ext', '.php');
fractal.web.set('builder.urls.ext', null);
fractal.web.set('server.sync', true);
fractal.web.set('server.syncOptions', {
    open: true,
    browser: ['google chrome', 'firefox'],
    notify: true
});
fractal.web.set('server.port', 4444);
fractal.web.set('server.watch', true);
fractal.web.set('static.path', __dirname + '/public');
fractal.web.set('static.mount', 'project-assets');

// Source: https://fractal.build/guide/cli/custom-commands

{
    const config = {
        description: 'Lists components in the project'
    };

    fractal.cli.command('list-components', function(args, done) {
        const app = this.fractal;
        for (const item of app.components.flatten()) {
            this.log(`${item.handle} - ${item.status.label}`);
        }
        done();
    }, config);
}

fractal.cli.exec('list-components');

fractal.cli.command('foo <requiredArg> [optionalArg] [anotherOptionalArg]', (args, done) => {
    console.log(args.requiredArg);
    done();
});

{
    const config = {
        options: [
            ['-p, --port <number>', 'The port to use.'],
        ]
    };

    fractal.cli.command('foo', (args, done) => {
        // do something
        console.log(`Something was started on port ${args.options.port}`);
        done();
    }, config);
}

// Source: https://fractal.build/guide/integration/build-tools

import * as gulp from 'gulp';
{
    /*
     * Configure a Fractal instance.
     *
     * This configuration could also be done in a separate file, provided that this file
     * then imported the configured fractal instance from it to work with in your Gulp tasks.
     * i.e. const fractal = require('./my-fractal-config-file');
     */

    fractal.set('project.title', 'FooCorp Component Library'); // title for the project
    fractal.web.set('builder.dest', 'build'); // destination for the static export
    fractal.docs.set('path', `${__dirname}/docs`); // location of the documentation directory.
    fractal.components.set('path', `${__dirname}/components`); // location of the component directory.

    // any other configuration or customisation here

    const logger = fractal.cli.console; // keep a reference to the fractal CLI console utility

    /*
     * Start the Fractal server
     *
     * In this example we are passing the option 'sync: true' which means that it will
     * use BrowserSync to watch for changes to the filesystem and refresh the browser automatically.
     * Obviously this is completely optional!
     *
     * This task will also log any errors to the console.
     */

    gulp.task('fractal:start', () => {
        const server = fractal.web.server({
            sync: true
        });
        server.on('error', err => logger.error(err.message));
        return server.start().then(() => {
            logger.success(`Fractal server is now running at ${server.url}`);
        });
    });

    /*
     * Run a static export of the project web UI.
     *
     * This task will report on progress using the 'progress' event emitted by the
     * builder instance, and log any errors to the terminal.
     *
     * The build destination will be the directory specified in the 'builder.dest'
     * configuration option set above.
     */

    gulp.task('fractal:build', () => {
        const builder = fractal.web.builder();
        builder.on('progress', (completed, total) => logger.update(`Exported ${completed} of ${total} items`, 'info'));
        builder.on('error', err => logger.error(err.message));
        return builder.build().then(() => {
            logger.success('Fractal build completed!');
        });
    });
}
