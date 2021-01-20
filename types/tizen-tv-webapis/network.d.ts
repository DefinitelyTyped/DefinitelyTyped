/**
 * This module defines the network information retrieval functionalities provided by the Tizen Samsung TV Product API.
 * @privilegeLevel Public
 * @privilegeName http://developer.samsung.com/privilege/network.public
 * @since 2.3
 */
export interface NetworkManager {
    NetworkIpMode: {
        /**
         * No network IP mode configured
         */
        NONE: 0;

        /**
         * Connected to wired or wireless IPv4 network through static IP configuration
         */
        STATIC: 1;

        /**
         * Connected to wired or wireless IPv6 network through dynamic IP configuration
         */
        DYNAMIC: 2;

        /**
         *  DHCP: Connected to wired or wireless IPv4 network through automatic IP configuration
         */
        AUTO: 3;

        /**
         * Connected to cellular network through fixed IP configuration
         */
        FIXED: 4;

        /**
         * No wired or wireless connection
         */
        UNKNOWN: 5;
    };

    NetworkActiveConnectionType: {
        /**
         * No network configured
         */
        DISCONNECTED: 0;
        /**
         * Connected to a Wi-Fi network.
         */
        WIFI: 1;
        /**
         * Connected to a cellular network.
         */
        CELLULAR: 2;
        /**
         * Connected to an Ethernet network.
         */
        ETHERNET: 3;
    };

    NetworkState: {
        /**
         * LAN cable connected
         */
        LAN_CABLE_ATTACHED: 1;

        /**
         * LAN cable disconnected
         */
        LAN_CABLE_DETACHED: 2;

        /**
         * LAN cable connection state unknown
         */
        LAN_CABLE_STATE_UNKNOWN: 3;

        /**
         * Gateway connected
         */
        GATEWAY_CONNECTED: 4;

        /**
         * Gateway disconnected
         */
        GATEWAY_DISCONNECTED: 5;

        /**
         * Wi-Fi module connected
         */
        WIFI_MODULE_STATE_ATTACHED: 6;

        /**
         * Wi-Fi module disconnected
         */
        WIFI_MODULE_STATE_DETACHED: 7;

        /**
         * Wi-Fi module connection state unknown
         */
        WIFI_MODULE_STATE_UNKNOWN: 8;
    };

    NetworkWiFiSecurityMode: {
        /**
         * WEP security mode
         */
        WEP: 1;

        /**
         * PSK security mode
         */
        WPA_PSK: 2;

        /**
         * WPA2_PSK security mode
         */
        WPA2_PSK: 3;

        /**
         * EAP security mode
         */
        EAP: 4;

        /**
         * Open security mode
         */
        NONE: 5;

        /**
         * Security mode unknown
         */
        UNKNOWN: 6;
    };

    NetworkWiFiEncryptionType: {
        /**
         * WEP encryption
         */
        WEP: 1;

        /**
         * TKIP encryption
         */
        TKIP: 2;

        /**
         * AES encryption
         */
        AES: 3;

        /**
         * TKIP_AES_MIXED encryption
         */
        TKIP_AES_MIXED: 4;

        /**
         * No encryption
         */
        NONE: 5;

        /**
         * Encryption type unknown
         */
        UNKNOWN: 6;
    };

    /**
     * Retrieves the TV network module version.
     * @returns string Network plugin module version
     * @throw WebAPIException `SecurityError`
     * @since 2.3
     * @privilegeLevel Public
     * @privilegeName http://developer.samsung.com/privilege/network.public
     * @note Since plugin version 3.0, the NotSupportedError exception has been removed.
     */
    getVersion(): string;

    /**
     * Checks whether the TV is connected to a network gateway.
     * @returns Boolean value:
     * true: Gateway connected
     * false: Gateway is not connected
     * @throw WebAPIException `SecurityError`
     * @since 2.3
     * @privilegeLevel Public
     * @privilegeName http://developer.samsung.com/privilege/network.public
     * @note Since plugin version 3.0, if a network connection is not available, InvalidStateError is thrown instead of NotSupportedError.
     */
    isConnectedToGateway(): boolean;
    /**
     * Retrieves the TV's IP configuration mode.
     * @throw WebAPIException `SecurityError`
     * @returns unsigned long Network IP mode
     *   "NONE":0
     *   "STATIC": 1
     *   "DYNAMIC": 2
     *   "AUTO": 3
     *   "FIXED": 4
     *   "UNKNOWN": 5
     * @since 2.3
     * @privilegeLevel Public
     * @privilegeName http://developer.samsung.com/privilege/network.public
     * @note Since plugin version 3.0, the NotSupportedError exception has been removed.
     */
    getIpMode(): NetworkIpMode;

    /**
     * Retrieves the TV's configured subnet mask address.
     * @throw WebAPIException `SecurityError`,`InvalidStateError`
     * @returns string Subnet mask address for the currently-configured network. Example: 255.255.255.0
     * @since 2.3
     * @privilegeLevel Public
     * @privilegeName http://developer.samsung.com/privilege/network.public
     * @note Since plugin version 3.0, if a network connection is not available, InvalidStateError is thrown instead of NotSupportedError.
     */
    getSubnetMask(): string;

    /**
     * Retrieves the TV's configured gateway address.
     * @throw WebAPIException `SecurityError`,`InvalidStateError`
     * @returns string Gateway address for the currently-configured network
     * Example: 192.168.0.1
     * @since 2.3
     * @privilegeLevel Public
     * @privilegeName http://developer.samsung.com/privilege/network.public
     * @note Since plugin version 3.0, if a network connection is not available, InvalidStateError is thrown instead of NotSupportedError.
     */
    getGateway(): string;

    /**
     * Retrieves the network device's MAC address.
     * @throw WebAPIException `SecurityError`,`InvalidStateError`
     * @returns string MAC address for the currently-configured network. Example: 50:B7:A3:C2:96:11
     * @since 2.3
     * @privilegeLevel Public
     * @privilegeName http://developer.samsung.com/privilege/network.public
     * @note Since plugin version 3.0, if a network connection is not available, InvalidStateError is thrown instead of NotSupportedError.
     */
    getMac(): string;

    /**
     * Retrieves the TV's configured DNS address.
     * @throw WebAPIException `SecurityError`, `InvalidStateError`
     * @returns string DNS address for the currently-configured network. Example: 192.168.0.1
     * @since 2.3
     * @privilegeLevel Public
     * @privilegeName http://developer.samsung.com/privilege/network.public
     * @note Since plugin version 3.0, if a network connection is not available, InvalidStateError is thrown instead of NotSupportedError.
     */
    getDns(): string;

    /**
     * Retrieves the TV's configured IP address.
     * @throw WebAPIException `SecurityError`,`InvalidStateError`
     * @returns string IP address for the currently-configured network
     * Example: 192.168.0.11
     * @code
     * @endcode
     * @since 2.3
     * @privilegeLevel Public
     * @privilegeName http://developer.samsung.com/privilege/network.public
     * @note Since plugin version 3.0, if a network connection is not available, InvalidStateError is thrown instead of NotSupportedError.
     */
    getIp(): string;

    /**
     * Retrieves the TV's configured name when TV is connected to a network.
     * @throw WebAPIException `SecurityError`,`InvalidStateError`
     * @returns string TV Name for any connected network. Example: Tizen_Device
     * @since 4.0
     * @privilegeLevel Public
     * @privilegeName http://developer.samsung.com/privilege/network.public
     * @note Since plugin version 3.0, if a network connection is not available, InvalidStateError is thrown instead of NotSupportedError.
     */
    getTVName(): string;

    /**
     * Retrieves the TV's currently-active connection type.
     * @throw WebAPIException `SecurityError`
     * @returns NetworkActiveConnectionType Currently-active network connection type."DISCONNECTED": 0, "WIFI": 1, "CELLULAR": 2, "ETHERNET": 3
     * @since 2.3
     * @privilegeLevel Public
     * @privilegeName http://developer.samsung.com/privilege/network.public
     */
    getActiveConnectionType(): NetworkActiveConnectionType;

    /**
     * Registers an asynchronous event listener.
     * @throw `SecurityError``TypeMismatchError`
     * @returns number Application async listener ID
     * @param listener NetworkStateChangedCallback. For example: listenerID = network.addNetworkStateChangeListener(onChange);
     * @since 2.3
     * @privilegeLevel Public
     * @privilegeName http://developer.samsung.com/privilege/network.public
     * @note Since plugin version 3.0, if an input parameter is not compatible with its expected type, TypeMismatchError is thrown instead of NotSupportedError.
     * @note Since plugin version 3.0, the NotSupportedError exception has been removed.
     */
    addNetworkStateChangeListener(listener: NetworkStateChangedCallback): number;

    /**
     * Unregisters an asynchronous event listener.
     * @throw WebAPIException `SecurityError`,`TypeMismatchError`,`InvalidValuesError`,
     * @param listenerId ListenerID to be removed
     * @since 2.3
     * @privilegeLevel Public
     * @privilegeName http://developer.samsung.com/privilege/network.public
     * @note Since plugin version 3.0, if the listenerId value is not the same as the value generated by addNetworkStateChangeListener, InvalidValuesError is thrown instead of NotSupportedError.
     */
    removeNetworkStateChangeListener(listenerId: number): void;

    /**
     * Retrieves the Wi-Fi network SSID. Works only when the active connection type is Wi-Fi.
     * @throw WebAPIException `SecurityError`,`InvalidStateError`
     * @returns string Wi-Fi network SSID. Example: Strawbarry
     * @since 2.3
     * @privilegeName http://developer.samsung.com/privilege/network.public
     * @version 1.0
     * @note Since plugin version 3.0, if a network connection is not available, InvalidStateError is thrown instead of NotSupportedError.
     */
    getWiFiSsid(): string;

    /**
     * Retrieves the Wi-Fi signal strength. Works only when the active connection type is Wi-Fi.
     * @throw WebAPIException`SecurityError`,`InvalidStateError`
     * @returns number Signal strength level. Valid values are 1 to 5. Signal strength is strongest when the value is 5.
     * 8dBm
     * 8 ~ -77dBm
     * 7 ~ -66dBm
     * 6 ~ -55dBm
     * 5dBm
     * @since 2.3
     * @privilegeLevel Public
     * @privilegeName http://developer.samsung.com/privilege/network.public
     * @note Since plugin version 3.0, if a network connection is not available, InvalidStateError is thrown instead of NotSupportedError.
     */
    getWiFiSignalStrengthLevel(): number;

    /**
     * Retrieves the Wi-Fi security mode. Works only when the active connection type is Wi-Fi.
     * @throw WebAPIException`SecurityError`,`InvalidStateError`
     * @returns unsigned long Wi-Fi security mode
     *   "WEP": 1
     *   "WPA_PSK": 2
     *   "WPA2_PSK": 3
     *   "EAP": 4
     *   "NONE": 5
     *   "UNKNOWN": 6
     * @since 2.3
     * @privilegeLevel Public
     * @privilegeName http://developer.samsung.com/privilege/network.public
     * @note Since plugin version 3.0, if a network connection is not available, InvalidStateError is thrown instead of NotSupportedError.
     */
    getWiFiSecurityMode(): NetworkWiFiSecurityMode;

    /**
     * Retrieves the Wi-Fi encryption type. Works only when the active connection type is Wi-Fi.
     * @throw WebAPIException`SecurityError`,`InvalidStateError`
     * @returns unsigned long Wi-Fi encryption type
     *   "WEP": 1
     *   "TKIP": 2
     *   "AES": 3
     *   "TKIP_AES_MIXED": 4
     *   "NONE": 5
     *  "UNKNOWN": 6
     * @since 2.3
     * @privilegeLevel Public
     * @privilegeName http://developer.samsung.com/privilege/network.public
     * @note Since plugin version 3.0, if a network connection is not available, InvalidStateError is thrown instead of NotSupportedError.
     */
    getWiFiEncryptionType(): NetworkWiFiEncryptionType;

    /**
     * Retrieves the TV's configured secondary DNS address.
     * @throw WebAPIException with error type SecurityError, if the application does not have the privilege to call this method.
     * @throw WebAPIException with error type InvalidStateError, if a network connection is not available. (Since plugin version 3.0)
     * @returns string Secondary DNS address
     * Example: 192.168.0.100
     * @since 2.3
     * @privilegeLevel Public
     * @privilegeName http://developer.samsung.com/privilege/network.public
     * @note Since plugin version 3.0, if a network connection is not available, InvalidStateError is thrown instead of NotSupportedError.
     */
    getSecondaryDns(): string;

    /**
     * Sets the DHCP option 60 vendor string. Works only when the active connection type is wired. The vendor string is updated when Udhcpc is restarted or relaunched.
     * @throw WebAPIException `SecurityError`,`InvalidStateError`,`InvalidStateError`,`TypeMismatchError`
     * @param vendorName DHCP option 60 vendor name string
     * @since 2.3
     * @privilegeLevel Partner
     * @privilegeName http://developer.samsung.com/privilege/network.dhcpoption60
     * @note Since plugin version 3.0, if a network connection is not available, InvalidStateError is thrown instead of NotSupportedError.
     * @note Since plugin version 3.0, if an input parameter is not compatible with its expected type, TypeMismatchError is thrown instead of NotSupportedError.
     */
    setDhcpOption60Field(vendorName: string): void;

    /**
     * Sets the DHCP option 60 vendor string to the default value, "udhcpc1.21.1". Works only when the active connection type is wired. The vendor string is updated when Udhcpc is restarted or relaunched.
     * @throw WebAPIException `SecurityError`,`InvalidStateError`
     * @since 2.3
     * @privilegeLevel Partner
     * @privilegeName http://developer.samsung.com/privilege/network.dhcpoption60
     * @note Since plugin version 3.0, if a network connection is not available, InvalidStateError is thrown instead of NotSupportedError.
     */
    removeDhcpOption60Field(): void;

    /**
     * Retrieves the DHCP option 60 vendor string. Works only when the active connection type is wired.
     * @throw WebAPIException `SecurityError`, `InvalidStateError`
     * @returns string Vendor-specific string. Default value is "default".
     * Example: If setDhcpOption60Field = "cisco" then getCurrentDhcpOption60Field = "cisco".
     * @since 2.3
     * @privilegeLevel Partner
     * @privilegeName http://developer.samsung.com/privilege/network.dhcpoption60
     * @note Since plugin version 3.0, if a network connection is not available, InvalidStateError is thrown instead of NotSupportedError.
     */
    getCurrentDhcpOption60Field(): string;

    /**
     * Retrieves the DHCP option 60 vendor string currently used by Udhcp. Works only when the active connection type is wired.
     * @throw WebAPIException `SecurityError`, `InvalidStateError`
     * @returns string Vendor string
     * Example: If Udhcpc is running with the default string "udhcpc1.21.1", after calling setDhcpOption60Field = "cisco", checkCurrentIpWith60Field= "udhcpc1.21.1"
     * @since 2.3
     * @privilegeLevel Partner
     * @privilegeName http://developer.samsung.com/privilege/network.dhcpoption60
     * @note Since plugin version 3.0, if a network connection is not available, InvalidStateError is thrown instead of NotSupportedError.
     */
    checkCurrentIpWith60Field(): string;
}

/**
 * Defines constants for network IP modes.
 */
export enum NetworkIpMode {
    /**
     * No network IP mode configured
     */
    NONE = 0,

    /**
     * Connected to wired or wireless IPv4 network through static IP configuration
     */
    STATIC = 1,

    /**
     * Connected to wired or wireless IPv6 network through dynamic IP configuration
     */
    DYNAMIC = 2,

    /**
     *  DHCP: Connected to wired or wireless IPv4 network through automatic IP configuration
     */
    AUTO = 3,

    /**
     * Connected to cellular network through fixed IP configuration
     */
    FIXED = 4,

    /**
     * No wired or wireless connection
     */
    UNKNOWN = 5,
}

/**
 * Defines constants for network connection types.
 */
export enum NetworkActiveConnectionType {
    /**
     * No network configured
     */
    DISCONNECTED = 0,
    /**
     * Connected to a Wi-Fi network.
     */
    WIFI = 1,
    /**
     * Connected to a cellular network.
     */
    CELLULAR = 2,
    /**
     * Connected to an Ethernet network.
     */
    ETHERNET = 3,
}

/**
 * Callback method for gateway connection state change notifications.
 * @throw WebAPIException `SecurityError`, `InvalidStateError`
 * @param state Connection state
 * @since 3.0
 * @privilegeLevel Public
 */
export interface NetworkStateChangedCallback {
    (state: NetworkState): void;
}

/**
 * Defines constants for network states.
 */
export enum NetworkState {
    /**
     * LAN cable connected
     */
    LAN_CABLE_ATTACHED = 1,

    /**
     * LAN cable disconnected
     */
    LAN_CABLE_DETACHED = 2,

    /**
     * LAN cable connection state unknown
     */
    LAN_CABLE_STATE_UNKNOWN = 3,

    /**
     * Gateway connected
     */
    GATEWAY_CONNECTED = 4,

    /**
     * Gateway disconnected
     */
    GATEWAY_DISCONNECTED = 5,

    /**
     * Wi-Fi module connected
     */
    WIFI_MODULE_STATE_ATTACHED = 6,

    /**
     * Wi-Fi module disconnected
     */
    WIFI_MODULE_STATE_DETACHED = 7,

    /**
     * Wi-Fi module connection state unknown
     */
    WIFI_MODULE_STATE_UNKNOWN = 8,
}

/**
 * Defines constants for Wi-Fi network security modes.
 */
export enum NetworkWiFiSecurityMode {
    /**
     * WEP security mode
     */
    WEP = 1,

    /**
     * PSK security mode
     */
    WPA_PSK = 2,

    /**
     * WPA2_PSK security mode
     */
    WPA2_PSK = 3,

    /**
     * EAP security mode
     */
    EAP = 4,

    /**
     * Open security mode
     */
    NONE = 5,

    /**
     * Security mode unknown
     */
    UNKNOWN = 6,
}

/**
 * Defines constants for Wi-fi network encryption types.
 */
export enum NetworkWiFiEncryptionType {
    /**
     * WEP encryption
     */
    WEP = 1,

    /**
     * TKIP encryption
     */
    TKIP = 2,

    /**
     * AES encryption
     */
    AES = 3,

    /**
     * TKIP_AES_MIXED encryption
     */
    TKIP_AES_MIXED = 4,

    /**
     * No encryption
     */
    NONE = 5,

    /**
     * Encryption type unknown
     */
    UNKNOWN = 6,
}
