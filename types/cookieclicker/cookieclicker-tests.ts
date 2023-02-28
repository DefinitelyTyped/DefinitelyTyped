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
    // @ts-expect-error
    { bg: 'artBackground' },
    12345,
    () => 123,
    () => {},
);

new Game.Upgrade('Example upgrade', 'Does <b>nothing</b>.', 456, [1, 2]);
// Custom icon source
new Game.Upgrade('Example upgrade', 'Does <b>nothing</b>.', 456, [1, 2, 'https://example.com/icons.png']);

// Invalid tier type
// @ts-expect-error
Game.SynergyUpgrade('Example synergy', 'Example', 'Cursor', 'Grandma', { hello: 'there' });

Game.GrandmaSynergy('Example grandmas', 'A nice example', 'Example building');

// Loader

// Loads asset "Hi"
Game.Loader.Load(['Hi']);

// Loads assets "H" and "i", unintended
// @ts-expect-error
Game.Loader.Load('Hi');

// Some achievements

Game.BankAchievement('Example bank');

Game.CpsAchievement('Example Cps');

// Minigames

const GardenMG = Game.Objects.Farm.minigame;

GardenMG.getCost(GardenMG.plantsById[3]);

GardenMG.canPlant(GardenMG.plants.queenbeet);

const PantheonMG = Game.Objects.Temple.minigame;

PantheonMG.godTooltip(3);

// @ts-expect-error
PantheonMG.slotGod(PantheonMG.godsById[2], 3);

const GrimoireMG = Game.Objects['Wizard tower'].minigame;

GrimoireMG.castSpell(GrimoireMG.spellsById[7], { cost: 123 });

// @ts-expect-error
GrimoireMG.getFailChance('conjure baked goods');

const StocksMG = Game.Objects.Bank.minigame;

StocksMG.buyGood(9, 36);

// @ts-expect-error
StocksMG.tradeTooltip(StocksMG.goodsById[13], 46);

// Mod api

Game.registerMod('example', { init: () => {} });

Game.registerHook('ticker', () => ['hi']);

Game.WriteSave();

Game.LoadSave();

// A live example of ascension modes, commented out it the code
Game.ascensionModes[2] = {
    name: 'Trigger finger',
    desc: `In this run, scrolling your mouse wheel on the cookie counts as clicking it. Some upgrades introduce new clicking behaviors.<br>
No clicking achievements may be obtained in this mode.
<div class="line"></div>
Reaching 1 quadrillion cookies in this mode unlocks a special heavenly upgrade.`,
    icon: [12, 0],
    dname: loc('Trigger finger'),
};

const selector: Game.SelectorSwitchChoice = { name: 'Example choice', icon: [10, 0] };

// `TickerEffect` can also be 0
// @ts-expect-error
Game.TickerEffect.type;

const coolUpgrade = new Game.Upgrade('Example upgrade', 'Does <b>nothing</b>.', 456, [1, 2]);

coolUpgrade.parents.push(Game.UpgradesById[17]);

Game.registerHook('reset', hard => {
    alert(`This reset is ${hard ? '' : 'not '}hard!`);
});

const tiered = Game.TieredUpgrade('Cool socks', '', 'Grandma', 10);

// One of the many real use cases of :2260:9 type parameter hack

tiered.power = me => me.buildingTie1.price;

Game.Objects.Cursor.tieredUpgrades[10] = tiered;

Game.cookiesPsByType.kitten;

// @ts-expect-error
l('lumps').style;

// @ts-expect-error
Game.Notify('Hello!');

replaceAll(escapeRegExp('++'), '--', '++--++');

const testMod = Game.mods['test-mod'];

// @ts-expect-error
if (testMod && testMod.id) testMod.id++;

Math.seedrandom();

Game.foolObjects['Cursor'].desc += '<br/>Haha!';

Game.Objects.Bank.sacrifice(123);

Game.tooltip.tta.removeChild(Game.tooltip.tt);

Game.UnlockTiered(Game.Objects.Factory);

const buildingPicture: Game.BuildingArtPicture = { frame: 0, id: 0, pic: 'icons.png', x: 0, y: 0, z: 0 };

// @ts-expect-error
Game.effs.cps + 1;

Game.eff('cps', 5) + 123;

const buffType = new Game.buffType('type definitions', (time, arg1) => ({
    name: 'Type definitions!',
    // There's no icon, will default to [0, 0]
    desc: 'Type definitions make everything good!',
    time: time * Game.fps,
    pow: (arg1 ?? 0) * 10,
}));

const gainedBuff = Game.gainBuff('type definitons', 60);

if (gainedBuff.time === gainedBuff.maxTime && gainedBuff.arg1) console.log(gainedBuff.pow === gainedBuff.arg1 * 10);

gainedBuff.type === buffType;

console.log(SimpleBeautify(1e6));

console.log(loc('%1 types', LBeautify(10)));

AddLanguage('TS', 'TypeScript', { Game: '{PseudoNull:0}', '': { 'plural-forms': '', language: 'unused' } });

if (App) {
    App.gotAchiev(Game.Achievements['Wake and bake'].id);
    App.modsPopup();
}

alert(Game.Upgrades['Reinforced index finger'].dname + Game.Upgrades['Reinforced index finger'].ddesc);

Game.ToggleFullscreen();

Game.RuinTheFun();

Game.registerMod('typemod', {
    init() {
        console.log(this.dir);
    },
});

writeIcon([0, 0]);

// This doesn't exist anymore, was renamed to WritePrefButton
// @ts-expect-error
Game.WriteButton;

Game.Objects.Bank.unshackleUpgrade;

Game.AllBGs[0].order = 12;

Game.jukebox.musicScrub(5);

if (Music) {
    Music.pause();
}
