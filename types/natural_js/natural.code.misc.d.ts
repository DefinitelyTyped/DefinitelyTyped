declare namespace NCD {
    /* eslint-disable-next-line @definitelytyped/no-const-enum */
    const enum SeverityLevels {
        BLOCKER = "Blocker",
        CRITICAL = "Critical",
        MAJOR = "Major",
        MINOR = "Minor",
    }

    interface CodeInspectionResult {
        level: SeverityLevels.BLOCKER | SeverityLevels.CRITICAL | SeverityLevels.MAJOR | SeverityLevels.MINOR;
        message: string;
        line: number;
        code: string;
    }
}
