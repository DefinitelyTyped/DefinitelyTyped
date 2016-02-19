// Type definitions for Riot Games API
// Project: https://developer.riotgames.com/
// Definitions by: Luca Laissue <https://github.com/zafixlrp/>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference path="../request/request.d.ts" />
/// <reference path="../riot-games-api/riot-games-api.d.ts" />

declare module "riot-api-nodejs"{

    export enum region_e {
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
        * Tournament API
        */
    export class TournamentAPI {
        private ApiKeys;
        private ApiKey;
        /**
            * TournamentAPI Constructor
            */
        constructor(...ApiKeys: string[]);
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
        private getJSON(url, method, data, callback);
        /**
            * get tournament Codes for a given tournament
            * @param     {number}                                                      tournamentId    the ID of the tournament
            * @param     {number}                                                      count           Number of codes you want
            * @param     {RiotGamesAPI.TournamentProvider.TournamentCodeParameters}    params          Tournament Code parameters
            * @param     {number[]}                                                    callback        Tournaments Codes                                                                    [description]
            */
        getTournamentCodes(tournamentId: number, count: number, params: RiotGamesAPI.TournamentProvider.TournamentCodeParameters, callback: (tournamentCodes: number[]) => void): any;
        /**
            * get tournament infos for a given tournament code
            * @param     {string}                                               tournamentCode    Tournament Code
            * @param     {RiotGamesAPI.TournamentProvider.TournamentCodeDto}    callback          Tournament Infos
            */
        getTournamentByCode(tournamentCode: string, callback: (tournament: RiotGamesAPI.TournamentProvider.TournamentCodeDto) => void): any;
        /**
            * edit the tournament Code parameters for a given tournament Code
            * @param     {string}                                                            tournamentCode    Tournament Code to update
            * @param     {RiotGamesAPI.TournamentProvider.TournamentCodeUpdateParameters}    params            parameters to edit
            * @param     {(}                                                                 callback          callback if succes
            */
        editTournamentByCode(tournamentCode: string, params: RiotGamesAPI.TournamentProvider.TournamentCodeUpdateParameters, callback: () => void): any;
        /**
            * get the lobby envents for a given tournament Code
            * @param     {string}                                           tournamentCode    the tournament code to get the lobby events
            * @param     {RiotGamesAPI.TournamentProvider.LobbyEventDto}    callback          lobby events
            */
        getLobbyEventByCode(tournamentCode: string, callback: (lobbyEventDto: RiotGamesAPI.TournamentProvider.LobbyEventDto) => void): any;
        /**
            * Register a new tournament provider
            * @param     {region_e}    region      region where you want to register the provider
            * @param     {string}      url         url of callback for the POST notifications
            * @param     {number}      callback    returns  the tounament provider ID
            */
        registerProvider(region: region_e, url: string, callback: (providerId: number) => void): any;
        /**
            * Register a new tournament
            * @param     {string}    name          Name of tournament
            * @param     {number}    providerId    Provider ID
            * @param     {number}    callback      returns the tournament ID
            */
        registerTournament(name: string, providerId: number, callback: (tournamentId: number) => void): any;
    }
    export class ClassicAPI {
        private ApiKeys;
        private ApiKey;
        private region;
        /**
            * ClassicAPI Constructor
            * @param     {string[]}    ApiKeys    API Keys for the requests
            * @param     {region_e}    region     region where you want to send requests
            */
        constructor(ApiKeys: string[], region: region_e);
        /**
            * change the API Key for the next requests
            */
        private switchApiKey();
        /**
            * get the JSON response code for a given URL
            * @param     {string}      url         Request url
            * @param     {Function}    callback    JSON formatted data
            */
        private getJSON(url, callback);
        /**
            * Edit the consts for a valid url for the riot games api
            * @param     {string}    unparsedURL    the URL to parse
            * @return    {string}                   the Parsed URL
            */
        private parseURL(unparsedURL);
        /**
            * get the API Key that is used for the requests
            * @return    {string}    the current API Key
            */
        getCurrentApiKey(): string;
        /**
            * get the region where send send request
            * @return    {region_e}    the current region
            */
        getRegion(): region_e;
        /**
            * set the API Keys
            * @param    {string[]}    ApiKeys    the API Keys
            */
        setApikeys(ApiKeys: string[]): void;
        /**
            * set the region where you want to send requests
            * @param    {region_e}    region    the region
            */
        setRegion(region: region_e): void;
        /**
            * get all champions of league of legends
            * @param     {RiotGamesAPI.Champion.ChampionListDto}    callback    data callback
            */
        getChampions(callback: (championListDto: RiotGamesAPI.Champion.ChampionListDto) => void): any;
        /**
            * get the champion for a given id
            * @param     {number}                               id          the champion id
            * @param     {RiotGamesAPI.Champion.ChampionDto}    callback    data callback
            */
        getChampionById(id: number, callback: (ChampionDto: RiotGamesAPI.Champion.ChampionDto) => void): any;
        /**
            * get the free to play champions
            * @param     {RiotGamesAPI.Champion.ChampionListDto}    callback    data callback
            */
        getFreeToPlayChampions(callback: (championsListDto: RiotGamesAPI.Champion.ChampionListDto) => void): any;
        /**
            * get Champion mastery of a player for a given champion ID
            * @param     {number}                                             summonerId    summoner ID
            * @param     {number}                                             championId    Champion ID
            * @param     {RiotGamesAPI.ChampionMastery.ChampionMasteryDto}    callback      data callback
            */
        getChampionMastery(summonerId: number, championId: number, callback: (championMastery: RiotGamesAPI.ChampionMastery.ChampionMasteryDto) => void): any;
        /**
            * get all champion masteries for a given summoner
            * @param     {number}                                               summonerId    Summoner ID
            * @param     {[RiotGamesAPI.ChampionMastery.ChampionMasteryDto]}    callback      data callback
            */
        getChampionMasteryBySummoner(summonerId: number, callback: (championsMastery: [RiotGamesAPI.ChampionMastery.ChampionMasteryDto]) => void): any;
        /**
            * get the mastery score of a summoner
            * @param     {number}    summonerId    Summoner ID
            * @param     {number}    callback      Mastery Score
            */
        getChampionMasteryScore(summonerId: number, callback: (score: number) => void): any;
        /**
            * get The 3 best champion masteries
            * @param     {[type]}                                               summonerId    Summoner ID
            * @param     {[RiotGamesAPI.ChampionMastery.ChampionMasteryDto]}    callback      data callback
            */
        getTopChampionMastery(summonerId: any, callback: (championsMastery: [RiotGamesAPI.ChampionMastery.ChampionMasteryDto]) => void): any;
        /**
            * get the current game infos for a given summoner ID
            * @param     {number}                                      summonerId    Summoner ID
            * @param     {RiotGamesAPI.CurrentGame.CurrentGameInfo}    callback      data callback
            */
        getCurrentGame(summonerId: number, callback: (gameInfoDto: RiotGamesAPI.CurrentGame.CurrentGameInfo) => void): any;
        /**
            * get the featured games
            * @param     {RiotGamesAPI.FeaturedGames.FeaturedGames}    callback    data callback
            */
        getFeaturedGame(callback: (featuredGamesInfos: RiotGamesAPI.FeaturedGames.FeaturedGames) => void): any;
        /**
            * get the recents games for a given Summoner ID
            * @param     {number}                              summonerId    Summoner ID
            * @param     {RiotGamesAPI.Game.RecentGamesDto}    callback      data callback
            */
        getRecentGames(summonerId: number, callback: (RecentGamesDto: RiotGamesAPI.Game.RecentGamesDto) => void): any;
        /**
            * Get League infos of a summoner
            * @param     {number}                             summonerId    Summoner ID
            * @param     {RiotGamesAPI.League.LeagueDto[]}    callback      data callback
            */
        getLeagueBySummonerId(summonerId: number, callback: (LeagueDto: RiotGamesAPI.League.LeagueDto[]) => void): any;
        /**
            * get League infos of a summoner
            * @param     {number}                             summonerId    Summoner ID
            * @param     {RiotGamesAPI.League.LeagueDto[]}    callback      data callback
            */
        getLeagueBySummonerIdEntry(summonerId: number, callback: (LeagueDto: RiotGamesAPI.League.LeagueDto[]) => void): any;
        /**
            * get league infos by team
            * @param     {string}                             teamId      Team ID
            * @param     {RiotGamesAPI.League.LeagueDto[]}    callback    data callback
            */
        getLeagueByTeamId(teamId: string, callback: (LeagueDto: RiotGamesAPI.League.LeagueDto[]) => void): any;
        /**
            * get league infos by team
            * @param     {string}                             teamId      Team ID
            * @param     {RiotGamesAPI.League.LeagueDto[]}    callback    data callback
            */
        getLeagueByTeamIdEntry(teamId: string, callback: (LeagueDto: RiotGamesAPI.League.LeagueDto[]) => void): any;
        /**
            * get Challengers in SOLO Queue
            * @param     {RiotGamesAPI.League.LeagueDto}    callback    data callback
            */
        getChallengers_SOLO(callback: (League: RiotGamesAPI.League.LeagueDto) => void): any;
        /**
            * get Challengers Teams in 3x3
            * @param     {RiotGamesAPI.League.LeagueDto}    callback    data callback
            */
        getChallengers_3x3(callback: (League: RiotGamesAPI.League.LeagueDto) => void): any;
        /**
            * get Challengers Teams in 5x5
            * @param     {RiotGamesAPI.League.LeagueDto}    callback    data callback
            */
        getChallengers_5x5(callback: (League: RiotGamesAPI.League.LeagueDto) => void): any;
        /**
            * get Masters in Solo Queue
            * @param     {RiotGamesAPI.League.LeagueDto}    callback    data callback
            */
        getMasters_SOLO(callback: (League: RiotGamesAPI.League.LeagueDto) => void): any;
        /**
            * get Master Teams in 3x3
            * @param     {RiotGamesAPI.League.LeagueDto}    callback    data callback
            */
        getMasters_3x3(callback: (League: RiotGamesAPI.League.LeagueDto) => void): any;
        /**
            * get Master Teams in 5x5
            * @param     {RiotGamesAPI.League.LeagueDto}    callback    data callback
            */
        getMasters_5x5(callback: (League: RiotGamesAPI.League.LeagueDto) => void): any;
        /**
            * get Champions (static data)
            * @param     {RiotGamesAPI.LolStaticData.ChampionListDto}    callback    data callback
            */
        staticDataChampions(callback: (championListDto: RiotGamesAPI.LolStaticData.ChampionListDto) => void): any;
        /**
            * get data by champion ID
            * @param     {number}                                    championsId    Champion ID
            * @param     {RiotGamesAPI.LolStaticData.ChampionDto}    callback       data callback
            */
        staticDataChampionById(championsId: number, callback: (championDto: RiotGamesAPI.LolStaticData.ChampionDto) => void): any;
        /**
            * get League of Legends Items
            * @param     {RiotGamesAPI.LolStaticData.ItemListDto}    callback    data callback
            */
        staticDataItems(callback: (itemsDto: RiotGamesAPI.LolStaticData.ItemListDto) => void): any;
        /**
            * Get item infos by ID
            * @param     {number}                                itemId      item ID
            * @param     {RiotGamesAPI.LolStaticData.ItemDto}    callback    data callback
            */
        staticDataItemById(itemId: number, callback: (itemDto: RiotGamesAPI.LolStaticData.ItemDto) => void): any;
        /**
            * get league of legends languages
            * @param     {RiotGamesAPI.LolStaticData.LanguageStringsDto}    callback    data callback
            */
        staticDataLanguagesStrings(callback: (languageStringsDto: RiotGamesAPI.LolStaticData.LanguageStringsDto) => void): any;
        /**
            * get league of legends languages
            * @param     {string[]}    callback    data callback
            */
        staticDataLanguages(callback: (languages: string[]) => void): any;
        /**
            * get Map data
            * @param     {RiotGamesAPI.LolStaticData.MapDataDto}    callback    data callback
            */
        staticDataMap(callback: (mapDataDto: RiotGamesAPI.LolStaticData.MapDataDto) => void): any;
        /**
            * get all masteries
            * @param     {RiotGamesAPI.LolStaticData.MasteryListDto}    callback    data callback
            */
        staticDataMastery(callback: (masteryListDto: RiotGamesAPI.LolStaticData.MasteryListDto) => void): any;
        /**
            * get data by mastery ID
            * @param     {number}                                   masteryId    Mastery ID
            * @param     {RiotGamesAPI.LolStaticData.MasteryDto}    callback     data callback
            */
        staticDataMasteryById(masteryId: number, callback: (masteryDto: RiotGamesAPI.LolStaticData.MasteryDto) => void): any;
        staticDataRealm(callback: (realmDto: RiotGamesAPI.LolStaticData.RealmDto) => void): any;
        /**
            * get all runes
            * @param     {RiotGamesAPI.LolStaticData.RuneListDto}    callback    data callback
            */
        staticDataRunes(callback: (runeListDto: RiotGamesAPI.LolStaticData.RuneListDto) => void): any;
        /**
            * get rune by Rune ID
            * @param     {number}                                runeId      Rune ID
            * @param     {RiotGamesAPI.LolStaticData.RuneDto}    callback    data callback
            */
        staticDataRuneById(runeId: number, callback: (runeDto: RiotGamesAPI.LolStaticData.RuneDto) => void): any;
        /**
            * get all summoner spells
            * @param     {RiotGamesAPI.LolStaticData.SummonerSpellListDto}    callback    data callback
            */
        staticDataSummonerSpells(callback: (summonerSpellListDto: RiotGamesAPI.LolStaticData.SummonerSpellListDto) => void): any;
        /**
            * get summoner spell by summoner spell ID
            * @param     {number}                                         summonerSpellId    Summoner spell ID
            * @param     {RiotGamesAPI.LolStaticData.SummonerSpellDto}    callback           data callback
            */
        staticDataSummonSpellById(summonerSpellId: number, callback: (runeDto: RiotGamesAPI.LolStaticData.SummonerSpellDto) => void): any;
        /**
            * get league of legends  versions
            * @param     {string[]}    callback    data callback
            */
        staticDataVersion(callback: (versions: string[]) => void): any;
        /**
            * get league of legends status
            * @param     {RiotGamesAPI.LolStatus.Shard[]}    callback    data callback
            */
        getSatus(callback: (shardList: RiotGamesAPI.LolStatus.Shard[]) => void): any;
        /**
            * get status for a given region
            * @param     {region_e}                        region      region
            * @param     {RiotGamesAPI.LolStatus.Shard}    callback    data callback
            */
        getSatusByRegion(region: region_e, callback: (shard: RiotGamesAPI.LolStatus.Shard) => void): any;
        /**
            * get match infos for a given match ID
            * @param     {number}                            matchId     Match ID
            * @param     {RiotGamesAPI.Match.MatchDetail}    callback    data callback
            */
        getMatch(matchId: number, callback: (matchDetails: RiotGamesAPI.Match.MatchDetail) => void): any;
        /**
            * get all matches for a given tournament code
            * @param     {string}      tournamentCode    Tournament Code
            * @param     {number[]}    callback          data callback
            */
        getMatchIdsByTournamentCode(tournamentCode: string, callback: (matchIds: number[]) => void): any;
        /**
            * get match by ID in a tournament
            * @param     {number}                            matchId     Match ID
            * @param     {RiotGamesAPI.Match.MatchDetail}    callback    data callback
            */
        getMatchForTournament(matchId: number, callback: (matchDetails: RiotGamesAPI.Match.MatchDetail) => void): any;
        /**
            * get match list of a summoner
            * @param     {number}                              summonerId    Summoner ID
            * @param     {RiotGamesAPI.MatchList.MatchList}    callback      data callback
            */
        getMatchList(summonerId: number, callback: (matchList: RiotGamesAPI.MatchList.MatchList) => void): any;
        /**
            * get ranked stats of summoner
            * @param     {number}                               summonerId    Summoner ID
            * @param     {RiotGamesAPI.Stats.RankedStatsDto}    callback      data callback
            */
        getStatsRanked(summonerId: number, callback: (rankedStatsDto: RiotGamesAPI.Stats.RankedStatsDto) => void): any;
        /**
            * get summary ranked stats of summoner
            * @param     {number}                                          summonerId    Summoner ID
            * @param     {RiotGamesAPI.Stats.PlayerStatsSummaryListDto}    callback      data callback
            */
        getStatsSummary(summonerId: number, callback: (playerStatsSummaryListDto: RiotGamesAPI.Stats.PlayerStatsSummaryListDto) => void): any;
        /**
            * get summoner infos by Summoner Name
            * @param     {string}                               summonerName    Summoner Name
            * @param     {RiotGamesAPI.Summoner.SummonerDto}    callback        data callback
            */
        getSummonerByName(summonerName: string, callback: (summonerDto: RiotGamesAPI.Summoner.SummonerDto) => void): any;
        /**
            * get summoner infos by summoner ID
            * @param     {number}                               summonerId    Summoner ID
            * @param     {RiotGamesAPI.Summoner.SummonerDto}    callback      data callback
            */
        getSummonerById(summonerId: number, callback: (summonerDto: RiotGamesAPI.Summoner.SummonerDto) => void): any;
        /**
            * get masteries of a summoner
            * @param     {number}                                   summonerId    Summoner ID
            * @param     {RiotGamesAPI.Summoner.MasteryPagesDto}    callback      data callback
            */
        getSummonerMasteries(summonerId: number, callback: (masteryPagesDto: RiotGamesAPI.Summoner.MasteryPagesDto) => void): any;
        /**
            * get the Summoner Name of a summoner ID
            * @param     {number}    summonerId    Summoner ID
            * @param     {string}    callback      data callback
            */
        getSummonerName(summonerId: number, callback: (summonerName: string) => void): any;
        /**
            * get the runes of a summoner
            * @param     {number}                                summonerId    Summoner ID
            * @param     {RiotGamesAPI.Summoner.RunePagesDto}    callback      data callback
            */
        getSummonerRunes(summonerId: number, callback: (runePagesDto: RiotGamesAPI.Summoner.RunePagesDto) => void): any;
        /**
            * get teams of a summoner
            * @param     {number}                         summonerId    Summoner ID
            * @param     {RiotGamesAPI.Team.TeamDto[]}    callback      data callback
            */
        getTeamsBySummoner(summonerId: number, callback: (teamsList: RiotGamesAPI.Team.TeamDto[]) => void): any;
        /**
            * get Team infos by Team ID
            * @param     {string}                       teamId      Team ID
            * @param     {RiotGamesAPI.Team.TeamDto}    callback    data callback
            */
        getTeamById(teamId: string, callback: (teamDto: RiotGamesAPI.Team.TeamDto) => void): any;
    }
}
