export = spfParse;

declare namespace spfParse {
    /** Qualifer prefix characters */
    type Prefix = "+" | "-" | "~" | "?" | "v";

    /** Prefix descriptions */
    interface PrefixDescriptions {
        "+": "Pass";
        "-": "Fail";
        "~": "SoftFail";
        "?": "Neutral";
        v?: string;
    }

    /** A single parsed SPF mechanism */
    interface Mechanism {
        /** Mechanism type, e.g. 'ip4', 'mx', 'all' */
        type: string;

        /** Optional value associated with the mechanism (domain, IP, etc.) */
        value?: string;

        /** The qualifier prefix */
        prefix: Prefix;

        /** Human-readable description of the prefix */
        prefixdesc?: string;

        /** Human-readable description of the mechanism */
        description?: string;
    }

    /** Parse message (warning or error) */
    interface ParseMessage {
        /** Text of the message */
        message: string;

        /** Message type: error or warning */
        type: "error" | "warning";
    }

    /** Result of parsing a single SPF record */
    interface ParseResult {
        /** Parsed mechanisms */
        mechanisms: Mechanism[];

        /** Validation messages */
        messages?: ParseMessage[];

        /** True if record parsed successfully */
        valid: boolean;
    }

    /** Error thrown by mechanism validators */
    class MechanismError extends Error {
        /** Error type */
        type: "warning" | "error";
        constructor(message: string, type?: "warning" | "error");
    }

    /**
     * Parse a single SPF term (e.g. "+ip4:192.0.2.0/24")
     * @param term SPF term string
     * @param messages Message array to push validation errors/warnings into
     * @returns Parsed mechanism record
     */
    function parseTerm(term: string, messages: ParseMessage[]): Mechanism;
}

/**
 * Parse a full SPF record string (e.g. "v=spf1 include:some.sender.org -all")
 * @param record SPF record string
 * @returns Structured parse result
 */
declare function spfParse(record: string): spfParse.ParseResult;
