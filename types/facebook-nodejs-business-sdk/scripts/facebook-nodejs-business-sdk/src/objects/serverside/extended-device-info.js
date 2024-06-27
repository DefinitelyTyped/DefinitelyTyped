/**
 * Copyright (c) 2017-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 * @flow
 */

export default class ExtendedDeviceInfo {

    _ext_info_version: string;
    _app_package_name: string;
    _short_version: string;
    _long_version: string;
    _os_version: string;
    _device_model_name: string;
    _locale: string;
    _timezone_abbreviation: string;
    _carrier: string;
    _screen_width: number;
    _screen_height: number;
    _screen_density: string;
    _cpu_core_count: number;
    _total_disk_space_gb: number;
    _free_disk_space_gb: number;
    _device_time_zone: string;

    constructor(ext_info_version: string, app_package_name: string, short_version: string,
        long_version: string, os_version: string, device_model_name: string, locale: string,
        timezone_abbreviation: string, carrier: string, screen_width: number, screen_height: number,
        screen_density: string, cpu_core_count: number, total_disk_space_gb: number, free_disk_space_gb: number,
        device_time_zone: string) {

        this._ext_info_version = ext_info_version;
        this._app_package_name = app_package_name;
        this._short_version = short_version;
        this._long_version = long_version;
        this._os_version = os_version;
        this._device_model_name = device_model_name;
        this._locale = locale;
        this._timezone_abbreviation = timezone_abbreviation;
        this._carrier = carrier;
        this._screen_width = screen_width;
        this._screen_height = screen_height;
        this._screen_density = screen_density;
        this._cpu_core_count = cpu_core_count;
        this._total_disk_space_gb = total_disk_space_gb;
        this._free_disk_space_gb = free_disk_space_gb;
        this._device_time_zone = device_time_zone;
    }

    get ext_info_version() {
        return this._ext_info_version;
    }

    set ext_info_version(ext_info_version: string) {
        this._ext_info_version = ext_info_version;
    }

    setExtInfoVersion(ext_info_version: string) : ExtendedDeviceInfo {
        this._ext_info_version = ext_info_version;
        return this;
    }

    get app_package_name() {
        return this._app_package_name;
    }

    set app_package_name(app_package_name: string) {
        this._app_package_name = app_package_name;
    }

    setAppPackageName(app_package_name: string) : ExtendedDeviceInfo {
        this._app_package_name = app_package_name;
        return this;
    }

    get short_version() {
        return this._short_version;
    }

    set short_version(short_version: string) {
        this._short_version = short_version;
    }

    setShortVersion(short_version: string) : ExtendedDeviceInfo {
        this._short_version = short_version;
        return this;
    }

    get long_version() {
        return this._long_version;
    }

    set long_version(long_version: string) {
        this._long_version = long_version;
    }

    setLongVersion(long_version: string) : ExtendedDeviceInfo {
        this._long_version = long_version;
        return this;
    }

    get os_version() {
        return this._os_version;
    }

    set os_version(os_version: string) {
        this._os_version = os_version;
    }

    setOsVersion(os_version: string) : ExtendedDeviceInfo {
        this._os_version = os_version;
        return this;
    }

    get device_model_name() {
        return this._device_model_name;
    }

    set device_model_name(device_model_name: string) {
        this._device_model_name = device_model_name;
    }

    setDeviceModelName(device_model_name: string) : ExtendedDeviceInfo {
        this._device_model_name = device_model_name;
        return this;
    }

    get locale() {
        return this._locale;
    }

    set locale(locale: string) {
        this._locale = locale;
    }

    setLocale(locale: string) : ExtendedDeviceInfo {
        this._locale = locale;
        return this;
    }

    get timezone_abbreviation() {
        return this._timezone_abbreviation;
    }

    set timezone_abbreviation(timezone_abbreviation: string) {
        this._timezone_abbreviation = timezone_abbreviation;
    }

    setTimezoneAbbreviation(timezone_abbreviation: string) : ExtendedDeviceInfo {
        this._timezone_abbreviation = timezone_abbreviation;
        return this;
    }

    get carrier() {
        return this._carrier;
    }

    set carrier(carrier: string) {
        this._carrier = carrier;
    }

    setCarrier(carrier: string) : ExtendedDeviceInfo {
        this._carrier = carrier;
        return this;
    }

    get screen_width() {
        return this._screen_width;
    }

    set screen_width(screen_width: number) {
        this._screen_width = screen_width;
    }

    setScreenWidth(screen_width: number) : ExtendedDeviceInfo {
        this._screen_width = screen_width;
        return this;
    }

    get screen_height() {
        return this._screen_height;
    }

    set screen_height(screen_height: number) {
        this._screen_height = screen_height;
    }

    setScreenHeight(screen_height: number) : ExtendedDeviceInfo {
        this._screen_height = screen_height;
        return this;
    }

    get screen_density() {
        return this._screen_density;
    }

    set screen_density(screen_density: string) {
        this._screen_density = screen_density;
    }

    setScreenDensity(screen_density: string) : ExtendedDeviceInfo {
        this._screen_density = screen_density;
        return this;
    }

    get cpu_core_count() {
        return this._cpu_core_count;
    }

    set cpu_core_count(cpu_core_count: number) {
        this._cpu_core_count = cpu_core_count;
    }

    setCpuCoreCount(cpu_core_count: number) : ExtendedDeviceInfo {
        this._cpu_core_count = cpu_core_count;
        return this;
    }

    get total_disk_space_gb() {
        return this._total_disk_space_gb;
    }

    set total_disk_space_gb(total_disk_space_gb: number) {
        this._total_disk_space_gb = total_disk_space_gb;
    }

    setTotalDiskSpaceGb(total_disk_space_gb: number) : ExtendedDeviceInfo {
        this._total_disk_space_gb = total_disk_space_gb;
        return this;
    }

    get free_disk_space_gb() {
        return this._free_disk_space_gb;
    }

    set free_disk_space_gb(free_disk_space_gb: number) {
        this._free_disk_space_gb = free_disk_space_gb;
    }

    setFreeDiskSpaceGb(free_disk_space_gb: number) : ExtendedDeviceInfo {
        this._free_disk_space_gb = free_disk_space_gb;
        return this;
    }

    get device_time_zone() {
        return this._device_time_zone;
    }

    set device_time_zone(device_time_zone: string) {
        this._device_time_zone = device_time_zone;
    }

    setDeviceTimeZone(device_time_zone: string) : ExtendedDeviceInfo {
        this._device_time_zone = device_time_zone;
        return this;
    }

    normalize(): Object {
        const EXT_INFO_VERSION        = 0;
        const APP_PACKAGE_NAME        = 1;
        const SHORT_VERSION           = 2;
        const LONG_VERSION            = 3;
        const OS_VERSION              = 4;
        const DEVICE_MODEL_NAME       = 5;
        const LOCALE                  = 6;
        const TIMEZONE_ABBREVIATION   = 7;
        const CARRIER                 = 8;
        const SCREEN_WIDTH            = 9;
        const SCREEN_HEIGHT           = 10;
        const SCREEN_DENSITY          = 11;
        const CPU_CORE_COUNT          = 12;
        const TOTAL_DISK_SPACE_GB     = 13;
        const FREE_DISK_SPACE_GB      = 14;
        const DEVICE_TIME_ZONE        = 15;

        const extDeviceInfo = {};

        extDeviceInfo[EXT_INFO_VERSION] = this._ext_info_version;
        extDeviceInfo[APP_PACKAGE_NAME] = this._app_package_name;
        extDeviceInfo[SHORT_VERSION] = this._short_version;
        extDeviceInfo[LONG_VERSION] = this._long_version;
        extDeviceInfo[OS_VERSION] =  this._os_version;
        extDeviceInfo[DEVICE_MODEL_NAME] = this._device_model_name;
        extDeviceInfo[LOCALE] = this._locale;
        extDeviceInfo[TIMEZONE_ABBREVIATION] = this._timezone_abbreviation;
        extDeviceInfo[CARRIER] = this._carrier;
        extDeviceInfo[SCREEN_WIDTH] = this._screen_width;
        extDeviceInfo[SCREEN_HEIGHT] = this._screen_height;
        extDeviceInfo[SCREEN_DENSITY] = this._screen_density;
        extDeviceInfo[CPU_CORE_COUNT] = this._cpu_core_count;
        extDeviceInfo[TOTAL_DISK_SPACE_GB] = this._total_disk_space_gb;
        extDeviceInfo[FREE_DISK_SPACE_GB] = this._free_disk_space_gb;
        extDeviceInfo[DEVICE_TIME_ZONE] = this._device_time_zone;

        return extDeviceInfo;
    }

    toJson(): Object{
        return {
            'ext_info_version': this._ext_info_version,
            'app_package_name': this._app_package_name,
            'short_version': this._short_version,
            'long_version': this._long_version,
            'os_version':  this._os_version,
            'device_model_name': this._device_model_name,
            'locale': this._locale,
            'timezone_abbreviation': this._timezone_abbreviation,
            'carrier': this._carrier,
            'screen_width': this._screen_width,
            'screen_height': this._screen_height,
            'screen_density': this._screen_density,
            'cpu_core_count': this._cpu_core_count,
            'total_disk_space_gb': this._total_disk_space_gb,
            'free_disk_space_gb': this._free_disk_space_gb,
            'device_time_zone': this._device_time_zone
        };
    }
}
