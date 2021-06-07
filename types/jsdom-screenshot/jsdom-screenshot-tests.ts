import { generateImage, debug, restoreDefaultOptions, setDefaultOptions } from 'jsdom-screenshot';

generateImage();
generateImage({
    launch: { args: ['--no-sandbox'] },
});

setDefaultOptions({
    debug: true,
});

restoreDefaultOptions();

debug(document);
debug(document.body);
debug(document.getElementById('test')!);
debug();
