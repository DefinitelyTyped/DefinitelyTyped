import * as verovio from 'verovio';
import createVerovioModule from 'verovio/wasm';
import { VerovioToolkit } from 'verovio/esm';

(async () => {
    const VerovioModule = await createVerovioModule();
    const tk = new VerovioToolkit(VerovioModule);
    // $ExpectType AvailableOptions
    tk.getAvailableOptions();
    // $ExpectType VerovioOptions
    tk.getOptions();
})();

verovio.module.onRuntimeInitialized = () => {
    verovio.module.FS_unlink('/data/text/Times.xml');
    verovio.module.FS_createDataFile(
        '/data/text',
        'Times.xml',
        `<?xml version="1.0" encoding="UTF-8"?>`,
        true,
        true,
        false,
    );
    const vrvTk = new verovio.toolkit();
    // $ExpectType VerovioOptions
    vrvTk.getOptions();
    vrvTk.setOptions({ adjustPageHeight: true, barLineWidth: 0.1 });
    vrvTk.loadData('<MEIDATA>');
    vrvTk.renderToSVG(1);
    const { groups } = vrvTk.getAvailableOptions();
    const definitions = Object.keys(groups)
        .map(key => Object.keys(groups[key].options).map(option => groups[key].options[option]))
        .reduce((result, array) => [...result, ...array], []);
    const intDefinitions = definitions.filter(d => d.type === 'int') as verovio.IntOption[];
    const firstDefinition = definitions[0];
    if (firstDefinition.type === 'int') {
        // $ExpectType IntOption
        const def = firstDefinition;
    }
    const { attributeName } = vrvTk.getElementAttr('elementId');
};
