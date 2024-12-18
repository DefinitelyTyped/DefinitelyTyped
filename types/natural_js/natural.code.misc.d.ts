declare namespace NCD {

    const enum SeverityLevels {
        BLOCKER = "Blocker",
        CRITICAL = "Critical",
        MAJOR = "Major",
        MINOR = "Minor"
    }

    type CodeInspectionResult = {
        level: SeverityLevels.BLOCKER | SeverityLevels.CRITICAL | SeverityLevels.MAJOR | SeverityLevels.MINOR;
        message: string;
        line: number;
        code: string;
    };

}
