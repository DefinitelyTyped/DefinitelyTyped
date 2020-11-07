// Building with base art
new Game.Object(
    'Example building',
    'Example building|Example buildings|exampled|[X] more example|[X] more examples',
    'Hi',
    5,
    7,
    { base: 'artBase' },
    12345,
    () => 123,
    () => {},
);

// Building with baseless art
new Game.Object(
    'Example building',
    'Example building|Example buildings|exampled|[X] more example|[X] more examples',
    'Hi',
    5,
    7,
    { bg: 'artBackground', pic: 'artPicture' },
    12345,
    () => 123,
    () => {},
);

// Building with semi-implemented art (error)
new Game.Object(
    'Example building',
    'Example building|Example buildings|exampled|[X] more example|[X] more examples',
    'Hi',
    5,
    7,
    // $ExpectError
    { bg: 'artBackground' },
    12345,
    () => 123,
    () => {},
);

new Game.Upgrade('Example upgrade', 'Does <b>nothing</b>.', 456, [1, 2]);
// Custom icon source
new Game.Upgrade('Example upgrade', 'Does <b>nothing</b>.', 456, [1, 2, 'https://example.com/icons.png']);

// Invalid tier type
// $ExpectError
Game.SynergyUpgrade('Example synergy', 'Example', 'Cursor', 'Grandma', { hello: 'there' });

Game.GrandmaSynergy('Example grandmas', 'A nice example', 'Example building');

// Loader

// Loads asset "Hi"
Game.Loader.Load(['Hi']);

// Loads assets "H" and "i", unintended
// $ExpectError
Game.Loader.Load('Hi');
