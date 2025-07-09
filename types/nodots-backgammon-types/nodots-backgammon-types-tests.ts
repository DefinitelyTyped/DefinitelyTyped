import {
    BackgammonBar,
    BackgammonBoard,
    BackgammonChecker,
    BackgammonColor,
    BackgammonCube,
    BackgammonDice,
    BackgammonDieValue,
    BackgammonGame,
    BackgammonGameCompleted,
    BackgammonGameMoved,
    BackgammonGameMoving,
    BackgammonGameRolled,
    BackgammonGameRolledForStart,
    BackgammonGameRollingForStart,
    BackgammonMove,
    BackgammonMoveDirection,
    BackgammonMoveSkeleton,
    BackgammonOff,
    BackgammonPlayer,
    BackgammonPlayers,
    BackgammonPoint,
    CHECKERS_PER_PLAYER,
    Latitude,
    LocaleCode,
    Longitude,
} from "nodots-backgammon-types";

// Test basic types
const locale: LocaleCode = "en";
const color: BackgammonColor = "black";
const direction: BackgammonMoveDirection = "clockwise";
const latitude: Latitude = "north";
const longitude: Longitude = "east";

// Test board structure
const board: BackgammonBoard = {
    id: "test-board",
    gnuPositionId: "test-gnu-id",
    points: {
        "1": { id: "1", kind: "point", position: { clockwise: 1, counterclockwise: 24 }, checkers: [] },
        "2": { id: "2", kind: "point", position: { clockwise: 2, counterclockwise: 23 }, checkers: [] },
    },
    bar: {
        clockwise: { id: "bar-clockwise", kind: "bar", direction: "clockwise", position: "bar", checkers: [] },
        counterclockwise: {
            id: "bar-counterclockwise",
            kind: "bar",
            direction: "counterclockwise",
            position: "bar",
            checkers: [],
        },
    },
    off: {
        clockwise: { id: "off-clockwise", kind: "off", direction: "clockwise", position: "off", checkers: [] },
        counterclockwise: {
            id: "off-counterclockwise",
            kind: "off",
            direction: "counterclockwise",
            position: "off",
            checkers: [],
        },
    },
};

// Test player structure
const player: BackgammonPlayer = {
    id: "player-1",
    userId: "user-1",
    color: "black",
    direction: "clockwise",
    dice: { stateKind: "inactive", id: "dice-1", color: "black" },
    pipCount: 0,
    isRobot: false,
    stateKind: "inactive",
};

const players: BackgammonPlayers = [
    player,
    {
        id: "player-2",
        userId: "user-2",
        color: "white",
        direction: "counterclockwise",
        dice: { stateKind: "inactive", id: "dice-2", color: "white" },
        pipCount: 0,
        isRobot: false,
        stateKind: "inactive",
    },
];

// Test checker structure
const checker: BackgammonChecker = {
    id: "checker-1",
    color: "black",
    checkercontainerId: "1",
};

// Test point structure
const point: BackgammonPoint = {
    id: "1",
    kind: "point",
    position: { clockwise: 1, counterclockwise: 24 },
    checkers: [checker],
};

// Test bar structure
const bar: BackgammonBar = {
    id: "bar-clockwise",
    kind: "bar",
    direction: "clockwise",
    position: "bar",
    checkers: [],
};

// Test off structure
const off: BackgammonOff = {
    id: "off-clockwise",
    kind: "off",
    direction: "clockwise",
    position: "off",
    checkers: [],
};

// Test cube structure
const cube: BackgammonCube = {
    stateKind: "initialized",
    id: "cube-1",
    owner: undefined,
    value: undefined,
};

// Test dice structure
const dice: BackgammonDice = {
    stateKind: "inactive",
    id: "dice-1",
    color: "black",
};

// Test die value
const dieValue: BackgammonDieValue = 1;

// Test move structure
const move: BackgammonMove = {
    id: "move-1",
    player: player,
    dieValue: 1,
    stateKind: "ready",
    moveKind: "point-to-point",
    possibleMoves: [],
    origin: point,
};

// Test move skeleton
const moveSkeleton: BackgammonMoveSkeleton = {
    dieValue: 1,
    direction: "clockwise",
    origin: point,
    destination: point,
};

// Test game states
const rollingForStartGame: BackgammonGameRollingForStart = {
    id: "game-1",
    stateKind: "rolling-for-start",
    players,
    board,
    cube,
    createdAt: new Date(),
    version: "3.2.1",
    rules: {
        useCrawfordRule: false,
        useJacobyRule: false,
        useBeaverRule: false,
        useRaccoonRule: false,
        useMurphyRule: false,
        useHollandRule: false,
    },
    settings: {
        allowUndo: true,
        allowResign: true,
        allowDraw: true,
        autoPlay: false,
        showHints: false,
        showProbabilities: false,
    },
};

const rolledForStartGame: BackgammonGameRolledForStart = {
    id: "game-1",
    stateKind: "rolled-for-start",
    players,
    board,
    cube,
    activeColor: "black",
    activePlayer: {
        id: "player-1",
        userId: "user-1",
        color: "black",
        direction: "clockwise",
        dice: { stateKind: "inactive", id: "dice-1", color: "black" },
        pipCount: 0,
        isRobot: false,
        stateKind: "rolled-for-start",
    },
    inactivePlayer: {
        id: "player-2",
        userId: "user-2",
        color: "white",
        direction: "counterclockwise",
        dice: { stateKind: "inactive", id: "dice-2", color: "white" },
        pipCount: 0,
        isRobot: false,
        stateKind: "inactive",
    },
    createdAt: new Date(),
    version: "3.2.1",
    rules: {
        useCrawfordRule: false,
        useJacobyRule: false,
        useBeaverRule: false,
        useRaccoonRule: false,
        useMurphyRule: false,
        useHollandRule: false,
    },
    settings: {
        allowUndo: true,
        allowResign: true,
        allowDraw: true,
        autoPlay: false,
        showHints: false,
        showProbabilities: false,
    },
};

const rolledGame: BackgammonGameRolled = {
    id: "game-1",
    stateKind: "rolled",
    players,
    board,
    cube,
    activeColor: "black",
    activePlayer: {
        id: "player-1",
        userId: "user-1",
        color: "black",
        direction: "clockwise",
        dice: { stateKind: "rolled", id: "dice-1", color: "black", currentRoll: [1, 2], total: 3 },
        pipCount: 0,
        isRobot: false,
        stateKind: "rolled",
    },
    inactivePlayer: {
        id: "player-2",
        userId: "user-2",
        color: "white",
        direction: "counterclockwise",
        dice: { stateKind: "inactive", id: "dice-2", color: "white" },
        pipCount: 0,
        isRobot: false,
        stateKind: "inactive",
    },
    activePlay: {
        stateKind: "rolled",
        id: "play-1",
        player: {
            id: "player-1",
            userId: "user-1",
            color: "black",
            direction: "clockwise",
            dice: { stateKind: "rolled", id: "dice-1", color: "black", currentRoll: [1, 2], total: 3 },
            pipCount: 0,
            isRobot: false,
            stateKind: "rolled",
        },
        board,
        moves: new Set(),
    },
    createdAt: new Date(),
    version: "3.2.1",
    rules: {
        useCrawfordRule: false,
        useJacobyRule: false,
        useBeaverRule: false,
        useRaccoonRule: false,
        useMurphyRule: false,
        useHollandRule: false,
    },
    settings: {
        allowUndo: true,
        allowResign: true,
        allowDraw: true,
        autoPlay: false,
        showHints: false,
        showProbabilities: false,
    },
};

const movingGame: BackgammonGameMoving = {
    id: "game-1",
    stateKind: "moving",
    players,
    board,
    cube,
    activeColor: "black",
    activePlay: {
        stateKind: "moving",
        id: "play-2",
        player: {
            id: "player-1",
            userId: "user-1",
            color: "black",
            direction: "clockwise",
            dice: { stateKind: "rolled", id: "dice-1", color: "black", currentRoll: [1, 2], total: 3 },
            pipCount: 0,
            isRobot: false,
            stateKind: "moving",
        },
        board,
        moves: new Set(),
    },
    activePlayer: {
        id: "player-1",
        userId: "user-1",
        color: "black",
        direction: "clockwise",
        dice: { stateKind: "rolled", id: "dice-1", color: "black", currentRoll: [1, 2], total: 3 },
        pipCount: 0,
        isRobot: false,
        stateKind: "moving",
    },
    inactivePlayer: {
        id: "player-2",
        userId: "user-2",
        color: "white",
        direction: "counterclockwise",
        dice: { stateKind: "inactive", id: "dice-2", color: "white" },
        pipCount: 0,
        isRobot: false,
        stateKind: "inactive",
    },
    createdAt: new Date(),
    version: "3.2.1",
    rules: {
        useCrawfordRule: false,
        useJacobyRule: false,
        useBeaverRule: false,
        useRaccoonRule: false,
        useMurphyRule: false,
        useHollandRule: false,
    },
    settings: {
        allowUndo: true,
        allowResign: true,
        allowDraw: true,
        autoPlay: false,
        showHints: false,
        showProbabilities: false,
    },
};

const movedGame: BackgammonGameMoved = {
    id: "game-1",
    stateKind: "moved",
    players,
    board,
    cube,
    activeColor: "black",
    activePlayer: {
        id: "player-1",
        name: "Test Player",
        color: "black",
        isActive: true,
        isWinner: false,
        checkers: [],
        hasMoved: true,
    },
    inactivePlayer: {
        id: "player-2",
        name: "Test Player 2",
        color: "white",
        isActive: false,
        isWinner: false,
        checkers: [],
    },
    activePlay: {
        id: "play-1",
        player: {
            id: "player-1",
            name: "Test Player",
            color: "black",
            isActive: true,
            isWinner: false,
            checkers: [],
            hasMoved: true,
        },
        dice: { values: [1, 2], isDoubles: false },
        moves: [move],
    },
    createdAt: new Date(),
    version: "3.2.1",
    rules: {},
    settings: {},
};

const completedGame: BackgammonGameCompleted = {
    id: "game-1",
    stateKind: "completed",
    players,
    board,
    cube,
    winner: {
        id: "player-1",
        userId: "user-1",
        color: "black",
        direction: "clockwise",
        dice: { stateKind: "rolled", id: "dice-1", color: "black", currentRoll: [1, 2], total: 3 },
        pipCount: 0,
        isRobot: false,
        stateKind: "winner",
    },
    createdAt: new Date(),
    version: "3.2.1",
    rules: {
        useCrawfordRule: false,
        useJacobyRule: false,
        useBeaverRule: false,
        useRaccoonRule: false,
        useMurphyRule: false,
        useHollandRule: false,
    },
    settings: {
        allowUndo: true,
        allowResign: true,
        allowDraw: true,
        autoPlay: false,
        showHints: false,
        showProbabilities: false,
    },
};

// Test union type
const game: BackgammonGame = rollingForStartGame;

// Test constants
const checkersPerPlayer: number = CHECKERS_PER_PLAYER;

// Test type guards
function isRollingForStart(game: BackgammonGame): game is BackgammonGameRollingForStart {
    return game.stateKind === "rolling-for-start";
}

function isCompleted(game: BackgammonGame): game is BackgammonGameCompleted {
    return game.stateKind === "completed";
}

// Test usage
if (isRollingForStart(game)) {
    // TypeScript knows this is BackgammonGameRollingForStart
    const gameId = game.id;
}

if (isCompleted(game)) {
    // TypeScript knows this is BackgammonGameCompleted
    const winner = game.winner;
}
