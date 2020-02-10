/// <reference types="node" />

import path = require('path');
import markdownMagic = require('markdown-magic');
import fs = require('fs');

const markdownPath = path.join(__dirname, 'README.md');
const markdownPaths = [path.join(__dirname, 'README.md'), path.join(__dirname, 'README2.md')];

markdownMagic(markdownPath);
markdownMagic(markdownPaths);

const customPlugin = function customPlugin(pluginOptions: any): markdownMagic.TransformFunction {
    const defaultOptions = {
        addNewLine: false,
    };
    const userOptions = pluginOptions || {};
    const pluginConfig = { ...userOptions, ...defaultOptions };
    // return the transform function
    return function myCustomTransform(content, options) {
        const newLine = pluginConfig.addNewLine ? '\n' : '';
        const updatedContent = content + newLine;
        return updatedContent;
    };
};

const customConfig: markdownMagic.Configuration = {
    matchWord: 'MD-MAGIC-EXAMPLE', // default matchWord is AUTO-GENERATED-CONTENT
    transforms: {
        /* Match <!-- AUTO-GENERATED-CONTENT:START (customTransform:optionOne=hi&optionOne=DUDE) --> */
        customTransform(content, options) {
            console.log('original content in comment block', content);
            console.log('options defined on transform', options);
            // options = { optionOne: hi, optionOne: DUDE}
            return `This will replace all the contents of inside the comment ${options.optionOne}`;
        },
        /* Match <!-- AUTO-GENERATED-CONTENT:START (RENDERDOCS:path=../file.js) --> */
        RENDERDOCS(content, options) {
            const fileContents = fs.readFileSync(options.path, 'utf8');
            // ...
            return fileContents.replace(/^\s+|\s+$/g, '');
        },
        /* Match <!-- AUTO-GENERATED-CONTENT:START (pluginExample) --> */
        pluginExample: customPlugin({ addNewLine: true }),
        /* Plugins from npm */
        // count: require('markdown-magic-wordcount'),
        // github: require('markdown-magic-github-contributors')
    },
};

/* This example callback automatically updates Readme.md and commits the changes */
const callback: markdownMagic.Callback = function autoGitCommit(err, output) {
    // output is array of file information
    output.forEach(data => {
        const mdPath = data.outputFilePath;
        if (!mdPath) return false;
    });
};

markdownMagic(markdownPath, customConfig, callback);
