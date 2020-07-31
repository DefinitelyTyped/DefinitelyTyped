import { createDoc } from 'apidoc';

const apidocOutput = createDoc({
    excludeFilters: [''],
    includeFilters: [''],
    src: '',
    dest: '',
    template: '',
    templateSingleFile: '',
    config: '',
    apiprivate: true,
    verbose: true,
    single: true,
    debug: true,
    parse: true,
    colorize: true,
    filters: { aFilter: '' },
    languages: { aLanguage: '' },
    parsers: { aParser: '' },
    workers: { aWorker: '' },
    silent: true,
    simulate: true,
    markdown: true,
    lineEnding: '',
    encoding: '',
    copyDefinitions: true,
    filterBy: '',
});

if (typeof apidocOutput !== 'boolean') {
    const { data, project } = apidocOutput;
}
