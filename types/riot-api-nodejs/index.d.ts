// Type definitions for Riot Games API
// Project: https://developer.riotgames.com/
// Definitions by: DefinitelyTyped <https://github.com/DefinitelyTyped>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped


/// <reference types="riot-games-api" />

export const BASE_URL: string;
export const URL_1_2: string;
export const URL_1_3: string;
export const URL_1_4: string;
export const URL_2_2: string;
export const URL_2_4: string;
export const URL_2_5: string;

export declare enum region_e {
    BR = 0,
    EUNE = 1,
    EUW = 2,
    KR = 3,
    LAN = 4,
    LAS = 5,
    NA = 6,
    OCE = 7,
    TR = 8,
    RU = 9,
    PBE = 10,
}
/**
 * Base API
 */
export declare class API {
    private ApiKeys;
    private ApiKey;
    constructor(ApiKeys: string[]);
    /**
     * Change the Api Key for the next requests
     */
    private switchApiKey();
    /**
    * Send a request to the Riot Games Api and return a formatted json via a callback
    * @param     {string}    url         request url
    * @param     {string}    method      method(post / put / get)
    * @param     {[type]}    data        body parameters
    * @param     {(JSON}     callback    callback function with formatted JSON
    */
    getJSON(url: string, method: string, data: any): Promise<any>;
    request(url: string, method: string, data: any, prop?: string): Promise<any>;
    /**
    * get the API Key that is used for the requests
    * @return    {string}    the current API Key
    */
    getCurrentApiKey(): string;
    /**
     * set the API Keys
     * @param    {string[]}    ApiKeys    the API Keys
     */
    setApikeys(ApiKeys: string[]): void;
}
/**
    * Tournament API
    */
export declare class TournamentAPI extends API {
    constructor(...apiKeys: string[]);
    /**
        * create tournament Codes for a given tournament
        * @param     {number}                                                      tournamentId    the ID of the tournament
        * @param     {number}                                                      count           Number of codes you want
        * @param     {RiotGamesAPI.TournamentProvider.TournamentCodeParameters}    params          Tournament Code parameters
        * @param     {number[]}                                                    callback        Tournaments Codes                                                                    [description]
        */
    createTournamentCodes(tournamentId: number, count: number, params: RiotGamesAPI.TournamentProvider.TournamentCodeParameters): Promise<number[]>;
    /**
        * get tournament infos for a given tournament code
        * @param     {string}                                               tournamentCode    Tournament Code
        * @param     {RiotGamesAPI.TournamentProvider.TournamentCodeDto}    callback          Tournament Infos
        */
    getTournamentByCode(tournamentCode: string): Promise<RiotGamesAPI.TournamentProvider.TournamentCodeDto>;
    /**
        * edit the tournament Code parameters for a given tournament Code
        * @param     {string}                                                            tournamentCode    Tournament Code to update
        * @param     {RiotGamesAPI.TournamentProvider.TournamentCodeUpdateParameters}    params            parameters to edit
        * @param     {(}                                                                 callback          callback if succes
        */
    editTournamentByCode(tournamentCode: string, params: RiotGamesAPI.TournamentProvider.TournamentCodeUpdateParameters): Promise<() => void>;
    /**
        * get the lobby envents for a given tournament Code
        * @param     {string}                                           tournamentCode    the tournament code to get the lobby events
        * @param     {RiotGamesAPI.TournamentProvider.LobbyEventDto}    callback          lobby events
        */
    getLobbyEventByCode(tournamentCode: string): Promise<RiotGamesAPI.TournamentProvider.LobbyEventDto>;
    /**
        * Register a new tournament provider
        * @param     {region_e}    region      region where you want to register the provider
        * @param     {string}      url         url of callback for the POST notifications
        * @param     {number}      callback    returns  the tounament provider ID
        */
    registerProvider(region: region_e, url: string): Promise<number>;
    /**
        * Register a new tournament
        * @param     {string}    name          Name of tournament
        * @param     {number}    providerId    Provider ID
        * @param     {number}    callback      returns the tournament ID
        */
    registerTournament(name: string, providerId: number): Promise<number>;
}
export declare class ClassicAPI extends API {
    private region;
    /**
        * ClassicAPI Constructor
        * @param     {string[]}    ApiKeys    API Keys for the requests
        * @param     {region_e}    region     region where you want to send requests
        */
    constructor(ApiKeys: string[], region: region_e);
    /**
        * Edit the consts for a valid url for the riot games api
        * @param     {string}    unparsedURL    the URL to parse
        * @return    {string}                   the Parsed URL
        */
    parseURL(unparsedURL: string): string;
    /**
        * get the region where send send request
        * @return    {region_e}    the current region
        */
    getRegion(): region_e;
    /**
        * set the region where you want to send requests
        * @param    {region_e}    region    the region
        */
    setRegion(region: region_e): void;
    /**
        * get all champions of league of legends
        * @param     {RiotGamesAPI.Champion.ChampionListDto}    callback    data callback
        */
    getChampions(): Promise<RiotGamesAPI.Champion.ChampionListDto>;
    /**
        * get the champion for a given id
        * @param     {number}                               id          the champion id
        * @param     {RiotGamesAPI.Champion.ChampionDto}    callback    data callback
        */
    getChampionById(id: number): Promise<RiotGamesAPI.Champion.ChampionDto>;
    /**
        * get the free to play champions
        * @param     {RiotGamesAPI.Champion.ChampionListDto}    callback    data callback
        */
    getFreeToPlayChampions(): Promise<RiotGamesAPI.Champion.ChampionListDto>;
    /**
        * get Champion mastery of a player for a given champion ID
        * @param     {number}                                             summonerId    summoner ID
        * @param     {number}                                             championId    Champion ID
        * @param     {RiotGamesAPI.ChampionMastery.ChampionMasteryDto}    callback      data callback
        */
    getChampionMastery(summonerId: number, championId: number): Promise<RiotGamesAPI.ChampionMastery.ChampionMasteryDto>;
    /**
        * get all champion masteries for a given summoner
        * @param     {number}                                               summonerId    Summoner ID
        * @param     {[RiotGamesAPI.ChampionMastery.ChampionMasteryDto]}    callback      data callback
        */
    getChampionMasteryBySummoner(summonerId: number): Promise<[RiotGamesAPI.ChampionMastery.ChampionMasteryDto]>;
    /**
        * get the mastery score of a summoner
        * @param     {number}    summonerId    Summoner ID
        * @param     {number}    callback      Mastery Score
        */
    getChampionMasteryScore(summonerId: number): Promise<number>;
    /**
        * get The 3 best champion masteries
        * @param     {[type]}                                               summonerId    Summoner ID
        * @param     {[RiotGamesAPI.ChampionMastery.ChampionMasteryDto]}    callback      data callback
        */
    getTopChampionMastery(summonerId: any): Promise<[RiotGamesAPI.ChampionMastery.ChampionMasteryDto]>;
    /**
        * get the current game infos for a given summoner ID
        * @param     {number}                                      summonerId    Summoner ID
        * @param     {RiotGamesAPI.CurrentGame.CurrentGameInfo}    callback      data callback
        */
    getCurrentGame(summonerId: number): Promise<RiotGamesAPI.CurrentGame.CurrentGameInfo>;
    /**
        * get the featured games
        * @param     {RiotGamesAPI.FeaturedGames.FeaturedGames}    callback    data callback
        */
    getFeaturedGame(): Promise<RiotGamesAPI.FeaturedGames.FeaturedGames>;
    /**
        * get the recents games for a given Summoner ID
        * @param     {number}                              summonerId    Summoner ID
        * @param     {RiotGamesAPI.Game.RecentGamesDto}    callback      data callback
        */
    getRecentGames(summonerId: number): Promise<RiotGamesAPI.Game.RecentGamesDto>;
    /**
        * Get League infos of a summoner
        * @param     {number}                             summonerId    Summoner ID
        * @param     {RiotGamesAPI.League.LeagueDto[]}    callback      data callback
        */
    getLeagueBySummonerId(summonerId: number): Promise<RiotGamesAPI.League.LeagueDto[]>;
    /**
        * get League infos of a summoner
        * @param     {number}                             summonerId    Summoner ID
        * @param     {RiotGamesAPI.League.LeagueDto[]}    callback      data callback
        */
    getLeagueBySummonerIdEntry(summonerId: number): Promise<RiotGamesAPI.League.LeagueDto[]>;
    /**
        * get league infos by team
        * @param     {string}                             teamId      Team ID
        * @param     {RiotGamesAPI.League.LeagueDto[]}    callback    data callback
        */
    getLeagueByTeamId(teamId: string): Promise<RiotGamesAPI.League.LeagueDto[]>;
    /**
        * get league infos by team
        * @param     {string}                             teamId      Team ID
        * @param     {RiotGamesAPI.League.LeagueDto[]}    callback    data callback
        */
    getLeagueByTeamIdEntry(teamId: string): Promise<RiotGamesAPI.League.LeagueDto[]>;
    /**
        * get Challengers in SOLO Queue
        * @param     {RiotGamesAPI.League.LeagueDto}    callback    data callback
        */
    getChallengers_SOLO(): Promise<RiotGamesAPI.League.LeagueDto>;
    /**
        * get Challengers Teams in 3x3
        * @param     {RiotGamesAPI.League.LeagueDto}    callback    data callback
        */
    getChallengers_3x3(): Promise<RiotGamesAPI.League.LeagueDto>;
    /**
        * get Challengers Teams in 5x5
        * @param     {RiotGamesAPI.League.LeagueDto}    callback    data callback
        */
    getChallengers_5x5(): Promise<RiotGamesAPI.League.LeagueDto>;
    /**
        * get Masters in Solo Queue
        * @param     {RiotGamesAPI.League.LeagueDto}    callback    data callback
        */
    getMasters_SOLO(): Promise<RiotGamesAPI.League.LeagueDto>;
    /**
        * get Master Teams in 3x3
        * @param     {RiotGamesAPI.League.LeagueDto}    callback    data callback
        */
    getMasters_3x3(): Promise<RiotGamesAPI.League.LeagueDto>;
    /**
        * get Master Teams in 5x5
        * @param     {RiotGamesAPI.League.LeagueDto}    callback    data callback
        */
    getMasters_5x5(): Promise<RiotGamesAPI.League.LeagueDto>;
    /**
        * get Champions (static data)
        * @param     {RiotGamesAPI.LolStaticData.ChampionListDto}    callback    data callback
        */
    staticDataChampions(): Promise<RiotGamesAPI.LolStaticData.ChampionListDto>;
    /**
        * get data by champion ID
        * @param     {number}                                    championsId    Champion ID
        * @param     {RiotGamesAPI.LolStaticData.ChampionDto}    callback       data callback
        */
    staticDataChampionById(championsId: number): Promise<RiotGamesAPI.LolStaticData.ChampionDto>;
    /**
        * get League of Legends Items
        * @param     {RiotGamesAPI.LolStaticData.ItemListDto}    callback    data callback
        */
    staticDataItems(): Promise<RiotGamesAPI.LolStaticData.ItemListDto>;
    /**
        * Get item infos by ID
        * @param     {number}                                itemId      item ID
        * @param     {RiotGamesAPI.LolStaticData.ItemDto}    callback    data callback
        */
    staticDataItemById(itemId: number): Promise<RiotGamesAPI.LolStaticData.ItemDto>;
    /**
        * get league of legends languages
        * @param     {RiotGamesAPI.LolStaticData.LanguageStringsDto}    callback    data callback
        */
    staticDataLanguagesStrings(): Promise<RiotGamesAPI.LolStaticData.LanguageStringsDto>;
    /**
        * get league of legends languages
        * @param     {string[]}    callback    data callback
        */
    staticDataLanguages(): Promise<string[]>;
    /**
        * get Map data
        * @param     {RiotGamesAPI.LolStaticData.MapDataDto}    callback    data callback
        */
    staticDataMap(): Promise<RiotGamesAPI.LolStaticData.MapDataDto>;
    /**
        * get all masteries
        * @param     {RiotGamesAPI.LolStaticData.MasteryListDto}    callback    data callback
        */
    staticDataMastery(): Promise<RiotGamesAPI.LolStaticData.MasteryListDto>;
    /**
        * get data by mastery ID
        * @param     {number}                                   masteryId    Mastery ID
        * @param     {RiotGamesAPI.LolStaticData.MasteryDto}    callback     data callback
        */
    staticDataMasteryById(masteryId: number): Promise<RiotGamesAPI.LolStaticData.MasteryDto>;
    staticDataRealm(): Promise<RiotGamesAPI.LolStaticData.RealmDto>;
    /**
        * get all runes
        * @param     {RiotGamesAPI.LolStaticData.RuneListDto}    callback    data callback
        */
    staticDataRunes(): Promise<RiotGamesAPI.LolStaticData.RuneListDto>;
    /**
        * get rune by Rune ID
        * @param     {number}                                runeId      Rune ID
        * @param     {RiotGamesAPI.LolStaticData.RuneDto}    callback    data callback
        */
    staticDataRuneById(runeId: number): Promise<RiotGamesAPI.LolStaticData.RuneDto>;
    /**
        * get all summoner spells
        * @param     {RiotGamesAPI.LolStaticData.SummonerSpellListDto}    callback    data callback
        */
    staticDataSummonerSpells(): Promise<RiotGamesAPI.LolStaticData.SummonerSpellListDto>;
    /**
        * get summoner spell by summoner spell ID
        * @param     {number}                                         summonerSpellId    Summoner spell ID
        * @param     {RiotGamesAPI.LolStaticData.SummonerSpellDto}    callback           data callback
        */
    staticDataSummonSpellById(summonerSpellId: number): Promise<RiotGamesAPI.LolStaticData.SummonerSpellDto>;
    /**
        * get league of legends  versions
        * @param     {string[]}    callback    data callback
        */
    staticDataVersion(): Promise<string[]>;
    /**
        * get league of legends status
        * @param     {RiotGamesAPI.LolStatus.Shard[]}    callback    data callback
        */
    getStatus(): Promise<RiotGamesAPI.LolStatus.Shard[]>;
    /**
        * get status for a given region
        * @param     {region_e}                        region      region
        * @param     {RiotGamesAPI.LolStatus.Shard}    callback    data callback
        */
    getStatusByRegion(region: region_e): Promise<RiotGamesAPI.LolStatus.Shard>;
    /**
        * get match infos for a given match ID
        * @param     {number}                            matchId     Match ID
        * @param     {RiotGamesAPI.Match.MatchDetail}    callback    data callback
        */
    getMatch(matchId: number): Promise<RiotGamesAPI.Match.MatchDetail>;
    /**
        * get all matches for a given tournament code
        * @param     {string}      tournamentCode    Tournament Code
        * @param     {number[]}    callback          data callback
        */
    getMatchIdsByTournamentCode(tournamentCode: string): Promise<number[]>;
    /**
        * get match by ID in a tournament
        * @param     {number}                            matchId     Match ID
        * @param     {RiotGamesAPI.Match.MatchDetail}    callback    data callback
        */
    getMatchForTournament(matchId: number): Promise<RiotGamesAPI.Match.MatchDetail>;
    /**
        * get match list of a summoner
        * @param     {number}                              summonerId    Summoner ID
        * @param     {RiotGamesAPI.MatchList.MatchList}    callback      data callback
        */
    getMatchList(summonerId: number): Promise<RiotGamesAPI.MatchList.MatchList>;
    /**
        * get ranked stats of summoner
        * @param     {number}                               summonerId    Summoner ID
        * @param     {RiotGamesAPI.Stats.RankedStatsDto}    callback      data callback
        */
    getStatsRanked(summonerId: number): Promise<RiotGamesAPI.Stats.RankedStatsDto>;
    /**
        * get summary ranked stats of summoner
        * @param     {number}                                          summonerId    Summoner ID
        * @param     {RiotGamesAPI.Stats.PlayerStatsSummaryListDto}    callback      data callback
        */
    getStatsSummary(summonerId: number): Promise<RiotGamesAPI.Stats.PlayerStatsSummaryListDto>;
    /**
        * get summoner infos by Summoner Name
        * @param     {string}                               summonerName    Summoner Name
        * @param     {RiotGamesAPI.Summoner.SummonerDto}    callback        data callback
        */
    getSummonerByName(summonerName: string): Promise<RiotGamesAPI.Summoner.SummonerDto>;
    /**
        * get summoner infos by summoner ID
        * @param     {number}                               summonerId    Summoner ID
        * @param     {RiotGamesAPI.Summoner.SummonerDto}    callback      data callback
        */
    getSummonerById(summonerId: number): Promise<RiotGamesAPI.Summoner.SummonerDto>;
    /**
        * get masteries of a summoner
        * @param     {number}                                   summonerId    Summoner ID
        * @param     {RiotGamesAPI.Summoner.MasteryPagesDto}    callback      data callback
        */
    getSummonerMasteries(summonerId: number): Promise<RiotGamesAPI.Summoner.MasteryPagesDto>;
    /**
        * get the Summoner Name of a summoner ID
        * @param     {number}    summonerId    Summoner ID
        * @param     {string}    callback      data callback
        */
    getSummonerName(summonerId: number): Promise<string>;
    /**
        * get the runes of a summoner
        * @param     {number}                                summonerId    Summoner ID
        * @param     {RiotGamesAPI.Summoner.RunePagesDto}    callback      data callback
        */
    getSummonerRunes(summonerId: number): Promise<RiotGamesAPI.Summoner.RunePagesDto>;
    /**
        * get teams of a summoner
        * @param     {number}                         summonerId    Summoner ID
        * @param     {RiotGamesAPI.Team.TeamDto[]}    callback      data callback
        */
    getTeamsBySummoner(summonerId: number): Promise<RiotGamesAPI.Team.TeamDto[]>;
    /**
        * get Team infos by Team ID
        * @param     {string}                       teamId      Team ID
        * @param     {RiotGamesAPI.Team.TeamDto}    callback    data callback
        */
    getTeamById(teamId: string): Promise<RiotGamesAPI.Team.TeamDto>;
}
