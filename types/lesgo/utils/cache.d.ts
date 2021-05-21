export namespace cache {
    // Edit this xXLXx
    function ec(conn: string | null): any;
    function get(key: string): Promise<any>;
    function set(key: string, val: any, lifetime: number): Promise<boolean>;
    function del(key: string): Promise<boolean>;
}
