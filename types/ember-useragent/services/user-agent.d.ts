import Service from '@ember/service';
import { UAParserInstance, IBrowser, ICPU, IDevice, IEngine, IOS } from 'ua-parser-js';
import FastBoot from 'ember-cli-fastboot/services/fastboot';

export interface BrowserInfo {
    info: IBrowser;
    isChrome: boolean;
    isChromeHeadless: boolean;
    isEdge: boolean;
    isFirefox: boolean;
    isIE: boolean;
    isSafari: boolean;
}

export interface DeviceInfo {
    info: IDevice;
    isConsole: boolean;
    isDesktop: boolean;
    isMobile: boolean;
    isTablet: boolean;
}

export interface EngineInfo {
    info: IEngine;
    isWebkit: boolean;
}

export interface OSInfo {
    info: IOS;
    isAndroid: boolean;
    isIOS: boolean;
    isLinux: boolean;
    isMacOS: boolean;
    isWindows: boolean;
}

export default class UserAgentService extends Service {
    browser: BrowserInfo;

    cpu: ICPU;

    device: DeviceInfo;

    engine: EngineInfo;

    /**
     * @deprecated Inject the `fastboot` service yourself instead.'
     */
    fastboot: FastBoot | undefined;

    /**
     * @deprecated Inject the `fastboot` service yourself and get `fastboot.isFastBoot` instead.'
     */
    isFastBoot: boolean;

    os: OSInfo;

    /**
     * @deprecated Usage of the private property `parser` is deprecated. If you need
     * to fiddle around with this private property, please open an issue and we can discuss.
     */
    parser: UAParserInstance;

    /**
     * @deprecated Usage of the private method `setupService` is deprecated. To force an update, set the `userAgent` property.
     */
    setupService(): void;

    /**
     * @deprecated Usage of the property `UAParser` is deprecated.
     * To get the UAParser class, import it as `import UAParser from \'ua-parser-js\';`.
     * To get the instance of that class used by this service,
     * as this property previously incorrectly returned, get the `parser` property.
     */
    UAParser: UAParserInstance;

    userAgent: string;
}
