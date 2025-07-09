import { BackgammonCheckerContainerPosition } from "./checkercontainer";
import { BackgammonColor } from "./game";

export interface BackgammonCheckerContainerImport {
    position: BackgammonCheckerContainerPosition;
    direction?: "clockwise" | "counterclockwise";
    checkers: {
        qty: number;
        color: BackgammonColor;
    };
}

export interface BackgammonBoardImports {
    clockwise: BackgammonCheckerContainerImport[];
    counterclockwise: BackgammonCheckerContainerImport[];
}
