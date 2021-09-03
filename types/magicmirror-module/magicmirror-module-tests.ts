Module.register('test', {});
interface TestConfig {
    bla: number;
    blubb: string;
}

Module.register<TestConfig>('test', {
    defaults: {
        bla: 1,
        blubb: 'abc',
    },
    config: {
        bla: 1,
        blubb: 'abc',
    },
    getHeader() {
        return config.address;
    },
    getDom() {
        return new HTMLElement();
    },
    getStyles() {
        return ['abc'];
    },
    getTemplate() {
        return 'abc';
    },
    getTemplateData() {
        return { bla: 123, blubb: 'abc' };
    },
    getTranslations() {
        return { de: 'bla', en: 'blubb' };
    },
});

node_helper.create({
    start() {
        return;
    },
});
