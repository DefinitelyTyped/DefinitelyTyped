declare function htmlescape(o: any): string;
declare namespace htmlescape {
    function sanitize(s: string): string;
}

export = htmlescape;
export as namespace htmlescape;
