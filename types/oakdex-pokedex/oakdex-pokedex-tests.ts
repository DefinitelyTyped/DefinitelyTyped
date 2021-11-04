import {
    Pokemon,
    Move,
    Ability,
    PokemonType,
    Region,
    EggGroup,
    Generation,
    Nature,
    Item
} from 'oakdex-pokedex';

// Pokemon
() => {
    const pikachu: Pokemon = {
        names: {
            fr: 'Pikachu',
            de: 'Pikachu',
            it: 'Pikachu',
            en: 'Pikachu'
        },
        national_id: 25,
        types: [
        'Electric'
        ],
        abilities: [
        {
            name: 'Static'
        },
        {
            name: 'Lightning Rod',
            hidden: true
        }
        ],
        gender_ratios: {
            male: 50,
            female: 50
        },
        catch_rate: 190,
        egg_groups: [
        'Field',
        'Fairy'
        ],
        hatch_time: [
        5355,
        5609
        ],
        height_us: '1\'04"',
        height_eu: '0.4 m',
        weight_us: '13.2 lbs.',
        weight_eu: '6.0 kg',
        base_exp_yield: 105,
        leveling_rate: 'Medium Fast',
        ev_yield: {
            hp: 0,
            atk: 0,
            def: 0,
            sp_atk: 0,
            sp_def: 0,
            speed: 2
        },
        color: 'Yellow',
        base_friendship: 70,
        base_stats: {
            hp: 35,
            atk: 55,
            def: 30,
            sp_atk: 50,
            sp_def: 40,
            speed: 90
        },
        evolutions: [
        {
            to: 'Raichu',
            item: 'Thunderstone'
        }
        ],
        evolution_from: 'Pichu',
        alola_id: 25,
        categories: {
            en: 'Mouse Pokémon',
            de: 'Maus'
        },
        kanto_id: 25,
        johto_id: 22,
        hoenn_id: 163,
        sinnoh_id: 104,
        unova_id: null,
        kalos_id: 36,
        mega_evolutions: [],
        variations: [
        {
            names: {
                fr: 'Pikachu (Pokémon partenaire)',
                de: 'Pikachu (Partner-Pokémon)',
                it: 'Pikachu (Pokémon compagno)',
                en: 'Pikachu (Partner Pokémon)'
            },
            types: [
            'Electric'
            ],
            base_stats: {
                hp: 45,
                atk: 80,
                def: 50,
                sp_atk: 75,
                sp_def: 60,
                speed: 120
            }
        }
        ],
        pokedex_entries: {
            Red: {
                en: 'When several of these Pokémon gather, their electricity could build and cause lightning storms.',
                de: 'Wenn sich mehrere dieser Pokémon versammeln, kann ihre Energie Blitzgewitter erzeugen.'
            },
            Blue: {
                en: 'When several of these Pokémon gather, their electricity could build and cause lightning storms.',
                de: 'Wenn sich mehrere dieser Pokémon versammeln, kann ihre Energie Blitzgewitter erzeugen.'
            }
        },
        pokeathlon_stats: {
            speed: [
            3,
            4
            ],
            power: [
            3,
            4
            ],
            stamina: [
            3,
            4
            ],
            skill: [
            3,
            4
            ],
            jump: [
            3,
            4
            ]
        },
        ultra_alola_id: 32,
        move_learnsets: [
        {
            games: [
            'Red',
            'Blue'
            ],
            learnset: [
            {
                move: 'Growl',
                level: 1
            },
            {
                move: 'Thunder Shock',
                level: 1
            },
            {
                move: 'Thunder Wave',
                level: 9
            },
            {
                move: 'Quick Attack',
                level: 16
            },
            {
                move: 'Swift',
                level: 26
            },
            {
                move: 'Agility',
                level: 33
            },
            {
                move: 'Thunder',
                level: 43
            },
            {
                move: 'Flash',
                tm: 'HM5'
            },
            {
                move: 'Mega Punch',
                tm: 'TM1'
            },
            {
                move: 'Mega Kick',
                tm: 'TM5'
            },
            {
                move: 'Toxic',
                egg_move: true
            }
            ]
        }
        ]
    };
};

// Move
() => {
    const tackle: Move = {
        index_number: 33,
        pp: 35,
        max_pp: 56,
        power: 50,
        accuracy: 100,
        category: 'physical',
        priority: 0,
        target: 'target_adjacent_single',
        critical_hit: 0,
        makes_contact: true,
        affected_by_protect: true,
        affected_by_magic_coat: false,
        affected_by_snatch: false,
        affected_by_mirror_move: false,
        affected_by_kings_rock: true,
        names: {
            cz: 'Nárazový útok',
            dk: 'Tackling',
            fr: 'Charge',
            de: 'Tackle',
            gr: 'Εφόρμηση',
            en: 'Tackle'
        },
        type: 'Normal',
        contests: [
        {
            contest: 'Contests',
            appeal: 4,
            jam: 0,
            condition: 'Tough'
        },
        {
            contest: 'Super Contests',
            appeal: 3,
            jam: 0,
            condition: 'Tough'
        },
        {
            contest: 'Contest Spectaculars',
            appeal: 4,
            jam: 0,
            condition: 'Tough'
        }
        ],
        pokedex_entries: {
            Gold: {
                en: 'A full-body charge attack.',
                de: 'Attacke mit vollem Körpereinsatz.'
            },
            Silver: {
                en: 'A full-body charge attack.',
                de: 'Attacke mit vollem Körpereinsatz.'
            },
            Crystal: {
                en: 'A full-body charge attack.',
                de: 'Attacke mit vollem Körpereinsatz.'
            }
        }
    };
};

// Ability
() => {
    const airLock: Ability = {
        index_number: 76,
        names: {
            fr: 'Air Lock',
            de: 'Klimaschutz',
            it: 'Riparo',
            en: 'Air Lock'
        },
        descriptions: {
            en: 'Eliminates the effects of weather.',
            de: 'Example'
        }
    };
};

// EggGroup
() => {
    const bug: EggGroup = {
        names: {
            en: 'Bug',
            jp: 'むし (虫) Mushi',
            fr: 'Insecte',
            de: 'Käfer',
            it: 'Coleottero',
            es: 'Bicho'
        }
    };
};

// Generation
() => {
    const gen1: Generation = {
        number: 1,
        dex_name: 'kanto_id',
        names: {
            en: 'Generation I',
            de: 'Generation I'
        },
        games: [
        {
            en: 'Red',
            de: 'Rot'
        },
        {
            en: 'Blue',
            de: 'Blau'
        },
        {
            en: 'Yellow',
            de: 'Gelb'
        }
        ]
    };
};

// Item
() => {
    const potion: Item = {
        names: {
            en: 'Potion',
            de: 'Trank',
            fr: 'Potion',
            es: 'Poción',
            it: 'Pozione'
        },
        category: 'Potions',
        descriptions: [
        {
            games: [
            'Gold',
            'Silver',
            'Crystal'
            ],
            translations: {
                en: 'Restores Pokémon HP by 20.',
                de: 'Füllt die KP um 20 auf.'
            }
        }
        ],
        prices: [
        {
            games: [
            'Red',
            'Blue',
            'Yellow'
            ],
            buying: 300,
            selling: 150
        },
        {
            games: [
            'Sun',
            'Moon',
            'Ultra Sun',
            'Ultra Moon'
            ],
            buying: 200,
            selling: 100
        }
        ],
        pockets: [
        {
            generations: [
            1,
            2,
            3
            ],
            pocket: 'Items'
        },
        {
            generations: [
            4,
            5,
            6,
            7
            ],
            pocket: 'Medicine'
        }
        ],
        fling_power: 30,
        effects: [
        {
            condition: 'Always',
            target: 'Single Pokemon',
            pokemon_changes: [
            {
                field: 'current_hp',
                change_by: 20
            }
            ]
        }
        ]
    };
};

// Nature
() => {
    const bold: Nature = {
        names: {
            en: 'Bold',
            de: 'Kühn'
        },
        increased_stat: 'def',
        decreased_stat: 'atk',
        favorite_flavor: 'Sour',
        disliked_flavor: 'Spicy'
    };
};

// PokemonType
() => {
    const dragon: PokemonType = {
        names: {
            dk: 'Drage',
            fr: 'Dragon',
            de: 'Drache',
            gr: 'Δράκου Drakou',
            it: 'Drago',
            pl: 'SmokSmoczy',
            en: 'Dragon'
        },
        effectivness: {
            Normal: 1,
            Fighting: 1,
            Flying: 1,
            Poison: 1,
            Ground: 1,
            Rock: 1,
            Bug: 1,
            Ghost: 1,
            Steel: 0.5,
            Fire: 1,
            Water: 1,
            Grass: 1,
            Electric: 1,
            Psychic: 1,
            Ice: 1,
            Dragon: 2,
            Dark: 1,
            Fairy: 0
        },
        color: '#6F35FC'
    };
};

// Region
() => {
    const alola: Region = {
        names: {
            en: 'Alola',
            fr: 'Alola',
            es: 'Alola',
            de: 'Alola',
            it: 'Alola'
        },
        locations: [
        {
            names: {
                en: 'Route 1',
                fr: 'Abords d\'Ekaeka',
                es: 'Afueras de Hauoli',
                de: 'Hauholi-Stadtrand',
                it: 'Periferia di Hau\'oli'
            },
            pokemon: [
            {
                pokemon: 'Pikipek',
                location: 'Walking',
                min_level: 2,
                max_level: 3,
                rarity: 'common',
                games: [
                'Sun',
                'Moon'
                ],
                day_times: [
                'day',
                'night'
                ]
            }
            ]
        }
        ]
    };
};
