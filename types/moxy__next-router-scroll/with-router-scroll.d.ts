import { Component, ExoticComponent, ForwardRefExoticComponent, ReactNode } from 'react';
import { RouterScrollContext } from './context';

export default withRouterScroll;
declare function withRouterScroll(WrappedComponent: ReactNode): ForwardRefExoticComponent<any>;
