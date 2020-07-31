import { createDoc } from 'apidoc';

const apidocOutput = createDoc({
    dest: '',
    template: '',
    templateSingleFile: '',
    debug: true,
    single: true,
    silent: true,
    verbose: true,
    simulate: true,
    parse: true,
    colorize: true,
    markdown: true,
    config: '',
    apiprivate: true,
    encoding: '',
    excludeFilters: [],
    includeFilters: [],
    filters: {
        api: {
            postFilter: (parsedFiles, parsedFilenames) => { }
        }
    },
    languages: {
        default: {
            docBlocksRegExp: /\/\*\*.*\*\//,
            inlineRegExp: /\@/,
        }
    },
    parsers: {
        parse: (content, source, messagesg) => ({
            name: '',
            title: '',
            description: '',
        }),
        path: '',
        getGroup: () => '',
        markdownFields: [],
        markdownRemovePTags: [],
    },
    workers: {
        work: {}
    },
    lineEnding: "LF",
    copyDefinitions: false,
    filterBy: '',
});

if (typeof apidocOutput !== 'boolean') {
    const { data, project } = apidocOutput;
}
