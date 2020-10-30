import oversmash from 'oversmash';

oversmash().options; // $ExpectType CallerOptions

oversmash().player(""); // $ExpectType Promise<Player>

oversmash().playerStats(""); // $ExpectType Promise<PlayerStats>
