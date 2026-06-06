import SteamUser = require("steam-user");
import SteamID = require("steamid");
import { AppInfoContent } from "steam-user";

console.log(SteamUser.formatCurrency(12.34, SteamUser.ECurrencyCode.USD));
console.log(SteamUser.formatCurrency(12345, SteamUser.ECurrencyCode.JPY));
console.log(SteamUser.formatCurrency(123.45, SteamUser.ECurrencyCode.EUR));

const user = new SteamUser();

user.on("debug", message => {
    console.log(message);
});

user.on("loggedOn", () => {
    console.log("logged on");
    user.setPersona(SteamUser.EPersonaState.Snooze);
    user.setUIMode(SteamUser.EClientUIMode.Mobile);
});

user.on("error", err => {
    console.log(err);
    console.log(err.eresult);
});

user.chat.on("chatMessage", (message: SteamUser.SteamChatRoomClient.IncomingChatMessage) => {
    console.log("Got new message!");
    console.log(message.message_no_bbcode);
});

user.setOption("autoRelogin", true);

user.setOptions({ language: "spanish", saveAppTickets: true });

user.logOn({
    accountName: "user123",
    password: "password",
});
user.logOff();
user.relog();

user.logOn({
    refreshToken: "token123",
    steamID: "76561197960287930",
});

user.logOn({
    refreshToken: "123token",
});

user.logOn(true);

user.requestValidationEmail().catch(err => console.error(err));

user.enableTwoFactor()
    .then(response => {
        // do something with response
    })
    .catch(err => console.error(err));

user.finalizeTwoFactor("iwpergjawhirgos", "active")
    .then(response => {
        // do something with response
    })
    .catch(err => console.error(err));

user.getSteamGuardDetails()
    .then((response: SteamUser.SteamGuardDetails) => {
        // do something with response
    })
    .catch(err => console.error(err));

user.getPrivacySettings();

user.gamesPlayed(730);
user.getPlayerCount(730)
    .then(response => {
        // do something with response
    })
    .catch(err => console.error(err));

user.serverQuery({
    app_id: 730,
})
    .then((response: SteamUser.ServerQueryResponse) => {
        // do something with response
    })
    .catch(err => console.error(err));

user.getProductChanges(2)
    .then((response: SteamUser.ProductChanges) => {
        // do something with response
    })
    .catch(err => console.error(err));

user.getProductInfo([730], [420])
    .then((response: SteamUser.ProductInfo) => {
        // $ExpectType AppInfoContent
        response.apps[0].appinfo;
        const appinfo: AppInfoContent = response.apps[0].appinfo;
        if (!appinfo.common) {
            return;
        }
        if (appinfo.common.associations) {
            void appinfo.common.associations["0"].name;
        }
        if (
            "extended" in appinfo
            && appinfo.extended
            && "developer" in appinfo.extended
        ) {
            void appinfo.extended.developer;
        }
        if (
            "config" in appinfo
            && appinfo.config
            && "installdir" in appinfo.config
        ) {
            void appinfo.config.installdir;
        }
    })
    .catch(err => console.error(err));

user.getProductChanges(0)
    .then((response: SteamUser.ProductChanges) => {
        void response.currentChangeNumber;
        void response.appChanges.length;
        void response.packageChanges.length;
    })
    .catch(err => console.error(err));

user.getProductChanges(
    0,
    (
        err: Error | null,
        currentChangeNumber: number,
        appChanges: SteamUser.AppChanges[],
        packageChanges: SteamUser.PackageChanges[],
    ) => {
        void appChanges.length;
        void packageChanges.length;
    },
);

const owned = user.getOwnedApps();
console.log(owned);

console.log(user.ownsApp(730));

user.getStoreTagNames("spanish", [1])
    .then(response => {
        // $ExpectType StoreTagNames
        response.tags;
    })
    .catch(err => console.error(err));

user.addFriend("76561197960287930")
    .then(response => {
        console.log(`${response.personaName} added as a friend.`);
    })
    .catch(err => console.error(err));
user.removeFriend("76561197960287930");

user.createQuickInviteLink()
    .then((response: SteamUser.QuickInviteLink) => {
        // do something with response
    })
    .catch(err => console.error(err));

user.listQuickInviteLinks()
    .then((response: SteamUser.QuickInviteLink[]) => {
        // do something with response
    })
    .catch(err => console.error(err));

console.log(user.getQuickInviteLinkSteamID("www.steamcommunity.com/quickinvite/123456780"));

user.redeemQuickInviteLink("www.steamcommunity.com/quickinvite/123456780").catch(err => console.error(err));

user.getPersonas(["76561197960287930"])
    .then(response => {
        void response.personas;
    })
    .catch(err => console.error(err));

user.getSteamLevels(["76561197960287930"])
    .then(response => {
        // do something with response
    })
    .catch(err => console.error(err));

user.getAliases(["76561197960287930"])
    .then(response => {
        // do something with response
    })
    .catch(err => console.error(err));

user.getTradeURL()
    .then((response: SteamUser.TradeURL) => {
        // do something with response
    })
    .catch(err => console.error(err));

user.getEmoticonList()
    .then(response => {
        void response.emoticons;
    })
    .catch(err => console.error(err));

user.chat
    .getFriendMessageHistory("76561197960287930")
    .then(response => {
        // $ExpectType FriendMessage[]
        response.messages;
        void response.more_available;
    })
    .catch(err => console.error(err));

user.getFriendsThatPlay(730).then(response => {
    console.log(response.friends);
});
user.chat.on("chatRoomGroupRoomsChange", (details: SteamUser.SteamChatRoomClient.groupRoomsStateChangeDetails) => {
    console.log(details.chat_group_id);
    console.log(details.default_chat_id);
    console.log(details.chat_rooms);
});

// ADDED IN v4.21.0

user.chat
    .createGroup(["76561197960287930", "76561197960287931", "76561197960287932", "76561197960287933"])
    .then(response => {
        console.log(response.chat_group_id);
        console.log(response.state);
        console.log(response.user_chat_state);
    })
    .catch(err => console.error(err));

user.chat.saveGroup("groupId", "myAwesomeGroupName").catch(err => console.error(err));

user.chat.leaveGroup("groupId").catch(err => console.error(err));

user.chat
    .setGroupUserRoleState("groupId", new SteamID("76561197960287931"), "roleId", true)
    .catch(err => console.error);

user.chat.on("chatRoomGroupSelfStateChange", (details: SteamUser.SteamChatRoomClient.groupSelfStateChangeDetails) => {
    console.log(details.chat_group_id);
    console.log(details.user_action);
    console.log(details.user_chat_group_state);
    console.log(details.group_summary);
});

user.chat.on(
    "chatRoomGroupMemberStateChange",
    (details: SteamUser.SteamChatRoomClient.groupMemberStateChangeDetails) => {
        console.log(details.chat_group_id);
        console.log(details.member);
        console.log(details.change);
    },
);

user.chat.on(
    "chatRoomGroupHeaderStateChange",
    (details: SteamUser.SteamChatRoomClient.groupHeaderStateChangeDetails) => {
        console.log(details.chat_group_id);
        console.log(details.header_state);
    },
);

// ADDED / MODIFIED in v4.22.0
user.getOwnedApps((element: SteamUser.Proto_CMsgClientLicenseList_License) => {
    return element.package_id === 123;
});
user.ownsApp(456, (element: SteamUser.Proto_CMsgClientLicenseList_License, index: number) => {
    return element.package_id === 123 && index > 4;
});
user.getOwnedDepots(
    (
        element: SteamUser.Proto_CMsgClientLicenseList_License,
        index: number,
        array: SteamUser.Proto_CMsgClientLicenseList_License[],
    ) => {
        return array.length > 4;
    },
);
user.ownsDepot(
    2,
    (
        element: SteamUser.Proto_CMsgClientLicenseList_License,
        index: number,
        array: SteamUser.Proto_CMsgClientLicenseList_License[],
    ) => {
        return array.length > 4;
    },
);
user.getOwnedPackages(
    (
        element: SteamUser.Proto_CMsgClientLicenseList_License,
        index: number,
        array: SteamUser.Proto_CMsgClientLicenseList_License[],
    ) => {
        return array.length > 4;
    },
);
user.ownsPackage(
    4,
    (
        element: SteamUser.Proto_CMsgClientLicenseList_License,
        index: number,
        array: SteamUser.Proto_CMsgClientLicenseList_License[],
    ) => {
        return array.length > 4;
    },
);
user.getOwnedApps({ excludeFree: true });
user.ownsApp(456, { excludeExpiring: true });
user.getOwnedDepots({ excludeShared: true });
user.ownsDepot(2, { excludeExpiring: false, excludeFree: true });
user.getOwnedPackages({ excludeShared: false, excludeFree: false });
user.ownsPackage(4, { excludeExpiring: true, excludeFree: true, excludeShared: true });

// deprecated since v4.22.1
user.on("appOwnershipCached", () => {});
// not deprecated
user.on("ownershipCached", () => {});

// added in v4.23 revision, not necessarily part of that release tho
user.setOption("ownershipFilter", { excludeExpiring: false });

// APPAUTH METHODS
user.createEncryptedAppTicket(730, Buffer.alloc(42)).then(ticket => {
    // $ExpectType Record<string, any>
    SteamUser.parseEncryptedAppTicket(ticket, "supersafekey");
});
// $ExpectType Promise<{ canceledTicketCount: number; }>
user.cancelAuthSessionTickets(730, ["gctoken1", "gctoken2"]);
// $ExpectType Promise<{ canceledTicketCount: number; }>
user.cancelAuthSessionTickets(730, "gctoken1");
// $ExpectType Promise<{ canceledTicketCount: number; }>
user.cancelAuthSessionTickets(730, null);
// $ExpectType Promise<{ canceledTicketCount: number; }>
user.cancelAuthSessionTickets(730);
// $ExpectType Promise<{ canceledTicketCount: number; }>
user.endAuthSessions(730, "76561197960287930");
// $ExpectType Promise<{ canceledTicketCount: number; }>
user.endAuthSessions(730, ["76561197960287930"]);
// $ExpectType Promise<{ canceledTicketCount: number; }>
user.endAuthSessions(730, [new SteamID("76561197960287930")]);
// $ExpectType Promise<{ canceledTicketCount: number; }>
user.endAuthSessions(730, new SteamID("76561197960287930"));
user.createAuthSessionTicket(730).then(res => {
    return res.sessionTicket;
});
user.getAppOwnershipTicket(730).then(ownershipticket => {
    return ownershipticket;
});
// $ExpectType Promise<void>
user.activateAuthSessionTickets(730, { foo: 42, bar: "foobar" });
// $ExpectType Promise<void>
user.activateAuthSessionTickets(730, [{ foo: 42, bar: "foobar" }]);
// $ExpectType Promise<void>
user.activateAuthSessionTickets(730, [Buffer.alloc(42), Buffer.alloc(43)]);
// $ExpectType Promise<void>
user.activateAuthSessionTickets(730, Buffer.alloc(44));
// $ExpectType Promise<UserOwnedApps>
user.getUserOwnedApps(new SteamID("76561197960287930"));

user.on("appUpdate", (appid: number, data: SteamUser.AppInfo) => {
    // $ExpectType AppInfo
    data;
});

user.on("packageUpdate", (packageid: number, data: SteamUser.PackageInfo) => {
    // $ExpectType PackageInfo
    data;
});

const DLC_EXAMPLE: AppInfoContent = {
    "appid": "4079770",
    "common": {
        "name": "Skull & Bones - Seasonal Boatload Bundle Y2S3 Ubisoft Activation",
        "type": "DLC",
        "parent": "2853730",
        "releasestate": "released",
        "oslist": "windows",
        "osarch": "64",
        "osextended": "",
        "gameid": "4079770",
        "exfgls": "9",
    },
    "extended": {
        "dlcforappid": "2853730",
        "mustownapptopurchase": "2853730",
        "legacykeyproofofpurchaseticket": "1",
        "legacykeylinkedexternally": "1",
        "legacykeyregistrationmethod": "api",
        "proofofpurchaseticketrevision": "2",
    },
};

const GAME_WITHOUT_EXTENSION_EXAMPLE: AppInfoContent = {
    "appid": "3822170",
    "public_only": "1",
    "common": {
        "name": "Mythical Haven",
        "type": "Game",
        "releasestate": "prerelease",
        "oslist": "windows,linux",
        "osarch": "",
        "osextended": "",
        "icon": "382426adc9164d18f252372d6e3f1863231128bc",
        "clienttga": "068c5e7b9badc6e501553b8a8ca0d50f457c4562",
        "clienticon": "5a5f3ca693e70b6f09053cc9d4acfd26177816a4",
        "community_hub_visible": "1",
        "gameid": "3822170",
        "exfgls": "8",
        "store_tags": {
            "0": "597",
            "1": "122",
        },
    },
};

const DEMO_EXAMPLE: AppInfoContent = {
    "appid": "3592810",
    "common": {
        "name": "LOCURA Demo",
        "type": "Demo",
        "parent": "2492990",
        "clienttga": "57446c0b1de50d238a53901c7a525d9cee8af7c4",
        "clienticon": "4f3ee44d3e136ee3c56d30318b4ae386e64b1b40",
        "oslist": "windows",
        "osarch": "",
        "osextended": "",
        "icon": "7600c38504523ef3f10d6fe50d20b065bdef192f",
        "releasestate": "released",
        "gameid": "3592810",
        "exfgls": "6",
    },
    "config": {
        "installdir": "LOCURA Demo",
        "launch": {
            "0": {
                "executable": "Locura_demo.exe",
                "type": "default",
                "config": {
                    "oslist": "windows",
                },
            },
        },
    },
    "depots": {
        "3592811": {
            "config": {
                "oslist": "windows",
            },
            "manifests": {
                "public": {
                    "gid": "228799882111373695",
                    "size": "11798240078",
                    "download": "10862096800",
                },
            },
        },
        "baselanguages": "english",
        "branches": {
            "public": {
                "buildid": "20162272",
                "timeupdated": "1759341545",
            },
        },
    },
};

const MEDIA_EXAMPLE: AppInfoContent = {
    "appid": "5004",
    "common": {
        "clienttga": "e9722032ee5aa7bccb26cfdda0bb1b263cf8854d",
        "name": "Alpha Prime Trailer 2",
        "type": "media",
        "freeondemand": "1",
        "gameid": "5004",
    },
    "extended": {
        "developer": "Black Element Software",
        "gamedir": "seet",
        "homepage": "http://www.alpha-prime.com/",
        "icon": "steam/games/icon_movie",
        "ismediafile": "1",
        "mediafiletype": "Movie",
        "order": "1",
        "primarycache": "5004",
    },
    "config": {
        "shortname": "5004Media",
        "installdir": "Alpha Prime Trailer 2",
        "contenttype": "3",
        "launch": {
            "main": {
                "executable": "smp.exe",
                "arguments": "/redirect steam://advertise/2590 ap_trailer.wmv",
                "description": "Alpha Prime Trailer 2",
            },
        },
    },
    "depots": {
        "910": {
            "systemdefined": "1",
            "manifests": {
                "public": {
                    "gid": "1332084816209327708",
                    "size": "266240",
                    "download": "0",
                },
            },
        },
        "5004": {
            "systemdefined": "1",
            "manifests": {
                "public": {
                    "gid": "4121846428408586738",
                    "size": "94262425",
                    "download": "0",
                },
            },
        },
        "overridescddb": "1",
        "branches": {
            "public": {
                "buildid": "250795",
            },
        },
    },
};

const TEST_DLC_EXAMPLE: AppInfoContent = {
    "appid": "20004",
    "common": {
        "type": "dlc",
        "parent": "20000",
        "name": "ValveTestApp20004",
        "gameid": "20004",
    },
};

const GUIDE_EXAMPLE: AppInfoContent = {
    "appid": "22800",
    "common": {
        "name": "Far Cry 2: Prima Official eGuide",
        "type": "guide",
        "gameid": "22800",
    },
    "extended": {
        "developer": "",
        "gamedir": "Far Cry 2 Prima Official Strategy Guide",
        "guideurl": "http://steam.primagames.com/?CDKey=%cdkey%",
        "homepage": "",
        "icon": "",
        "legacykeyregistrationmethod": "registry",
        "legacykeyregistrylocation": "HKEY_CURRENT_USER\\Software\\Valve\\TestApp22800\\SteamKey",
        "noservers": "1",
        "order": "1",
        "primarycache": "7",
        "serverbrowsername": "",
        "state": "eStateAvailable",
        "visibleonlywhensubscribed": "1",
    },
};

const CONFIG_EXAMPLE: AppInfoContent = {
    "appid": "203230",
    "common": {
        "name": "Risen 2 Continued",
        "type": "config",
        "gameid": "203230",
    },
    "config": {
        "contenttype": "3",
        "installdir": "Risen 2",
    },
};

const BETA_EXAMPLE: AppInfoContent = {
    "appid": "219540",
    "common": {
        "name": "Arma 2: Operation Arrowhead Beta (Obsolete)",
        "type": "Beta",
        "logo": "c2ea07874fb1a776e4c5bfc659e5f296d656777d",
        "logo_small": "c2ea07874fb1a776e4c5bfc659e5f296d656777d_thumb",
        "clienticon": "46fbb4263cc8ab442cd939c5434d05b49d9d945f",
        "clienttga": "66c958a4ce9cb6a72409ab7c8772b40ba3cd24ee",
        "icon": "32431d84014bf4652181f45bc7c06f1ca3f34363",
        "parent": "33930",
        "community_hub_visible": "1",
        "gameid": "219540",
        "exfgls": "6",
    },
    "extended": {
        "developer": "",
        "gamedir": "ValveTestApp219540",
        "homepage": "",
        "icon": "",
        "noservers": "0",
        "sourcegame": "1",
        "state": "eStateAvailable",
        "thirdpartycdkey": "1",
        "visibleonlywhensubscribed": "1",
        "no_revenue_accumulation": "1",
    },
    "config": {
        "contenttype": "3",
        "installdir": "arma 2 operation arrowhead",
        "launch": {
            "0": {
                "executable": "Expansion\\beta\\Arma2OA.exe",
                "arguments": "-beta=Expansion\\beta;Expansion\\beta\\Expansion",
                "description": "Launch Beta",
                "workingdir": ".\\",
            },
        },
        "installscriptsignature":
            "072d84fde2ef0ae5baf2e9dc1178cfcf141cba641b98854cb3ebe850f01729917320c9220d55f15f72f92a2a9d6f16a181050b8a3a4be357fdb238c7da4e35bb840c4a16b3e95a39e0115aff6d833a959ad1228d72fe2307a4ea49579e53c9fca6fbcc2162524f17602c60fef0b3b2a0a3884fecab217320d74083530c2cc01c",
        "installscriptoverride": "1",
        "externalregistrationurl": {
            "english": "http://www.arma2.com",
        },
    },
    "install": {
        "registry if not present": {},
        "registry": {},
        "run process": {
            "battleyeoabeta": {
                "hasrunkey": "HKEY_LOCAL_MACHINE\\Software\\Valve\\Steam\\Apps\\219540",
                "description": "BattlEye Anti-Cheat software for ARMA 2 OA beta",
                "process 1": "%INSTALLDIR%\\expansion\\beta\\setup_BattlEyeARMA2OA.exe",
                "ignoreexitcode": "0",
                "nocleanup": "0",
                "minimumhasrunvalue": "2",
                "ascurrentuser": "0",
            },
        },
        "arma 2 cd key": {
            "registrypath": "HKEY_LOCAL_MACHINE\\SOFTWARE\\Bohemia Interactive Studio\\ArmA 2 OA\\KEY",
        },
        "ea oreg": {
            "string": {
                "english": {
                    "url": "http://www.arma2.com",
                },
            },
        },
    },
    "depots": {
        "219541": {
            "systemdefined": "1",
            "manifests": {
                "public": {
                    "gid": "6550263247666884023",
                    "size": "52543197",
                    "download": "0",
                },
                "beta108074": {
                    "gid": "7888478692897229357",
                    "size": "40378810",
                    "download": "0",
                },
                "beta112555": {
                    "gid": "3651664637375018602",
                    "size": "40379023",
                    "download": "0",
                },
                "test": {
                    "gid": "6550263247666884023",
                    "size": "52543197",
                    "download": "0",
                },
            },
        },
        "preloadonly": "1",
        "overridescddb": "1",
        "branches": {
            "public": {
                "buildid": "238935",
            },
            "beta108074": {
                "buildid": "93738",
            },
            "beta112555": {
                "buildid": "145144",
            },
            "test": {
                "buildid": "238935",
            },
        },
    },
};

const APPLICATION_EXAMPLE: AppInfoContent = {
    "appid": "227980",
    "common": {
        "name": "Construct 2 Personal",
        "type": "Application",
        "icon": "fd7e273e97b6ec0a0102bf5fe6768d58317cfabb",
        "clienttga": "74746519eca10cd477396d1ed44aa2475ee09931",
        "clienticon": "c142f28be4fd1fae021a7e5233a7b765b56f1fa9",
        "oslist": "windows",
        "community_hub_visible": "1",
        "gameid": "227980",
        "exfgls": "6",
    },
    "extended": {
        "checkpkgstate": "1",
        "developer": "",
        "disableoverlay": "1",
        "gamedir": "ValveTestApp227980",
        "homepage": "",
        "icon": "",
        "noservers": "0",
        "sourcegame": "1",
        "state": "eStateComingSoonNoPreload",
        "visibleonlywhensubscribed": "1",
    },
    "config": {
        "contenttype": "3",
        "installdir": "Construct2",
        "launch": {
            "0": {
                "executable": "Construct2.exe",
                "description": "Launch Construct 2",
                "config": {
                    "oslist": "windows",
                },
            },
        },
    },
    "depots": {
        "227241": {
            "systemdefined": "1",
            "config": {
                "language": "english",
                "oslist": "windows",
            },
            "depotfromapp": "227240",
            "sharedinstall": "2",
        },
        "overridescddb": "1",
    },
};

const VIDEO_EXAMPLE: AppInfoContent = {
    "appid": "373022",
    "common": {
        "name": "Blender: 1.3 UI Basics - Layout Customization",
        "type": "Video",
        "parent": "373020",
        "oslist": "windows,macos,linux",
        "releasestate": "released",
        "community_hub_visible": "1",
        "gameid": "373022",
        "exfgls": "6",
    },
    "config": {
        "videoid": "7527155574822378568",
    },
};

const GAME_WITH_ANON_ASSOC_EXAMPLE: AppInfoContent = {
    "appid": "2521400",
    "common": {
        "name": "愚人船 NARRENSCHIFF",
        "type": "Game",
        "oslist": "windows",
        "osarch": "",
        "osextended": "",
        "icon": "69484a9048401fa508f1c52da613182bac133b0c",
        "clienttga": "78925b4d8a3a0200a1390e9a36b9baf9236b96cd",
        "clienticon": "12e37af555d834003b0e966889da9f17914e3c5e",
        "releasestate": "released",
        "content_descriptors": {
            "0": "1",
            "1": "5",
        },
        "aicontenttype": "1",
        "controllertagwizard": "1",
        "small_capsule": {
            "schinese": "capsule_231x87_schinese.jpg",
            "english": "7eec28c94d470fbd1244f016f60d62adf7ebc238/capsule_231x87.jpg",
        },
        "header_image": {
            "english": "23311545184bc42e54d4317e96d9fa7af885a089/header.jpg",
        },
        "library_assets": {
            "library_capsule": "zh-cn,en",
            "library_hero": "en",
            "library_hero_blur": "en",
            "library_logo": "zh-cn,en",
            "library_header": "en",
            "logo_position": {
                "pinned_position": "CenterCenter",
                "width_pct": "50",
                "height_pct": "50",
            },
        },
        "library_assets_full": {
            "library_capsule": {
                "image": {
                    "schinese": "library_600x900_schinese.jpg",
                    "english": "1a41e429f8a9d1ced4d1d694f8be40a644a9035b/library_capsule.jpg",
                },
                "image2x": {
                    "schinese": "library_600x900_schinese_2x.jpg",
                    "english": "1a41e429f8a9d1ced4d1d694f8be40a644a9035b/library_capsule_2x.jpg",
                },
            },
            "library_hero": {
                "image": {
                    "english": "ac24a584893d024ab1b0fcf40d0a0b82a90cdb7e/library_hero.jpg",
                },
                "image2x": {
                    "english": "ac24a584893d024ab1b0fcf40d0a0b82a90cdb7e/library_hero_2x.jpg",
                },
            },
            "library_hero_blur": {
                "image": {
                    "english": "ac24a584893d024ab1b0fcf40d0a0b82a90cdb7e/library_hero_blur.jpg",
                },
            },
            "library_logo": {
                "image": {
                    "schinese": "logo_schinese.png",
                    "english": "644a8dfb21c4fdb1524ddfe6af9627e40cfb7eb6/logo.png",
                },
                "image2x": {
                    "schinese": "logo_schinese_2x.png",
                    "english": "644a8dfb21c4fdb1524ddfe6af9627e40cfb7eb6/logo_2x.png",
                },
                "logo_position": {
                    "pinned_position": "CenterCenter",
                    "width_pct": "50",
                    "height_pct": "50",
                },
            },
            "library_header": {
                "image": {
                    "english": "23311545184bc42e54d4317e96d9fa7af885a089/library_header.jpg",
                },
                "image2x": {
                    "english": "23311545184bc42e54d4317e96d9fa7af885a089/library_header_2x.jpg",
                },
            },
        },
        "store_asset_mtime": "1759495332",
        "associations": {
            "0": {
                "type": "developer",
                "name": "Anonymous",
            },
            "1": {
                "type": "developer",
                "name": "Anonymous",
            },
            "2": {
                "type": "publisher",
                "name": "Anonymous",
            },
            "3": {
                "type": "publisher",
                "name": "Anonymous",
            },
        },
        "primary_genre": "23",
        "genres": {
            "0": "25",
            "1": "4",
            "2": "23",
            "3": "3",
            "4": "70",
        },
        "category": {
            "category_2": "1",
            "category_62": "1",
        },
        "supported_languages": {
            "schinese": {
                "supported": "true",
                "subtitles": "true",
            },
        },
        "community_hub_visible": "1",
        "gameid": "2521400",
        "content_descriptors_including_dlc": {
            "0": "1",
            "1": "5",
        },
        "store_tags": {
            "0": "122",
            "1": "1664",
            "2": "3871",
            "3": "44868",
            "4": "1721",
            "5": "597",
            "6": "3964",
            "7": "1742",
            "8": "11014",
            "9": "21",
            "10": "3942",
            "11": "5984",
            "12": "7743",
            "13": "4004",
            "14": "1673",
            "15": "4182",
            "16": "31275",
            "17": "492",
            "18": "493",
        },
        "review_score": "8",
        "review_percentage": "95",
    },
    "extended": {
        "developer": "Anonymous",
        "publisher": "Anonymous",
        "gamemanualurl": "https://store.steampowered.com/manual/2521400/",
    },
    "config": {
        "installdir": "愚人船 NARRENSCHIFF",
        "launch": {
            "0": {
                "executable": "Game.exe",
                "arguments": "--in-process-gpu",
                "type": "default",
                "config": {
                    "oslist": "windows",
                    "osarch": "64",
                },
            },
        },
        "steamdecktouchscreen": "1",
    },
    "depots": {
        "2521401": {
            "manifests": {
                "public": {
                    "gid": "6981023562958172906",
                    "size": "860631256",
                    "download": "571884368",
                },
            },
        },
        "2521402": {
            "config": {
                "oslist": "linux",
            },
        },
        "branches": {
            "public": {
                "buildid": "20242077",
                "timeupdated": "1759507951",
            },
        },
    },
};
