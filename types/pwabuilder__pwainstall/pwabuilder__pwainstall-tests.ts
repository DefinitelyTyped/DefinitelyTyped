import * as PWAInstall from 'pwabuilder__pwainstall';

const example: PWAInstall.Component = {
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
