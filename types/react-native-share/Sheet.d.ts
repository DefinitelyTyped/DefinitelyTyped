import {Component, ReactNode } from 'react'
import { Animated, ViewProps } from 'react-native'

export type SheetProps = {
  visible: boolean,
  children: ReactNode
}

export type SheetState ={
  bottom: Animated.Value
  }

declare class Sheet extends Component<SheetProps, SheetState>{
  UNSAFE_componentWillReceiveProps(newProps: SheetProps): void;
  render(): JSX.Element;
}

export default Sheet