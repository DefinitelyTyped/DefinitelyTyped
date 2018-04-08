declare namespace adone {
    namespace regex {
        function filename(): RegExp;

        function ip4(): RegExp;

        function ip6(): RegExp;

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
