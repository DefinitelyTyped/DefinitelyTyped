import { EventEmitter2 as EventEmitter } from "eventemitter2";

declare namespace nodeUnifi {
    interface SiteSysinfo {
        version: string;
        build: string;
        timezone: string;
        [key: string]: any;
    }

    interface WlanStatsSubsystem {
        subsystem: "wlan";
        num_user: number;
        num_guest: number;
        num_iot: number;
        "tx_bytes-r": number;
        "rx_bytes-r": number;
        status: string;
        num_ap: number;
        num_adopted: string;
        num_disabled: number;
        num_disconnected: number;
        num_pending: number;
    }

    interface WanStatsSubsystem {
        subsystem: "wan";
        num_gw: number;
        num_adopted: number;
        num_disconnected: number;
        num_pending: number;
        status: string;
        wan_ip: string;
        gateways: string[];
        netmask: string;
        nameservers: string[];
        num_sta: number;
        "tx_bytes-r": number;
        "rx_bytes-r": number;
        gw_mac: string;
        gw_name: string;
        "gw_system-stats": { cpu: string; mem: string; uptime: string };
        gw_version: string;
        isp_name: string;
        isp_organization: string;
        uptime_stats: Record<string, unknown>;
    }

    interface WwwStatsSubsystem {
        subsystem: "www";
        status: string;
        "tx_bytes-r": number;
        "rx_bytes-r": number;
        latency: number;
        uptime: number;
        drops: number;
        xput_up: number;
        xput_down: number;
        speedtest_status: string;
        speedtest_lastrun: number;
        speedtest_ping: number;
        gw_mac: string;
    }

    interface LanStatsSubsystem {
        subsystem: "lan";
        lap_ip: string | null;
        status: string;
        num_user: number;
        num_guest: number;
        num_iot: number;
        "tx_bytes-r": number;
        "rx_bytes-r": number;
        num_sw: number;
        num_adopted: number;
        num_disconnected: number;
        num_pending: number;
    }

    interface VpnStatsSubsystem {
        subsystem: "vpn";
        status: string;
        remote_user_enabled: boolean;
        remote_user_num_active: number;
        remote_user_num_inactive: number;
        remote_user_rx_bytes: number;
        remote_user_tx_bytes: number;
        remote_user_rx_packets: number;
        remote_user_tx_packets: number;
        site_to_site_enabled: boolean;
    }

    interface SiteStats {
        _id: string;
        external_id: string;
        attr_no_delete: boolean;
        attr_hidden_id: string;
        name: string;
        desc: string;
        num_new_alarms: number;
        health: (
            | WlanStatsSubsystem
            | WanStatsSubsystem
            | WwwStatsSubsystem
            | LanStatsSubsystem
            | VpnStatsSubsystem
        )[];
    }

    interface GuestAuthorization {
        mac: string;
        start: number;
        end: number;
        qos_rate_max_up: number;
        qos_rate_max_down: number;
        qos_usage_quota: number;
        [key: string]: any;
    }

    interface ClientDevice {
        mac: string;
        blocked?: boolean;
        name?: string;
        note?: string;
        is_wired?: boolean;
        is_guest?: boolean;
        usergroup_id?: string;
        _id?: string;
        [key: string]: any;
    }

    interface UserGroup {
        _id: string;
        name: string;
        qos_rate_max_down: number;
        qos_rate_max_up?: number;
        attr_no_delete?: boolean;
        [key: string]: any;
    }

    interface APGroup {
        name: string;
        attr_no_delete?: boolean;
        attr_hidden_id?: string;
        [key: string]: any;
    }

    interface SelfInfo {
        email: string;
        site_role: string;
        [key: string]: any;
    }

    interface FullStatus {
        meta: {
            rc: string;
            up: boolean;
        };
        [key: string]: any;
    }

    interface DeviceNameMapping {
        BZ2: {
            base_model: string;
            [key: string]: any;
        };
        [key: string]: any;
    }

    interface CreateUserResponse {
        meta: {
            rc: string;
            msg?: string;
        };
        data: ClientDevice[];
    }
}

declare class Controller extends EventEmitter {
    /**
     * Initialize a new Controller instance
     *
     * @param {string} [options.host] - Controller host IP or hostname
     * @param {number} [options.port] - Controller port
     * @param {string} [options.token2FA] - Two-factor authentication token
     * @param {string} [options.site] - Site ID to manage
     * @param {boolean} [options.sslverify] - Enable SSL verification
     * @param {number} [options.timeout] - Request timeout in milliseconds
     * @param {boolean} [options.rememberMe] - Remember login session
     */
    constructor(options?: {
        host?: string;
        port?: number;
        username?: string;
        password?: string;
        token2FA?: string | null;
        site?: string;
        sslverify?: boolean;
        timeout?: number;
        rememberMe?: boolean;
    });

    /**
     * Login to the UniFi controller - login()
     *
     * @param {string} [token2FA] - Two-factor authentication token
     * @returns {Promise<true>} - Resolves to true on success
     */
    login(
        username?: string | null,
        password?: string | null,
        token2FA?: string | null,
    ): Promise<true>;

    /**
     * Logout from the UniFi controller - logout()
     *
     * @returns {Promise<true>} - Resolves to true on success
     */
    logout(): Promise<true>;

    /**
     * Authorize a client device - authorize_guest()
     *
     * @param {string} mac - Client MAC address
     * @param {number} [minutes] - Minutes (from now) until authorization expires
     * @param {number} [up] - Upload speed limit in kbps
     * @param {number} [down] - Download speed limit in kbps
     * @param {number} [megabytes] - Data transfer limit in MB
     * @param {string} [ap_mac] - AP MAC address to which client is connected
     * @returns {Promise<nodeUnifi.GuestAuthorization[]>} - Array of authorization details
     */
    authorizeGuest(
        mac: string,
        minutes?: number | null,
        up?: number | null,
        down?: number | null,
        megabytes?: number | null,
        ap_mac?: string | null,
    ): Promise<nodeUnifi.GuestAuthorization[]>;

    /**
     * Unauthorize a client device - unauthorize_guest()
     *
     * @param {string} mac - Client MAC address
     * @returns {Promise<true>} - Resolves to true on success
     */
    unauthorizeGuest(mac: string): Promise<true>;

    /**
     * Reconnect a client device - reconnect_sta()
     *
     * @param {string} mac - Client MAC address
     * @returns {Promise<true>} - Resolves to true on success
     */
    reconnectClient(mac: string): Promise<true>;

    /**
     * Block a client device - block_sta()
     *
     * @param {string} mac - Client MAC address
     * @returns {Promise<nodeUnifi.ClientDevice[]>} - Array of updated client details
     */
    blockClient(mac: string): Promise<nodeUnifi.ClientDevice[]>;

    /**
     * Unblock a client device - unblock_sta()
     *
     * @param {string} mac - Client MAC address
     * @returns {Promise<nodeUnifi.ClientDevice[]>} - Array of updated client details
     */
    unblockClient(mac: string): Promise<nodeUnifi.ClientDevice[]>;

    /**
     * Forget one or more client devices - forget_sta()
     *
     * @param {string[]} macs - Array of client MAC addresses
     * @returns {Promise<true>} - Resolves to true on success
     */
    forgetClient(macs: string[]): Promise<true>;

    /**
     * Create a new user/client-device - create_user()
     *
     * @param {string} mac - Client MAC address
     * @param {string} user_group_id - ID of the user group
     * @param {string} [name] - Name of the client device
     * @param {boolean} [is_guest] - Whether the client is a guest
     * @param {boolean} [is_wired] - Whether the client is wired
     * @returns {Promise<nodeUnifi.CreateUserResponse>} - Response with created client details
     */
    createUser(
        mac: string,
        user_group_id: string,
        name?: string | null,
        note?: string | null,
        is_guest?: boolean | null,
        is_wired?: boolean | null,
    ): Promise<nodeUnifi.CreateUserResponse>;

    /**
     * Add/modify/remove a client device note - set_sta_note()
     *
     * @param {string} user_id - Client device ID
     * @param {string} [note] - Note to set (empty to remove)
     * @returns {Promise<nodeUnifi.ClientDevice[]>} - Array of updated client details
     */
    setClientNote(user_id: string, note?: string): Promise<nodeUnifi.ClientDevice[]>;

    /**
     * Add/modify/remove a client device name - set_sta_name()
     *
     * @param {string} user_id - Client device ID
     * @param {string} [name] - Name to set (empty to remove)
     * @returns {Promise<nodeUnifi.ClientDevice[]>} - Array of updated client details
     */
    setClientName(user_id: string, name?: string): Promise<nodeUnifi.ClientDevice[]>;

    /**
     * Fetch 5 minutes site stats - stat_5minutes_site()
     *
     * @param {number} [start] - Start timestamp (Unix milliseconds)
     * @param {number} [end] - End timestamp (Unix milliseconds)
     * @returns {Promise<Array<Record<string, any>>>} - Array of 5-minute stats
     */
    get5minSiteStats(start?: number | null, end?: number | null): Promise<Array<Record<string, any>>>;

    /**
     * Fetch hourly site stats - stat_hourly_site()
     *
     * @param {number} [start] - Start timestamp (Unix milliseconds)
     * @param {number} [end] - End timestamp (Unix milliseconds)
     * @returns {Promise<Array<Record<string, any>>>} - Array of hourly stats
     */
    getHourlySiteStats(start?: number | null, end?: number | null): Promise<Array<Record<string, any>>>;

    /**
     * Fetch daily site stats - stat_daily_site()
     *
     * @param {number} [start] - Start timestamp (Unix milliseconds)
     * @param {number} [end] - End timestamp (Unix milliseconds)
     * @returns {Promise<Array<Record<string, any>>>} - Array of daily stats
     */
    getDailySiteStats(start?: number | null, end?: number | null): Promise<Array<Record<string, any>>>;

    /**
     * Fetch monthly site stats - stat_monthly_site()
     *
     * @param {number} [start] - Start timestamp (Unix milliseconds)
     * @param {number} [end] - End timestamp (Unix milliseconds)
     * @returns {Promise<Array<Record<string, any>>>} - Array of monthly stats
     */
    getMonthlySiteStats(start?: number | null, end?: number | null): Promise<Array<Record<string, any>>>;

    /**
     * @param {number} [start] - Start timestamp (Unix milliseconds)
     * @param {number} [end] - End timestamp (Unix milliseconds)
     * @param {string} [mac] - Specific AP MAC address
     * @returns {Promise<Array<Record<string, any>>>} - Array of 5-minute AP stats
     */
    get5minApStats(
        start?: number | null,
        end?: number | null,
        mac?: string | null,
    ): Promise<Array<Record<string, any>>>;

    /**
     * @param {number} [start] - Start timestamp (Unix milliseconds)
     * @param {number} [end] - End timestamp (Unix milliseconds)
     * @param {string} [mac] - Specific AP MAC address
     * @returns {Promise<Array<Record<string, any>>>} - Array of hourly AP stats
     */
    getHourlyApStats(
        start?: number | null,
        end?: number | null,
        mac?: string | null,
    ): Promise<Array<Record<string, any>>>;

    /**
     * @param {number} [start] - Start timestamp (Unix milliseconds)
     * @param {number} [end] - End timestamp (Unix milliseconds)
     * @param {string} [mac] - Specific AP MAC address
     * @returns {Promise<Array<Record<string, any>>>} - Array of daily AP stats
     */
    getDailyApStats(
        start?: number | null,
        end?: number | null,
        mac?: string | null,
    ): Promise<Array<Record<string, any>>>;

    /**
     * @param {number} [start] - Start timestamp (Unix milliseconds)
     * @param {number} [end] - End timestamp (Unix milliseconds)
     * @param {string} [mac] - Specific AP MAC address
     * @returns {Promise<Array<Record<string, any>>>} - Array of monthly AP stats
     */
    getMonthlyApStats(
        start?: number | null,
        end?: number | null,
        mac?: string | null,
    ): Promise<Array<Record<string, any>>>;

    /**
     * @param {string} mac - Client MAC address
     * @param {number} [start] - Start timestamp (Unix milliseconds)
     * @param {number} [end] - End timestamp (Unix milliseconds)
     * @param {string[]} [attribs] - Attributes to include in stats
     * @returns {Promise<Array<Record<string, any>>>} - Array of 5-minute user stats
     */
    get5minUserStats(
        mac: string,
        start?: number | null,
        end?: number | null,
        attribs?: string[] | null,
    ): Promise<Array<Record<string, any>>>;

    /**
     * @param {string} mac - Client MAC address
     * @param {number} [start] - Start timestamp (Unix milliseconds)
     * @param {number} [end] - End timestamp (Unix milliseconds)
     * @param {string[]} [attribs] - Attributes to include in stats
     * @returns {Promise<Array<Record<string, any>>>} - Array of hourly user stats
     */
    getHourlyUserStats(
        mac: string,
        start?: number | null,
        end?: number | null,
        attribs?: string[] | null,
    ): Promise<Array<Record<string, any>>>;

    /**
     * @param {string} mac - Client MAC address
     * @param {number} [start] - Start timestamp (Unix milliseconds)
     * @param {number} [end] - End timestamp (Unix milliseconds)
     * @param {string[]} [attribs] - Attributes to include in stats
     * @returns {Promise<Array<Record<string, any>>>} - Array of daily user stats
     */
    getDailyUserStats(
        mac: string,
        start?: number | null,
        end?: number | null,
        attribs?: string[] | null,
    ): Promise<Array<Record<string, any>>>;

    /**
     * @param {string} mac - Client MAC address
     * @param {number} [start] - Start timestamp (Unix milliseconds)
     * @param {number} [end] - End timestamp (Unix milliseconds)
     * @param {string[]} [attribs] - Attributes to include in stats
     * @returns {Promise<Array<Record<string, any>>>} - Array of monthly user stats
     */
    getMonthlyUserStats(
        mac: string,
        start?: number | null,
        end?: number | null,
        attribs?: string[] | null,
    ): Promise<Array<Record<string, any>>>;

    /**
     * Fetch 5 minutes gateway stats - stat_5minutes_gateway()
     *
     * @param {number} [start] - Start timestamp (Unix milliseconds)
     * @param {number} [end] - End timestamp (Unix milliseconds)
     * @param {string[]} [attribs] - Attributes to include in stats
     * @returns {Promise<Array<Record<string, any>>>} - Array of 5-minute gateway stats
     */
    get5minGatewayStats(
        start?: number | null,
        end?: number | null,
        attribs?: string[] | null,
    ): Promise<Array<Record<string, any>>>;

    /**
     * Fetch hourly gateway stats - stat_hourly_gateway()
     *
     * @param {number} [start] - Start timestamp (Unix milliseconds)
     * @param {number} [end] - End timestamp (Unix milliseconds)
     * @param {string[]} [attribs] - Attributes to include in stats
     * @returns {Promise<Array<Record<string, any>>>} - Array of hourly gateway stats
     */
    getHourlyGatewayStats(
        start?: number | null,
        end?: number | null,
        attribs?: string[] | null,
    ): Promise<Array<Record<string, any>>>;

    /**
     * Fetch daily gateway stats - stat_daily_gateway()
     *
     * @param {number} [start] - Start timestamp (Unix milliseconds)
     * @param {number} [end] - End timestamp (Unix milliseconds)
     * @param {string[]} [attribs] - Attributes to include in stats
     * @returns {Promise<Array<Record<string, any>>>} - Array of daily gateway stats
     */
    getDailyGatewayStats(
        start?: number | null,
        end?: number | null,
        attribs?: string[] | null,
    ): Promise<Array<Record<string, any>>>;

    /**
     * Fetch monthly gateway stats - stat_monthly_gateway()
     *
     * @param {number} [start] - Start timestamp (Unix milliseconds)
     * @param {number} [end] - End timestamp (Unix milliseconds)
     * @param {string[]} [attribs] - Attributes to include in stats
     * @returns {Promise<Array<Record<string, any>>>} - Array of monthly gateway stats
     */
    getMonthlyGatewayStats(
        start?: number | null,
        end?: number | null,
        attribs?: string[] | null,
    ): Promise<Array<Record<string, any>>>;

    /**
     * Fetch speed test results - stat_speedtest_results()
     *
     * @param {number} [start] - Start timestamp (Unix milliseconds)
     * @param {number} [end] - End timestamp (Unix milliseconds)
     * @returns {Promise<Array<Record<string, any>>>} - Array of speed test results
     */
    getSpeedTestResults(start?: number | null, end?: number | null): Promise<Array<Record<string, any>>>;

    /**
     * Fetch IPS/IDS events - stat_ips_events()
     *
     * @param {number} [start] - Start timestamp (Unix milliseconds)
     * @param {number} [end] - End timestamp (Unix milliseconds)
     * @param {number} [limit] - Maximum number of events to fetch
     * @returns {Promise<Array<Record<string, any>>>} - Array of IPS/IDS events
     */
    getIPSEvents(start?: number | null, end?: number | null, limit?: number): Promise<Array<Record<string, any>>>;

    /**
     * Fetch login sessions - stat_sessions()
     *
     * @param {number} [start] - Start timestamp (Unix milliseconds)
     * @param {number} [end] - End timestamp (Unix milliseconds)
     * @param {string} [mac] - Client MAC address
     * @param {string} [type] - Session type
     * @returns {Promise<Array<Record<string, any>>>} - Array of login sessions
     */
    getSessions(
        start?: number | null,
        end?: number | null,
        mac?: string | null,
        type?: string,
    ): Promise<Array<Record<string, any>>>;

    /**
     * @param {string} mac - Client MAC address
     * @param {number} [limit] - Maximum number of sessions
     * @returns {Promise<Array<Record<string, any>>>} - Array of latest sessions
     */
    getLatestSessions(mac: string, limit?: number): Promise<Array<Record<string, any>>>;

    /**
     * Fetch authorizations - stat_auths()
     *
     * @param {number} [start] - Start timestamp (Unix milliseconds)
     * @param {number} [end] - End timestamp (Unix milliseconds)
     * @returns {Promise<nodeUnifi.GuestAuthorization[]>} - Array of authorization details
     */
    getAllAuthorizations(start?: number | null, end?: number | null): Promise<nodeUnifi.GuestAuthorization[]>;

    /**
     * Fetch all client devices connected within a timeframe - stat_allusers()
     *
     * @param {number} [within] - Timeframe in hours
     * @returns {Promise<Array<Record<string, any>>>} - Array of client devices
     */
    getAllUsers(within?: number): Promise<Array<Record<string, any>>>;

    /**
     * List all blocked client devices - list_blocked_users()
     *
     * @param {number} [within] - Timeframe in hours
     * @returns {Promise<nodeUnifi.ClientDevice[]>} - Array of blocked client devices
     */
    getBlockedUsers(within?: number): Promise<nodeUnifi.ClientDevice[]>;

    /**
     * Fetch guest devices - list_guests()
     *
     * @param {number} [within] - Timeframe in hours
     * @returns {Promise<Array<Record<string, any>>>} - Array of guest devices
     */
    getGuests(within?: number): Promise<Array<Record<string, any>>>;

    /**
     * Fetch online client devices - list_clients()
     *
     * @param {string} [client_mac] - Specific client MAC address
     * @returns {Promise<Array<Record<string, any>>>} - Array of client devices
     */
    getClientDevices(client_mac?: string): Promise<Array<Record<string, any>>>;

    /**
     * @param {string} [client_mac] - Client MAC address
     * @returns {Promise<Array<Record<string, any>>>} - Array of client details
     */
    getClientDevice(client_mac?: string): Promise<Array<Record<string, any>>>;

    /**
     * Assign client device to another group - set_usergroup()
     *
     * @param {string} client_id - Client device ID
     * @param {string} group_id - User group ID
     * @returns {Promise<nodeUnifi.ClientDevice[]>} - Array of updated client details
     */
    setUserGroup(client_id: string, group_id: string): Promise<nodeUnifi.ClientDevice[]>;

    /**
     * Update client fixed IP - edit_client_fixedip()
     *
     * @param {string} client_id - Client device ID
     * @param {boolean} use_fixedip - Enable fixed IP
     * @param {string} [network_id] - Network ID
     * @param {string} [fixed_ip] - Fixed IP address
     * @returns {Promise<nodeUnifi.ClientDevice[]>} - Array of updated client details
     */
    editClientFixedIP(
        client_id: string,
        use_fixedip: boolean,
        network_id?: string | null,
        fixed_ip?: string | null,
    ): Promise<nodeUnifi.ClientDevice[]>;

    /**
     * Update client name - edit_client_name()
     *
     * @param {string} client_id - Client device ID
     * @returns {Promise<nodeUnifi.ClientDevice[]>} - Array of updated client details
     */
    editClientName(client_id: string, name: string): Promise<nodeUnifi.ClientDevice[]>;

    /**
     * Fetch user groups - list_usergroups()
     *
     * @returns {Promise<nodeUnifi.UserGroup[]>} - Array of user group details
     */
    getUserGroups(): Promise<nodeUnifi.UserGroup[]>;

    /**
     * Create a user group - create_usergroup()
     *
     * @param {string} group_name - Name of the user group
     * @param {number} [group_dn] - Download speed limit in kbps
     * @param {number} [group_up] - Upload speed limit in kbps
     * @returns {Promise<nodeUnifi.UserGroup[]>} - Array with new user group details
     */
    createUserGroup(group_name: string, group_dn?: number, group_up?: number): Promise<nodeUnifi.UserGroup[]>;

    /**
     * Modify a user group - edit_usergroup()
     *
     * @param {string} group_id - User group ID
     * @param {string} site_id - Site ID
     * @param {string} group_name - Name of the user group
     * @param {number} [group_dn] - Download speed limit in kbps
     * @param {number} [group_up] - Upload speed limit in kbps
     * @returns {Promise<nodeUnifi.UserGroup[]>} - Array with updated user group details
     */
    editUserGroup(
        group_id: string,
        site_id: string,
        group_name: string,
        group_dn?: number,
        group_up?: number,
    ): Promise<nodeUnifi.UserGroup[]>;

    /**
     * Delete a user group - delete_usergroup()
     *
     * @param {string} group_id - User group ID
     * @returns {Promise<true>} - Resolves to true on success
     */
    deleteUserGroup(group_id: string): Promise<true>;

    /**
     * Fetch AP groups - list_apgroups()
     *
     * @returns {Promise<nodeUnifi.APGroup[]>} - Array of AP group details
     */
    getAPGroups(): Promise<nodeUnifi.APGroup[]>;

    /**
     * Create an AP group - create_apgroup()
     *
     * @param {string} group_name - Name of the AP group
     * @param {string[]} [device_macs] - Array of device MAC addresses
     * @returns {Promise<Record<string, any>>} - New AP group details
     */
    createAPGroup(group_name: string, device_macs?: string[]): Promise<Record<string, any>>;

    /**
     * Modify an AP group - edit_apgroup()
     *
     * @param {string} group_id - AP group ID
     * @param {string} group_name - Name of the AP group
     * @param {string[]} device_macs - Array of device MAC addresses
     * @returns {Promise<Record<string, any>>} - Updated AP group details
     */
    editAPGroup(group_id: string, group_name: string, device_macs: string[]): Promise<Record<string, any>>;

    /**
     * Delete an AP group - delete_apgroup()
     *
     * @param {string} group_id - AP group ID
     * @returns {Promise<true>} - Resolves to true on success
     */
    deleteAPGroup(group_id: string): Promise<true>;

    /**
     * Fetch firewall groups - list_firewallgroups()
     *
     * @param {string} [group_id] - Specific firewall group ID
     * @returns {Promise<Array<Record<string, any>>>} - Array of firewall groups
     */
    getFirewallGroups(group_id?: string): Promise<Array<Record<string, any>>>;

    /**
     * Create a firewall group - create_firewallgroup()
     *
     * @param {string} group_name - Name of the firewall group
     * @param {string} group_type - Type of the firewall group
     * @param {string[]} [group_members] - Array of group member IPs
     * @returns {Promise<Array<Record<string, any>>>} - Array with new firewall group
     */
    createFirewallGroup(
        group_name: string,
        group_type: string,
        group_members?: string[],
    ): Promise<Array<Record<string, any>>>;

    /**
     * Modify a firewall group - edit_firewallgroup()
     *
     * @param {string} group_id - Firewall group ID
     * @param {string} site_id - Site ID
     * @param {string} group_name - Name of the firewall group
     * @param {string} group_type - Type of the firewall group
     * @param {string[]} [group_members] - Array of group member IPs
     * @returns {Promise<Array<Record<string, any>>>} - Array with updated firewall group
     */
    editFirewallGroup(
        group_id: string,
        site_id: string,
        group_name: string,
        group_type: string,
        group_members?: string[],
    ): Promise<Array<Record<string, any>>>;

    /**
     * Delete a firewall group - delete_firewallgroup()
     *
     * @param {string} group_id - Firewall group ID
     * @returns {Promise<true>} - Resolves to true on success
     */
    deleteFirewallGroup(group_id: string): Promise<true>;

    /**
     * Fetch firewall rules - list_firewallrules()
     *
     * @returns {Promise<Array<Record<string, any>>>} - Array of firewall rules
     */
    getFirewallRules(): Promise<Array<Record<string, any>>>;

    /**
     * Fetch static routing settings - list_routing()
     *
     * @param {string} [route_id] - Specific route ID
     * @returns {Promise<Array<Record<string, any>>>} - Array of static routes
     */
    getRouting(route_id?: string): Promise<Array<Record<string, any>>>;

    /**
     * Fetch health metrics - list_health()
     *
     * @returns {Promise<Array<Record<string, any>>>} - Array of health metrics
     */
    getHealth(): Promise<Array<Record<string, any>>>;

    /**
     * Fetch dashboard metrics - list_dashboard()
     *
     * @param {boolean} [five_minutes] - Fetch 5-minute metrics
     * @returns {Promise<Array<Record<string, any>>>} - Array of dashboard metrics
     */
    getDashboard(five_minutes?: boolean): Promise<Array<Record<string, any>>>;

    /**
     * Fetch client devices - list_users()
     *
     * @returns {Promise<Array<Record<string, any>>>} - Array of client devices
     */
    getUsers(): Promise<Array<Record<string, any>>>;

    /**
     * Fetch basic device information - list_devices_basic()
     *
     * @returns {Promise<Array<Record<string, any>>>} - Array of basic device info
     */
    getAccessDevicesBasic(): Promise<Array<Record<string, any>>>;

    /**
     * Fetch access points and other devices - list_devices()
     *
     * @param {string} [device_mac] - Specific device MAC address
     * @returns {Promise<Array<Record<string, any>>>} - Array of device details
     */
    getAccessDevices(device_mac?: string): Promise<Array<Record<string, any>>>;

    /**
     * Fetch device tags - list_tags()
     *
     * @returns {Promise<Array<Record<string, any>>>} - Array of device tags
     */
    listTags(): Promise<Array<Record<string, any>>>;

    /**
     * Fetch rogue/neighboring access points - list_rogueaps()
     *
     * @param {number} [within] - Timeframe in hours
     * @returns {Promise<Array<Record<string, any>>>} - Array of rogue APs
     */
    getRogueAccessPoints(within?: number): Promise<Array<Record<string, any>>>;

    /**
     * Fetch known rogue access points - list_known_rogueaps()
     *
     * @returns {Promise<Array<Record<string, any>>>} - Array of known rogue APs
     */
    getKnownRogueAccessPoints(): Promise<Array<Record<string, any>>>;

    /**
     * Generate a backup - generate_backup()
     *
     * @returns {Promise<Record<string, any>>} - Backup file details
     */
    generateBackup(): Promise<Record<string, any>>;

    /**
     * Fetch auto backups - list_backups()
     *
     * @returns {Promise<Array<Record<string, any>>>} - Array of backup details
     */
    getBackups(): Promise<Array<Record<string, any>>>;

    /**
     * Generate a backup/export of the current site - generate_backup_site()
     *
     * @returns {Promise<true>} - Resolves to true on success
     */
    generateBackupSite(): Promise<true>;

    /**
     * Delete a backup file - delete_backup()
     *
     * @param {string} filename - Name of the backup file
     * @returns {Promise<true>} - Resolves to true on success
     */
    deleteBackup(filename: string): Promise<true>;

    /**
     * Fetch all sites - list_sites()
     *
     * @returns {Promise<nodeUnifi.SiteStats[]>} - Array of site details
     */
    getSites(): Promise<nodeUnifi.SiteStats[]>;

    /**
     * Fetch site stats - list_sites_stats()
     *
     * @returns {Promise<nodeUnifi.SiteStats[]>} - Array of site stats
     */
    getSitesStats(): Promise<nodeUnifi.SiteStats[]>;

    /**
     * Create a site - create_site()
     *
     * @param {string} description - Description of the site
     * @returns {Promise<Record<string, any>>} - New site details
     */
    createSite(description: string): Promise<Record<string, any>>;

    /**
     * Delete a site - delete_site()
     *
     * @param {string} site_id - Site ID
     * @returns {Promise<true>} - Resolves to true on success
     */
    deleteSite(site_id: string): Promise<true>;

    /**
     * Change the current site's name - set_site_name()
     *
     * @param {string} site_name - New site name
     * @returns {Promise<true>} - Resolves to true on success
     */
    setSiteName(site_name: string): Promise<true>;

    /**
     * Set site country - set_site_country()
     *
     * @param {string} country_id - Country setting ID
     * @param {Record<string, any>} payload - Country settings payload
     * @returns {Promise<true>} - Resolves to true on success
     */
    setSiteCountry(country_id: string, payload: Record<string, any>): Promise<true>;

    /**
     * Set site locale - set_site_locale()
     *
     * @param {string} locale_id - Locale setting ID
     * @param {Record<string, any>} payload - Locale settings payload
     * @returns {Promise<true>} - Resolves to true on success
     */
    setSiteLocale(locale_id: string, payload: Record<string, any>): Promise<true>;

    /**
     * Set site SNMP - set_site_snmp()
     *
     * @param {string} snmp_id - SNMP setting ID
     * @param {Record<string, any>} payload - SNMP settings payload
     * @returns {Promise<true>} - Resolves to true on success
     */
    setSiteSNMP(snmp_id: string, payload: Record<string, any>): Promise<true>;

    /**
     * Set site management settings - set_site_mgmt()
     *
     * @param {string} mgmt_id - Management setting ID
     * @param {Record<string, any>} payload - Management settings payload
     * @returns {Promise<true>} - Resolves to true on success
     */
    setSiteMgmt(mgmt_id: string, payload: Record<string, any>): Promise<true>;

    /**
     * Set site guest access - set_site_guest_access()
     *
     * @param {string} guest_access_id - Guest access setting ID
     * @param {Record<string, any>} payload - Guest access settings payload
     * @returns {Promise<true>} - Resolves to true on success
     */
    setSiteGuestAccess(guest_access_id: string, payload: Record<string, any>): Promise<true>;

    /**
     * Set site NTP - set_site_ntp()
     *
     * @param {string} ntp_id - NTP setting ID
     * @param {Record<string, any>} payload - NTP settings payload
     * @returns {Promise<true>} - Resolves to true on success
     */
    setSiteNTP(ntp_id: string, payload: Record<string, any>): Promise<true>;

    /**
     * Set site connectivity - set_site_connectivity()
     *
     * @param {string} connectivity_id - Connectivity setting ID
     * @param {Record<string, any>} payload - Connectivity settings payload
     * @returns {Promise<true>} - Resolves to true on success
     */
    setSiteConnectivity(connectivity_id: string, payload: Record<string, any>): Promise<true>;

    /**
     * Fetch site admins - list_admins()
     *
     * @returns {Promise<Array<Record<string, any>>>} - Array of admin details
     */
    listAdmins(): Promise<Array<Record<string, any>>>;

    /**
     * Fetch all admins across sites - list_all_admins()
     *
     * @returns {Promise<Array<Record<string, any>>>} - Array of admin details
     */
    listAllAdmins(): Promise<Array<Record<string, any>>>;

    /**
     * @param {string} name - Admin name
     * @param {string} email - Admin email
     * @param {boolean} [readonly] - Read-only access
     * @param {boolean} [device_adopt] - Allow device adoption
     * @param {boolean} [device_restart] - Allow device restarts
     * @returns {Promise<true>} - Resolves to true on success
     */
    inviteAdmin(
        name: string,
        email: string,
        enable_sso?: boolean,
        readonly?: boolean,
        device_adopt?: boolean,
        device_restart?: boolean,
    ): Promise<true>;

    /**
     * Assign an existing admin to the current site - assign_existing_admin()
     *
     * @param {string} admin_id - Admin ID
     * @param {boolean} [readonly] - Read-only access
     * @param {boolean} [device_adopt] - Allow device adoption
     * @param {boolean} [device_restart] - Allow device restarts
     * @returns {Promise<true>} - Resolves to true on success
     */
    assignExistingAdmin(
        admin_id: string,
        readonly?: boolean,
        device_adopt?: boolean,
        device_restart?: boolean,
    ): Promise<true>;

    /**
     * Revoke an admin from the current site - revoke_admin()
     *
     * @param {string} admin_id - Admin ID
     * @returns {Promise<true>} - Resolves to true on success
     */
    revokeAdmin(admin_id: string): Promise<true>;

    /**
     * Fetch WLAN groups - list_wlan_groups()
     *
     * @returns {Promise<Array<Record<string, any>>>} - Array of WLAN groups
     */
    getWLanGroups(): Promise<Array<Record<string, any>>>;

    /**
     * Fetch system information - stat_sysinfo()
     *
     * @returns {Promise<nodeUnifi.SiteSysinfo[]>} - Array of system info
     */
    getSiteSysinfo(): Promise<nodeUnifi.SiteSysinfo[]>;

    /**
     * Fetch controller status - stat_status()
     *
     * @returns {Promise<true>} - Resolves to true if online
     */
    getStatus(): Promise<true>;

    /**
     * Fetch full controller status - stat_full_status()
     *
     * @returns {Promise<nodeUnifi.FullStatus>} - Controller status details
     */
    getFullStatus(): Promise<nodeUnifi.FullStatus>;

    /**
     * Fetch device name mappings - list_device_name_mappings()
     *
     * @returns {Promise<nodeUnifi.DeviceNameMapping>} - Device name mappings
     */
    getDeviceNameMappings(): Promise<nodeUnifi.DeviceNameMapping>;

    /**
     * Fetch self information - list_self()
     *
     * @returns {Promise<nodeUnifi.SelfInfo[]>} - Array of logged-in user info
     */
    getSelf(): Promise<nodeUnifi.SelfInfo[]>;

    /**
     * Fetch vouchers - stat_voucher()
     *
     * @param {number} [create_time] - Filter by creation time
     * @returns {Promise<Array<Record<string, any>>>} - Array of vouchers
     */
    getVouchers(create_time?: number | null): Promise<Array<Record<string, any>>>;

    /**
     * Fetch payments - stat_payment()
     *
     * @returns {Promise<Array<Record<string, any>>>} - Array of payments
     */
    getPayments(within?: string | null): Promise<Array<Record<string, any>>>;

    /**
     * Create a hotspot operator - create_hotspotop()
     *
     * @param {string} name - Operator name
     * @param {string} x_password - Operator password
     * @returns {Promise<true>} - Resolves to true on success
     */
    createHotspotOperator(name: string, x_password: string, note?: string | null): Promise<true>;

    /**
     * Fetch hotspot operators - list_hotspotop()
     *
     * @returns {Promise<Array<Record<string, any>>>} - Array of hotspot operators
     */
    getHotspotOperators(): Promise<Array<Record<string, any>>>;

    /**
     * Create voucher(s) - create_voucher()
     *
     * @param {number} minutes - Voucher validity in minutes
     * @param {number} [count] - Number of vouchers to create
     * @param {number} [quota] - Usage quota
     * @param {number} [up] - Upload speed limit in kbps
     * @param {number} [down] - Download speed limit in kbps
     * @param {number} [megabytes] - Data limit in MB
     * @returns {Promise<Array<Record<string, any>>>} - Array with voucher details
     */
    createVouchers(
        minutes: number,
        count?: number,
        quota?: number,
        note?: string | null,
        up?: number | null,
        down?: number | null,
        megabytes?: number | null,
    ): Promise<Array<Record<string, any>>>;

    /**
     * Revoke a voucher - revoke_voucher()
     *
     * @param {string} voucher_id - Voucher ID
     * @returns {Promise<true>} - Resolves to true on success
     */
    revokeVoucher(voucher_id: string): Promise<true>;

    /**
     * Extend guest validity - extend_guest_validity()
     *
     * @param {string} guest_id - Guest ID
     * @returns {Promise<true>} - Resolves to true on success
     */
    extendGuestValidity(guest_id: string): Promise<true>;

    /**
     * Fetch port forwarding stats - list_portforward_stats()
     *
     * @returns {Promise<Array<Record<string, any>>>} - Array of port forwarding stats
     */
    getPortForwardingStats(): Promise<Array<Record<string, any>>>;

    /**
     * Fetch DPI stats - list_dpi_stats()
     *
     * @returns {Promise<Array<Record<string, any>>>} - Array of DPI stats
     */
    getDPIStats(): Promise<Array<Record<string, any>>>;

    /**
     * Fetch filtered DPI stats - list_filtered_dpi_stats()
     *
     * @param {string} [type] - DPI stats type
     * @param {number[]} [cat_filter] - Category filter
     * @returns {Promise<Array<Record<string, any>>>} - Array of filtered DPI stats
     */
    getFilteredDPIStats(type?: string, cat_filter?: number[] | null): Promise<Array<Record<string, any>>>;

    /**
     * Clear DPI stats - clear_dpi_status()
     *
     * @returns {Promise<true>} - Resolves to true on success
     */
    clearDPIStatus(): Promise<true>;

    /**
     * Fetch current channels - list_current_channels()
     *
     * @returns {Promise<Array<Record<string, any>>>} - Array of allowed channels
     */
    getCurrentChannels(): Promise<Array<Record<string, any>>>;

    /**
     * Fetch country codes - list_country_codes()
     *
     * @returns {Promise<Array<Record<string, any>>>} - Array of country codes
     */
    getCountryCodes(): Promise<Array<Record<string, any>>>;

    /**
     * Fetch port forwarding settings - list_portforwarding()
     *
     * @returns {Promise<Array<Record<string, any>>>} - Array of port forwarding settings
     */
    getPortForwarding(): Promise<Array<Record<string, any>>>;

    /**
     * Set port forwarding rule - set_port_forwarding()
     *
     * @param {string} rule_id - Port forwarding rule ID
     * @param {boolean} enable - Enable or disable rule
     * @returns {Promise<true>} - Resolves to true on success
     */
    setPortForwarding(rule_id: string, enable: boolean): Promise<true>;

    /**
     * Fetch dynamic DNS settings - list_dynamicdns()
     *
     * @returns {Promise<Array<Record<string, any>>>} - Array of dynamic DNS settings
     */
    getDynamicDNS(): Promise<Array<Record<string, any>>>;

    /**
     * Create dynamic DNS settings - create_dynamicdns()
     *
     * @param {Record<string, any>} payload - Dynamic DNS settings payload
     * @returns {Promise<true>} - Resolves to true on success
     */
    createDynamicDNS(payload: Record<string, any>): Promise<true>;

    /**
     * Update dynamic DNS settings - set_dynamicdns()
     *
     * @param {string} dynamicdns_id - Dynamic DNS setting ID
     * @param {Record<string, any>} payload - Dynamic DNS settings payload
     * @returns {Promise<true>} - Resolves to true on success
     */
    setDynamicDNS(dynamicdns_id: string, payload: Record<string, any>): Promise<true>;

    /**
     * Fetch port configurations - list_portconf()
     *
     * @returns {Promise<Array<Record<string, any>>>} - Array of port configurations
     */
    getPortConfig(): Promise<Array<Record<string, any>>>;

    /**
     * Fetch VoIP extensions - list_extensions()
     *
     * @returns {Promise<Array<Record<string, any>>>} - Array of VoIP extensions
     */
    getVoipExtensions(): Promise<Array<Record<string, any>>>;

    /**
     * Fetch site settings - list_settings()
     *
     * @returns {Promise<Array<Record<string, any>>>} - Array of site settings
     */
    getSiteSettings(): Promise<Array<Record<string, any>>>;

    /**
     * Adopt a device to the selected site - adopt_device()
     *
     * @param {string} mac - Device MAC address
     * @returns {Promise<true>} - Resolves to true on success
     */
    adoptDevice(mac: string): Promise<true>;

    /**
     * Adopt a device using custom SSH credentials - advanced_adopt_device()
     *
     * @param {string} mac - Device MAC address
     * @param {string} ip - Device IP address
     * @param {string} username - SSH username
     * @param {string} password - SSH password
     * @param {string} url - Controller URL
     * @param {number} [port] - SSH port
     * @param {boolean} [ssh_key_verify] - Verify SSH key
     * @returns {Promise<true>} - Resolves to true on success
     */
    advancedAdoptDevice(
        mac: string,
        ip: string,
        username: string,
        password: string,
        url: string,
        port?: number,
        ssh_key_verify?: boolean,
    ): Promise<true>;

    /**
     * Reboot a device - restart_device()
     *
     * @param {string} mac - Device MAC address
     * @param {string} [reboot_type] - Type of reboot (e.g., 'soft')
     * @returns {Promise<true>} - Resolves to true on success
     */
    restartDevice(mac: string, reboot_type?: string): Promise<true>;

    /**
     * Force provision of a device - force_provision()
     *
     * @param {string} mac - Device MAC address
     * @returns {Promise<true>} - Resolves to true on success
     */
    forceProvision(mac: string): Promise<true>;

    /**
     * Reboot a UniFi CloudKey - reboot_cloudkey()
     *
     * @returns {Promise<true>} - Resolves to true on success
     */
    rebootCloudKey(): Promise<true>;

    /**
     * Disable/enable an access point - disable_ap()
     *
     * @param {string} ap_id - Access point ID
     * @param {boolean} disable - Disable or enable AP
     * @returns {Promise<true>} - Resolves to true on success
     */
    disableAccessPoint(ap_id: string, disable: boolean): Promise<true>;

    /**
     * @param {string} device_id - Device ID
     * @param {string} override_mode - LED override mode
     * @returns {Promise<true>} - Resolves to true on success
     */
    setLEDOverride(device_id: string, override_mode: string): Promise<true>;

    /**
     * Toggle flashing LED of an access point - locate_ap()
     *
     * @param {string} mac - Access point MAC address
     * @param {boolean} enable - Enable or disable flashing
     * @returns {Promise<true>} - Resolves to true on success
     */
    setLocateAccessPoint(mac: string, enable: boolean): Promise<true>;

    /**
     * Toggle LEDs of all access points - site_leds()
     *
     * @param {boolean} enable - Enable or disable LEDs
     * @returns {Promise<true>} - Resolves to true on success
     */
    setSiteLEDs(enable: boolean): Promise<true>;

    /**
     * Update access point radio settings - set_ap_radiosettings()
     *
     * @param {string} ap_id - Access point ID
     * @param {string} radio - Radio type (e.g., 'ng')
     * @param {string} channel - Channel number
     * @param {string} ht - Channel width
     * @param {string} tx_power_mode - Transmit power mode
     * @param {string} tx_power - Transmit power value
     * @returns {Promise<true>} - Resolves to true on success
     */
    setAccessPointRadioSettings(
        ap_id: string,
        radio: string,
        channel: string,
        ht: string,
        tx_power_mode: string,
        tx_power: string,
    ): Promise<true>;

    /**
     * Assign access point to another WLAN group - set_ap_wlangroup()
     *
     * @param {string} type_id - Type ID
     * @param {string} device_id - Device ID
     * @param {string} group_id - WLAN group ID
     * @returns {Promise<true>} - Resolves to true on success
     */
    setAccessPointWLanGroup(type_id: string, device_id: string, group_id: string): Promise<true>;

    /**
     * Update guest login settings - set_guestlogin_settings()
     *
     * @param {boolean} portal_enabled - Enable guest portal
     * @param {boolean} portal_customized - Customize guest portal
     * @param {boolean} redirect_enabled - Enable redirect
     * @param {string} redirect_url - Redirect URL
     * @param {string} x_password - Guest password
     * @param {number} expire_number - Expiration duration
     * @param {number} expire_unit - Expiration unit
     * @param {string} section_id - Section ID
     * @returns {Promise<true>} - Resolves to true on success
     */
    setGuestLoginSettings(
        portal_enabled: boolean,
        portal_customized: boolean,
        redirect_enabled: boolean,
        redirect_url: string,
        x_password: string,
        expire_number: number,
        expire_unit: number,
        section_id: string,
    ): Promise<true>;

    /**
     * Update guest login settings base - set_guestlogin_settings_base()
     *
     * @param {Record<string, any>} payload - Guest login settings payload
     * @param {string} [section_id] - Section ID
     * @returns {Promise<true>} - Resolves to true on success
     */
    setGuestLoginSettingsBase(payload: Record<string, any>, section_id?: string): Promise<true>;

    /**
     * Update IPS/IDS settings - set_ips_settings_base()
     *
     * @param {Record<string, any>} payload - IPS/IDS settings payload
     * @returns {Promise<true>} - Resolves to true on success
     */
    setIPSSettingsBase(payload: Record<string, any>): Promise<true>;

    /**
     * Update Super Management settings - set_super_mgmt_settings_base()
     *
     * @param {string} settings_id - Management settings ID
     * @param {Record<string, any>} payload - Management settings payload
     * @returns {Promise<true>} - Resolves to true on success
     */
    setSuperMgmtSettingsBase(settings_id: string, payload: Record<string, any>): Promise<true>;

    /**
     * Update Super SMTP settings - set_super_smtp_settings_base()
     *
     * @param {string} settings_id - SMTP settings ID
     * @param {Record<string, any>} payload - SMTP settings payload
     * @returns {Promise<true>} - Resolves to true on success
     */
    setSuperSMTPSettingsBase(settings_id: string, payload: Record<string, any>): Promise<true>;

    /**
     * Update Super Controller Identity settings - set_super_identity_settings_base()
     *
     * @param {string} settings_id - Identity settings ID
     * @param {Record<string, any>} payload - Identity settings payload
     * @returns {Promise<true>} - Resolves to true on success
     */
    setSuperIdentitySettingsBase(settings_id: string, payload: Record<string, any>): Promise<true>;

    /**
     * Rename an access point - rename_ap()
     *
     * @param {string} ap_id - Access point ID
     * @param {string} apname - New access point name
     * @returns {Promise<true>} - Resolves to true on success
     */
    renameAccessPoint(ap_id: string, apname: string): Promise<true>;

    /**
     * Move a device to another site - move_device()
     *
     * @param {string} mac - Device MAC address
     * @param {string} site_id - Target site ID
     * @returns {Promise<true>} - Resolves to true on success
     */
    moveDevice(mac: string, site_id: string): Promise<true>;

    /**
     * Delete a device from the current site - delete_device()
     *
     * @param {string} mac - Device MAC address
     * @returns {Promise<true>} - Resolves to true on success
     */
    deleteDevice(mac: string): Promise<true>;

    /**
     * Fetch network settings - list_networkconf()
     *
     * @param {string} [network_id] - Specific network ID
     * @returns {Promise<Array<Record<string, any>>>} - Array of network settings
     */
    getNetworkConf(network_id?: string | null): Promise<Array<Record<string, any>>>;

    /**
     * Create a network - create_network()
     *
     * @param {Record<string, any>} payload - Network settings payload
     * @returns {Promise<Array<Record<string, any>>>} - Array with new network details
     */
    createNetwork(payload: Record<string, any>): Promise<Array<Record<string, any>>>;

    /**
     * Update network settings - set_networksettings_base()
     *
     * @param {string} network_id - Network ID
     * @param {Record<string, any>} payload - Network settings payload
     * @returns {Promise<true>} - Resolves to true on success
     */
    setNetworkSettingsBase(network_id: string, payload: Record<string, any>): Promise<true>;

    /**
     * Delete a network - delete_network()
     *
     * @param {string} network_id - Network ID
     * @returns {Promise<true>} - Resolves to true on success
     */
    deleteNetwork(network_id: string): Promise<true>;

    /**
     * Fetch WLAN settings - list_wlanconf()
     *
     * @param {string} [wlan_id] - Specific WLAN ID
     * @returns {Promise<Array<Record<string, any>>>} - Array of WLAN settings
     */
    getWLanSettings(wlan_id?: string | null): Promise<Array<Record<string, any>>>;

    /**
     * Create a WLAN - create_wlan()
     *
     * @param {string} name - WLAN name
     * @param {string} [x_passphrase] - WLAN passphrase
     * @param {string} usergroup_id - User group ID
     * @param {string} wlangroup_id - WLAN group ID
     * @param {boolean} [enabled] - Enable WLAN
     * @param {boolean} [hide_ssid] - Hide SSID
     * @param {boolean} [is_guest] - Guest network
     * @param {string} [security] - Security type
     * @param {string} [wpa_mode] - WPA mode
     * @param {string} [wpa_enc] - WPA encryption
     * @param {boolean} [vlan_enabled] - Enable VLAN
     * @param {number} [vlan] - VLAN ID
     * @param {boolean} [uapsd_enabled] - Enable UAPSD
     * @param {boolean} [schedule_enabled] - Enable schedule
     * @param {Record<string, any>} [schedule] - Schedule settings
     * @param {string[]} [ap_group_ids] - AP group IDs
     * @returns {Promise<true>} - Resolves to true on success
     */
    createWLan(
        name: string,
        x_passphrase: string | null,
        usergroup_id: string,
        wlangroup_id: string,
        enabled?: boolean,
        hide_ssid?: boolean,
        is_guest?: boolean,
        security?: string,
        wpa_mode?: string,
        wpa_enc?: string,
        vlan_enabled?: boolean,
        vlan?: number | null,
        uapsd_enabled?: boolean,
        schedule_enabled?: boolean,
        schedule?: Record<string, any>,
        ap_group_ids?: string[] | null,
    ): Promise<true>;

    /**
     * Update WLAN settings - set_wlansettings_base()
     *
     * @param {string} wlan_id - WLAN ID
     * @param {Record<string, any>} payload - WLAN settings payload
     * @returns {Promise<true>} - Resolves to true on success
     */
    setWLanSettingsBase(wlan_id: string, payload: Record<string, any>): Promise<true>;

    /**
     * Update basic WLAN settings - set_wlansettings()
     *
     * @param {string} wlan_id - WLAN ID
     * @param {string} [x_passphrase] - New passphrase
     * @param {string} [name] - New WLAN name
     * @returns {Promise<true>} - Resolves to true on success
     */
    setWLanSettings(wlan_id: string, x_passphrase?: string | null, name?: string | null): Promise<true>;

    /**
     * Disable/enable a WLAN - disable_wlan()
     *
     * @param {string} wlan_id - WLAN ID
     * @param {boolean} disable - Disable or enable WLAN
     * @returns {Promise<true>} - Resolves to true on success
     */
    disableWLan(wlan_id: string, disable: boolean): Promise<true>;

    /**
     * Delete a WLAN - delete_wlan()
     *
     * @param {string} wlan_id - WLAN ID
     * @returns {Promise<true>} - Resolves to true on success
     */
    deleteWLan(wlan_id: string): Promise<true>;

    /**
     * Update WLAN MAC filter - set_wlan_mac_filter()
     *
     * @param {string} wlan_id - WLAN ID
     * @param {string} mac_filter_policy - MAC filter policy
     * @param {boolean} mac_filter_enabled - Enable MAC filter
     * @param {string[]} macs - Array of MAC addresses
     * @returns {Promise<true>} - Resolves to true on success
     */
    setWLanMacFilter(
        wlan_id: string,
        mac_filter_policy: string,
        mac_filter_enabled: boolean,
        macs: string[],
    ): Promise<true>;

    /**
     * Fetch events - list_events()
     *
     * @param {number} [historyhours] - Timeframe in hours
     * @param {number} [start] - Start index
     * @param {number} [limit] - Maximum number of events
     * @returns {Promise<Array<Record<string, any>>>} - Array of events
     */
    getEvents(historyhours?: number, start?: number, limit?: number): Promise<Array<Record<string, any>>>;

    /**
     * Fetch alarms - list_alarms()
     *
     * @param {Record<string, any>} [payload] - Alarm filter payload
     * @returns {Promise<Array<Record<string, any>>>} - Array of alarms
     */
    getAlarms(payload?: Record<string, any> | null): Promise<Array<Record<string, any>>>;

    /**
     * Count alarms - count_alarms()
     *
     * @param {boolean} [archived] - Include archived alarms
     * @returns {Promise<Array<Record<string, any>>>} - Array with alarm count
     */
    countAlarms(archived?: boolean): Promise<Array<Record<string, any>>>;

    /**
     * Archive alarms - archive_alarm()
     *
     * @param {string} [alarm_id] - Specific alarm ID
     * @returns {Promise<true>} - Resolves to true on success
     */
    archiveAlarms(alarm_id?: string | null): Promise<true>;

    /**
     * Check controller update - check_controller_update()
     *
     * @returns {Promise<Array<Record<string, any>>>} - Array with update info
     */
    checkControllerUpdate(): Promise<Array<Record<string, any>>>;

    /**
     * Check firmware update - check_firmware_update()
     *
     * @returns {Promise<true>} - Resolves to true on success
     */
    checkFirmwareUpdate(): Promise<true>;

    /**
     * Upgrade a device to the latest firmware - upgrade_device()
     *
     * @param {string} device_mac - Device MAC address
     * @returns {Promise<true>} - Resolves to true on success
     */
    upgradeDevice(device_mac: string): Promise<true>;

    /**
     * Upgrade a device to a specific firmware - upgrade_device_external()
     *
     * @param {string} firmware_url - Firmware URL
     * @param {string} device_mac - Device MAC address
     * @returns {Promise<true>} - Resolves to true on success
     */
    upgradeDeviceExternal(firmware_url: string, device_mac: string): Promise<true>;

    /**
     * Start rolling upgrade - start_rolling_upgrade()
     *
     * @returns {Promise<true>} - Resolves to true on success
     */
    startRollingUpgrade(): Promise<true>;

    /**
     * Cancel rolling upgrade - cancel_rolling_upgrade()
     *
     * @returns {Promise<true>} - Resolves to true on success
     */
    cancelRollingUpgrade(): Promise<true>;

    /**
     * Fetch firmware versions - list_firmware()
     *
     * @param {string} [type] - Firmware type
     * @returns {Promise<Array<Record<string, any>>>} - Array of firmware versions
     */
    getFirmware(type?: string): Promise<Array<Record<string, any>>>;

    /**
     * Power-cycle a switch port - power_cycle_switch_port()
     *
     * @param {string} switch_mac - Switch MAC address
     * @param {number} port_idx - Port index
     * @returns {Promise<true>} - Resolves to true on success
     */
    powerCycleSwitchPort(switch_mac: string, port_idx: number): Promise<true>;

    /**
     * Trigger an RF scan by an AP - run_spectrum_scan()
     *
     * @param {string} ap_mac - Access point MAC address
     * @returns {Promise<true>} - Resolves to true on success
     */
    runSpectrumScan(ap_mac: string): Promise<true>;

    /**
     * Trigger a speed test on a USG - run_speedtest()
     *
     * @returns {Promise<true>} - Resolves to true on success
     */
    runSpeedTest(): Promise<true>;

    /**
     * Get the current state of a running speed test - get_speedtest_status()
     *
     * @returns {Promise<Record<string, any>>} - Speed test status
     */
    getSpeedTestStatus(): Promise<Record<string, any>>;

    /**
     * Check RF scanning state of an AP - spectrum_scan_state()
     *
     * @param {string} ap_mac - Access point MAC address
     * @returns {Promise<Record<string, any>>} - RF scan state
     */
    getSpectrumScanState(ap_mac: string): Promise<Record<string, any>>;

    /**
     * Update device settings - set_device_settings_base()
     *
     * @param {string} device_id - Device ID
     * @param {Record<string, any>} payload - Device settings payload
     * @returns {Promise<true>} - Resolves to true on success
     */
    setDeviceSettingsBase(device_id: string, payload: Record<string, any>): Promise<true>;

    /**
     * Fetch Radius profiles - list_radius_profiles()
     *
     * @returns {Promise<Array<Record<string, any>>>} - Array of Radius profiles
     */
    listRadiusProfiles(): Promise<Array<Record<string, any>>>;

    /**
     * Fetch Radius user accounts - list_radius_accounts()
     *
     * @returns {Promise<Array<Record<string, any>>>} - Array of Radius accounts
     */
    listRadiusAccounts(): Promise<Array<Record<string, any>>>;

    /**
     * Create a Radius user account - create_radius_account()
     *
     * @param {string} name - Account name
     * @param {string} x_password - Account password
     * @param {number} [tunnel_type] - Tunnel type
     * @param {number} [tunnel_medium_type] - Tunnel medium type
     * @param {number} [vlan] - VLAN ID
     * @returns {Promise<Array<Record<string, any>>>} - Array with new account
     */
    createRadiusAccount(
        name: string,
        x_password: string,
        tunnel_type?: number | null,
        tunnel_medium_type?: number | null,
        vlan?: number | null,
    ): Promise<Array<Record<string, any>>>;

    /**
     * Update a Radius account - set_radius_account_base()
     *
     * @param {string} account_id - Radius account ID
     * @param {Record<string, any>} payload - Account settings payload
     * @returns {Promise<true>} - Resolves to true on success
     */
    setRadiusAccountBase(account_id: string, payload: Record<string, any>): Promise<true>;

    /**
     * Delete a Radius account - delete_radius_account()
     *
     * @param {string} account_id - Radius account ID
     * @returns {Promise<true>} - Resolves to true on success
     */
    deleteRadiusAccount(account_id: string): Promise<true>;

    /**
     * Execute a specific stats command - cmd_stat()
     *
     * @param {string} command - Stats command to execute
     * @returns {Promise<true>} - Resolves to true on success
     */
    cmdStat(command: string): Promise<true>;

    /**
     * Toggle Element Adoption - set_element_adoption()
     *
     * @param {boolean} enable - Enable or disable adoption
     * @returns {Promise<true>} - Resolves to true on success
     */
    setElementAdoption(enable: boolean): Promise<true>;

    /**
     * Fetch device states - list_device_states()
     *
     * @returns {Promise<Record<string, any>>} - Device state translations
     */
    getDeviceStates(): Promise<Record<string, any>>;

    /**
     * Upgrade external firmware - upgrade_external_firmware()
     *
     * @param {string} mac - Device MAC address
     * @param {string} firmware_url - Firmware URL
     * @returns {Promise<true>} - Resolves to true on success
     */
    upgradeExternalFirmware(mac: string, firmware_url: string): Promise<true>;

    /**
     * Perform a custom API request - custom_api_request()
     *
     * @param {string} path - API endpoint path
     * @param {string} [method] - HTTP method
     * @param {Record<string, any>} [payload] - Request payload
     * @returns {Promise<any>} - Custom API response
     */
    customApiRequest(
        path: string,
        method?: string | null,
        payload?: Record<string, any> | null,
    ): Promise<any>;

    /**
     * @returns {Promise<true>} - Resolves to true on success
     */
    listen(): Promise<true>;
}

declare const nodeUnifi: {
    Controller: typeof Controller;
};

export = nodeUnifi;
