import React = require("react");
import { BannerProps } from "../../helper-types";
import NativeAdsManager = require("./NativeAdsManager");

interface NativeAdWrapperProps extends BannerProps {
    validAdTypes?: string[] | undefined;
    customTemplateIds?: string[] | undefined;
    adsManager?: NativeAdsManager | undefined;
    correlator?: string | undefined;
    adLoaderIndex?: string | undefined;
}

declare function withNativeAd<P>(Component: React.ComponentType<P>): React.ComponentClass<P & NativeAdWrapperProps>;

export = withNativeAd;
