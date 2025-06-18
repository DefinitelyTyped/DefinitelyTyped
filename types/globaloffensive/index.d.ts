/// <reference types="node" />

import { EventEmitter } from "events";
import type SteamUser = require("steam-user");
import SteamID = require("steamid");
import { GCConnectionStatus, ItemCustomizationNotification } from "./enums";

export = GlobalOffensive;

declare class GlobalOffensive extends EventEmitter {
    // enums
    static GCConnectionStatus: typeof GCConnectionStatus;
    static ItemCustomizationNotification: typeof ItemCustomizationNotification;

    /**
     * `true` if we're currently connected to the GC, `false` otherwise.
     * You should only call methods when we have an active GC session.
     */
    readonly haveGCSession: boolean;

    /**
     * A big object containing account data and some statistics including players in-game.
     * `undefined` until `accountData` is emitted.
     */
    readonly accountData?: GlobalOffensive.AccountData;

    /**
     * An array containing the items in your inventory.
     * `undefined` until `connectedToGC` is emitted.
     */
    readonly inventory?: GlobalOffensive.InventoryItem[];

    /**
     * When instantiating your node-globaloffensive instance,
     * you need to pass your active Steam.SteamClient instance as the sole parameter.
     * @param user an active SteamClient
     */
    constructor(user: SteamUser);

    /**
     * Requests stats for a historical game.
     * Listen for the `matchList` event to get your response.
     * @param shareCodeOrDetails Either a share code as a string, or an object containing properties `matchId`, `outcomeId`, `token`.
     * @since v2.2
     */
    requestGame(shareCodeOrDetails: string | { matchId: string; outcomeId: string; token: string }): void;

    /**
     * Request a list of current live tournament games. This is the list you see in the client under Watch -> Live.
     * Listen for the `matchList` event to get your response.
     */
    requestLiveGames(): void;

    /**
     * Request a list of recent games (max. 8).
     * This is the list you see in the client under Watch -> Your Matches.
     * Listen for the `matchList` event to get your response.
     * @param steamid the users steamid
     */
    requestRecentGames(steamid: SteamID | string): void;

    /**
     * Request live game info for a specific user.
     * Listen for the `matchList` event to get your response.
     * @param steamid the users steamid
     */
    requestLiveGameForUser(steamid: SteamID | string): void;

    /**
     * Sends the same request to the GC that the official client sends when you inspect an item.
     * If all parameters are correct and the GC is in a good mood, returns the item's data.
     * Using this for an item your account owns is useless as all the data is already available in `inventory`.
     *
     * The response will arrive in the callback and in the `inspectItemInfo` event.
     *
     * As of v2.1.0, the request will time out if no response is received in 10 seconds.
     * If this happens, `inspectItemTimedOut` will be emitted.
     *
     * @param owner The numeric SteamID or market listing ID of the owning Steam account or market listing,
     *              as a string; or an entire inspect link.
     * @param assetid If `owner` is not an entire inspect link, this is the numeric asset ID of this item, as a string
     *                (the number following the "A" character)
     * @param d If `owner` is not an entire inspect link, this is the "D" number from the inspect link
     *          (the last number following the "D" character)
     * @param callback Called if all parameters are valid when Steam responds to us.
     *
     * @since v1.1
     */
    inspectItem(
        owner: SteamID | string,
        assetid?: string,
        d?: string,
        callback?: (item: GlobalOffensive.ItemInfo) => void,
    ): void;

    /**
     * Sends the same request to the GC that viewing the CSGO player profile from the in-game friendlist sends.
     * Returns the same information that you would get in-game.
     * This returns the same protobuf that is used when you request your own profile data, so most of it stays empty.
     * @param steamid The numeric SteamID of the Steam account to pull profile data for.
     *                Needs to be playing CSGO and be on the friend list of the requesting account.
     * @param callback Called if all parameters are valid when Steam responds to us.
     * @since v1.2
     */
    requestPlayersProfile(steamid: SteamID | string, callback?: (profile: GlobalOffensive.Profile) => void): void;

    /**
     * Renames a particular item in your inventory, using a given name tag.
     * You can rename storage units for free by passing `0` as the `nameTagId`.
     * @param nameTagId The ID of the name tag you want to consume to do this
     * @param itemId The ID of the item you want to rename
     * @param name A string containing the item's new name
     * @since v2.1
     */
    nameItem(nameTagId: string, itemId: string, name: string): void;

    /**
     * Deletes a particular item from your inventory.
     * This is a destructive operation, which cannot be undone.
     * @param itemId The ID of the item you want to delete
     * @since v1.3
     */
    deleteItem(itemId: string): void;

    /**
     * Put an item in your inventory into a casket (storage unit) you own.
     * Assuming the request succeeds, `itemRemoved` will be emitted for the item that was put into the casket,
     * and `itemCustomizationNotification` will be emitted with notification type `CasketAdded` for the casket.
     * @param casketId The ID of the casket (storage unit) you want to put an item into
     * @param itemId The ID of the item you want to put into the casket
     * @since v2.1
     */
    addToCasket(casketId: string, itemId: string): void;

    /**
     * Remove an item from a casket (storage unit) you own and put it into your inventory.
     * Assuming the request succeeds, `itemAcquired` will be emitted for the item that was removed from the casket,
     * and `itemCustomizationNotification` will be emitted with notification type `CasketRemoved` for the casket.
     * @param casketId The ID of the casket (storage unit) you want to remove an item from
     * @param itemId The ID of the item you want to remove from the casket
     * @since v2.1
     */
    removeFromCasket(casketId: string, itemId: string): void;

    /**
     * Loads the contents of a storage unit.
     * Note that calling this will have the GC load the contents of the storage unit using the same mechanism as your actual inventory,
     * so items in the storage unit will appear in the `inventory` property,
     * and `itemAcquired` will be emitted for each item.
     * Each item in your `inventory` that is contained inside of a storage unit has a property `casket_id`,
     * the value of which is a string containing the ID of the storage unit that contains that item.
     *
     * It appears that under some circumstances,
     * the GC might load these items into your inventory without calling this method,
     * so if you are using inventory to see what items are in your `inventory`,
     * you will need to check `casket_id` to filter out items stored in storage units.
     *
     * @param casketId The ID of the casket (storage unit) you want to get the contents of
     * @param callback A function to be called once the contents are loaded
     * @since v2.1
     */
    getCasketContents(
        casketId: string,
        callback: (err: Error | null, items: GlobalOffensive.InventoryItem[]) => void,
    ): void;

    /**
     * Craft some items using a given recipe.
     *
     * You will receive a `craftingComplete` event in response.
     * If crafting succeeded, you will also get `itemRemoved` events for each item you spent,
     * and `itemAcquired` events for each item you received.
     *
     * @param items - IDs of items to craft
     * @param recipe - The ID of the recipe to use
     */
    craft(items: number[], recipe: number): void;

    // EVENTS
    on<K extends keyof GlobalOffensiveEvents>(event: K, listener: (...args: GlobalOffensiveEvents[K]) => void): this;
    once<K extends keyof GlobalOffensiveEvents>(event: K, listener: (...args: GlobalOffensiveEvents[K]) => void): this;
    off<K extends keyof GlobalOffensiveEvents>(event: K, listener: (...args: GlobalOffensiveEvents[K]) => void): this;
    removeListener<K extends keyof GlobalOffensiveEvents>(
        event: K,
        listener: (...args: GlobalOffensiveEvents[K]) => void,
    ): this;
    removeAllListeners(event?: keyof GlobalOffensiveEvents): this;
}

type ValueOf<T> = T[keyof T];

interface GlobalOffensiveEvents {
    debug: [message: string];
    connectedToGC: [];
    disconnectedFromGC: [reason: ValueOf<typeof GCConnectionStatus>];
    accountData: [accountData: GlobalOffensive.AccountData];
    connectionStatus: [status: ValueOf<typeof GCConnectionStatus>, data: unknown];
    matchList: [matches: GlobalOffensive.Match[], data: GlobalOffensive.MatchesData];
    inspectItemInfo: [item: GlobalOffensive.ItemInfo];
    inspectItemTimedOut: [assetid: string];
    itemAcquired: [item: GlobalOffensive.InventoryItem];
    itemChanged: [oldItem: GlobalOffensive.InventoryItem, item: GlobalOffensive.InventoryItem];
    itemRemoved: [item: GlobalOffensive.InventoryItem];
    itemCustomizationNotification: [itemIds: string[], notificationType: ValueOf<typeof ItemCustomizationNotification>];
    playersProfile: [profile: GlobalOffensive.Profile];
    craftingComplete: [recipe: number, itemsGained: string[]];
}

declare namespace GlobalOffensive {
    interface Profile extends Omit<AccountData, "global_stats"> {
        /**
         * Seems to always be `null`
         */
        global_stats: null;
    }

    // #region AccountData

    interface AccountData {
        account_id: number;
        global_stats: GlobalStats;
        penalty_seconds: number | null;
        vac_banned: number | null;
        commendation: Commendation;
        /**
         * Private rank level
         */
        player_level: number;
        /**
         * Current XP, starting at 327680000 (level % = (player_cur_xp - 327680000) / 5000)
         */
        player_cur_xp: number;
        rankings: Ranking[];
        ranking: Ranking | null;
        /**
         * Achievement medals, their ranks and coins
         */
        medals: Medals | null;
        /**
         * Seems to alway be `null`
         */
        player_xp_bonus_flags: null;

        my_current_event: unknown | null;
        my_current_event_teams: unknown[];
        my_current_team: unknown | null;
        my_current_event_stages: unknown[];
        survey_vote: unknown | null;
        activity: unknown | null;
        ongoingmatch: unknown | null;
        penalty_reason: unknown | null;
    }

    interface Ranking {
        account_id: number;
        /**
         * Rank (0-18), starting at 0 for unranked
         */
        rank_id: number;
        wins: number;
        /**
         * Seems to alway be `null`
         */
        rank_change: null;
        /**
         * Rank type (6: Matchmaking, 7: Wingman, 10: Danger Zone)
         */
        rank_type_id: number;
    }

    interface Medals {
        /**
         * Array of copins
         */
        display_items_defidx: number[];
        featured_display_item_defidx: number;

        medal_team?: unknown | null;
        medal_combat?: unknown | null;
        medal_weapon?: unknown | null;
        medal_global?: unknown | null;
        medal_arms?: unknown | null;
    }

    interface GlobalStats {
        search_statistics: SearchStatistic[];
        players_online: number;
        servers_online: number;
        players_searching: number;
        servers_available: number;
        ongoing_matches: number;
        search_time_avg: number;
        main_post_url: string;
        required_appid_version: number;
        pricesheet_version: number;
        twitch_streams_version: number;
        active_tournament_eventid: number;
        active_survey_id: number;

        rtime32_cur: unknown | null;
        rtime32_event_start: unknown | null;
    }

    interface SearchStatistic {
        game_type: number;
        search_time_avg: number | null;
        players_searching: number | null;
    }

    interface Commendation {
        cmd_friendly: number;
        cmd_teaching: number;
        cmd_leader: number;
    }

    // #endregion AccountData

    // #region Match
    interface MatchesData {
        matches: Match[];
        streams: unknown[];
        msgrequestid: number;
        accountid: number | null;
        servertime: number;

        tournamentinfo: unknown | null;
    }

    interface Match {
        roundstatsall: RoundStats[];
        matchid: string;
        matchtime: number | unknown;
        watchablematchinfo: WatchableMatchInfo;
        roundstats_legacy: RoundStats | null;
    }

    interface RoundStats {
        kills: number[];
        assists: number[];
        deaths: number[];
        scores: number[];
        pings: number[];
        team_scores: number[];
        enemy_kills: number[];
        enemy_headshots: number[];
        enemy_3ks: number[];
        enemy_4ks: number[];
        enemy_5ks: number[];
        mvps: number[];
        enemy_kills_agg: number[];
        enemy_2ks: number[];
        player_spawned: number[];
        team_spawn_count: number[];
        reservationid: string | null;
        reservation: Reservation;
        map: string | null;
        match_result: number | null;
        reservation_stage: number;
        match_duration: number;
        max_rounds: number | null;

        round: unknown | null;
        round_result: unknown | null;
        confirm: unknown | null;
        spectators_count: unknown | null;
        spectators_count_tv: unknown | null;
        spectators_count_lnk: unknown | null;
        drop_info: unknown | null;
        b_switched_teams: unknown | null;
    }

    interface Reservation {
        account_ids: number[];
        party_ids: number[];
        tournament_teams: TournamentTeams[];
        tournament_event: TournamentEvent | null;
        tournament_casters_account_ids: number[];
        game_type: number | null;

        rankings: unknown[];
        match_id: unknown | null;
        server_version: number;
        encryption_key: unknown | null;
        encryption_key_pub: unknown | null;
        tv_master_steamid: unknown | null;
        tv_relay_steamid: unknown | null;
        pre_match_data: unknown | null;
        rtime32_event_start: unknown | null;
        tv_control: unknown | null;
        flags: unknown | null;
    }

    interface TournamentTeams {
        players: {
            account_id: number;
            player_nick: "string";
            player_name: string | null;
            player_flag: string | null;
            player_dob: unknown | null;
            player_location: unknown | null;
            player_desc: unknown | null;
        };
        team_id: number;
        team_tag: string;
        team_flag: string;
        team_name: string;
    }

    interface TournamentEvent {
        event_id: number;
        event_tag: string;
        event_name: string;
        event_time_start: number;
        event_time_end: number;
        event_public: number;
        event_stage_id: number;
        event_stage_name: string;
        active_section_id: number;
    }

    interface WatchableMatchInfo {
        server_ip: number | null;
        tv_port: number | null;
        tv_spectators: number;
        tv_time: number | null;
        cl_decryptdata_key_pub: string | null;
        game_type: number | null;
        game_mapgroup: string | null;
        game_map: string | null;
        server_id: string | null;
        match_id: string | null;

        tv_watch_password: unknown | null;
        cl_decryptdata_key: unknown | null;
        reservation_id: unknown | null;
    }

    // #endregion Match

    // #region Inventory

    interface InventoryItem {
        /**
         * This item's position in your inventory.
         * If the item is new and unacknowledged, this is 0
         */
        position: number;
        stickers?: Sticker[];
        /**
         * This item's custom name, applied via name tag
         */
        custom_name: string | null;
        /**
         * The item's paint index
         */
        paint_index?: number;
        /**
         * The item's paint seed
         */
        paint_seed?: number;
        /**
         * The item's paint wear, as a float
         * (often ignorantly referred to as "float value")
         */
        paint_wear?: number;
        /**
         * Tracked stat value for StatTrak weapons
         */
        kill_eater_value?: number;
        /**
         * What type of stat is tracked for StatTrak weapons.
         * Currently only 0 (Kills) is available.
         */
        kill_eater_score_type?: number;
        quest_id?: number;
        /**
         * A Date object representing when this item will become tradable.
         * May be a date in the past, as this is not removed when the date is reached.
         */
        tradable_after?: Date;
        /**
         * If this item is contained in a casket (storage unit), this is a string containing that casket's item ID
         */
        casket_id?: number;
        casket_contained_item_count?: number;
        rarity?: number;
        in_use?: boolean;
        origin?: number;
        flags?: number;
        quality?: number;
        level?: number;
        quantity?: number;
        def_index?: number;
        inventory?: number;
        account_id?: number;
        id?: string;

        original_id?: unknown | null;
        custom_desc?: unknown | null;
        interior_item?: unknown | null;
        style?: unknown | null;
        equipped_state?: unknown[];
        attribute?: InventoryItemAttribute[];
    }

    interface InventoryItemAttribute {
        def_index: number;
        value_bytes: Buffer;

        value: unknown | null;
    }

    interface Sticker {
        sticker_id: number;
        /**
         * The sticker slot number, 0-5
         */
        slot: number;
        /**
         * The sticker's wear (how scratched it is), as a float.
         * `null` if not scratched at all.
         */
        wear: number | null;
        /**
         * Float, `null` if not applicable
         */
        scale: number | null;
        /**
         * Float, `null` if not applicable
         */
        rotation: number | null;
    }

    interface ItemInfo {
        /**
         * Seems to alway be `null`
         */
        accountid: null;
        itemid: string;
        defindex: number;
        paintindex: number;
        rarity: number;
        quality: number;
        /**
         * The item's paint wear percentage,
         * as a float between 0 and 1
         * (frequently and incorrectly called "float value")
         */
        paintwear: number;
        paintseed: number;
        /**
         * What kind of statistic the StatTrak version of this item tracks
         * (may be null if not StatTrak)
         */
        killeaterscoretype: number | null;
        /**
         * The item's tracked statistic value (kills)
         */
        killeatervalue: number | null;
        /**
         * The item's custom name via a name tag,
         * or null if none
         */
        customname: string | null;
        /**
         * An array of objects describing the stickers applied to this item
         */
        stickers: Array<Sticker & { tint_id: number | null }>;
        /**
         * An integer which has no use to you
         */
        inventory: number;
        origin: number;
        musicindex: number | null;
        entindex: number | null;

        /**
         * You can ignore this
         */
        questid: unknown | null;
        dropreason: unknown | null;
    }
    // #endregion Inventory
}
