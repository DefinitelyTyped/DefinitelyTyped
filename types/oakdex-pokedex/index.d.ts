export interface Translations {
    de: string;
    en: string;
    cz?: string | undefined;
    dk?: string | undefined;
    fr?: string | undefined;
    gr?: string | undefined;
    it?: string | undefined;
    pl?: string | undefined;
    tr?: string | undefined;
    jp?: string | undefined;
    es?: string | undefined;
}

export interface PokemonEvolution {
    to: string;
    level?: number | undefined;
    happiness?: boolean | undefined;
    trade?: boolean | undefined;
    level_up?: boolean | undefined;
    item?: string | undefined;
    hold_item?: string | undefined;
    move_learned?: string | undefined;
    conditions?: string[] | undefined;
}

export interface PokemonAbility {
    name: string;
    hidden?: boolean | undefined;
}

export interface StatObject {
    hp: number;
    atk: number;
    def: number;
    sp_atk: number;
    sp_def: number;
    speed: number;
}

export interface MegaEvolution {
    types: string[];
    ability: string;
    height_us: string;
    height_eu: string;
    weight_us: string;
    weight_eu: string;
    base_stats: StatObject;
    mega_stone: string;
    image_suffix?: string | undefined;
}

export interface PokemonVariation {
    condition?: string | undefined;
    names: Translations;
    types: string[];
    height_us?: string | undefined;
    height_eu?: string | undefined;
    weight_us?: string | undefined;
    weight_eu?: string | undefined;
    base_stats?: StatObject | undefined;
    pokeathlon_stats?: {
        speed?: number[] | undefined;
        power?: number[] | undefined;
        stamina?: number[] | undefined;
        skill?: number[] | undefined;
        jump?: number[] | undefined;
    } | undefined;
    abilities?: string[] | undefined;
    image_suffix?: string | undefined;
}

export interface Learnset {
    move: string;
    level?: number | undefined;
    tm?: string | undefined;
    egg_move?: boolean | undefined;
    variations?: string[] | undefined;
}

export interface MoveLearnset {
    games: string[];
    learnset: Learnset[];
}

export interface Pokemon {
    names: Translations;
    categories: Translations;
    national_id: number;
    kanto_id: number | null;
    johto_id: number | null;
    hoenn_id: number | null;
    sinnoh_id: number | null;
    unova_id: number | null;
    kalos_id: number | null;
    alola_id: number | null;
    ultra_alola_id: number | null;
    pokedex_entries: {
        [key: string]: Translations;
    };
    evolution_from: string | null;
    evolutions: PokemonEvolution[];
    types: string[];
    abilities: PokemonAbility[];
    gender_ratios: null | {
        female: number;
        male: number;
    };
    catch_rate: number;
    egg_groups: string[];
    hatch_time: number[];
    height_us: string;
    height_eu: string;
    weight_us: string;
    weight_eu: string;
    base_exp_yield: number;
    leveling_rate: string;
    ev_yield: StatObject;
    color: string;
    base_friendship: number;
    base_stats: StatObject;
    pokeathlon_stats?: {
        speed?: number[] | undefined;
        power?: number[] | undefined;
        stamina?: number[] | undefined;
        skill?: number[] | undefined;
        jump?: number[] | undefined;
    } | undefined;
    mega_evolutions: MegaEvolution[];
    variation_names?: Translations | undefined;
    variations: PokemonVariation[];
    move_learnsets: MoveLearnset[];
}

export interface MoveStatusCondition {
    condition: string;
    probability: number;
}

export interface MoveStatModifier {
    stat: string;
    change_by: number;
    affects_user?: boolean | undefined;
}

export interface MoveContest {
    contest: string;
    condition: string;
    appeal: number;
    jam: number;
}

export interface Move {
    names: Translations;
    index_number: number;
    pp: number;
    max_pp: number;
    power: number;
    accuracy: number;
    type: string;
    category: string;
    priority: number;
    target: string;
    critical_hit: number;
    pokedex_entries: {
        [key: string]: Translations;
    };
    contests: MoveContest[];
    makes_contact: boolean;
    affected_by_protect: boolean;
    affected_by_magic_coat: boolean;
    affected_by_snatch: boolean;
    affected_by_mirror_move: boolean;
    affected_by_kings_rock: boolean;
    in_battle_properties?: {
        increased_critical_hit_ratio?: boolean | undefined;
        status_conditions?: MoveStatusCondition[] | undefined;
    } | undefined;
    stat_modifiers?: MoveStatModifier[] | undefined;
}

export interface Ability {
    names: Translations;
    index_number: number;
    descriptions: Translations;
}

export interface PokemonType {
    names: Translations;
    color: string;
    effectivness: {
        Normal: number;
        Fighting: number;
        Flying: number;
        Poison: number;
        Ground: number;
        Rock: number;
        Bug: number;
        Ghost: number;
        Steel: number;
        Fire: number;
        Water: number;
        Grass: number;
        Electric: number;
        Psychic: number;
        Ice: number;
        Dragon: number;
        Dark: number;
        Fairy: number;
    };
}

export interface LocationPokemon {
    pokemon: string;
    location: string;
    min_level: number;
    max_level: number;
    rarity: string;
    games: string[];
    day_times?: string[] | undefined;
    seasons?: string[] | undefined;
    variation?: string | undefined;
}

export interface Location {
    names: Translations;
    pokemon: LocationPokemon[];
}

export interface Region {
    names: Translations;
    locations: Location[];
}

export interface EggGroup {
    names: Translations;
}

export interface Generation {
    names: Translations;
    dex_name: string;
    number: number;
    games: Translations[];
}

export interface Nature {
    names: Translations;
    increased_stat: string | null;
    decreased_stat: string | null;
    favorite_flavor: string | null;
    disliked_flavor: string | null;
}

export interface ItemPrice {
    games: string[];
    buying: number;
    selling: number;
}

export interface ItemPocket {
    pocket: string;
    generations: number[];
}

export interface ItemDescription {
    translations: Translations;
    games: string[];
}

export interface ItemPokemonChange {
    field: string;
    change_by_percent?: number | undefined;
    revive?: boolean | undefined;
    change_by?: number | undefined;
    change?: string | undefined;
    conditions?: string[] | undefined;
}

export interface ItemMoveChange {
    field: string;
    change_by_percent?: number | undefined;
    change_by?: number | undefined;
    change_by_max?: number | undefined;
}

export interface ItemEffect {
    condition: string;
    target: string;
    triggers_evolution?: boolean | undefined;
    pokemon_changes?: ItemPokemonChange[] | undefined;
    move_changes?: ItemMoveChange[] | undefined;
}

export interface Item {
    names: Translations;
    category: string;
    descriptions: ItemDescription[];
    prices: ItemPrice[];
    pockets: ItemPocket[];
    effects: ItemEffect[];
    fling_power: number;
}

export interface Conditions {
    [key: string]: any;
}

export function resetPokemon(): void;

export function importPokemon(customPokemon: string[] | string | Pokemon[]): void;

export function findPokemon(idOrName: string | number): Pokemon | null;

export function findMove(name: string): Move | null;

export function findAbility(name: string): Ability | null;

export function findType(name: string): PokemonType | null;

export function findRegion(name: string): Region | null;

export function findEggGroup(name: string): EggGroup | null;

export function findGeneration(name: string): Generation | null;

export function findNature(name: string): Nature | null;

export function findItem(name: string): Item | null;

export function allPokemon(conditions?: Conditions): Pokemon[];

export function allItems(conditions?: Conditions): Item[];

export function allTypes(conditions?: Conditions): PokemonType[];

export function allAbilities(conditions?: Conditions): Ability[];

export function allRegions(conditions?: Conditions): Region[];

export function allEggGroups(conditions?: Conditions): EggGroup[];

export function allGenerations(conditions?: Conditions): Generation[];

export function allNatures(conditions?: Conditions): Nature[];
