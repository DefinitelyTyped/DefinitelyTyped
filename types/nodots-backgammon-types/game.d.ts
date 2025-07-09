import { BackgammonBoard } from "./board";
import { BackgammonMoveOrigin } from "./checkercontainer";
import { BackgammonCube } from "./cube";
import { BackgammonPlay, BackgammonPlayDoubled, BackgammonPlayMoving, BackgammonPlayRolled } from "./play";
import {
    BackgammonPlayer,
    BackgammonPlayerActive,
    BackgammonPlayerDoubled,
    BackgammonPlayerInactive,
    BackgammonPlayerMoving,
    BackgammonPlayerRolled,
    BackgammonPlayerRolledForStart,
    BackgammonPlayerRolling,
    BackgammonPlayerWinner,
    BackgammonPlayers,
} from "./player";

export type Latitude = "north" | "south";
export type Longitude = "east" | "west";
export type BackgammonColor = "black" | "white";
export type BackgammonMoveDirection = "clockwise" | "counterclockwise";

export const CHECKERS_PER_PLAYER = 15;

export type BackgammonGameStateKind =
    | "rolling-for-start"
    | "rolled-for-start"
    | "rolling"
    | "rolled"
    | "preparing-move"
    | "doubling"
    | "doubled"
    | "moving"
    | "moved"
    | "completed";

export interface BackgammonGameMetadata {
    title?: string;
    description?: string;
    tags?: string[];
    isPublic?: boolean;
    isRanked?: boolean;
    tournamentId?: string;
    roundNumber?: number;
    matchNumber?: number;
}

export interface BackgammonGameStatistics {
    totalMoves: number;
    totalRolls: number;
    totalDoubles: number;
    averageMoveTime: number;
    longestMoveTime: number;
    shortestMoveTime: number;
    pipCountHistory: Array<{
        turn: number;
        black: number;
        white: number;
    }>;
    cubeHistory: Array<{
        turn: number;
        value: number;
        offeredBy: BackgammonColor;
        accepted: boolean;
    }>;
}

export interface BackgammonGameTiming {
    timeLimit?: number;
    timePerMove?: number;
    timeRemaining: {
        black: number;
        white: number;
    };
    lastMoveTime?: Date;
    averageTimePerTurn: number;
}

export interface BaseGame {
    id: string;
    players: BackgammonPlayers;
    board: BackgammonBoard;
    cube: BackgammonCube;
    asciiBoard?: string;
    winner?: BackgammonPlayer;
    activeColor?: BackgammonColor;
    activePlay?: BackgammonPlay;
    activePlayer?: BackgammonPlayer;
    inactivePlayer?: BackgammonPlayer;
    createdAt: Date;
    startTime?: Date;
    lastUpdate?: Date;
    endTime?: Date;
    metadata?: BackgammonGameMetadata;
    statistics?: BackgammonGameStatistics;
    timing?: BackgammonGameTiming;
    version: string;
    rules: {
        useCrawfordRule?: boolean;
        useJacobyRule?: boolean;
        useBeaverRule?: boolean;
        useRaccoonRule?: boolean;
        useMurphyRule?: boolean;
        useHollandRule?: boolean;
    };
    settings: {
        allowUndo?: boolean;
        allowResign?: boolean;
        allowDraw?: boolean;
        autoPlay?: boolean;
        showHints?: boolean;
        showProbabilities?: boolean;
    };
}

export interface Game extends BaseGame {
    stateKind: BackgammonGameStateKind;
}

export type BackgammonGameRollingForStart = Game & {
    stateKind: "rolling-for-start";
};

export type BackgammonGameRolledForStart = Game & {
    stateKind: "rolled-for-start";
    activeColor: BackgammonColor;
    activePlayer: BackgammonPlayerRolledForStart;
    inactivePlayer: BackgammonPlayerInactive;
};

export type BackgammonGameRolling = Game & {
    stateKind: "rolling";
    activeColor: BackgammonColor;
    activePlayer: BackgammonPlayerRolling;
    inactivePlayer: BackgammonPlayerInactive;
};

export type BackgammonGameRolled = Game & {
    stateKind: "rolled";
    activeColor: BackgammonColor;
    activePlayer: BackgammonPlayerRolled;
    inactivePlayer: BackgammonPlayerInactive;
    activePlay: BackgammonPlayRolled;
};

export type BackgammonGamePreparingMove = Game & {
    stateKind: "preparing-move";
    activeColor: BackgammonColor;
    activePlayer: BackgammonPlayerRolled;
    inactivePlayer: BackgammonPlayerInactive;
    activePlay: BackgammonPlayRolled;
};

export type BackgammonGameDoubling = Game & {
    stateKind: "doubling";
    activeColor: BackgammonColor;
    activePlay: BackgammonPlayDoubled;
    activePlayer: BackgammonPlayerDoubled;
    inactivePlayer: BackgammonPlayerInactive;
};

export type BackgammonGameDoubled = Game & {
    stateKind: "doubled";
    activeColor: BackgammonColor;
    activePlay: BackgammonPlayDoubled;
    activePlayer: BackgammonPlayerDoubled;
    inactivePlayer: BackgammonPlayerInactive;
};

export type BackgammonGameMoving = Game & {
    stateKind: "moving";
    activeColor: BackgammonColor;
    activePlay: BackgammonPlayMoving;
    activePlayer: BackgammonPlayerMoving;
    inactivePlayer: BackgammonPlayerInactive;
};

export type BackgammonGameMoved = Game & {
    stateKind: "moved";
    activeColor: BackgammonColor;
    activePlay: BackgammonPlayMoving;
    activePlayer: BackgammonPlayerMoving;
    inactivePlayer: BackgammonPlayerInactive;
};

export type BackgammonGameCompleted = Game & {
    stateKind: "completed";
    winner: BackgammonPlayerWinner;
};

export type BackgammonGame =
    | BackgammonGameRollingForStart
    | BackgammonGameRolledForStart
    | BackgammonGameRolling
    | BackgammonGameRolled
    | BackgammonGamePreparingMove
    | BackgammonGameDoubled
    | BackgammonGameMoving
    | BackgammonGameMoved
    | BackgammonGameCompleted;

export interface GameProps {
    players: BackgammonPlayers;
    board?: BackgammonBoard;
    cube?: BackgammonCube;
}

export interface GameClass {
    id: string;
    stateKind: BackgammonGameStateKind;
    players: BackgammonPlayers;
    board: BackgammonBoard;
    cube: BackgammonCube;
    activeColor: BackgammonColor;
    activePlay: BackgammonPlay;
    activePlayer: BackgammonPlayerActive;
    inactivePlayer: BackgammonPlayerInactive;
    metadata?: BackgammonGameMetadata;
    statistics?: BackgammonGameStatistics;
    timing?: BackgammonGameTiming;
    version: string;
    rules: {
        useCrawfordRule?: boolean;
        useJacobyRule?: boolean;
        useBeaverRule?: boolean;
        useRaccoonRule?: boolean;
        useMurphyRule?: boolean;
        useHollandRule?: boolean;
    };
    settings: {
        allowUndo?: boolean;
        allowResign?: boolean;
        allowDraw?: boolean;
        autoPlay?: boolean;
        showHints?: boolean;
        showProbabilities?: boolean;
    };

    initialize: (
        players: BackgammonPlayers,
        id?: string,
        stateKind?: BackgammonGameStateKind,
        board?: BackgammonBoard,
        cube?: BackgammonCube,
        activePlay?: BackgammonPlay,
        activeColor?: BackgammonColor,
        activePlayer?: BackgammonPlayerActive,
        inactivePlayer?: BackgammonPlayerInactive,
        origin?: BackgammonMoveOrigin,
        metadata?: BackgammonGameMetadata,
        statistics?: BackgammonGameStatistics,
        timing?: BackgammonGameTiming,
        version?: string,
        rules?: {
            useCrawfordRule?: boolean;
            useJacobyRule?: boolean;
            useBeaverRule?: boolean;
            useRaccoonRule?: boolean;
            useMurphyRule?: boolean;
            useHollandRule?: boolean;
        },
        settings?: {
            allowUndo?: boolean;
            allowResign?: boolean;
            allowDraw?: boolean;
            autoPlay?: boolean;
            showHints?: boolean;
            showProbabilities?: boolean;
        }
    ) => BackgammonGame;
    rollForStart: (game: BackgammonGameRollingForStart) => BackgammonGameRolledForStart;
    roll: (game: BackgammonGameRolledForStart) => BackgammonGameRolled;
    prepareMove: (game: BackgammonGameRolled) => BackgammonGamePreparingMove;
    toMoving: (game: BackgammonGamePreparingMove | BackgammonGameDoubled) => BackgammonGameMoving;
    toDoubling: (game: BackgammonGamePreparingMove) => BackgammonGameDoubling;
    double: (game: BackgammonGameDoubling) => BackgammonGameDoubled;
    move: (game: BackgammonGameMoving | BackgammonGameRolled, origin: BackgammonMoveOrigin) => BackgammonGameMoved;
    getActivePlayer: (game: BackgammonGame) => BackgammonPlayerActive;
    getInactivePlayer: (game: BackgammonGame) => BackgammonPlayerInactive;
    getPlayersForColor: (
        players: BackgammonPlayers,
        color: BackgammonColor
    ) => [BackgammonPlayerActive, BackgammonPlayerInactive];
    sanityCheckMovingGame: (game: BackgammonGame) => BackgammonGameMoving | false;
}
