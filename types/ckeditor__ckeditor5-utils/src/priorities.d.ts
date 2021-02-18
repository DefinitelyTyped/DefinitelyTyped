export type PriorityString = "normal" | "high" | "low" | "highest" | "lowest";

interface Priorities extends Record<PriorityString, number> {
    get(key: string | number): number;
}

declare const priorities: Priorities;
export default priorities;
