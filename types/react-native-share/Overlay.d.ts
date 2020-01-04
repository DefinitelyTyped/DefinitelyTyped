import {Component, ReactNode } from 'react'
import { Animated, ViewProps ,StyleProp} from 'react-native'
export type OverlayState ={
  fadeAnim: Animated.Value
  overlayStyle: StyleProp<ViewProps>
}

export type OverlayProps = {
  visible: boolean,
  onCancel: ()=>void,
  children: ReactNode
}

declare class Overlay extends Component<OverlayProps, OverlayState>{
  onAnimatedEnd(): void;
  UNSAFE_componentWillReceiveProps(newProps: OverlayProps): void;
  render(): JSX.Element;
}

export default Overlay