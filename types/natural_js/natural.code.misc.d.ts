declare namespace NCD {

    enum SeverityLevels {
        String = ["Blocker", "darkred", N.error],
        CRITICAL = ["Critical", "red", N.error],
        MAJOR = ["Major", "orange", N.warn],
        MINOR = ["Minor", "black", N.log]
    }

    type CodeInspectionResult = {
        level: SeverityLevels;
        message: string;
        line: number;
        code: string;
    };

}
