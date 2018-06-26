// Type definitions for overwatch-api 0.4
// Project: https://github.com/alfg/overwatch-api
// Definitions by: JoshuaHall <https://github.com/JoshuaHall>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

// TypeScript Version: 2.1

export type callbackFunc<T> = (err: Error | null, data: T) => void;

export type OverwatchPlatform = "pc" | "xbl" | "psn";
export type OverwatchServerRegion = "us" | "eu" | "kr" | "cn" | "global";
export type OverwatchHero =
    | "Zarya"
    | "Mercy"
    | "Reinhardt"
    | "Zenyatta"
    | "Hanzo"
    | "Orisa"
    | "Genji"
    | "Roadhog"
    | "McCree"
    | "Tracer"
    | "Ana"
    | "Winston"
    | "D.Va"
    | "Moira"
    | "Junkrat"
    | "Soldier: 76"
    | "Brigitte"
    | "Lúcio"
    | "Torbjörn"
    | "Reaper"
    | "Pharah"
    | "Widowmaker"
    | "Bastion"
    | "Symmetra"
    | "Mei"
    | "Sombra"
    | "Doomfist";

export interface GameType {
    won: number;
    played: number;
}

export type QuickplayGameType = GameType;

export interface CompetitiveGameType extends GameType {
    lost: number;
    draw: number;
    win_rate: number;
}

export interface GameTypes {
    quickplay: QuickplayGameType;
    competitive: CompetitiveGameType;
}

export interface Playtime {
    quickplay: string;
    competitive: string;
}

export interface CompetitiveRankInfo {
    rank: number;
    rank_img: string;
}

export interface OverwatchApiResponse {
    username: string;
    level: number;
    portrait: string;
}

export interface ProfileApiResponse extends OverwatchApiResponse {
    games: GameTypes;
    playtime: Playtime;
    competitive: CompetitiveRankInfo;
    levelFrame: string;
    star: string;
}

export interface TopHeroStats {
    hero: OverwatchHero;
    img: string;
}

export interface HeroTimePlayed extends TopHeroStats {
    played: string;
}

export interface HeroGamesWon extends TopHeroStats {
    games_won: string;
}

export interface HeroWinRate extends TopHeroStats {
    win_rate: string;
}

export interface Stat {
    title: string;
    value: string;
}

export interface StatsByGameType<T> {
    quickplay: T[];
    competitive: T[];
}

export interface StatByGameType<T, U> {
    quickplay: T;
    competitive: U;
}

export interface QuickplayTopHeroData {
    played: HeroTimePlayed[];
    games_won: HeroGamesWon[];
}

export interface CompetitiveTopHeroData extends QuickplayTopHeroData {
    win_rate: HeroWinRate[];
}

export interface StatsCategories {
    top_heroes: StatByGameType<
        QuickplayTopHeroData,
        CompetitiveTopHeroData
    >;
    combat: StatsByGameType<Stat>;
    match_awards: StatsByGameType<Stat>;
    assists: StatsByGameType<Stat>;
    average: StatsByGameType<Stat>;
    miscellaneous: StatsByGameType<Stat>;
    best: StatsByGameType<Stat>;
    game: StatsByGameType<Stat>;
}

export interface StatsApiResponse extends OverwatchApiResponse {
    stats: StatsCategories;
}

export function getProfile(
    platform: OverwatchPlatform,
    region: OverwatchServerRegion,
    tag: string,
    callback: callbackFunc<ProfileApiResponse>,
): void;
export function getStats(
    platform: OverwatchPlatform,
    region: OverwatchServerRegion,
    tag: string,
    callback: callbackFunc<StatsApiResponse>,
): void;
export namespace owl {
    interface ApiResponse<T> {
        data: T;
    }

    interface StandingInfo {
        matchWin: number;
        matchLoss: number;
        matchDraw: number;
        matchBye: number;
        gameWin: number;
        gameLoss: number;
        gameTie: number;
        gamePointsFor: number;
        gamePointsAgainst: number;
        placement: number;
    }

    interface StandingComparison {
        key: string;
        value: number;
    }

    interface StageStandingInfo extends PreseasonStandingInfo {
        isPlayoffWinner: boolean;
    }

    interface Stages {
        stage1: StageStandingInfo;
        stage2: StageStandingInfo;
        stage3: StageStandingInfo;
        stage4: StageStandingInfo;
    }

    interface PreseasonStandingInfo extends StandingInfo {
        comparisons: StandingComparison[];
    }

    interface TeamStandingInfo {
        id: number;
        divisionId: number;
        name: string;
        abbreviatedName: string;
        league: StandingInfo;
        stages: Stages;
        preseason: PreseasonStandingInfo;
    }

    interface LiveMatchData {
        liveMatch: {};
    }

    interface TournamentData {
        id: number;
        type: string;
    }

    interface MatchScores {
        value: number;
    }

    interface TeamData {
        id: number;
        availableLanguages: string[];
        handle: string;
        name: string;
        homeLocation: string;
        primaryColor: string;
        secondaryColor: string;
        game: string;
        abbreviatedName: string;
        addressCountry: string;
        logo: string;
        icon: string;
        secondaryPhoto: string;
        type: string;
    }

    interface MatchGameScore {
        team1: number;
        team2: number;
    }

    interface MatchGameAttributeData {
        instanceID: string;
        map: string;
        mapScore: MatchGameScore;
    }

    type ScoreTuple = [number, number];

    interface MatchGameData {
        id: number;
        points: ScoreTuple;
        attributes: MatchGameAttributeData;
        attributesVersion: string;
        state: string;
        status: string;
        statusReason: string;
        stats: null;
        handle: string;
    }

    interface MatchVideoData {
        name: number;
        description: string;
        vodLink: string;
        youtubeId: string;
        thumbnailUrl: string;
    }

    interface MatchTournamentData {
        id: number;
        type: string;
        location: string;
    }

    interface MatchData {
        id: number;
        competitors: TeamData[];
        scores: MatchScores[];
        conclusionValue: number;
        conclusionStrategy: string;
        winner: TeamData;
        state: string;
        status: string;
        statusReason: string;
        attributes: {};
        games: MatchGameData[];
        clientHints: any[];
        dateCreated: number;
        flags: any[];
        handle: string;
        startDate: string;
        endDate: string;
        showStartTime: boolean;
        showEndTime: boolean;
        startDateTS: number;
        endDateTS: number;
        youtubeId: string;
        wins: ScoreTuple;
        ties: ScoreTuple;
        losses: ScoreTuple;
        videos: MatchVideoData[];
        tournament: MatchTournamentData;
    }

    interface WeekData {
        id: number;
        startDate: number;
        endDate: number;
        matches: MatchData[];
        name: string;
    }

    interface StageScheduleInfo {
        id: number;
        slug: string;
        enabled: boolean;
        name: string;
        tournament: TournamentData[];
        matches: MatchData[];
        weeks: WeekData[];
    }

    interface ScheduleInfo {
        startDate: string;
        endDate: string;
        stages: StageScheduleInfo[];
    }

    function getLiveMatch(callback: callbackFunc<ApiResponse<LiveMatchData>>): void;
    function getStandings(callback: callbackFunc<ApiResponse<TeamStandingInfo[]>>): void;
    function getSchedule(callback: callbackFunc<ApiResponse<ScheduleInfo>>): void;
}
