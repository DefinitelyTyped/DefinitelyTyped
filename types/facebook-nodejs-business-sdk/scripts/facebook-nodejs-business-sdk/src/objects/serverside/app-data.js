/**
 * Copyright (c) 2017-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 * @flow
 */

import ExtendedDeviceInfo from './extended-device-info';

export default class AppData {

    _application_tracking_enabled: bool;
    _advertiser_tracking_enabled: bool;

    _campaign_ids: string;
    _consider_views: bool;
    _extinfo: ExtendedDeviceInfo;
    _include_dwell_data: bool;
    _include_video_data: bool;
    _install_referrer: string;
    _installer_package: string;
    _receipt_data: string;
    _url_schemes: string;
    _windows_attribution_id: string;

    constructor(application_tracking_enabled: bool, advertiser_tracking_enabled: bool,
        campaign_ids: string, consider_views: bool, extinfo: ExtendedDeviceInfo, include_dwell_data: bool,
        include_video_data: bool, install_referrer: string, installer_package: string,
        receipt_data: string, url_schemes: string, windows_attribution_id: string) {

        this._application_tracking_enabled = application_tracking_enabled;
        this._advertiser_tracking_enabled = advertiser_tracking_enabled;
        this._campaign_ids = campaign_ids;
        this._consider_views = consider_views;
        this._extinfo = extinfo;
        this._include_dwell_data = include_dwell_data;
        this._include_video_data = include_video_data;
        this._install_referrer = install_referrer;
        this._installer_package = installer_package;
        this._receipt_data = receipt_data;
        this._url_schemes = url_schemes;
        this._windows_attribution_id = windows_attribution_id;
    }

    get application_tracking_enabled() {
        return this._application_tracking_enabled;
    }

    set application_tracking_enabled(application_tracking_enabled: bool) {
        this._application_tracking_enabled = application_tracking_enabled;
    }

    setApplicationTrackingEnabled(application_tracking_enabled: bool) : AppData {
        this._application_tracking_enabled = application_tracking_enabled;
        return this;
    }

    get advertiser_tracking_enabled() {
        return this._advertiser_tracking_enabled;
    }

    set advertiser_tracking_enabled(advertiser_tracking_enabled: bool){
        this._advertiser_tracking_enabled = advertiser_tracking_enabled;
    }

    setAdvertiserTrackingEnabled(advertiser_tracking_enabled: bool) : AppData {
        this._advertiser_tracking_enabled = advertiser_tracking_enabled;
        return this;
    }

    get campaign_ids() {
        return this._campaign_ids;
    }

    set campaign_ids(campaign_ids: string) {
        this._campaign_ids = campaign_ids;
    }

    setCampaignIds(campaign_ids: string) : AppData {
        this._campaign_ids = campaign_ids;
        return this;
    }

    get consider_views() {
        return this._consider_views;
    }

    set consider_views(consider_views: bool) {
        this._consider_views = consider_views;
    }

    setConsiderViews(consider_views: bool) : AppData {
        this._consider_views = consider_views;
        return this;
    }

    get extinfo() {
        return this._extinfo;
    }

    set extinfo(extinfo: ExtendedDeviceInfo) {
        this._extinfo = extinfo;
    }

    setExtinfo(extinfo: ExtendedDeviceInfo) : AppData {
        this._extinfo = extinfo;
        return this;
    }

    get include_dwell_data() {
        return this._include_dwell_data;
    }

    set include_dwell_data(include_dwell_data: bool) {
        this._include_dwell_data = include_dwell_data;
    }

    setIncludeDwellData(include_dwell_data: bool) : AppData {
        this._include_dwell_data = include_dwell_data;
        return this;
    }

    get include_video_data() {
        return this._include_video_data;
    }

    set include_video_data(include_video_data: bool) {
        this._include_video_data = include_video_data
    }

    setIncludeVideoData(include_video_data: bool) : AppData {
        this._include_video_data = include_video_data
        return this;
    }

    get install_referrer() {
        return this._install_referrer;
    }

    set install_referrer(install_referrer: string) {
        this._install_referrer = install_referrer;
    }

    setInstallReferrer(install_referrer: string) : AppData {
        this._install_referrer = install_referrer;
        return this;
    }

    get installer_package() {
        return this._installer_package;
    }

    set installer_package(installer_package: string) {
        this._installer_package = installer_package;
    }

    setInstallerPackage(installer_package: string) : AppData {
        this._installer_package = installer_package;
        return this;
    }

    get receipt_data() {
        return this._receipt_data;
    }

    set receipt_data(receipt_data: string) {
        this._receipt_data = receipt_data;
    }

    setReceiptData(receipt_data: string) : AppData {
        this._receipt_data = receipt_data;
        return this;
    }

    get url_schemes() {
        return this._url_schemes;
    }

    set url_schemes(url_schemes: string) {
        this._url_schemes = url_schemes;
    }

    setUrlSchemes(url_schemes: string) : AppData {
        this._url_schemes = url_schemes;
        return this;
    }

    get windows_attribution_id() {
        return this._windows_attribution_id;
    }

    set windows_attribution_id(windows_attribution_id: string) {
        this._windows_attribution_id = windows_attribution_id;
    }

    setWindowsAttributionId(windows_attribution_id: string) : AppData {
        this._windows_attribution_id = windows_attribution_id;
        return this;
    }

    normalize(): Object {
        const appData = {};

        appData.application_tracking_enabled = this.application_tracking_enabled;
        appData.advertiser_tracking_enabled = this.advertiser_tracking_enabled;
        appData.campaign_ids = this.campaign_ids;
        appData.consider_views = this.consider_views;
        appData.extinfo = this.extinfo.normalize();
        appData.include_dwell_data = this.include_dwell_data;
        appData.include_video_data = this.include_video_data;
        appData.install_referrer = this.install_referrer;
        appData.installer_package = this.installer_package;
        appData.receipt_data = this.receipt_data;
        appData.url_schemes = this.url_schemes;
        appData.windows_attribution_id = this.windows_attribution_id;

        return appData;
    }

    toJson(): Object {
        return {
            'application_tracking_enabled': this._application_tracking_enabled,
            'advertiser_tracking_enabled': this._advertiser_tracking_enabled,
            'campaign_ids': this._campaign_ids,
            'consider_views': this._consider_views,
            'extinfo': this._extinfo.normalize(),
            'include_dwell_data': this._include_dwell_data,
            'include_video_data': this._include_video_data,
            'install_referrer': this._install_referrer,
            'installer_package': this._installer_package,
            'receipt_data': this._receipt_data,
            'url_schemes': this._url_schemes,
            'windows_attribution_id': this._windows_attribution_id
        };
    }
}
