// Type definitions for satnav
// Project: https://github.com/f5io/satnav-js
// Definitions by: Christian Holm Diget <https://github.com/DotNetNerd>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare type Callback = () => void;

interface ISatnavOptions {
    html5?: boolean | undefined;
    force?: boolean | undefined;
    poll?: number | undefined;
    matchAll?: boolean | undefined;
}

interface INavigationOptions {
    path?: string | undefined;
    directions?: ((params: any) => any) | undefined;
    title?: string | Callback | undefined;
}

interface ISatnav {
    navigate(navigationOptions: INavigationOptions): ISatnav;
    otherwise(route: string): ISatnav;
    change(onChange: (hash: string, params: any, old: any) => any): ISatnav;
    go(): ISatnav;
}

declare function Satnav(options?: ISatnavOptions): ISatnav;
