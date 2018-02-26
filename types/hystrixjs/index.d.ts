// Type definitions for hystrixjs 0.2
// Project: https://bitbucket.org/igor_sechyn/hystrixjs
// Definitions by: Igor Sechyn <https://github.com/igorsechyn>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

import * as RX from "rx";

export as namespace hystrixjs;
export as namespace HystrixJS;

export interface HystrixProperties {
    "hystrix.force.circuit.open"?: boolean;
    "hystrix.force.circuit.closed"?: boolean;
    "hystrix.circuit.sleepWindowInMilliseconds"?: number;
    "hystrix.circuit.errorThresholdPercentage"?: number;
    "hystrix.circuit.volumeThreshold"?: number;
    "hystrix.circuit.volumeThreshold.forceOverride"?: boolean;
    "hystrix.circuit.volumeThreshold.override"?: number;
    "hystrix.execution.timeoutInMilliseconds"?: number;
    "hystrix.metrics.statistical.window.timeInMilliseconds"?: number;
    "hystrix.metrics.statistical.window.bucketsNumber"?: number;
    "hystrix.metrics.percentile.window.timeInMilliseconds"?: number;
    "hystrix.metrics.percentile.window.bucketsNumber"?: number;
    "hystrix.request.volume.rejectionThreshold"?: number;
    "hystrix.promise.implementation"?: PromiseConstructorLike;
}

export interface HystrixConfig {
    metricsPercentileWindowBuckets(): number;
    circuitBreakerForceClosed(): boolean;
    circuitBreakerForceOpened(): boolean;
    circuitBreakerSleepWindowInMilliseconds(): number;
    circuitBreakerErrorThresholdPercentage(): number;
    circuitBreakerRequestVolumeThreshold(): number;
    circuitBreakerRequestVolumeThresholdForceOverride(): boolean;
    circuitBreakerRequestVolumeThresholdOverride(): number;
    executionTimeoutInMilliseconds(): number;
    metricsStatisticalWindowBuckets(): number;
    metricsStatisticalWindowInMilliseconds(): number;
    metricsPercentileWindowInMilliseconds(): number;
    requestVolumeRejectionThreshold(): number;
    resetProperties(): void;
    init(properties: HystrixProperties): void;
}

export interface Command {
    execute(...args: any[]): PromiseLike<any>;
}

export interface CommandA0<R> {
    execute<R>(): PromiseLike<R>;
}

export interface CommandA1<R, T> {
    execute(t: T): PromiseLike<R>;
}

export interface CommandA2<R, T, U> {
    execute(t: T, u: U): PromiseLike<R>;
}

export interface CommandA3<R, T, U, V> {
    execute(t: T, u: U, v: V): PromiseLike<R>;
}

export interface CommandA4<R, T, U, V, W> {
    execute(t: T, u: U, v: V, w: W): PromiseLike<R>;
}

export interface CommandA5<R, T, U, V, W, X> {
    execute(t: T, u: U, v: V, w: W, x: X): PromiseLike<R>;
}

export interface CommandA6<R, T, U, V, W, X, Y> {
    execute(t: T, u: U, v: V, w: W, x: X, y: Y): PromiseLike<R>;
}

export interface CommandA7<R, T, U, V, W, X, Y, Z> {
    execute(t: T, u: U, v: V, w: W, x: X, y: Y, z: Z): PromiseLike<R>;
}

export interface CommandBuilder {
    circuitBreakerSleepWindowInMilliseconds(value: number): CommandBuilder;
    errorHandler(value: (error: any) => boolean): CommandBuilder;
    timeout(value: number): CommandBuilder;
    circuitBreakerRequestVolumeThreshold(value: number): CommandBuilder;
    requestVolumeRejectionThreshold(value: number): CommandBuilder;
    circuitBreakerForceOpened(value: boolean): CommandBuilder;
    circuitBreakerForceClosed(value: boolean): CommandBuilder;
    statisticalWindowNumberOfBuckets(value: number): CommandBuilder;
    statisticalWindowLength(value: number): CommandBuilder;
    percentileWindowNumberOfBuckets(value: number): CommandBuilder;
    percentileWindowLength(value: number): CommandBuilder;
    circuitBreakerErrorThresholdPercentage(value: number): CommandBuilder;
    context(value: any): CommandBuilder;
    run(value: (...args: any[]) => PromiseLike<any>): CommandBuilder;
    fallbackTo(value: (error: Error, args ?: any[]) => PromiseLike<any>): CommandBuilder;
    build(): Command;
}

export interface CommandBuilderA0<R> {
    circuitBreakerSleepWindowInMilliseconds(value: number): CommandBuilderA0<R>;
    errorHandler(value: (error: any) => boolean): CommandBuilderA0<R>;
    timeout(value: number): CommandBuilderA0<R>;
    circuitBreakerRequestVolumeThreshold(value: number): CommandBuilderA0<R>;
    requestVolumeRejectionThreshold(value: number): CommandBuilderA0<R>;
    circuitBreakerForceOpened(value: boolean): CommandBuilderA0<R>;
    circuitBreakerForceClosed(value: boolean): CommandBuilderA0<R>;
    statisticalWindowNumberOfBuckets(value: number): CommandBuilderA0<R>;
    statisticalWindowLength(value: number): CommandBuilderA0<R>;
    percentileWindowNumberOfBuckets(value: number): CommandBuilderA0<R>;
    percentileWindowLength(value: number): CommandBuilderA0<R>;
    circuitBreakerErrorThresholdPercentage(value: number): CommandBuilderA0<R>;
    context(value: any): CommandBuilderA0<R>;
    run(value: () => PromiseLike<R>): CommandBuilderA0<R>;
    fallbackTo(value: (error: Error) => PromiseLike<R>): CommandBuilderA0<R>;
    build(): CommandA0<R>;
}

export interface CommandBuilderA1<R, T> {
    circuitBreakerSleepWindowInMilliseconds(value: number): CommandBuilderA1<R, T>;
    errorHandler(value: (error: any) => boolean): CommandBuilderA1<R, T>;
    timeout(value: number): CommandBuilderA1<R, T>;
    circuitBreakerRequestVolumeThreshold(value: number): CommandBuilderA1<R, T>;
    requestVolumeRejectionThreshold(value: number): CommandBuilderA1<R, T>;
    circuitBreakerForceOpened(value: boolean): CommandBuilderA1<R, T>;
    circuitBreakerForceClosed(value: boolean): CommandBuilderA1<R, T>;
    statisticalWindowNumberOfBuckets(value: number): CommandBuilderA1<R, T>;
    statisticalWindowLength(value: number): CommandBuilderA1<R, T>;
    percentileWindowNumberOfBuckets(value: number): CommandBuilderA1<R, T>;
    percentileWindowLength(value: number): CommandBuilderA1<R, T>;
    circuitBreakerErrorThresholdPercentage(value: number): CommandBuilderA1<R, T>;
    context(value: any): CommandBuilderA1<R, T>;
    run(value: (t: T) => PromiseLike<R>): CommandBuilderA1<R, T>;
    fallbackTo(value: (error: Error, args: [T]) => PromiseLike<R>): CommandBuilderA1<R, T>;
    build(): CommandA1<R, T>;
}

export interface CommandBuilderA2<R, T, U> {
    circuitBreakerSleepWindowInMilliseconds(value: number): CommandBuilderA2<R, T, U>;
    errorHandler(value: (error: any) => boolean): CommandBuilderA2<R, T, U>;
    timeout(value: number): CommandBuilderA2<R, T, U>;
    circuitBreakerRequestVolumeThreshold(value: number): CommandBuilderA2<R, T, U>;
    requestVolumeRejectionThreshold(value: number): CommandBuilderA2<R, T, U>;
    circuitBreakerForceOpened(value: boolean): CommandBuilderA2<R, T, U>;
    circuitBreakerForceClosed(value: boolean): CommandBuilderA2<R, T, U>;
    statisticalWindowNumberOfBuckets(value: number): CommandBuilderA2<R, T, U>;
    statisticalWindowLength(value: number): CommandBuilderA2<R, T, U>;
    percentileWindowNumberOfBuckets(value: number): CommandBuilderA2<R, T, U>;
    percentileWindowLength(value: number): CommandBuilderA2<R, T, U>;
    circuitBreakerErrorThresholdPercentage(value: number): CommandBuilderA2<R, T, U>;
    context(value: any): CommandBuilderA2<R, T, U>;
    run(value: (t: T, u: U) => PromiseLike<R>): CommandBuilderA2<R, T, U>;
    fallbackTo(value: (error: Error, args: [T, U]) => PromiseLike<R>): CommandBuilderA2<R, T, U>;
    build(): CommandA2<R, T, U>;
}

export interface CommandBuilderA3<R, T, U, V> {
    circuitBreakerSleepWindowInMilliseconds(value: number): CommandBuilderA3<R, T, U, V>;
    errorHandler(value: (error: any) => boolean): CommandBuilderA3<R, T, U, V>;
    timeout(value: number): CommandBuilderA3<R, T, U, V>;
    circuitBreakerRequestVolumeThreshold(value: number): CommandBuilderA3<R, T, U, V>;
    requestVolumeRejectionThreshold(value: number): CommandBuilderA3<R, T, U, V>;
    circuitBreakerForceOpened(value: boolean): CommandBuilderA3<R, T, U, V>;
    circuitBreakerForceClosed(value: boolean): CommandBuilderA3<R, T, U, V>;
    statisticalWindowNumberOfBuckets(value: number): CommandBuilderA3<R, T, U, V>;
    statisticalWindowLength(value: number): CommandBuilderA3<R, T, U, V>;
    percentileWindowNumberOfBuckets(value: number): CommandBuilderA3<R, T, U, V>;
    percentileWindowLength(value: number): CommandBuilderA3<R, T, U, V>;
    circuitBreakerErrorThresholdPercentage(value: number): CommandBuilderA3<R, T, U, V>;
    context(value: any): CommandBuilderA3<R, T, U, V>;
    run(value: (t: T, u: U, v: V) => PromiseLike<R>): CommandBuilderA3<R, T, U, V>;
    fallbackTo(value: (error: Error, args: [T, U, V]) => PromiseLike<R>): CommandBuilderA3<R, T, U, V>;
    build(): CommandA3<R, T, U, V>;
}

export interface CommandBuilderA4<R, T, U, V, W> {
    circuitBreakerSleepWindowInMilliseconds(value: number): CommandBuilderA4<R, T, U, V, W>;
    errorHandler(value: (error: any) => boolean): CommandBuilderA4<R, T, U, V, W>;
    timeout(value: number): CommandBuilderA4<R, T, U, V, W>;
    circuitBreakerRequestVolumeThreshold(value: number): CommandBuilderA4<R, T, U, V, W>;
    requestVolumeRejectionThreshold(value: number): CommandBuilderA4<R, T, U, V, W>;
    circuitBreakerForceOpened(value: boolean): CommandBuilderA4<R, T, U, V, W>;
    circuitBreakerForceClosed(value: boolean): CommandBuilderA4<R, T, U, V, W>;
    statisticalWindowNumberOfBuckets(value: number): CommandBuilderA4<R, T, U, V, W>;
    statisticalWindowLength(value: number): CommandBuilderA4<R, T, U, V, W>;
    percentileWindowNumberOfBuckets(value: number): CommandBuilderA4<R, T, U, V, W>;
    percentileWindowLength(value: number): CommandBuilderA4<R, T, U, V, W>;
    circuitBreakerErrorThresholdPercentage(value: number): CommandBuilderA4<R, T, U, V, W>;
    context(value: any): CommandBuilderA4<R, T, U, V, W>;
    run(value: (t: T, u: U, v: V, w: W) => PromiseLike<R>): CommandBuilderA4<R, T, U, V, W>;
    fallbackTo(value: (error: Error, args: [T, U, V, W]) => PromiseLike<R>): CommandBuilderA4<R, T, U, V, W>;
    build(): CommandA4<R, T, U, V, W>;
}

export interface CommandBuilderA5<R, T, U, V, W, X> {
    circuitBreakerSleepWindowInMilliseconds(value: number): CommandBuilderA5<R, T, U, V, W, X>;
    errorHandler(value: (error: any) => boolean): CommandBuilderA5<R, T, U, V, W, X>;
    timeout(value: number): CommandBuilderA5<R, T, U, V, W, X>;
    circuitBreakerRequestVolumeThreshold(value: number): CommandBuilderA5<R, T, U, V, W, X>;
    requestVolumeRejectionThreshold(value: number): CommandBuilderA5<R, T, U, V, W, X>;
    circuitBreakerForceOpened(value: boolean): CommandBuilderA5<R, T, U, V, W, X>;
    circuitBreakerForceClosed(value: boolean): CommandBuilderA5<R, T, U, V, W, X>;
    statisticalWindowNumberOfBuckets(value: number): CommandBuilderA5<R, T, U, V, W, X>;
    statisticalWindowLength(value: number): CommandBuilderA5<R, T, U, V, W, X>;
    percentileWindowNumberOfBuckets(value: number): CommandBuilderA5<R, T, U, V, W, X>;
    percentileWindowLength(value: number): CommandBuilderA5<R, T, U, V, W, X>;
    circuitBreakerErrorThresholdPercentage(value: number): CommandBuilderA5<R, T, U, V, W, X>;
    context(value: any): CommandBuilderA5<R, T, U, V, W, X>;
    run(value: (t: T, u: U, v: V, w: W, x: X) => PromiseLike<R>): CommandBuilderA5<R, T, U, V, W, X>;
    fallbackTo(value: (error: Error, args: [T, U, V, W, X]) => PromiseLike<R>): CommandBuilderA5<R, T, U, V, W, X>;
    build(): CommandA5<R, T, U, V, W, X>;
}

export interface CommandBuilderA6<R, T, U, V, W, X, Y> {
    circuitBreakerSleepWindowInMilliseconds(value: number): CommandBuilderA6<R, T, U, V, W, X, Y>;
    errorHandler(value: (error: any) => boolean): CommandBuilderA6<R, T, U, V, W, X, Y>;
    timeout(value: number): CommandBuilderA6<R, T, U, V, W, X, Y>;
    circuitBreakerRequestVolumeThreshold(value: number): CommandBuilderA6<R, T, U, V, W, X, Y>;
    requestVolumeRejectionThreshold(value: number): CommandBuilderA6<R, T, U, V, W, X, Y>;
    circuitBreakerForceOpened(value: boolean): CommandBuilderA6<R, T, U, V, W, X, Y>;
    circuitBreakerForceClosed(value: boolean): CommandBuilderA6<R, T, U, V, W, X, Y>;
    statisticalWindowNumberOfBuckets(value: number): CommandBuilderA6<R, T, U, V, W, X, Y>;
    statisticalWindowLength(value: number): CommandBuilderA6<R, T, U, V, W, X, Y>;
    percentileWindowNumberOfBuckets(value: number): CommandBuilderA6<R, T, U, V, W, X, Y>;
    percentileWindowLength(value: number): CommandBuilderA6<R, T, U, V, W, X, Y>;
    circuitBreakerErrorThresholdPercentage(value: number): CommandBuilderA6<R, T, U, V, W, X, Y>;
    context(value: any): CommandBuilderA6<R, T, U, V, W, X, Y>;
    run(value: (t: T, u: U, v: V, w: W, x: X, y: Y) => PromiseLike<R>): CommandBuilderA6<R, T, U, V, W, X, Y>;
    fallbackTo(value: (error: Error, args: [T, U, V, W, X, Y]) => PromiseLike<R>): CommandBuilderA6<R, T, U, V, W, X, Y>;
    build(): CommandA6<R, T, U, V, W, X, Y>;
}

export interface CommandBuilderA7<R, T, U, V, W, X, Y, Z> {
    circuitBreakerSleepWindowInMilliseconds(value: number): CommandBuilderA7<R, T, U, V, W, X, Y, Z>;
    errorHandler(value: (error: any) => boolean): CommandBuilderA7<R, T, U, V, W, X, Y, Z>;
    timeout(value: number): CommandBuilderA7<R, T, U, V, W, X, Y, Z>;
    circuitBreakerRequestVolumeThreshold(value: number): CommandBuilderA7<R, T, U, V, W, X, Y, Z>;
    requestVolumeRejectionThreshold(value: number): CommandBuilderA7<R, T, U, V, W, X, Y, Z>;
    circuitBreakerForceOpened(value: boolean): CommandBuilderA7<R, T, U, V, W, X, Y, Z>;
    circuitBreakerForceClosed(value: boolean): CommandBuilderA7<R, T, U, V, W, X, Y, Z>;
    statisticalWindowNumberOfBuckets(value: number): CommandBuilderA7<R, T, U, V, W, X, Y, Z>;
    statisticalWindowLength(value: number): CommandBuilderA7<R, T, U, V, W, X, Y, Z>;
    percentileWindowNumberOfBuckets(value: number): CommandBuilderA7<R, T, U, V, W, X, Y, Z>;
    percentileWindowLength(value: number): CommandBuilderA7<R, T, U, V, W, X, Y, Z>;
    circuitBreakerErrorThresholdPercentage(value: number): CommandBuilderA7<R, T, U, V, W, X, Y, Z>;
    context(value: any): CommandBuilderA7<R, T, U, V, W, X, Y, Z>;
    run(value: (t: T, u: U, v: V, w: W, x: X, y: Y, z: Z) => PromiseLike<R>): CommandBuilderA7<R, T, U, V, W, X, Y, Z>;
    fallbackTo(value: (error: Error, args: [T, U, V, W, X, Y, Z]) => PromiseLike<R>): CommandBuilderA7<R, T, U, V, W, X, Y, Z>;
    build(): CommandA7<R, T, U, V, W, X, Y, Z>;
}

export interface CommandFactory {
    getOrCreate(commandKey: string, commandGroup?: string): CommandBuilder;
    getOrCreate<R>(commandKey: string, commandGroup?: string): CommandBuilderA0<R>;
    getOrCreate<R, T>(commandKey: string, commandGroup?: string): CommandBuilderA1<R, T>;
    getOrCreate<R, T, U>(commandKey: string, commandGroup?: string): CommandBuilderA2<R, T, U>;
    getOrCreate<R, T, U, V>(commandKey: string, commandGroup?: string): CommandBuilderA3<R, T, U, V>;
    getOrCreate<R, T, U, V, W>(commandKey: string, commandGroup?: string): CommandBuilderA4<R, T, U, V, W>;
    getOrCreate<R, T, U, V, W, X>(commandKey: string, commandGroup?: string): CommandBuilderA5<R, T, U, V, W, X>;
    getOrCreate<R, T, U, V, W, X, Y>(commandKey: string, commandGroup?: string): CommandBuilderA6<R, T, U, V, W, X, Y>;
    getOrCreate<R, T, U, V, W, X, Y, Z>(commandKey: string, commandGroup?: string): CommandBuilderA7<R, T, U, V, W, X, Y, Z>;
    resetCache(): void;
}

export interface HealthCounts {
    totalCount: number;
    errorCount: number;
    errorPercentage: number;
}

export interface CommandMetrics {
    markSuccess(): void;
    markRejected(): void;
    markFailure(): void;
    markTimeout(): void;
    markShortCircuited(): void;
    incrementExecutionCount(): void;
    decrementExecutionCount(): void;
    getCurrentExecutionCount(): number;
    addExecutionTime(value: number): void;
    getRollingCount(type: any): number;
    getExecutionTime(percentile: any): number;
    getHealthCounts(): HealthCounts;
    reset(): void;
}

export interface MetricsProperties {
    commandKey: string;
    commandGroup: string;
    statisticalWindowTimeInMilliSeconds?: number;
    statisticalWindowNumberOfBuckets?: number;
    percentileWindowTimeInMilliSeconds?: number;
    percentileWindowNumberOfBuckets?: number;
}

export interface MetricsFactory {
    getOrCreate(config: MetricsProperties): CommandMetrics;
    resetCache(): void;
    getAllMetrics(): CommandMetrics[];
}

export interface CirctuiBreakerConfig {
    circuitBreakerSleepWindowInMilliseconds: number;
    commandKey: string;
    circuitBreakerErrorThresholdPercentage: number;
    circuitBreakerRequestVolumeThreshold: number;
    commandGroup: string;
    circuitBreakerForceClosed: boolean;
    circuitBreakerForceOpened: boolean;
}

export interface CircuitBreaker {
    allowRequest(): boolean;
    allowSingleTest(): boolean;
    isOpen(): boolean;
    markSuccess(): void;
}

export interface CircuitFactory {
    getOrCreate(config: CirctuiBreakerConfig): CircuitBreaker;
    getCache(): CircuitBreaker[];
    resetCache(): void;
}

export interface HystrixSSEStream {
    toObservable(): Rx.Observable<any>;
}

export const commandFactory: CommandFactory;
export const metricsFactory: MetricsFactory;
export const circuitFactory: CircuitFactory;
export const hystrixSSEStream: HystrixSSEStream;
export const hystrixConfig: HystrixConfig;
