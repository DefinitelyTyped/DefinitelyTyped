import * as NodeHelper from 'node_helper';

Module.register('test', {});
interface TestConfig {
    bla: number;
    blubb: string;
    locale?: string;
}

Module.register<TestConfig>('test', {
    defaults: {
        bla: 1,
        blubb: 'abc',
        locale: config.locale || 'de',
    },
    config: {
        bla: 1,
        blubb: 'abc',
    },
    getHeader() {
        this.name;
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
    getScripts() {
        return ['one', 'two'];
    },
    requiresVersion: '1.2.3',
    resume() {
        console.log('resume');
        this.translate('hello');
        this.translate('hello', ['abc', 'def']);
        this.config.bla;
        this.config.blubb;
        this.config.locale;
        this.data.path;
        this.file('abc');
        this.sendNotification('test', {});
        this.sendSocketNotification('test', {});
        this.hide();
        this.hide(100);
        this.hide(100, () => {});
        this.hide(100, () => {}, { lockString: this.identifier });
        this.show();
        this.show(100);
        this.show(100, () => {});
        this.show(100, () => {}, { lockString: this.identifier, force: true, onError: () => {} });
    },
    socketNotificationReceived(notification: string, payload: any) {
        if (notification === 'test') {
            console.log(payload);
        }
    },
    notificationReceived(notification: string, payload: any) {
        if (notification === 'test') {
            console.log(payload);
        }
    },
    start() {
        console.log('started');
    },
    suspend() {
        console.log('suspended');
    },
    loaded() {
        console.log('loaded');
        this.myCustom();
    },
    myCustom(): string {
        return 'abc';
    },
    blabla(): number {
        this.config;
        return 3;
    },
    hidden: false,
});

NodeHelper.create({
    start() {
        return;
    },
    stop() {
        this.name;
        this.init();
        this.requiresVersion === 'abc';
        this.sendSocketNotification('abc', {});
        this.path;
    },
    socketNotificationReceived(notification, payload) {
        notification === 'abc';
        this.myCustom();
    },
    myCustom() {
        console.log('hi');
    },
});
