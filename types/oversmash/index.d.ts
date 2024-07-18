export enum NormalizeNamesAs {
    snake = "snake",
    camel = "camel",
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
    displayName?: string | undefined;
    platform: string;
    public: boolean;
}

export interface Player {
    name?: string | undefined;
    nameEscaped: string;
    nameEscapedUrl: string;
    accounts: Account[];
}

export interface CompetitiveRank {
    support?: number | undefined;
    tank?: number | undefined;
    damage?: number | undefined;
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
    combat?: Statistic | undefined;
    game?: Game | undefined;
    best?: Statistic | undefined;
    misc?: Statistic | undefined;
    awards?: Statistic | undefined;
    hero?: Statistic | undefined;
    assists?: Statistic | undefined;
    average?: Statistic | undefined;
    rawName: string;
} & {
    name: string;
    combat?: Statistic | undefined;
    game?: Game | undefined;
    best?: Statistic | undefined;
    misc?: Statistic | undefined;
    awards?: Statistic | undefined;
    hero?: Statistic | undefined;
    assists?: Statistic | undefined;
    average?: Statistic | undefined;
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
    name?: string | undefined;
    nameEscaped: string;
    nameEscapedUrl?: string | undefined;
    region?: string | undefined;
    platform: string;
    stats: Stats;
}

export default function main(callerOptions?: CallerOptions): {
    readonly options: CallerOptions;
    player(name: string, platfortm?: string): Promise<Player>;
    playerStats(name: string, platform?: string): Promise<PlayerStats>;
};
