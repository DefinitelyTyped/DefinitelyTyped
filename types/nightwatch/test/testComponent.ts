import { NightwatchTests } from 'nightwatch';

const componentTesting: NightwatchTests = {
    'Demo component testing': () => {
        const reactComponent = browser.mountReactComponent('react.tsx');
        browser.expect.element(reactComponent).to.be.present;
        browser.expect.element('h1').text.to.equal('Hello World');
    },
};
