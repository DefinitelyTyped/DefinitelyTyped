import { TurboModule, TurboModuleRegistry } from 'react-native';
'use strict';

export interface SomeConstants {
    x: string;
    y: number;
    z: boolean;
}

export interface SampleSpec extends TurboModule {
    getConstants(): SomeConstants
    doSomething(): void;
}

export default TurboModuleRegistry.getEnforcing<SampleSpec>('Sample');
