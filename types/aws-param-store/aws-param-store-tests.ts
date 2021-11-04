import { SSM } from 'aws-sdk';
import {
    ParameterQuery,
    parameterQuery,
    getParameter,
    getParameters,
    getParametersByPath,
    getParameterSync,
    getParametersSync,
    getParametersByPathSync,
} from 'aws-param-store';

declare let bool: boolean;
declare let query: ParameterQuery;
declare let psName: SSM.Types.PSParameterName;
declare let psNames: SSM.Types.ParameterNameList;
declare let options: SSM.Types.ClientConfiguration;
declare let paramResult: SSM.Types.Parameter;
declare let paramsResult: SSM.Types.GetParametersResult;
declare let paramsByPathResult: SSM.Types.ParameterList;
declare let allParamResults: SSM.Types.Parameter | SSM.Types.GetParametersByPathResult | SSM.Types.ParameterList;
declare let promiseParamResult: Promise<SSM.Types.Parameter>;
declare let promiseParamsResult: Promise<SSM.Types.GetParametersResult>;
declare let promiseParamsByPathResult: Promise<SSM.Types.ParameterList>;
declare let promiseAllParamResults: Promise<typeof allParamResults>;

query = parameterQuery();

query.path(psName);
query.named(psName);
query.named(psNames);
query.decryption(bool);
query.recursive(bool);

promiseAllParamResults = query.execute();
allParamResults = query.executeSync();

// test chaining
query = query
.path(psName)
.named(psName)
.named(psNames)
.decryption(bool)
.recursive(bool);

promiseAllParamResults = query
.path(psName)
.named(psName)
.named(psNames)
.decryption(bool)
.recursive(bool)
.execute();

allParamResults = query
.path(psName)
.named(psName)
.named(psNames)
.decryption(bool)
.recursive(bool)
.executeSync();

promiseParamResult = getParameter(psName);
promiseParamResult = getParameter(psName, options);

promiseParamsResult = getParameters(psNames);
promiseParamsResult = getParameters(psNames, options);

promiseParamsByPathResult = getParametersByPath(psName);
promiseParamsByPathResult = getParametersByPath(psName, options);

paramResult = getParameterSync(psName);
paramResult = getParameterSync(psName, options);

paramsResult = getParametersSync(psNames);
paramsResult = getParametersSync(psNames, options);

paramsByPathResult = getParametersByPathSync(psName);
paramsByPathResult = getParametersByPathSync(psName, options);
