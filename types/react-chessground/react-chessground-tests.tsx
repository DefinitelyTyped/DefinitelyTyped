import * as React from "react";
import Chessground from "react-chessground";

// @ts-expect-error
const fenIsString = <Chessground fen={1} />;
const fen = <Chessground fen="rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR" />;

// @ts-expect-error
const orientationMustBeWhiteOrBlack = <Chessground orientation="green" />;
const orientationWhite = <Chessground orientation="white" />;

// @ts-expect-error
const turnColorMustBeWhiteOrBlack = <Chessground turnColor="green" />;
const turnColor = <Chessground turnColor="white" />;

const checkCanBeTrueFalseOrColor = <Chessground check={true} />;

// @ts-expect-error
const lastMoveMustBeArray = <Chessground lastMove="a1" />;
const lastMove = <Chessground lastMove={["a1", "a2"]} />;

// @ts-expect-error
const selectedMustBeKey = <Chessground selected="x2" />;
const selected = <Chessground selected="a1" />;

// @ts-expect-error
const coordinatesMustBeBoolean = <Chessground coordinates="true" />;
const coordinates = <Chessground coordinates={true} />;

// @ts-expect-error
const autoCastleMustBeBoolean = <Chessground autoCastle="true" />;
const autoCastle = <Chessground autoCastle={true} />;

// @ts-expect-error
const viewOnlyMustBeBoolean = <Chessground viewOnly="true" />;
const viewOnly = <Chessground viewOnly={true} />;

// @ts-expect-error
const disableContextMenuMustBeBoolean = <Chessground disableContextMenu="true" />;
const disableContextMenu = <Chessground disableContextMenu={true} />;

// @ts-expect-error
const resizableMustBeBoolean = <Chessground resizable="true" />;
const resizable = <Chessground resizable={true} />;

// @ts-expect-error
const widthMustBeStringOrNumber = <Chessground width={true} />;
const width = <Chessground width="100%" />;

// @ts-expect-error
const heightMustBeStringOrNumber = <Chessground height={true} />;
const height = <Chessground height="100%" />;

const onMoveEvent = <Chessground onMove={(orig, dest) => {}} />;
const onChangeEvent = <Chessground onChange={() => {}} />;
const onSelectEvent = <Chessground onSelect={(key) => {}} />;
