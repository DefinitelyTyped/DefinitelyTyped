// Type definitions for osrs-json-api 1.2
// Project: https://github.com/Judaxx/osrs-json-api#readme
// Definitions by: Kyle Miller <https://github.com/kylemiller3>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export namespace hiscores {
    function getPlayer(rsn: string, gamemode?: Gamemodes): Promise<Player>;

    interface Player {
        skills: {
            overall: RankLevelXpObject
            attack: RankLevelXpObject
            defence: RankLevelXpObject
            strength: RankLevelXpObject
            hitpoints: RankLevelXpObject
            ranged: RankLevelXpObject
            prayer: RankLevelXpObject
            magic: RankLevelXpObject
            cooking: RankLevelXpObject
            woodcutting: RankLevelXpObject
            fletching: RankLevelXpObject
            fishing: RankLevelXpObject
            firemaking: RankLevelXpObject
            crafting: RankLevelXpObject
            smithing: RankLevelXpObject
            mining: RankLevelXpObject
            herblore: RankLevelXpObject
            agility: RankLevelXpObject
            thieving: RankLevelXpObject
            slayer: RankLevelXpObject
            farming: RankLevelXpObject
            runecraft: RankLevelXpObject
            hunter: RankLevelXpObject
            construction: RankLevelXpObject
        };
        bh: {
            hunter: RankScoreObject
            rogue: RankScoreObject
        };
        lms: RankScoreObject;
        clues: {
            all: RankScoreObject
            beginner: RankScoreObject
            easy: RankScoreObject
            medium: RankScoreObject
            hard: RankScoreObject
            elite: RankScoreObject
            master: RankScoreObject
        };
        bosses: {
            'Abyssal Sire': RankScoreObject
            'Alchemical Hydra': RankScoreObject
            'Barrows Chests': RankScoreObject
            'Bryophyta': RankScoreObject
            'Callisto': RankScoreObject
            'Cerberus': RankScoreObject
            'Chambers of Xeric': RankScoreObject
            'Chambers of Xeric: Challenge Mode': RankScoreObject
            'Chaos Elemental': RankScoreObject
            'Chaos Fanatic': RankScoreObject
            'Commander Zilyana': RankScoreObject
            'Corporeal Beast': RankScoreObject
            'Crazy Archaeologist': RankScoreObject
            'Dagannoth Prime': RankScoreObject
            'Dagannoth Rex': RankScoreObject
            'Dagannoth Supreme': RankScoreObject
            'Deranged Archaeologist': RankScoreObject
            'General Graardor': RankScoreObject
            'Giant Mole': RankScoreObject
            'Grotesque Guardians': RankScoreObject
            'Hespori': RankScoreObject
            'Kalphite Queen': RankScoreObject
            'King Black Dragon': RankScoreObject
            'Kraken': RankScoreObject
            'Kree\'Arra': RankScoreObject
            'K\'ril Tsutsaroth': RankScoreObject
            'Mimic': RankScoreObject
            'Obor': RankScoreObject
            'Sarachnis': RankScoreObject
            'Scorpia': RankScoreObject
            'Skotizo': RankScoreObject
            'The Gauntlet': RankScoreObject
            'The Corrupted Gauntlet': RankScoreObject
            'Theatre of Blood': RankScoreObject
            'Thermonuclear Smoke Devil': RankScoreObject
            'TzKal-Zuk': RankScoreObject
            'TzTok-Jad': RankScoreObject
            'Venenatis': RankScoreObject
            'Vet\'ion': RankScoreObject
            'Vorkath': RankScoreObject
            'Wintertodt': RankScoreObject
            'Zalcano': RankScoreObject
            'Zulrah': RankScoreObject
        };
    }

    interface RankLevelXpObject {
        rank: string;
        level: number;
        xp: number;
    }

    interface RankScoreObject {
        rank: number;
        score: number;
    }

    type Gamemodes = 'main'
        | 'iron'
        | 'uim'
        | 'hcim'
        | 'dmm'
        | 'sdmm'
        | 'dmmt';
}

export namespace ge {
    function getItem(id: number): Promise<Item>;
    function getGraph(id: number): Promise<Graph>;

    interface Item {
        item: {
            icon: string
            icon_large: string
            id: number
            type: string
            typeIcon: string
            name: string
            description: string
            current: TrendPriceObject
            today: TrendPriceObject
            members: boolean
            day30: TrendChangeObject
            day90: TrendChangeObject
            day180: TrendChangeObject
        };
    }

    interface Graph {
        daily: TimestampPriceRecord;
        average: TimestampPriceRecord;
    }

    interface TrendPriceObject {
        trend: string;
        price: number | string;
    }

    interface TrendChangeObject {
        trend: string;
        change: string;
    }

    type TimestampPriceRecord = Record<string, number>;
}
