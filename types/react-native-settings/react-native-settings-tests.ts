import RNSettings from 'react-native-settings';
import { DeviceEventEmitter } from 'react-native';

// These tests come directly from the README of 'react-native-settings'
// and were then slightly adapted to get types to pass

// Android and iOS
RNSettings.getSetting(RNSettings.LOCATION_SETTING).then(result => {
    if (result === RNSettings.ENABLED) {
        console.log('location is enabled');
    } else {
        console.log('location is disabled');
    }
});

// Android Only
RNSettings.getSetting(RNSettings.AIRPLANE_MODE_SETTING).then(result => {
    if (result === RNSettings.ENABLED) {
        console.log('airplane mode is enabled');
    } else {
        console.log('airplane mode is disabled');
    }
});

RNSettings.getSetting(RNSettings.CAPTIONING_SETTINGS).then(result => {
    if (result === RNSettings.ENABLED) {
        console.log('captioning is enabled');
    } else {
        console.log('captioning is disabled');
    }
});

RNSettings.openSetting(RNSettings.ACTION_LOCATION_SOURCE_SETTINGS).then(result => {
    if (result === RNSettings.ENABLED) {
        console.log('location is enabled');
    }
});

RNSettings.openSetting(RNSettings.ACTION_AIRPLANE_MODE_SETTINGS).then(result => {
    if (result === RNSettings.ENABLED) {
        console.log('airplane mode is enabled');
    }
});

RNSettings.openSetting(RNSettings.ACTION_CAPTIONING_SETTINGS).then(result => {
    if (result === RNSettings.ENABLED) {
        console.log('captioning is enabled');
    }
});

const handleGPSProviderEvent = (e: any) => {
    if (e[RNSettings.LOCATION_SETTING] === RNSettings.DISABLED) {
        console.log('Location was disabled');
    }
};

const handleAirplaneModeEvent = (e: any) => {
    if (e[RNSettings.AIRPLANE_MODE_SETTING] === RNSettings.ENABLED) {
        console.log('airplane mode was enabled');
    }
};

const handleCaptioningEvent = (e: any) => {
    if (e[RNSettings.CAPTIONING_SETTINGS] === RNSettings.ENABLED) {
        console.log('captioning was enabled');
    }
};

DeviceEventEmitter.addListener(RNSettings.GPS_PROVIDER_EVENT, handleGPSProviderEvent);
DeviceEventEmitter.addListener(RNSettings.AIRPLANE_MODE_EVENT, handleAirplaneModeEvent);
DeviceEventEmitter.addListener(RNSettings.CAPTIONING_EVENT, handleCaptioningEvent);
