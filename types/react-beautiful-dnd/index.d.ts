// Type definitions for react-beautiful-dnd 2.3.1
// Project: https://github.com/atlassian/react-beautiful-dnd.git
// Definitions by: varHarrie <https://github.com/varHarrie>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

declare module 'react-beautiful-dnd' {
    import * as React from 'react'

    export type Id = string

    export type DraggableId = Id

    export type DroppableId = Id

    export type TypeId = Id

    export type DraggableLocation = {
      droppableId: DroppableId
      index: number
    }

    /**
     *  DragDropContext
     */

    export type DragStart = {
      draggableId: DraggableId
      type: TypeId
      source: DraggableLocation
    }

    export type DropResult = {
      draggableId: DraggableId,
      type: TypeId
      source: DraggableLocation
      destination?: DraggableLocation
    }

    export interface IDragDropContextProps {
      onDragStart?: (initial: DragStart) => void
      onDragEnd: (result: DropResult) => void
    }

    export class DragDropContext extends React.Component<IDragDropContextProps> {}

    /**
     *  Droppable
     */

    export type DroppableProvided = {
      innerRef: (element: HTMLElement | null) => any
      placeholder?: React.ReactElement<any>
    }

    export type DroppableStateSnapshot = {
      isDraggingOver: boolean
    }

    export interface IDroppableProps {
      droppableId: DroppableId
      type?: TypeId
      isDropDisabled?: boolean
      direction?: 'vertical' | 'horizontal'
      children: (provided: DroppableProvided, snapshot: DroppableStateSnapshot) => React.ReactElement<any>
    }

    export class Droppable extends React.Component<IDroppableProps> {}

    /**
     *  Draggable
     */

    export type DraggableStyle = any

    export type DragHandleProps = {
      onMouseDown: (event: MouseEvent) => void
      onKeyDown: (event: KeyboardEvent) => void
      onClick: (event: MouseEvent) => void
      tabIndex: number
      'aria-grabbed': boolean
      draggable: boolean
      onDragStart: () => void
      onDrop: () => void
    }

    export type DraggableProvided = {
      innerRef: (element?: HTMLElement | null) => any
      draggableStyle?: DraggableStyle
      dragHandleProps?: DragHandleProps
      placeholder?: React.ReactElement<any>
    }

    export type DraggableStateSnapshot = {
      isDragging: boolean
    }

    export interface IDraggableProps {
      draggableId: DroppableId
      type?: TypeId
      isDragDisabled?: boolean
      children: (provided: DraggableProvided, snapshot: DraggableStateSnapshot) => React.ReactElement<any>
    }

    export class Draggable extends React.Component<IDraggableProps> {}
  }
