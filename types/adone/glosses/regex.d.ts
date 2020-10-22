declare namespace adone {
    namespace regex {
        function filename(): RegExp;

        namespace I.IP {
            interface Options {
                exact?: boolean;
            }
        }

        function ip(options?: I.IP.Options): RegExp;

        function ip4(options?: I.IP.Options): RegExp;

        function ip6(options?: I.IP.Options): RegExp;

        function protocol(): RegExp;

        function idn(): RegExp;

        function punycode(): RegExp;

        function uri(): RegExp;

        function uuid4(): RegExp;

        function uuid5(): RegExp;

        function ansi(): RegExp;

        function shebang(): RegExp;
    }
}
