import React = require('react');
import { BannerProps } from '../../helper-types';
import NativeAdsManager = require('./NativeAdsManager');

interface NativeAdWrapperProps extends BannerProps {
    validAdTypes?: string[];
    customTemplateIds?: string[];
    adsManager?: NativeAdsManager;
    correlator?: string;
    adLoaderIndex?: string;
}

declare function withNativeAd<P>(Component: React.ComponentType<P>): React.ComponentClass<P & NativeAdWrapperProps>;

export = withNativeAd;
