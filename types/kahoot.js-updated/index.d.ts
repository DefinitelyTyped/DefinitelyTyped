/// <reference types="node" />

import EventEmitter = require("events");
import { RequestOptions } from "http";
import WebSocket = require("ws");

import LiveTwoStepAnswer = require("./src/assets/LiveTwoStepAnswer");
import LiveClientHandshake = require("./src/assets/LiveClientHandshake");
import LiveJoinPacket = require("./src/assets/LiveJoinPacket");
import LiveJoinTeamPacket = require("./src/assets/LiveJoinTeamPacket");
import LiveLeavePacket = require("./src/assets/LiveLeavePacket");
import LiveBaseMessage = require("./src/assets/LiveBaseMessage");

declare namespace Kahoot {
    interface KahootOptions {
        /**
         * Options used in Challenge quizzes
         */
        options?:
            | {
                ChallengeAutoContinue?: boolean | undefined;
                ChallengeGetFullScore?: boolean | undefined;
                ChallengeAlwaysCorrect?: boolean | undefined;
                ChallengeUseStreakBonus?: boolean | undefined;
                ChallengeWaitForInput?: boolean | undefined;
                ChallengeScore?: number | null | undefined;
            }
            | undefined;
        /**
         * Modules to load or not to load. All are enabled by default
         */
        modules?:
            | {
                extraData?: boolean | undefined;
                feedback?: boolean | undefined;
                gameReset?: boolean | undefined;
                quizStart?: boolean | undefined;
                quizEnd?: boolean | undefined;
                podium?: boolean | undefined;
                timeOver?: boolean | undefined;
                reconnect?: boolean | undefined;
                questionReady?: boolean | undefined;
                questionStart?: boolean | undefined;
                questionEnd?: boolean | undefined;
                nameAccept?: boolean | undefined;
                teamAccept?: boolean | undefined;
                teamTalk?: boolean | undefined;
                backup?: boolean | undefined;
                answer?: boolean | undefined;
            }
            | undefined;

        proxy?: ((options: RequestOptions) => void | RequestOptions) | undefined;
        wsproxy?: ((url: string) => WsProxyReturn) | undefined;
    }

    /** Returned by wsproxy on KahootOptions */
    interface WsProxyReturn {
        address: string;
        protocols?: string[] | undefined;
        options?: WebSocket.ClientOptions | undefined;
    }

    interface LiveEventTimetrack {
        id: string;
        channel: string;
        ext: {
            /** Unix timestamp when the server received the message */
            timetrack: number;
        };
        /** Whether the request was successful */
        successful: boolean;
    }

    interface QuizVideo {
        startTime: number;
        endTime: number;
        service: string;
        fullUrl: string;
    }

    interface QuizInfo extends QuizStart {
        currentQuestion: QuestionReady;
    }

    interface JoinResponse {
        twoFactorAuth: boolean;
        namerator: boolean;
        participantId: boolean;
        smartPractice: boolean;
        collaborations: boolean;
        liveGameId: string;
        /** JavaScript code to evaluate and reply back to Kahoot with */
        challenge: string;
    }

    type GameBlockType = string;
    type GameBlockLayout = string;

    interface NameAccept {
        playerName: string;
        activeTheme: { isRTL: boolean };
    }

    interface TeamAccept {
        memberNames: string[];
    }

    interface TeamTalk {
        questionIndex: number;
        gameBlockType: GameBlockType;
        gameBlockLayout: GameBlockLayout;
        duration: number;
        teamTalkDuration: number;
    }

    interface QuizStart {
        quizQuestionAnswers: number[];
        gameBlockCount: number;
        shouldRemoveSeasonalTheme: boolean;
        kahootLangIsRTL: boolean;
        questionCount: number;
    }

    interface QuizEnd {
        rank: number;
        cid: number;
        correctCount: number;
        incorrectCount: number;
        isKicked: boolean;
        isGhost: boolean;
        unansweredCount: number;
        playerCount: number;
        startTime: number;
        quizId: string;
        name: string;
        totalScore: number;
        hostId: string;
        challengeId: null;
        isOnlyNonPointGameBlockKahoot: boolean;
    }

    interface Podium {
        podiumMedalType?: "gold" | "silver" | "bronze" | null | undefined;
    }

    interface QuestionReady {
        video: QuizVideo;
        gameBlockIndex: number;
        layout: string;
        type: string;
        timeRemaining: number;
        timeAvailable: number;
        numberOfAnswersAllowed: number;
        currentQuestionAnswerCount: number;
        numberOfChoices: number;
        questionRestricted: boolean;
        getReadyTimeAvailable: number;
        getReadyTimeRemaining: number;
        questionIndex: number;
        timeLeft: number;
        gameBlockLayout: GameBlockLayout;
        gameBlockType: GameBlockType;
        index: number;
    }

    interface QuestionStart extends QuestionReady {
        /** @inheritdoc */
        answer: Kahoot["answer"];
    }

    interface QuestionEnd {
        choice: number;
        /** @todo add types */
        type: unknown;
        isCorrect: boolean;
        text: string;
        receivedTime: number;
        /** @todo add types */
        pointsQuestion: unknown;
        points: number;
        correctChoices: number[];
        totalScore: number;
        rank: number;
        nemesis: {
            name: string;
            isGhost: boolean;
            rank: number;
            totalScore: number;
        };
        pointsdata: {
            questionPoints: number;
            totalPointsWithBonuses: number;
            totalPointsWithoutBonuses: number;
            answerStreakPoints: {
                streakLevel: number;
                streakBonus: number;
                totalStreakPoints: number;
                previousStreakLevel: number;
                previousStreakBonus: number;
            };
        };
        lastGameBlockIndex: number;
    }

    interface TimeOver {
        questionNumber: number;
    }

    /**
     * @todo Add better types.
     * This event doesn't seem to get fired any more so hard to tell exact types
     */
    interface RecoveryData {
        data: {
            defaultQuizData: {
                quizQuestionAnswers: number[];
            } & Record<string, any>;
            getReady?: unknown;
            revealAnswer?: QuestionEnd | undefined;
        } & Record<string, any>;
        state: number;
    }

    /** Map of events to their argument */
    interface EventsMap {
        Joined: JoinResponse;
        Disconnect: string;
        GameReset: undefined;
        NameAccept: NameAccept;
        TeamAccept: TeamAccept;
        TeamTalk: TeamTalk;
        QuizStart: QuizStart;
        QuizEnd: QuizEnd;
        Podium: Podium;
        QuestionStart: QuestionStart;
        QuestionReady: QuestionReady;
        QuestionEnd: QuestionEnd;
        TimeOver: TimeOver;
        Feedback: {};
        RecoveryData: RecoveryData;
        TwoFactorCorrect: undefined;
        TwoFactorReset: undefined;
        TwoFactorWrong: undefined;
    }

    /** All event names */
    type Events = keyof EventsMap;
}

/** The main Kahoot class */
declare class Kahoot extends EventEmitter {
    /**
     * @param options Default options to configure the client
     */
    constructor(options?: Kahoot.KahootOptions);

    /**
     * Create a new constructor for Kahoot with the provided options as the defaults
     * @param options Default options to configure the client
     * @returns A new Kahoot constructor defaulting to the provided options
     */
    static defaults(options?: Kahoot.KahootOptions): typeof Kahoot;

    /**
     * Creates a new client and joins the game with it
     * @param pin The game pin
     * @param name The player name to join with
     * @param team The team member names. If set to false, team members will not be automatically added
     * @fires Kahoot#Joined
     * @returns The client and the return of the join call
     */
    static join(
        pin: string | number,
        name: string,
        team?: string[] | false,
    ): { client: Kahoot; event: ReturnType<Kahoot["join"]> };

    /**
     * Join a game
     * @param pin The game pin
     * @param name The player name to join with
     * @param team The team member names. If set to false, team members will not be automatically added
     * @fires Kahoot#Joined
     * @fires Kahoot#TwoFactorReset
     */
    join(pin: string | number, name: string, team?: string[] | false): Promise<Kahoot.JoinResponse>;

    /**
     * @param team The team member names. If set to false, team members will not be automatically added
     * @param emit Whether to emit the Join and TwoFactorReset events
     * @fires Kahoot#Joined
     * @fires Kahoot#TwoFactorReset
     */
    joinTeam(team: string[] | false, emit?: boolean): Promise<Kahoot.LiveEventTimetrack>;

    /**
     * Answer the 2FA question
     * @param steps A list of four numbers.
     * Each number represents one of the four colors in the 2FA code (red, blue, yellow, green)
     */
    answerTwoFactorAuth(steps: [number, number, number, number]): Promise<Kahoot.LiveEventTimetrack>;

    /**
     * Answer a question
     * @param choice The index of the choice
     */
    answer(choice: number): Promise<Kahoot.LiveEventTimetrack>;

    cid: number;

    classes: {
        LiveTwoStepAnswer: typeof LiveTwoStepAnswer;
        LiveClientHandshake: typeof LiveClientHandshake;
        LiveJoinPacket: typeof LiveJoinPacket;
        LiveJoinTeamPacket: typeof LiveJoinTeamPacket;
        LiveLeavePacket: typeof LiveLeavePacket;
    };

    connected?: boolean | undefined;

    data?: { totalScore: number; streak: number; rank: number } | undefined;

    defaults: Required<Kahoot.KahootOptions>;

    disconnectReason?: string | undefined;

    /** The game's pin */
    gameid?: number | undefined;

    handlers: Record<
        | "feedback"
        | "gameReset"
        | "quizStart"
        | "quizEnd"
        | "podium"
        | "timeOver"
        | "QuestionReady"
        | "questionStart"
        | "questionEnd"
        | "nameAccept"
        | "teamAccept"
        | "teamTalk"
        | "PingChecker"
        | "timetrack"
        | "Disconnect"
        | "JoinFinish",
        (message: LiveBaseMessage) => void
    >;

    lastEvent: undefined;
    messageId: number;
    /** Player name */
    name?: string | undefined;
    quiz?: Kahoot.QuizInfo | undefined;
    settings?: Kahoot.JoinResponse | undefined;
    socket: WebSocket;
    userAgent: string;
    waiting: {};

    // Events
    on<E extends Kahoot.Events>(eventName: E, listener: (ev: Kahoot.EventsMap[E]) => void): this;
    addListener<E extends Kahoot.Events>(eventName: E, listener: (ev: Kahoot.EventsMap[E]) => void): this;
    prependListener<E extends Kahoot.Events>(eventName: E, listener: (ev: Kahoot.EventsMap[E]) => void): this;
    prependOnceListener<E extends Kahoot.Events>(eventName: E, listener: (ev: Kahoot.EventsMap[E]) => void): this;
    removeListener<E extends Kahoot.Events>(eventName: E, listener: (ev: Kahoot.EventsMap[E]) => void): this;
}

export = Kahoot;
