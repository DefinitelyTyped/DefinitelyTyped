import { TransactionReceipt } from "./types";

type PromiEventType = "transactionHash" | "receipt" | "confirmation" | "error";

export default interface PromiEvent<T> extends Promise<T> {
    once(
        type: "transactionHash",
        handler: (receipt: string) => void
    ): PromiEvent<T>;
    once(
        type: "receipt",
        handler: (receipt: TransactionReceipt) => void
    ): PromiEvent<T>;
    once(
        type: "confirmation",
        handler: (confNumber: number, receipt: TransactionReceipt) => void
    ): PromiEvent<T>;
    once(type: "error", handler: (error: Error) => void): PromiEvent<T>;
    once(
        type: PromiEventType,
        handler: (error: Error | TransactionReceipt | string) => void
    ): PromiEvent<T>;
    on(
        type: "transactionHash",
        handler: (receipt: string) => void
    ): PromiEvent<T>;
    on(
        type: "receipt",
        handler: (receipt: TransactionReceipt) => void
    ): PromiEvent<T>;
    on(
        type: "confirmation",
        handler: (confNumber: number, receipt: TransactionReceipt) => void
    ): PromiEvent<T>;
    on(type: "error", handler: (error: Error) => void): PromiEvent<T>;
    on(
        type: "error" | "confirmation" | "receipt" | "transactionHash",
        handler: (error: Error | TransactionReceipt | string) => void
    ): PromiEvent<T>;
}
