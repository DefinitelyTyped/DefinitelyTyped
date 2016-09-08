// Type definitions for satnav
// Project: https://github.com/f5io/satnav-js
// Definitions by: Christian Holm Diget <https://github.com/DotNetNerd>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare type Callback = () => void;

interface ISatnavOptions {
    html5?: boolean,
    force?: boolean,
    poll?: number,
    matchAll?: boolean
}

interface INavigationOptions {
    path?: string,
    directions?: (params : any) => any,
    title?: string | Callback
}

interface ISatnav {
    navigate(navigationOptions: INavigationOptions): ISatnav;
    otherwise(route: string): ISatnav;
    change(onChange: (hash: string, params: any, old: any) => any): ISatnav;
    go(): ISatnav;
}

declare function Satnav(options?: ISatnavOptions): ISatnav;