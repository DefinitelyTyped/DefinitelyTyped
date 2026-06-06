declare class Platform {
    get_container(): any; // Window | NodeJS.Global | Phantom
    is_node(): boolean;
    is_browser(): boolean;
    is_phantom(): boolean;
    is_karma(): boolean;
}

export = Platform;
