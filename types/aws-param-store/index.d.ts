// Type definitions for aws-param-store 2.1
// Project: https://github.com/vandium-io/aws-param-store#readme
// Definitions by: Jason Gray <https://github.com/jasonthomasgray>, Nathan Oertel <https://github.com/nathanoertel>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />
import { SSM } from 'aws-sdk';

export function getParameter(
    name: SSM.Types.PSParameterName,
    options?: SSM.Types.ClientConfiguration
): Promise<SSM.Types.Parameter>;

export function getParameterSync(
    name: SSM.Types.PSParameterName,
    options?: SSM.Types.ClientConfiguration
): SSM.Types.Parameter;

export function getParameters(
    names: SSM.Types.ParameterNameList,
    options?: SSM.Types.ClientConfiguration
): Promise<SSM.Types.GetParametersResult>;

export function getParametersSync(
    names: SSM.Types.ParameterNameList,
    options?: SSM.Types.ClientConfiguration
): SSM.Types.GetParametersResult;

export function getParametersByPath(
    path: SSM.Types.PSParameterName,
    options?: SSM.Types.ClientConfiguration
): Promise<SSM.Types.ParameterList>;

export function getParametersByPathSync(
    path: SSM.Types.PSParameterName,
    options?: SSM.Types.ClientConfiguration
): SSM.Types.ParameterList;

export interface ParameterQuery {
    path(path: SSM.Types.PSParameterName): ParameterQuery;
    named(nameOrNames: SSM.Types.PSParameterName | SSM.Types.ParameterNameList): ParameterQuery;
    decryption(enabled: boolean): ParameterQuery;
    recursive(enabled: boolean): ParameterQuery;
    execute(): Promise<SSM.Types.ParameterList | SSM.Types.Parameter | SSM.Types.GetParametersResult>;
    executeSync(): SSM.Types.ParameterList | SSM.Types.Parameter | SSM.Types.GetParametersResult;
}

export function parameterQuery(options?: SSM.Types.ClientConfiguration): ParameterQuery;
