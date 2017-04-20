declare module 'react-router-native' {                           
    import {Component} from 'react';
    import * as H from 'history';
    
    export interface LinkProps {                                 
        component?: any;                                         
        replace?: boolean;                                           
        to?: string|H.Location;                                                
    }                                                            
    
    export class Link extends Component<LinkProps, any> {
        render(): JSX.Element;                                   
    
    }                                                            
    
	export interface NativeRouterProps {
        initialEntries?: Array<any>;
        initialIndex?: number;
        getUserConfirmation?: (message: string, callback?: (ok: boolean) => void) => any;
        keyLength?: number;
        children?: any;
    }

    export function NativeRouter(props: NativeRouterProps): JSX.Element;

    export class AndroidBackButton extends Component<void, void> { }

    export class DeepLinking extends Component<void, void> { }
}                                                                
