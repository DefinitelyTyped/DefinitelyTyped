/// <reference types="node" />
import { SSM } from "aws-sdk2-types";

export function getParameter(
    name: SSM.Types.PSParameterName,
    options?: SSM.Types.ClientConfiguration,
): Promise<SSM.Types.Parameter>;

export function getParameterSync(
    name: SSM.Types.PSParameterName,
    options?: SSM.Types.ClientConfiguration,
): SSM.Types.Parameter;

export function getParameters(
    names: SSM.Types.ParameterNameList,
    options?: SSM.Types.ClientConfiguration,
): Promise<SSM.Types.GetParametersResult>;

export function getParametersSync(
    names: SSM.Types.ParameterNameList,
    options?: SSM.Types.ClientConfiguration,
): SSM.Types.GetParametersResult;

export function getParametersByPath(
    path: SSM.Types.PSParameterName,
    options?: SSM.Types.ClientConfiguration,
): Promise<SSM.Types.ParameterList>;

export function getParametersByPathSync(
    path: SSM.Types.PSParameterName,
    options?: SSM.Types.ClientConfiguration,
): SSM.Types.ParameterList;

export function putParameter(
    path: SSM.Types.PSParameterName,
    value: SSM.Types.ParameterValue,
    type: SSM.Types.ParameterType,
    options?: SSM.Types.ClientConfiguration,
): Promise<SSM.Types.PutParameterResult>;

export function putParameterSync(
    names: SSM.Types.PSParameterName,
    value: SSM.Types.ParameterValue,
    type: SSM.Types.ParameterType,
    options?: SSM.Types.ClientConfiguration,
): SSM.Types.PutParameterResult;

export function newQuery(
    path?: SSM.Types.PSParameterName,
    options?: SSM.Types.ClientConfiguration,
): Promise<SSM.Types.ParameterList>;

export interface ParameterQuery {
    path(path: SSM.Types.PSParameterName): ParameterQuery;
    named(nameOrNames: SSM.Types.PSParameterName | SSM.Types.ParameterNameList): ParameterQuery;
    decryption(enabled: boolean): ParameterQuery;
    recursive(enabled: boolean): ParameterQuery;
    execute(): Promise<
        SSM.Types.ParameterList | SSM.Types.Parameter | SSM.Types.GetParametersResult | SSM.Types.PutParameterResult
    >;
    executeSync():
        | SSM.Types.ParameterList
        | SSM.Types.Parameter
        | SSM.Types.GetParametersResult
        | SSM.Types.PutParameterResult;
}

export function parameterQuery(options?: SSM.Types.ClientConfiguration): ParameterQuery;
