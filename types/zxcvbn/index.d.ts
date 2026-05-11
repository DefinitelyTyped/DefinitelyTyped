declare function zxcvbn(password: string, userInputs?: string[]): zxcvbn.ZXCVBNResult;

export = zxcvbn;

declare namespace zxcvbn {
    interface ZXCVBNResult {
        /**
         * estimated guesses needed to crack password
         */
        guesses: number;

        /**
         * order of magnitude of result.guesses
         */
        guesses_log10: number;

        /**
         * dictionary of back-of-the-envelope crack time
         * estimations, in seconds, based on a few scenarios.
         */
        crack_times_seconds: ZXCVBNAttackTime;

        /**
         * same keys as result.crack_times_seconds,
         * with friendlier display string values:
         * "less than a second", "3 hours", "centuries", etc.
         */
        crack_times_display: ZXCVBNAttackTime;

        /**
         * Integer from 0-4 (useful for implementing a strength bar):
         * 0 too guessable: risky password. (guesses < 10^3)
         * 1 very guessable: protection from throttled online attacks. (guesses < 10^6)
         * 2 somewhat guessable: protection from unthrottled online attacks. (guesses < 10^8)
         * 3 safely unguessable: moderate protection from offline slow-hash scenario. (guesses < 10^10)
         * 4 very unguessable: strong protection from offline slow-hash scenario. (guesses >= 10^10)
         */
        score: ZXCVBNScore;

        /**
         * verbal feedback to help choose better passwords. set when score <= 2.
         */
        feedback: ZXCVBNFeedback;

        /**
         * the list of patterns that zxcvbn based the
         * guess calculation on.
         */
        sequence: ZXCVBNSequence[];

        /**
         * how long it took zxcvbn to calculate an answer,
         * in milliseconds.
         */
        calc_time: number;
    }

    type ZXCVBNScore = 0 | 1 | 2 | 3 | 4;

    interface ZXCVBNAttackTime {
        /**
         * online attack on a service that ratelimits password auth attempts.
         */
        online_throttling_100_per_hour: string | number;

        /**
         * online attack on a service that doesn't ratelimit,
         * or where an attacker has outsmarted ratelimiting.
         */
        online_no_throttling_10_per_second: string | number;

        /**
         * offline attack. assumes multiple attackers,
         * proper user-unique salting, and a slow hash function
         * w/ moderate work factor, such as bcrypt, scrypt, PBKDF2.
         */
        offline_slow_hashing_1e4_per_second: string | number;

        /**
         * offline attack with user-unique salting but a fast hash
         * function like SHA-1, SHA-256 or MD5. A wide range of
         * reasonable numbers anywhere from one billion - one trillion
         * guesses per second, depending on number of cores and machines.
         * ballparking at 10B/sec.
         */
        offline_fast_hashing_1e10_per_second: string | number;
    }

    interface ZXCVBNFeedback {
        /**
         * explains what's wrong, eg. 'this is a top-10 common password'.
         * not always set -- sometimes an empty string
         */
        warning: ZXCVBNFeedbackWarning;

        /**
         * a possibly-empty list of suggestions to help choose a less
         * guessable password. eg. 'Add another word or two'
         */
        suggestions: string[];
    }

    type ZXCVBNFeedbackWarning =
        | "Straight rows of keys are easy to guess"
        | "Short keyboard patterns are easy to guess"
        | "Use a longer keyboard pattern with more turns"
        | "Repeats like \"aaa\" are easy to guess"
        | "Repeats like \"abcabcabc\" are only slightly harder to guess than \"abc\""
        | "Sequences like abc or 6543 are easy to guess"
        | "Recent years are easy to guess"
        | "Dates are often easy to guess"
        | "This is a top-10 common password"
        | "This is a top-100 common password"
        | "This is a very common password"
        | "This is similar to a commonly used password"
        | "A word by itself is easy to guess"
        | "Names and surnames by themselves are easy to guess"
        | "Common names and surnames are easy to guess"
        | "";

    interface ZXCVBNSequence {
        /**
         * if sequence is ascending.
         */
        ascending: boolean;

        /**
         * the base number of guesses.
         */
        base_guesses: number;

        /**
         * the base match to relate to.
         */
        base_matches: string;

        /**
         * the base token to relate to.
         */
        base_token: string;

        /**
         * the dictionary this sequence was found in.
         */
        dictionary_name: string;

        /**
         * estimated guesses needed to crack sequence.
         */
        guesses: number;

        /**
         * order of magnitude of guesses.
         */
        guesses_log10: number;

        /**
         * sequence index.
         */
        i: number;

        /**
         * sequence section number.
         */
        j: number;

        /**
         * is part of l33t speak.
         */
        l33t: boolean;

        /**
         * how many variations of l33t speak.
         */
        l33t_variations: number;

        /**
         * the word that was matched in dictionary.
         */
        matched_word: string;

        /**
         * what type of pattern the sequence contains.
         */
        pattern: string;

        /**
         * the rank of the sequence in the dictionary.
         */
        rank: number;

        /**
         * how many times the sequence is repeated.
         */
        repeat_count: number;

        /**
         * is reveresed.
         */
        reversed: boolean;

        /**
         * what type of sequence it is.
         */
        sequence_name: string;

        /**
         * how much space the sequence has left.
         */
        sequence_space: number;

        /**
         * the token the sequence is based off.
         */
        token: string;

        /**
         * uppercase variations of the token.
         */
        uppercase_variations: number;
    }
}
