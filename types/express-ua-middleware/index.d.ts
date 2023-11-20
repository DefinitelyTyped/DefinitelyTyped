import { RequestHandler } from "express-serve-static-core";

/**
 * Express middleware to parse user-agent header
 */
declare function ua(): RequestHandler;

declare namespace ua {
    // types based on @types/ua-parser-js
    // manually copied due to lack of the proper type exports

    interface UserAgentRaw {
        raw: string;
    }
    interface UserAgent {
        readonly raw: string;
        readonly browser: {
            /**
             * Possible values :
             * Amaya, Android Browser, Arora, Avant, Baidu, Blazer, Bolt, Camino, Chimera, Chrome,
             * Chromium, Comodo Dragon, Conkeror, Dillo, Dolphin, Doris, Edge, Epiphany, Fennec,
             * Firebird, Firefox, Flock, GoBrowser, iCab, ICE Browser, IceApe, IceCat, IceDragon,
             * Iceweasel, IE [Mobile], Iron, Jasmine, K-Meleon, Konqueror, Kindle, Links,
             * Lunascape, Lynx, Maemo, Maxthon, Midori, Minimo, MIUI Browser, [Mobile] Safari,
             * Mosaic, Mozilla, Netfront, Netscape, NetSurf, Nokia, OmniWeb, Opera [Mini/Mobi/Tablet],
             * Phoenix, Polaris, QQBrowser, RockMelt, Silk, Skyfire, SeaMonkey, SlimBrowser, Swiftfox,
             * Tizen, UCBrowser, Vivaldi, w3m, Yandex
             */
            readonly name: string | undefined;

            /**
             * Determined dynamically
             */
            readonly version: string | undefined;
        };
        readonly os: {
            /**
             * Possible 'os.name'
             * AIX, Amiga OS, Android, Arch, Bada, BeOS, BlackBerry, CentOS, Chromium OS, Contiki,
             * Fedora, Firefox OS, FreeBSD, Debian, DragonFly, Gentoo, GNU, Haiku, Hurd, iOS,
             * Joli, Linpus, Linux, Mac OS, Mageia, Mandriva, MeeGo, Minix, Mint, Morph OS, NetBSD,
             * Nintendo, OpenBSD, OpenVMS, OS/2, Palm, PCLinuxOS, Plan9, Playstation, QNX, RedHat,
             * RIM Tablet OS, RISC OS, Sailfish, Series40, Slackware, Solaris, SUSE, Symbian, Tizen,
             * Ubuntu, UNIX, VectorLinux, WebOS, Windows [Phone/Mobile], Zenwalk
             */
            readonly name: string | undefined;
            /**
             * Determined dynamically
             */
            readonly version: string | undefined;
        };
        readonly device: {
            /**
             * Determined dynamically
             */
            readonly model: string | undefined;

            /**
             * Possible vendor:
             * Acer, Alcatel, Amazon, Apple, Archos, Asus, BenQ, BlackBerry, Dell, GeeksPhone,
             * Google, HP, HTC, Huawei, Jolla, Lenovo, LG, Meizu, Microsoft, Motorola, Nexian,
             * Nintendo, Nokia, Nvidia, Ouya, Palm, Panasonic, Polytron, RIM, Samsung, Sharp,
             * Siemens, Sony-Ericsson, Sprint, Xbox, ZTE
             */
            readonly vendor: string | undefined;
        };
    }
}

declare global {
    namespace Express {
        interface Request {
            userAgent: ua.UserAgent & ua.UserAgentRaw;
            userAgentFromString(raw: string): ua.UserAgent;
        }
    }
}

export = ua;
