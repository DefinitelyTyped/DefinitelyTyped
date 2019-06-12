// Type definitions for zxcvbn 4.4
// Project: https://github.com/dropbox/zxcvbn#readme
// Definitions by: Matt Traynham <https://github.com/mtraynham>
//                 Martin Trobäck <https://github.com/lekoaf>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export as namespace zxcvbn;

export = zxcvbn;

declare function zxcvbn(password: string, userInputs?: string[]): zxcvbn.ZXCVBNResult;

declare namespace zxcvbn {
    type ZXCVBNFeedbackWarnings = '' | 'Straight rows of keys are easy to guess' | 'Short keyboard patterns are easy to guess' |
        'Repeats like "aaa" are easy to guess' | 'Repeats like "abcabcabc" are only slightly harder to guess than "abc"' |
        'Sequences like abc or 6543 are easy to guess' | 'Recent years are easy to guess' | 'Dates are often easy to guess' |
        'This is a top-10 common password' | 'This is a top-100 common password' | 'This is a very common password' |
        'This is similar to a commonly used password' | 'A word by itself is easy to guess' | 'Names and surnames by themselves are easy to guess' |
        'Common names and surnames are easy to guess';

    type ZXCVBNFeedbackSuggestions = 'Use a few words, avoid common phrases' | 'No need for symbols, digits, or uppercase letters' |
        'Add another word or two. Uncommon words are better.' | 'Use a longer keyboard pattern with more turns' | 'Avoid repeated words and characters' |
        'Avoid sequences' | 'Avoid recent years' | 'Avoid years that are associated with you' | 'Avoid dates and years that are associated with you' |
        'Capitalization doesn\'t help very much' | 'All-uppercase is almost as easy to guess as all-lowercase' | 'Reversed words aren\'t much harder to guess' |
        'Predictable substitutions like \'@\' instead of \'a\' don\'t help very much' | undefined;

    interface ZXCVBNResult {
        /**
         * Estimated number of guesses needed to crack the password
         */
        guesses: number;

        /**
         * Order of magnitude of result.guesses
         */
        guesses_log10: number;

        /**
         * Dictionary of back-of-the-envelope crack time
         * estimations, in seconds, based on a few scenarios.
         */
        crack_times_seconds: ZXCVBNAttackTime;

        /**
         * Same keys as result.crack_times_seconds,
         * with friendlier display string values:
         * "less than a second", "3 hours", "centuries", etc.
         */
        crack_times_display: ZXCVBNAttackTime;

        /**
         * Integer from 0-4 (useful for implementing a strength bar):
         *
         * 0 - Too guessable: risky password. (guesses < 10^3)
         *
         * 1 - Very guessable: protection from throttled online attacks. (guesses < 10^6)
         *
         * 2 - Somewhat guessable: protection from unthrottled online attacks. (guesses < 10^8)
         *
         * 3 - Safely unguessable: moderate protection from offline slow-hash scenario. (guesses < 10^10)
         *
         * 4 - Very unguessable: strong protection from offline slow-hash scenario. (guesses >= 10^10)
         */
        score: ZXCVBNScore;

        /**
         * Verbal feedback to help choose better passwords. set when score <= 2.
         */
        feedback: ZXCVBNFeedback;

        /**
         * The list of patterns that zxcvbn based the
         * guess calculation on.
         */
        sequence: ZXCVBNSequence[];

        /**
         * How long it took zxcvbn to calculate an answer, in milliseconds.
         */
        calc_time: number;
    }

    type ZXCVBNScore = 0 | 1 | 2 | 3 | 4;

    interface ZXCVBNAttackTime {
        /**
         * Online attack on a service that ratelimits password auth attempts.
         */
        online_throttling_100_per_hour: string | number;

        /**
         * Online attack on a service that doesn't ratelimit,
         * or where an attacker has outsmarted ratelimiting.
         */
        online_no_throttling_10_per_second: string | number;

        /**
         * Offline attack. Assumes multiple attackers,
         * proper user-unique salting, and a slow hash function
         * w/ moderate work factor, such as bcrypt, scrypt, PBKDF2.
         */
        offline_slow_hashing_1e4_per_second: string | number;

        /**
         * Offline attack with user-unique salting but a fast hash
         * function like SHA-1, SHA-256 or MD5. A wide range of
         * reasonable numbers anywhere from one billion - one trillion
         * guesses per second, depending on number of cores and machines.
         * Ballparking at 10B/sec.
         */
        offline_fast_hashing_1e10_per_second: string | number;
    }

    interface ZXCVBNFeedback {
        /**
         * Explains what's wrong, eg. 'this is a top-10 common password'.
         * Not always set -- sometimes an empty string
         */
        warning: ZXCVBNFeedbackWarnings;

        /**
         * A possibly-empty list of suggestions to help choose a less
         * guessable password. eg. 'Add another word or two'
         */
        suggestions: ZXCVBNFeedbackSuggestions[];
    }

    interface ZXCVBNSequence {
        /**
         * If sequence is ascending.
         */
        ascending: boolean;

        /**
         * The base number of guesses.
         */
        base_guesses: number;

        /**
         * The base match to relate to.
         */
        base_matches: string;

        /**
         * The base token to relate to.
         */
        base_token: string;

        /**
         * The dictionary this sequence was found in.
         */
        dictionary_name: string;

        /**
         * Estimated guesses needed to crack sequence.
         */
        guesses: number;

        /**
         * Order of magnitude of guesses.
         */
        guesses_log10: number;

        /**
         * Sequence index.
         */
        i: number;

        /**
         * Sequence section number.
         */
        j: number;

        /**
         * Is part of l33t speak.
         */
        l33t: boolean;

        /**
         * How many variations of l33t speak.
         */
        l33t_variations: number;

        /**
         * The word that was matched in dictionary.
         */
        matched_word: string;

        /**
         * What type of pattern the sequence contains.
         */
        pattern: string;

        /**
         * The rank of the sequence in the dictionary.
         */
        rank: number;

        /**
         * How many times the sequence is repeated.
         */
        repeat_count: number;

        /**
         * Is reveresed.
         */
        reversed: boolean;

        /**
         * What type of sequence it is.
         */
        sequence_name: string;

        /**
         * How much space the sequence has left.
         */
        sequence_space: number;

        /**
         * The token the sequence is based off.
         */
        token: string;

        /**
         * Uppercase variations of the token.
         */
        uppercase_variations: number;
    }
}
