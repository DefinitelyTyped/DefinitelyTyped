// Type definitions for stoppable 1.0
// Project: https://github.com/hunterloftis/stoppable
// Definitions by: Eric Byers <https://github.com/EricByers>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare function stoppable(server:http.Server, grace?:number) => http.Server;

export = stoppable;
