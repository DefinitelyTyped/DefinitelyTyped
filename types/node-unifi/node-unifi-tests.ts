import nodeUnifi, {
    APGroup,
    ClientDevice,
    CreateUserResponse,
    DeviceNameMapping,
    FullStatus,
    GuestAuthorization,
    SelfInfo,
    SiteStats,
    SiteSysinfo,
    UserGroup,
} from "node-unifi";

// $ExpectType { Controller: typeof Controller; }
nodeUnifi;

// $ExpectType typeof Controller
nodeUnifi.Controller;

// $ExpectType Controller
new nodeUnifi.Controller({
    host: "192.168.1.1",
    port: 8443,
    username: "admin",
    password: "password",
    token2FA: "123456",
    site: "default",
    sslverify: false,
    timeout: 5000,
    rememberMe: true,
});

// $ExpectType Controller
let controller = new nodeUnifi.Controller();

// $ExpectType Promise<true>
controller.login("admin", "password", "123456");

// $ExpectType Promise<true>
controller.login();

// $ExpectType Promise<true>
controller.logout();

// $ExpectType Promise<GuestAuthorization[]>
controller.authorizeGuest("00:11:22:33:44:55", 60, 1000, 5000, 1024, "aa:bb:cc:dd:ee:ff");

// $ExpectType Promise<GuestAuthorization[]>
controller.authorizeGuest("00:11:22:33:44:55");

// $ExpectType Promise<true>
controller.unauthorizeGuest("00:11:22:33:44:55");

// $ExpectType Promise<true>
controller.reconnectClient("00:11:22:33:44:55");

// $ExpectType Promise<ClientDevice[]>
controller.blockClient("00:11:22:33:44:55");

// $ExpectType Promise<ClientDevice[]>
controller.unblockClient("00:11:22:33:44:55");

// $ExpectType Promise<true>
controller.forgetClient(["00:11:22:33:44:55", "aa:bb:cc:dd:ee:ff"]);

// $ExpectType Promise<CreateUserResponse>
controller.createUser("00:11:22:33:44:55", "usergroup123", "TestDevice", "Note", true, false);

// $ExpectType Promise<CreateUserResponse>
controller.createUser("00:11:22:33:44:55", "usergroup123");

// $ExpectType Promise<ClientDevice[]>
controller.setClientNote("client123", "This is a note");

// $ExpectType Promise<ClientDevice[]>
controller.setClientNote("client123");

// $ExpectType Promise<ClientDevice[]>
controller.setClientName("client123", "NewDeviceName");

// $ExpectType Promise<ClientDevice[]>
controller.setClientName("client123");

// $ExpectType Promise<Record<string, any>[]>
controller.get5minSiteStats(1630000000000, 1630003600000);

// $ExpectType Promise<Record<string, any>[]>
controller.get5minSiteStats();

// $ExpectType Promise<Record<string, any>[]>
controller.getHourlySiteStats(1630000000000, 1630003600000);

// $ExpectType Promise<Record<string, any>[]>
controller.getHourlySiteStats();

// $ExpectType Promise<Record<string, any>[]>
controller.getDailySiteStats(1630000000000, 1630003600000);

// $ExpectType Promise<Record<string, any>[]>
controller.getDailySiteStats();

// $ExpectType Promise<Record<string, any>[]>
controller.getMonthlySiteStats(1630000000000, 1630003600000);

// $ExpectType Promise<Record<string, any>[]>
controller.getMonthlySiteStats();

// $ExpectType Promise<Record<string, any>[]>
controller.get5minApStats(1630000000000, 1630003600000, "00:11:22:33:44:55");

// $ExpectType Promise<Record<string, any>[]>
controller.get5minApStats();

// $ExpectType Promise<Record<string, any>[]>
controller.getHourlyApStats(1630000000000, 1630003600000, "00:11:22:33:44:55");

// $ExpectType Promise<Record<string, any>[]>
controller.getHourlyApStats();

// $ExpectType Promise<Record<string, any>[]>
controller.getDailyApStats(1630000000000, 1630003600000, "00:11:22:33:44:55");

// $ExpectType Promise<Record<string, any>[]>
controller.getDailyApStats();

// $ExpectType Promise<Record<string, any>[]>
controller.getMonthlyApStats(1630000000000, 1630003600000, "00:11:22:33:44:55");

// $ExpectType Promise<Record<string, any>[]>
controller.getMonthlyApStats();

// $ExpectType Promise<Record<string, any>[]>
controller.get5minUserStats("00:11:22:33:44:55", 1630000000000, 1630003600000, ["attr1", "attr2"]);

// $ExpectType Promise<Record<string, any>[]>
controller.get5minUserStats("00:11:22:33:44:55");

// $ExpectType Promise<Record<string, any>[]>
controller.getHourlyUserStats("00:11:22:33:44:55", 1630000000000, 1630003600000, ["attr1", "attr2"]);

// $ExpectType Promise<Record<string, any>[]>
controller.getHourlyUserStats("00:11:22:33:44:55");

// $ExpectType Promise<Record<string, any>[]>
controller.getDailyUserStats("00:11:22:33:44:55", 1630000000000, 1630003600000, ["attr1", "attr2"]);

// $ExpectType Promise<Record<string, any>[]>
controller.getDailyUserStats("00:11:22:33:44:55");

// $ExpectType Promise<Record<string, any>[]>
controller.getMonthlyUserStats("00:11:22:33:44:55", 1630000000000, 1630003600000, ["attr1", "attr2"]);

// $ExpectType Promise<Record<string, any>[]>
controller.getMonthlyUserStats("00:11:22:33:44:55");

// $ExpectType Promise<Record<string, any>[]>
controller.get5minGatewayStats(1630000000000, 1630003600000, ["attr1", "attr2"]);

// $ExpectType Promise<Record<string, any>[]>
controller.get5minGatewayStats();

// $ExpectType Promise<Record<string, any>[]>
controller.getHourlyGatewayStats(1630000000000, 1630003600000, ["attr1", "attr2"]);

// $ExpectType Promise<Record<string, any>[]>
controller.getHourlyGatewayStats();

// $ExpectType Promise<Record<string, any>[]>
controller.getDailyGatewayStats(1630000000000, 1630003600000, ["attr1", "attr2"]);

// $ExpectType Promise<Record<string, any>[]>
controller.getDailyGatewayStats();

// $ExpectType Promise<Record<string, any>[]>
controller.getMonthlyGatewayStats(1630000000000, 1630003600000, ["attr1", "attr2"]);

// $ExpectType Promise<Record<string, any>[]>
controller.getMonthlyGatewayStats();

// $ExpectType Promise<Record<string, any>[]>
controller.getSpeedTestResults(1630000000000, 1630003600000);

// $ExpectType Promise<Record<string, any>[]>
controller.getSpeedTestResults();

// $ExpectType Promise<Record<string, any>[]>
controller.getIPSEvents(1630000000000, 1630003600000, 100);

// $ExpectType Promise<Record<string, any>[]>
controller.getIPSEvents();

// $ExpectType Promise<Record<string, any>[]>
controller.getSessions(1630000000000, 1630003600000, "00:11:22:33:44:55", "type");

// $ExpectType Promise<Record<string, any>[]>
controller.getSessions();

// $ExpectType Promise<Record<string, any>[]>
controller.getLatestSessions("00:11:22:33:44:55", 10);

// $ExpectType Promise<Record<string, any>[]>
controller.getLatestSessions("00:11:22:33:44:55");

// $ExpectType Promise<GuestAuthorization[]>
controller.getAllAuthorizations(1630000000000, 1630003600000);

// $ExpectType Promise<GuestAuthorization[]>
controller.getAllAuthorizations();

// $ExpectType Promise<Record<string, any>[]>
controller.getAllUsers(24);

// $ExpectType Promise<Record<string, any>[]>
controller.getAllUsers();

// $ExpectType Promise<ClientDevice[]>
controller.getBlockedUsers(24);

// $ExpectType Promise<ClientDevice[]>
controller.getBlockedUsers();

// $ExpectType Promise<Record<string, any>[]>
controller.getGuests(24);

// $ExpectType Promise<Record<string, any>[]>
controller.getGuests();

// $ExpectType Promise<Record<string, any>[]>
controller.getClientDevices("00:11:22:33:44:55");

// $ExpectType Promise<Record<string, any>[]>
controller.getClientDevices();

// $ExpectType Promise<Record<string, any>[]>
controller.getClientDevice("00:11:22:33:44:55");

// $ExpectType Promise<Record<string, any>[]>
controller.getClientDevice();

// $ExpectType Promise<ClientDevice[]>
controller.setUserGroup("client123", "group123");

// $ExpectType Promise<ClientDevice[]>
controller.editClientFixedIP("client123", true, "network123", "192.168.1.100");

// $ExpectType Promise<ClientDevice[]>
controller.editClientFixedIP("client123", false);

// $ExpectType Promise<ClientDevice[]>
controller.editClientName("client123", "NewName");

// $ExpectType Promise<UserGroup[]>
controller.getUserGroups();

// $ExpectType Promise<UserGroup[]>
controller.createUserGroup("TestGroup", 5000, 1000);

// $ExpectType Promise<UserGroup[]>
controller.createUserGroup("TestGroup");

// $ExpectType Promise<UserGroup[]>
controller.editUserGroup("group123", "site123", "UpdatedGroup", 10000, 2000);

// $ExpectType Promise<UserGroup[]>
controller.editUserGroup("group123", "site123", "UpdatedGroup");

// $ExpectType Promise<true>
controller.deleteUserGroup("group123");

// $ExpectType Promise<APGroup[]>
controller.getAPGroups();

// $ExpectType Promise<Record<string, any>>
controller.createAPGroup("TestAPGroup", ["00:11:22:33:44:55"]);

// $ExpectType Promise<Record<string, any>>
controller.createAPGroup("TestAPGroup");

// $ExpectType Promise<Record<string, any>>
controller.editAPGroup("group123", "UpdatedAPGroup", ["00:11:22:33:44:55"]);

// $ExpectType Promise<true>
controller.deleteAPGroup("group123");

// $ExpectType Promise<Record<string, any>[]>
controller.getFirewallGroups("group123");

// $ExpectType Promise<Record<string, any>[]>
controller.getFirewallGroups();

// $ExpectType Promise<Record<string, any>[]>
controller.createFirewallGroup("TestFirewallGroup", "address-group", ["192.168.1.100"]);

// $ExpectType Promise<Record<string, any>[]>
controller.createFirewallGroup("TestFirewallGroup", "address-group");

// $ExpectType Promise<Record<string, any>[]>
controller.editFirewallGroup("group123", "site123", "UpdatedFirewallGroup", "address-group", ["192.168.1.100"]);

// $ExpectType Promise<Record<string, any>[]>
controller.editFirewallGroup("group123", "site123", "UpdatedFirewallGroup", "address-group");

// $ExpectType Promise<true>
controller.deleteFirewallGroup("group123");

// $ExpectType Promise<Record<string, any>[]>
controller.getFirewallRules();

// $ExpectType Promise<Record<string, any>[]>
controller.getRouting("route123");

// $ExpectType Promise<Record<string, any>[]>
controller.getRouting();

// $ExpectType Promise<Record<string, any>[]>
controller.getHealth();

// $ExpectType Promise<Record<string, any>[]>
controller.getDashboard(true);

// $ExpectType Promise<Record<string, any>[]>
controller.getDashboard();

// $ExpectType Promise<Record<string, any>[]>
controller.getUsers();

// $ExpectType Promise<Record<string, any>[]>
controller.getAccessDevicesBasic();

// $ExpectType Promise<Record<string, any>[]>
controller.getAccessDevices("00:11:22:33:44:55");

// $ExpectType Promise<Record<string, any>[]>
controller.getAccessDevices();

// $ExpectType Promise<Record<string, any>[]>
controller.listTags();

// $ExpectType Promise<Record<string, any>[]>
controller.getRogueAccessPoints(24);

// $ExpectType Promise<Record<string, any>[]>
controller.getRogueAccessPoints();

// $ExpectType Promise<Record<string, any>[]>
controller.getKnownRogueAccessPoints();

// $ExpectType Promise<Record<string, any>>
controller.generateBackup();

// $ExpectType Promise<Record<string, any>[]>
controller.getBackups();

// $ExpectType Promise<true>
controller.generateBackupSite();

// $ExpectType Promise<true>
controller.deleteBackup("backupfile.db");

// $ExpectType Promise<SiteStats[]>
controller.getSites();

// $ExpectType Promise<SiteStats[]>
controller.getSitesStats();

// $ExpectType Promise<Record<string, any>>
controller.createSite("NewSite");

// $ExpectType Promise<true>
controller.deleteSite("site123");

// $ExpectType Promise<true>
controller.setSiteName("UpdatedSite");

// $ExpectType Promise<true>
controller.setSiteCountry("country123", { key: "value" });

// $ExpectType Promise<true>
controller.setSiteLocale("locale123", { key: "value" });

// $ExpectType Promise<true>
controller.setSiteSNMP("snmp123", { key: "value" });

// $ExpectType Promise<true>
controller.setSiteMgmt("mgmt123", { key: "value" });

// $ExpectType Promise<true>
controller.setSiteGuestAccess("guest123", { key: "value" });

// $ExpectType Promise<true>
controller.setSiteNTP("ntp123", { key: "value" });

// $ExpectType Promise<true>
controller.setSiteConnectivity("connectivity123", { key: "value" });

// $ExpectType Promise<Record<string, any>[]>
controller.listAdmins();

// $ExpectType Promise<Record<string, any>[]>
controller.listAllAdmins();

// $ExpectType Promise<true>
controller.inviteAdmin("AdminName", "admin@example.com", true, true, true, true);

// $ExpectType Promise<true>
controller.inviteAdmin("AdminName", "admin@example.com");

// $ExpectType Promise<true>
controller.assignExistingAdmin("admin123", true, true, true);

// $ExpectType Promise<true>
controller.assignExistingAdmin("admin123");

// $ExpectType Promise<true>
controller.revokeAdmin("admin123");

// $ExpectType Promise<Record<string, any>[]>
controller.getWLanGroups();

// $ExpectType Promise<SiteSysinfo[]>
controller.getSiteSysinfo();

// $ExpectType Promise<true>
controller.getStatus();

// $ExpectType Promise<FullStatus>
controller.getFullStatus();

// $ExpectType Promise<DeviceNameMapping>
controller.getDeviceNameMappings();

// $ExpectType Promise<SelfInfo[]>
controller.getSelf();

// $ExpectType Promise<Record<string, any>[]>
controller.getVouchers(1630000000000);

// $ExpectType Promise<Record<string, any>[]>
controller.getVouchers();

// $ExpectType Promise<Record<string, any>[]>
controller.getPayments("24h");

// $ExpectType Promise<Record<string, any>[]>
controller.getPayments();

// $ExpectType Promise<true>
controller.createHotspotOperator("OperatorName", "password", "Note");

// $ExpectType Promise<true>
controller.createHotspotOperator("OperatorName", "password");

// $ExpectType Promise<Record<string, any>[]>
controller.getHotspotOperators();

// $ExpectType Promise<Record<string, any>[]>
controller.createVouchers(60, 5, 10, "Note", 1000, 5000, 1024);

// $ExpectType Promise<Record<string, any>[]>
controller.createVouchers(60);

// $ExpectType Promise<true>
controller.revokeVoucher("voucher123");

// $ExpectType Promise<true>
controller.extendGuestValidity("guest123");

// $ExpectType Promise<Record<string, any>[]>
controller.getPortForwardingStats();

// $ExpectType Promise<Record<string, any>[]>
controller.getDPIStats();

// $ExpectType Promise<Record<string, any>[]>
controller.getFilteredDPIStats("type", [1, 2]);

// $ExpectType Promise<Record<string, any>[]>
controller.getFilteredDPIStats();

// $ExpectType Promise<true>
controller.clearDPIStatus();

// $ExpectType Promise<Record<string, any>[]>
controller.getCurrentChannels();

// $ExpectType Promise<Record<string, any>[]>
controller.getCountryCodes();

// $ExpectType Promise<Record<string, any>[]>
controller.getPortForwarding();

// $ExpectType Promise<true>
controller.setPortForwarding("rule123", true);

// $ExpectType Promise<Record<string, any>[]>
controller.getDynamicDNS();

// $ExpectType Promise<true>
controller.createDynamicDNS({ key: "value" });

// $ExpectType Promise<true>
controller.setDynamicDNS("dns123", { key: "value" });

// $ExpectType Promise<Record<string, any>[]>
controller.getPortConfig();

// $ExpectType Promise<Record<string, any>[]>
controller.getVoipExtensions();

// $ExpectType Promise<Record<string, any>[]>
controller.getSiteSettings();

// $ExpectType Promise<true>
controller.adoptDevice("00:11:22:33:44:55");

// $ExpectType Promise<true>
controller.advancedAdoptDevice(
    "00:11:22:33:44:55",
    "192.168.1.100",
    "username",
    "password",
    "http://controller",
    22,
    false,
);

// $ExpectType Promise<true>
controller.advancedAdoptDevice("00:11:22:33:44:55", "192.168.1.100", "username", "password", "http://controller");

// $ExpectType Promise<true>
controller.restartDevice("00:11:22:33:44:55", "soft");

// $ExpectType Promise<true>
controller.restartDevice("00:11:22:33:44:55");

// $ExpectType Promise<true>
controller.forceProvision("00:11:22:33:44:55");

// $ExpectType Promise<true>
controller.rebootCloudKey();

// $ExpectType Promise<true>
controller.disableAccessPoint("ap123", true);

// $ExpectType Promise<true>
controller.setLEDOverride("device123", "on");

// $ExpectType Promise<true>
controller.setLocateAccessPoint("00:11:22:33:44:55", true);

// $ExpectType Promise<true>
controller.setSiteLEDs(true);

// $ExpectType Promise<true>
controller.setAccessPointRadioSettings("ap123", "ng", "6", "20", "auto", "low");

// $ExpectType Promise<true>
controller.setAccessPointWLanGroup("type123", "device123", "group123");

// $ExpectType Promise<true>
controller.setGuestLoginSettings(true, true, true, "http://redirect", "password", 24, 3600, "section123");

// $ExpectType Promise<true>
controller.setGuestLoginSettingsBase({ key: "value" }, "section123");

// $ExpectType Promise<true>
controller.setGuestLoginSettingsBase({ key: "value" });

// $ExpectType Promise<true>
controller.setIPSSettingsBase({ key: "value" });

// $ExpectType Promise<true>
controller.setSuperMgmtSettingsBase("settings123", { key: "value" });

// $ExpectType Promise<true>
controller.setSuperSMTPSettingsBase("settings123", { key: "value" });

// $ExpectType Promise<true>
controller.setSuperIdentitySettingsBase("settings123", { key: "value" });

// $ExpectType Promise<true>
controller.renameAccessPoint("ap123", "NewAPName");

// $ExpectType Promise<true>
controller.moveDevice("00:11:22:33:44:55", "site123");

// $ExpectType Promise<true>
controller.deleteDevice("00:11:22:33:44:55");

// $ExpectType Promise<Record<string, any>[]>
controller.getNetworkConf("network123");

// $ExpectType Promise<Record<string, any>[]>
controller.getNetworkConf();

// $ExpectType Promise<Record<string, any>[]>
controller.createNetwork({ key: "value" });

// $ExpectType Promise<true>
controller.setNetworkSettingsBase("network123", { key: "value" });

// $ExpectType Promise<true>
controller.deleteNetwork("network123");

// $ExpectType Promise<Record<string, any>[]>
controller.getWLanSettings("wlan123");

// $ExpectType Promise<Record<string, any>[]>
controller.getWLanSettings();

// $ExpectType Promise<true>
controller.createWLan(
    "TestWLAN",
    "passphrase",
    "usergroup123",
    "wlangroup123",
    true,
    false,
    true,
    "wpa2",
    "wpa2",
    "ccmp",
    true,
    100,
    true,
    true,
    { key: "value" },
    ["group123"],
);

// $ExpectType Promise<true>
controller.createWLan("TestWLAN", null, "usergroup123", "wlangroup123");

// $ExpectType Promise<true>
controller.setWLanSettingsBase("wlan123", { key: "value" });

// $ExpectType Promise<true>
controller.setWLanSettings("wlan123", "newpassphrase", "NewWLANName");

// $ExpectType Promise<true>
controller.setWLanSettings("wlan123");

// $ExpectType Promise<true>
controller.disableWLan("wlan123", true);

// $ExpectType Promise<true>
controller.deleteWLan("wlan123");

// $ExpectType Promise<true>
controller.setWLanMacFilter("wlan123", "allow", true, ["00:11:22:33:44:55"]);

// $ExpectType Promise<Record<string, any>[]>
controller.getEvents(24, 0, 100);

// $ExpectType Promise<Record<string, any>[]>
controller.getEvents();

// $ExpectType Promise<Record<string, any>[]>
controller.getAlarms({ key: "value" });

// $ExpectType Promise<Record<string, any>[]>
controller.getAlarms();

// $ExpectType Promise<Record<string, any>[]>
controller.countAlarms(true);

// $ExpectType Promise<Record<string, any>[]>
controller.countAlarms();

// $ExpectType Promise<true>
controller.archiveAlarms("alarm123");

// $ExpectType Promise<true>
controller.archiveAlarms();

// $ExpectType Promise<Record<string, any>[]>
controller.checkControllerUpdate();

// $ExpectType Promise<true>
controller.checkFirmwareUpdate();

// $ExpectType Promise<true>
controller.upgradeDevice("00:11:22:33:44:55");

// $ExpectType Promise<true>
controller.upgradeDeviceExternal("http://firmware", "00:11:22:33:44:55");

// $ExpectType Promise<true>
controller.startRollingUpgrade();

// $ExpectType Promise<true>
controller.cancelRollingUpgrade();

// $ExpectType Promise<Record<string, any>[]>
controller.getFirmware("type");

// $ExpectType Promise<Record<string, any>[]>
controller.getFirmware();

// $ExpectType Promise<true>
controller.powerCycleSwitchPort("00:11:22:33:44:55", 1);

// $ExpectType Promise<true>
controller.runSpectrumScan("00:11:22:33:44:55");

// $ExpectType Promise<true>
controller.runSpeedTest();

// $ExpectType Promise<Record<string, any>>
controller.getSpeedTestStatus();

// $ExpectType Promise<Record<string, any>>
controller.getSpectrumScanState("00:11:22:33:44:55");

// $ExpectType Promise<true>
controller.setDeviceSettingsBase("device123", { key: "value" });

// $ExpectType Promise<Record<string, any>[]>
controller.listRadiusProfiles();

// $ExpectType Promise<Record<string, any>[]>
controller.listRadiusAccounts();

// $ExpectType Promise<Record<string, any>[]>
controller.createRadiusAccount("AccountName", "password", 13, 6, 100);

// $ExpectType Promise<Record<string, any>[]>
controller.createRadiusAccount("AccountName", "password");

// $ExpectType Promise<true>
controller.setRadiusAccountBase("account123", { key: "value" });

// $ExpectType Promise<true>
controller.deleteRadiusAccount("account123");

// $ExpectType Promise<true>
controller.cmdStat("command");

// $ExpectType Promise<true>
controller.setElementAdoption(true);

// $ExpectType Promise<Record<string, any>>
controller.getDeviceStates();

// $ExpectType Promise<true>
controller.upgradeExternalFirmware("00:11:22:33:44:55", "http://firmware");

// $ExpectType Promise<any>
controller.customApiRequest("/api/s/default/stat/device", "GET", {});

// $ExpectType Promise<any>
controller.customApiRequest("/api/s/default/stat/device");

// $ExpectType Promise<true>
controller.listen();
