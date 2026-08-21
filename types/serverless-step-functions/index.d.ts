import { Resource } from "./types/state";
import { StateMachineDefinition } from "./types/state-machine";

/**
 * Types for serverless-step-functions plugin for Serverless Framework.
 * This package uses module augmentation to extend the existing types
 * from @serverless/typescript.
 *
 * ```
 * import type { AWS } from '@serverless/typescript';
 *
 * const serverlessConfiguration: AWS = {
 *   service: 'aws-nodejs-typescript',
 *   frameworkVersion: '*',
 *   provider: {
 *     name: 'aws',
 *     runtime: 'nodejs12.x',
 *   },
 *   stepFunctions: {
 *     stateMachines: {
 *       helloWorldStepFunction: {
 *         name: '${self:service}-helloWorldStepFunction-${sls:stage}',
 *         definition: {
 *           // <your definition>
 *         }
 *       }
 *     }
 *   }
 * }
 * ```
 * @see https://github.com/serverless/typescript
 * @see https://github.com/serverless-operations/serverless-step-functions
 */

// TODO: use module augmentation to extend the existing types
// when the following issue is resolved:
// https://github.com/serverless/typescript/issues/82
// declare module '@serverless/typescript' {
//     interface AWS {
//         stepFunctions?: {
//             stateMachines: {
//                 [stateMachine: string]: StateMachine;
//             };
//             validate?: boolean;
//             noOutput?: boolean;
//         };
//     }
// }

interface StepFunctions {
    stateMachines: {
        [stateMachine: string]: StateMachine;
    };
    validate?: boolean;
    noOutput?: boolean;
}

interface StateMachine {
    type?: "STANDARD" | "EXPRESS";
    id?: string;
    name?: string;
    definition: StateMachineDefinition;
    tracingConfig?: {
        enabled: boolean;
    };
    loggingConfig?: {
        level: "ERROR" | "ALL" | "FATAL" | "OFF";
        includeExecutionData: boolean;
        destinations: Resource | Resource[];
    };
    events?: any[];
    dependsOn?: string[];
    tags?: {
        [k: string]: string;
    };
}

export = StepFunctions;
export {};
