// Type definitions for dragula v2.1.2
// Project: https://bitbucket.org/igor_sechyn/hystrixjs
// Definitions by: Igor Sechyn <https://github.com/igorsechyn/>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

///<reference path="../q/Q.d.ts"/>
///<reference path="../rx/rx.d.ts"/>

declare module HystrixJS {

     interface HystrixProperties {
        "hystrix.force.circuit.open"?: boolean,
        "hystrix.force.circuit.closed"?: boolean,
        "hystrix.circuit.sleepWindowInMilliseconds"?:number,
        "hystrix.circuit.errorThresholdPercentage"?: number,
        "hystrix.circuit.volumeThreshold"?:number,
        "hystrix.circuit.volumeThreshold.forceOverride"?: boolean,
        "hystrix.circuit.volumeThreshold.override"?: number,
        "hystrix.execution.timeoutInMilliseconds"?: number,
        "hystrix.metrics.statistical.window.timeInMilliseconds"?: number,
        "hystrix.metrics.statistical.window.bucketsNumber"?: number,
        "hystrix.metrics.percentile.window.timeInMilliseconds"?: number,
        "hystrix.metrics.percentile.window.bucketsNumber"?: number,
        "hystrix.request.volume.rejectionThreshold"?: number
    }

     interface HystrixConfig {
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
        metricsPercentileWindowBuckets(): number;
        requestVolumeRejectionThreshold(): number;
        resetProperties(): void;
        init(properties: HystrixProperties): void;
    }

     interface Command {
        execute(...args: any[]): Q.Promise<any>;
    }

     interface CommandBuilder {
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
        run(value: (args: any) => Q.Promise<any>): CommandBuilder;
        fallbackTo(value: (...args: any[]) => Q.Promise<any>): CommandBuilder;
        context(value: any): CommandBuilder;
        build(): Command;
    }

     interface CommandFactory {
        getOrCreate(commandKey: string, commandGroup?: string): CommandBuilder;
        resetCache(): void;
    }

    interface HealthCounts {
        totalCount: number;
        errorCount: number;
        errorPercentage: number;
    }

    interface CommandMetrics {
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

    interface MetricsProperties {
        commandKey: string,
        commandGroup: string,
        statisticalWindowTimeInMilliSeconds?: number,
        statisticalWindowNumberOfBuckets?: number,
        percentileWindowTimeInMilliSeconds?: number,
        percentileWindowNumberOfBuckets?: number
    }

    interface MetricsFactory {
        getOrCreate(config: MetricsProperties): CommandMetrics;
        resetCache(): void;
        getAllMetrics(): Array<CommandMetrics>;
    }

    interface CirctuiBreakerConfig {
        circuitBreakerSleepWindowInMilliseconds: number,
        commandKey: string,
        circuitBreakerErrorThresholdPercentage: number,
        circuitBreakerRequestVolumeThreshold: number,
        commandGroup: string,
        circuitBreakerForceClosed: boolean,
        circuitBreakerForceOpened: boolean
    }

    interface CircuitBreaker {
        allowRequest(): boolean;
        allowSingleTest(): boolean;
        isOpen(): boolean;
        markSuccess(): void;
    }

    interface CircuitFactory {
        getOrCreate(config: CirctuiBreakerConfig): CircuitBreaker;
        getCache(): Array<CircuitBreaker>;
        resetCache(): void;
    }

    interface HystrixSSEStream {
        toObservable(): Rx.Observable<any>
    }
}
declare var hystrixjs: {
    commandFactory: HystrixJS.CommandFactory,
    metricsFactory: HystrixJS.MetricsFactory,
    circuitFactory: HystrixJS.CircuitFactory,
    hystrixSSEStream: HystrixJS.HystrixSSEStream,
    hystrixConfig: HystrixJS.HystrixConfig
};

declare module "hystrixjs" {
    export = hystrixjs;
}
