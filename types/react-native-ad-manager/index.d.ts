// Type definitions for react-native-ad-manager 1.2
// Project: https://github.com/NZME/react-native-ad-manager#readme
// Definitions by: zucchinho <https://github.com/zucchinho>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// Minimum TypeScript Version: 3.7

import Interstitial = require('./src/CTKAdManagerInterstitial');
import Banner = require('./src/CTKAdManagerBanner');
import NativeAdsManager = require('./src/native-ads/NativeAdsManager');
import TriggerableView = require('./src/native-ads/TriggerableViewManager');
import withNativeAd = require('./src/native-ads/withNativeAd');

export { Banner, Interstitial, NativeAdsManager, TriggerableView, withNativeAd };

export * from './helper-types';
