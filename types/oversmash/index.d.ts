// Type definitions for oversmash 1.6
// Project: https://github.com/filp/oversmash
// Definitions by: Pedro Campos <https://github.com/cdias900>
//                 Thiago <https://github.com/thzoid>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.9

export enum NormalizeNamesAs {
    snake = 'snake',
    camel = 'camel'
}

export interface Header {
    [key: string]: string;
}

export interface RequestOptions {
    baseURL: string;
    headers: Header;
}

export interface CallerOptions {
    normalizeNames: boolean;
    normalizeNamesAs: NormalizeNamesAs;
    normalizeValues: boolean;
    percentsToInts: boolean;
    portraitUrlTemplate: string;
    defaultPlatform: string;
    requestOptions: RequestOptions;
}

export interface Account {
    level: number;
    portrait: string;
    displayName?: string;
    platform: string;
    public: boolean;
}

export interface Player {
    name?: string;
    nameEscaped: string;
    nameEscapedUrl: string;
    accounts: Account[];
}

export interface CompetitiveRank {
    support?: number;
    tank?: number;
    damage?: number;
}

export interface Achievement {
    name: string;
    achieved: boolean;
}

export interface Statistic {
    [key: string]: string | number | null;
}

export type Game = {
    gamesLost: number;
    gamesPlayed: number;
    gamesTied: number;
    gamesWon: number;
    timePlayed: string;
} & {
    games_lost: number;
    games_played: number;
    games_tied: number;
    games_won: number;
    time_played: string;
};

export type Hero = {
    name: string;
    combat?: Statistic;
    game?: Game;
    best?: Statistic;
    misc?: Statistic;
    awards?: Statistic;
    hero?: Statistic;
    assists?: Statistic;
    average?: Statistic;
    rawName: string;
} & {
    name: string;
    combat?: Statistic;
    game?: Game;
    best?: Statistic;
    misc?: Statistic;
    awards?: Statistic;
    hero?: Statistic;
    assists?: Statistic;
    average?: Statistic;
    raw_name: string;
};

export interface GameMode {
    [key: string]: Hero;
}

export type Stats = {
    competitiveRank: CompetitiveRank;
    endorsementLevel: number;
    gamesWon: number;
    achievements: Achievement[];
    quickplay: GameMode;
    competitive: GameMode;
} & {
    competitive_rank: CompetitiveRank;
    endorsement_level: number;
    games_won: number;
    achievements: Achievement[];
    quickplay: GameMode;
    competitive: GameMode;
};

export interface PlayerStats {
    name?: string;
    nameEscaped: string;
    nameEscapedUrl?: string;
    region?: string;
    platform: string;
    stats: Stats;
}

export default function main(callerOptions?: CallerOptions): {
    readonly options: CallerOptions;
    player(name: string, platfortm?: string): Promise<Player>;
    playerStats(name: string, platform?: string): Promise<PlayerStats>;
};
