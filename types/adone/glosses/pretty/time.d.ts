declare namespace adone.pretty {
    namespace I {
        interface TimeOptions {
            msDecimalDigits?: number;
            secDecimalDigits?: number;
            verbose?: boolean;
            compact?: boolean;
        }
    }
    function time(ms: number, options?: I.TimeOptions): string;
}
