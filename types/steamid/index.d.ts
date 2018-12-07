// Type definitions for steamid 1.1
// Project: https://github.com/DoctorMcKay/node-steamid
// Definitions by: Edward Sammut Alessi <https://github.com/Slessi>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.1

/**
 * Render this SteamID into Steam2 textual format
 * @param newerFormat [newerFormat=false] - true if you want to use 1 in place of the leading 0 for the public universe
 */
type getSteam2RenderedID = (newerFormat?: boolean) => string;

/**
 * Render this SteamID into Steam3 textual format
 */
type getSteam3RenderedID = () => string;

/**
 * Render this SteamID into 64-bit numeric format
 */
type getSteamID64 = () => string;

declare class SteamID {
    universe: SteamID.Universe;
    type: SteamID.Type;
    instance: SteamID.Instance;
    accountid: number;

    /**
     * You can create a SteamID object from a Steam2 rendered ID, a Steam3 rendered ID, a SteamID64, or from the four parts that make up a SteamID.
     * @param input SteamID string
     */
    constructor(input: string);

    /**
     * Check whether this SteamID is valid (according to Steam's rules)
     */
    isValid(): boolean;

    /**
     * Check whether this chat SteamID is tied to a Steam group.
     */
    isGroupChat(): boolean;

    /**
     * Check whether this chat SteamID is a Steam lobby.
     */
    isLobby(): boolean;

    getSteam2RenderedID: getSteam2RenderedID;
    steam2: getSteam2RenderedID;

    getSteam3RenderedID: getSteam3RenderedID;
    steam3: getSteam3RenderedID;

    getSteamID64: getSteamID64;
    toString: getSteamID64;
}

declare namespace SteamID {
    // Universe constants
    enum Universe {
        INVALID = 0,
        PUBLIC = 1,
        BETA = 2,
        INTERNAL = 3,
        DEV = 4,
    }

    // Type constants
    enum Type {
        INVALID = 0,
        INDIVIDUAL = 1,
        MULTISEAT = 2,
        GAMESERVER = 3,
        ANON_GAMESERVER = 4,
        PENDING = 5,
        CONTENT_SERVER = 6,
        CLAN = 7,
        CHAT = 8,
        P2P_SUPER_SEEDER = 9,
        ANON_USER = 10,
    }

    // Instance constants
    enum Instance {
        ALL = 0,
        DESKTOP = 1,
        CONSOLE = 2,
        WEB = 4,
    }

    // Type chars
    enum TypeChars {
        I = Type.INVALID,
        U = Type.INDIVIDUAL,
        M = Type.MULTISEAT,
        G = Type.GAMESERVER,
        A = Type.ANON_GAMESERVER,
        P = Type.PENDING,
        C = Type.CONTENT_SERVER,
        g = Type.CLAN,
        T = Type.CHAT,
        a = Type.ANON_USER,
    }

    const AccountIDMask = 0xFFFFFFFF;
    const AccountInstanceMask = 0x000FFFFF;

    enum ChatInstanceFlags {
        /**
         * (AccountInstanceMask + 1) >> 1
         */
        Clan = (0x000FFFFF + 1) >> 1,

        /**
         * (AccountInstanceMask + 1) >> 2
         */
        Lobby = (0x000FFFFF + 1) >> 2,

        /**
         * (AccountInstanceMask + 1) >> 3
         */
        MMSLobby = (0x000FFFFF + 1) >> 3,
    }

    /**
     * Create an individual SteamID in the public universe given an accountid
     * @param accountid - The user's account ID
     */
    function fromIndividualAccountID(accountid: number | string): SteamID;
}

export = SteamID;
