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
});

if (typeof apidocOutput !== 'boolean') {
    const { data, project } = apidocOutput;
}
