// Type definitions for sololearn 2.4
// Project: https://github.com/sololearnjs/sololearn#readme
// Definitions by: BedrockCoder <https://github.com/BedrockCoder>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// Minimum TypeScript Version: 3.7

/**
 * This will return a `Promise` that should resolve to the [`User`](https://github.com/sololearnjs/sololearn#user) object, which represents the user with the ID provided.
 * @param id The id of the user
 * @returns Data about the user
 */
export function getUser(id: number): Promise<User>;

/**
 * This will return a `Promise` that should resolve to a [`Leader`](https://github.com/sololearnjs/sololearn#leader) object,
 * which represents the leaderboard with the provided language, or the overall leaderboard.
 * @param lang The language to get the leaderboard data from
 * @returns The top ten users in the specified leaderboard, or overall
 */
export function getLeaderboard(lang?: string): Promise<Leader[]>;

/**
 * This will return a `Promise` that should resolve to a [`Code`](https://github.com/sololearnjs/sololearn#code) object which represents the code with the ID provided.
 * @param id The code's ID
 * @returns Data about the code
 */
export function getCode(id: string): Promise<Code>;

/**
 * This will return a `Promise` that should resolve to a [`Question`](https://github.com/sololearnjs/sololearn#question) object, which represents the question with the ID provided.
 * @param id The question's ID
 * @returns Data about the question
 */
export function getQuestion(id: number): Promise<Question>;

/** Data about a code */
export interface Code {
    /** The author's SoloLearn ID */
    author: number;
    /** The code's ID */
    id: string;
    /** The language the code is written in */
    language: 'c' | 'cpp' | 'cs' | 'java' | 'kt' | 'node' | 'php' | 'py' | 'rb' | 'swift' | 'web';
    /** The date of the last modification made to the code, or `null` if it is unknown */
    lastModified: Date | null;
    /** The name of the code */
    name: string;
    /** `true` if the code is public, `false` if it is private */
    public: boolean;
    /** The amount of upvotes the code has */
    upvotes: number;
}

/** A status (e.g. Bronze, Silver, etc.) */
export type Status = 'Bronze' | 'Silver' | 'Gold' | 'Platinum' | null;

/** A SoloLearn badge */
export type Badge = 'Achiever' | 'Answerer' | 'Asker' | 'BTS Streak Finisher' | 'Challenge Master' | 'Code Master' | 'Code Ninja' | 'Coder' | 'Comment Master'
    | 'Contributor' | 'Course Master' | 'Creator' | 'Creator Master' | 'Developer' | 'Engaged in!' | 'Epic!' | 'Gaining Experience' | 'Gold Moderator' | 'Gold Quiz Reviewer'
    | 'Good Answer' | 'Good Citizen' | 'Good Question' | 'Great Answer' | 'Great Question' | 'Guru' | 'Hat Trick' | 'Illuminator' | 'Intern' | 'Junior'
    | 'Just Getting Started' | 'Master' | 'Moderator' | 'On Your Way to Fame' | 'Platinum Moderator' | 'Popular Answer' | 'Popular Question' | 'Practice Makes Perfect' | 'Question Guru'
    | 'Question Master' | 'Question Ninja' | 'Quiz Creator' | 'Quiz Creator Master' | 'Quiz Reviewer' | 'Respect!' | 'Respected Citizen' | 'Rising Star' | 'Self-Learner' | 'Senior Developer'
    | 'Solution Guru' | 'Solution Master' | 'Solution Ninja' | 'Solver' | 'Teacher' | 'The Player' | 'Top Answer' | 'Top Question' | 'Unbeatable!' | 'Unstoppable'
    | 'Verified Account';

/** The name of a course on SoloLearn */
export type CourseName = 'Angular + NestJS' | 'C Tutorial' | 'C++ Tutorial' | 'C# Tutorial' | 'CSS Fundamentals' | 'Data Science with Python' | 'HTML Fundamentals' | 'Java Tutorial'
    | 'jQuery Tutorial' | 'JavaScript Tutorial' | 'Machine Learning' | 'PHP Tutorial' | 'Python 3 Tutorial' | 'Ruby Tutorial' | 'React + Redux' | 'SQL Fundamentals' | 'Swift 4 Fundamentals';

/** Data about a course for a user */
export interface Course {
    /** The level the user is on for that course */
    level: number;
    /** The status of the user for that course */
    status: Status;
    /** The amount of XP the user has in that course */
    xp: number;
}

/** Data about a user */
export interface User {
    /**
     * An array of the user's badges where each badge is a `string`.
     * The array is sorted by when the user recieved the badge, the last item in the array is the first badge they got, the first item in the array is their latest badge
     */
    badges: Badge[];
    /** An array of the user's certificates, where each certificate is a `string` which is the name of the course the certificate is associated to */
    certificates: CourseName[];
    /** An array of the user's codes ordered descendingly by the number of upvotes the code has, this will only return public codes */
    codes: Code[];
    /** An object where the property is the name of the course (see all course names [here](https://github.com/sololearnjs/sololearn#coursename)) */
    courses: {
        /** The name of the course */
        [course: string]: Course;
    };
    /** The user's ID */
    id: number;
    /** The level the user is on */
    level: number;
    /** The user's name */
    name: string;
    /** The user's overall status */
    status: Status;
    /** The amount of XP the user has */
    xp: number;
}

/** A user on a leaderboard */
export interface Leader {
    /** The user's ID */
    id: number;
    /** The level the user is on for the specified course or overall */
    level: number;
    /** The user's name */
    name: string;
    /** The user's rank on the leaderboard (`1` - `10`) */
    rank: number;
    /** The status of the user for the specified course or overall */
    status: Status;
    /** The amount of XP the user has in the specified course or overall */
    xp: number;
}

/** An answer to a question in the Discuss section */
export interface Answer {
    /** The author's SoloLearn ID */
    author: number;
    /** The content of the answer */
    content: string;
    /** The date the answer was written */
    date: Date;
    /** The amount of upvotes the answer has */
    upvotes: number;
}

/** A question in the Discuss section */
export interface Question {
    /** An array of the top 20 answers to the question, sorted by upvotes. This does not include the best answer */
    answers: Answer[];
    /** The author's SoloLearn ID */
    author: number;
    /** The answer that is marked as best, or `null` if there is no best answer */
    bestAnswer: Answer | null;
    /** The content of the question */
    content: string;
    /** The date the question was written */
    date: Date;
    /** The question's ID */
    id: number;
    /** The tags that the question has */
    tags: string[];
    /** The title of the question */
    title: string;
    /** The amount of upvotes the question has */
    upvotes: number;
}
