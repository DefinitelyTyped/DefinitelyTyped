// Type definitions for react-native-draggable-flatlist 1.1
// Project: https://github.com/computerjazz/react-native-draggable-flatlist#readme
// Definitions by: Stack Builders <https://github.com/stackbuilders>
//                 Esteban Ibarra <https://github.com/ibarrae>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

import { VirtualizedListWithoutRenderItemProps } from "react-native";
import { Component } from "react";

export interface RenderItemInfo<ItemR> {
  item: ItemR;
  index: number;
  move: () => void;
  moveEnd: () => void;
  isActive: boolean;
}

export interface OnMoveEndInfo<ItemM> {
  data: ReadonlyArray<ItemM> | null;
  to: number;
  from: number;
  row: ItemM;
}

interface DraggableFlatListProps<Item> extends VirtualizedListWithoutRenderItemProps<Item> {
  /**
   * Items to be rendered.
   */
  data: ReadonlyArray<Item> | null;

  /**
   *  Function that returns updated ordering of data
   */
  onMoveEnd?: (info: OnMoveEndInfo<Item>) => void;

  /**
   * Function that is called when row becomes active.
   */
  onMoveBegin?: (index: number) => void;

  /**
   * Sets where scrolling begins.
   *
   * Default is 5
   */
  scrollPercent?: number;

  /**
   * Function that calls move when the row should become active (in an onPress, onLongPress, etc). Calls moveEnd when the gesture is complete (in onPressOut).
   */
  renderItem: (info: RenderItemInfo<Item>) => React.ReactElement | null;
}

declare class DraggableFlatList<Item> extends Component<DraggableFlatListProps<Item>> {
  constructor(props: DraggableFlatListProps<Item>);
}

export default DraggableFlatList;
