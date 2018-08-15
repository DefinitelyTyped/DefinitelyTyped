declare namespace adone.system {
    namespace env {
        function user(): string;

        function prompt(): string;

        function hostname(): string;

        function tmpdir(): string;

        function home(): string;

        function path(): string;

        function editor(): string;

        function shell(): string;
    }
}
