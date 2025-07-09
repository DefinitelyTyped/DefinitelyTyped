import { BackgammonPlayer, BackgammonPlayers } from "./player";

export type BackgammonCubeValue = undefined | 2 | 4 | 8 | 16 | 32 | 64;
export const BackgammonCubeValues: BackgammonCubeValue[];
export type BackgammonCubeStateKind = "initialized" | "doubled" | "maxxed" | "offered";

export interface BaseCube {
    id: string;
    owner: BackgammonPlayer | undefined;
    value: BackgammonCubeValue | undefined;
    offeredBy?: BackgammonPlayer | undefined;
}

export interface Cube extends BaseCube {
    stateKind: BackgammonCubeStateKind;
}

export type BackgammonCubeInitialized = Cube & {
    stateKind: "initialized";
    owner: undefined;
    value: undefined;
    offeredBy?: undefined;
};

export type BackgammonCubeDoubled = Cube & {
    stateKind: "doubled";
    owner: BackgammonPlayer;
    value: BackgammonCubeValue;
    offeredBy?: undefined;
};

export type BackgammonCubeMaxxed = Cube & {
    stateKind: "maxxed";
    owner: undefined;
    value: 64;
    offeredBy?: undefined;
};

export type BackgammonCubeOffered = Cube & {
    stateKind: "offered";
    owner: BackgammonPlayer;
    value: BackgammonCubeValue;
    offeredBy: BackgammonPlayer;
};

export type BackgammonCube =
    | BackgammonCubeInitialized
    | BackgammonCubeDoubled
    | BackgammonCubeMaxxed
    | BackgammonCubeOffered;

export interface CubeProps {
    id?: string;
    stateKind?: BackgammonCubeStateKind;
    value?: BackgammonCubeValue;
    owner?: BackgammonPlayer;
}

export interface CubeClass {
    id: string;
    stateKind: BackgammonCubeStateKind;
    value: BackgammonCubeValue | undefined;
    owner: BackgammonPlayer | undefined;

    initialize: (cube?: CubeProps) => Cube;
    double: (
        cube: Cube,
        player: BackgammonPlayer,
        players: BackgammonPlayers
    ) => BackgammonCubeDoubled | BackgammonCubeMaxxed;
}
