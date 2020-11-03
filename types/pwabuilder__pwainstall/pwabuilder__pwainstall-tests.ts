import * as pwainstall from 'pwabuilder__pwainstall';

const example: pwainstall.Component = {
    openmodal: true,
    usecustom: false,
    manifestpath: 'some path',
    explainer: 'explanation',
    featuresheader: 'features header',
    descriptionheader: 'description header',
    installbuttontext: 'install button text',
    cancelbuttontext: 'some text',
    iosinstallinfotext: 'ios install button text',
    getInstalledStatus: () => true,
    openPrompt: () => {},
    closePrompt: () => {},
};
