export interface Deadline {
    timeRemaining: () => number;
    didTimeout: boolean;
}
