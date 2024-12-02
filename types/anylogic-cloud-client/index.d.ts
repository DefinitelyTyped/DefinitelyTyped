import Version = AnyLogicCloudClient.Version;
import Model = AnyLogicCloudClient.Model;
import Inputs = AnyLogicCloudClient.Inputs;
import ModelRun = AnyLogicCloudClient.ModelRun;
import MultiRunOutputs = AnyLogicCloudClient.MultiRunOutputs;
import SingleRunOutputs = AnyLogicCloudClient.SingleRunOutputs;

/**
 * Documentation is at {@link https://anylogic.help/cloud/api/js.html}.
 */
declare class CloudClient {
    static create(apiKey: string, host?: string): CloudClient;

    getModels(): Promise<Model[]>;
    getModelById(id: string): Promise<Model>;
    getModelByName(name: string): Promise<Model>;
    getModelVersionById(model: Model, versionId: string): Promise<Model>;
    getModelVersionByNumber(model: Model, versionNumber: number): Promise<Version>;
    getLatestModelVersion(modelOrName: Model | string): Promise<Version>;

    createDefaultInputs(version: Version): Inputs;
    createInputsFromExperiment(version: Version, experimentName: string): Inputs;

    createSimulation(inputs: Inputs): ModelRun<SingleRunOutputs>;
    createParameterVariation(inputs: Inputs): ModelRun<MultiRunOutputs>;
    createMonteCarloFirstOrder(inputs: Inputs): ModelRun<MultiRunOutputs>;
    startAnimation(inputs: Inputs, divId: string): Promise<AnyLogicCloudClient.Animation>;

    uploadFile(input: HTMLInputElement): Promise<string>; // returns hash code
    getFileHash(file: File): Promise<string>;
    /**
     * Trigger download with filename localPath in the browser.
     */
    downloadFile(outputValue: { hash: string; localPath: string }): false | undefined;
}

declare namespace AnyLogicCloudClient {
    interface Model {
        id: string;
        name: string;
        description: string;
        modelVersions: string[];
        published: boolean;
    }

    interface Version {
        id: string;
        version: number;
        experimentTemplate: {
            inputs: any[];
            outputs: any[];
            dashboard: any;
        };
    }

    interface Inputs {
        getInput(name: string): any;
        setInput(name: string, value: any): void;
        setRangeInput(name: string, min: number, max: number, step: number): void;
        setNumberOfReplications(num: number): void;
    }

    interface ModelRun<T extends SingleRunOutputs | MultiRunOutputs> {
        run(): Promise<ModelRun<T>>;
        stop(): Promise<ModelRun<T>>;
        waitForCompletion(pollingPeriodMs?: number): Promise<ModelRun<T>>;
        getStatus(): RunState;
        getProgress(): Promise<Progress>;
        getOutputs(requiredOutputNames?: string[]): Promise<T>;
        getOutputsAndRunIfAbsent(requiredOutputNames?: string[], pollingPeriod?: number): Promise<T>;
    }

    type RunState = "FRESH" | "RUNNING" | "COMPLETED" | "ERROR" | "STOPPED";

    interface Progress {
        totalTasks: number;
        finishedTasks: number;
        total: number;
        /**
         * Unknown contents
         */
        subRuns: any[];
        title: string | null;
    }

    interface Animation {
        stop(): void;
        pause(): Promise<Animation>;
        resume(): Promise<Animation>;
        setSpeed(speed: number): Promise<Animation>;
        setVirtualTime(): Promise<Animation>;
        navigateTo(viewArea: string): Promise<Animation>;
        setPresentable(pathToPresentable: string): Promise<Animation>;
        setValue(pathToField: string, value: any): Promise<Animation>;
        getValue(pathToField: string): Promise<any>;
        getState(): AnimationState;
        callFunction(pathToFunction: string, args: any[]): Promise<any>;
        waitForCompletion(): Promise<Animation>;
    }

    type AnimationState =
        | "IDLE"
        | "RUNNING"
        | "PAUSED"
        | "FINISHED"
        | "ERROR"
        | "PLEASE_WAIT"
        | "INITIALIZE"
        | "STOPPED"
        | "TIME_LIMIT"
        | "TERMINATED";

    interface SingleRunOutputs {
        names(): string[];
        findNameIncluding(namePart: string): string;
        value(name: string): any;
        getRawOutputs(): RawOutput[];
    }

    interface RawOutput {
        name: string;
        type: OutputType;
        units: null | Unit;
        value: any;
    }

    interface MultiRunOutputs {
        getInputNames(): string[];
        getOutputNames(): string[];
        getValuesOfInput(name: string): any[];
        getValuesOfOutput(name: string): any[];
        getRawData(): any[][];
    }

    type Unit =
        | "MILLISECOND"
        | "SECOND"
        | "MINUTE"
        | "HOUR"
        | "DAY"
        | "WEEK"
        | "MONTH"
        | "YEAR"
        | "MILLIMETER"
        | "CENTIMETER"
        | "METER"
        | "KILOMETER"
        | "INCH"
        | "FOOT"
        | "YARD"
        | "MILE"
        | "NAUTICAL_MILE"
        | "SQ_MILLIMETER"
        | "SQ_CENTIMETER"
        | "SQ_METER"
        | "SQ_KILOMETER"
        | "SQ_INCH"
        | "SQ_FOOT"
        | "SQ_YARD"
        | "SQ_MILE"
        | "SQ_NAUTICAL_MILE"
        | "PER_MILLISECOND"
        | "PER_SECOND"
        | "PER_MINUTE"
        | "PER_HOUR"
        | "PER_DAY"
        | "PER_WEEK"
        | "PER_MONTH"
        | "PER_YEAR"
        | "MPS"
        | "KPH"
        | "FPS"
        | "FPM"
        | "MPH"
        | "KN"
        | "MPS_SQ"
        | "FPS_SQ"
        | "LITER"
        | "OIL_BARREL"
        | "CUBIC_METER"
        | "KILOGRAM"
        | "TON"
        | "LITER_PER_SECOND"
        | "OIL_BARREL_PER_SECOND"
        | "CUBIC_METER_PER_SECOND"
        | "KILOGRAM_PER_SECOND"
        | "TON_PER_SECOND"
        | "TURN"
        | "RADIAN"
        | "DEGREE"
        | "RPM"
        | "RAD_PER_SECOND"
        | "DEG_PER_SECOND";

    type OutputType =
        | "STRING"
        | "DOUBLE"
        | "INTEGER"
        | "LONG"
        | "DATE_TIME"
        | "BOOLEAN"
        | "DATA_SET"
        | "STATISTICS_DISCRETE"
        | "STATISTICS_CONTINUOUS"
        | "HISTOGRAM_DATA"
        | "HISTOGRAM_2D_DATA"
        | "MODEL_OUTPUT_NAME"
        | "OUTPUT_FILE";
}
