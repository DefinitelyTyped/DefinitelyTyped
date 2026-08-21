// $ExpectType number
let prefabIndex = findPrefab("MyPrefab");

// $ExpectType void
setBlock(0, 0, 0, prefabIndex);

// $ExpectType void
setBlock(0, 0, 0, 0);

// $ExpectType void
updateChanges();

// $ExpectType number
prefabIndex = getBlock(0, 0, 0);

// $ExpectType void
setBlockValue(0, 0, 0, 0, 15);

// $ExpectType void
setBlockValue(0, 0, 0, 0, "Text");

// $ExpectType void
setBlockValue(0, 0, 0, 0, [1, 2, 3]);

// $ExpectType void
connect(0, 0, 0, 0, 0, 0, 0, 0);

// $ExpectType string
getTerminalName(0, 0, 0, 0);

// $ExpectType TerminalType
getTerminalType(0, 0, 0, 0);

// $ExpectType void
log("Found a prefab " + prefabIndex);

// $ExpectType void
clearLog();

// $ExpectType [x: number, y: number, z: number]
let size = getSize();

// $ExpectType number
let count = getLevelCount();

// $ExpectType number
let levelIndex = getLevel();

// $ExpectType void
setLevel((levelIndex + 1) % count);

// $ExpectType number
let version = getVersion();

///////////////////////////////////////////////////////////
// Start of Fancade Beta features, play.fancade.com/beta //
///////////////////////////////////////////////////////////

// $ExpectType void
setEventListener("block-placed", (x, y, z) => {});

// $ExpectType void
setEventListener("update", () => {});

// $ExpectType void
setEventListener("keydown", key => {});

// $ExpectType void
setEventListener("keyup", key => {});

// $ExpectType void
selectAt(0, 0, 0);

// $ExpectType number
getSelectedCount();

// $ExpectType boolean
isGamePaused();

// $ExpectType boolean
isGamePlaying();

// $ExpectType boolean
isKeyDown(55);

// $ExpectType void
generateSwipe(0, 0, 0, 0, 0, 0);
